<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { PropType } from 'vue'
import type { ToDoEntry } from '@/stores/entry_store'
import TagDropdown from '@/components/TagDropdown.vue'
import AcceptDeclineButton from '@/components/AcceptDeclineButton.vue'
import { addEntry, updateLS } from '@/services/entryStorageService'
import { sortEntries } from '@/services/searchService'

const inputTitle = ref('')
const inputDeadline = ref('')
const inputExpenditure = ref('')
const inputDurationUnit = ref('min')
const inputDescription = ref('')
const inputTags = ref('')
const inputColor = ref('#ff3b30')

const emit = defineEmits(['closeaction'])

const props = defineProps({
  entry: {
    type: Object as PropType<ToDoEntry>
  }
})

onMounted(() => {
  // logic for default values here
  if (props.entry) {
    inputTitle.value = props.entry.title || ''
    inputDeadline.value = props.entry.deadline?.toISOString().split('T')[0] || ''

    const timeUnit = props.entry.expenditure
      ? getTimeAndUnitFromSec(props.entry.expenditure)
      : ['', 'min']
    inputExpenditure.value = timeUnit[0].toString()
    inputDurationUnit.value = timeUnit[1].toString()

    inputDescription.value = props.entry.description || ''
    inputColor.value = props.entry.color || '#ff3b30' //default color
  }
})

function convertToSeconds(value: number, unit: string): number {
  console.log('convertToSeconds', value, unit)

  switch (unit) {
    case 'min':
      return value * 60
    case 'h':
      return value * 3600
    case 'days':
      return value * 86400
    case 'weeks':
      return value * 604800
    default:
      throw new Error('No fitting unit found')
  }
}

function getTimeAndUnitFromSec(value: number): [number, string] {
  if (value % 604800 === 0) {
    return [value / 604800, 'weeks']
  } else if (value % 86400 === 0) {
    return [value / 86400, 'days']
  } else if (value % 3600 === 0) {
    return [value / 3600, 'h']
  } else if (value % 60 === 0) {
    return [value / 60, 'min']
  } else {
    throw new Error('No fitting unit found')
  }
}

const saveEdit = () => {
  // take already existing entry if one was provided or create a new one
  let entry: ToDoEntry = props.entry
    ? props.entry
    : {
        title: '',
        description: '',
        color: '',
        deadline: new Date(),
        expenditure: 0,
        metadata: {
          isVisible: true,
          isExpanded: false,
          addedAt: new Date(),
          lastModifiedAt: new Date(),
          deletedAt: undefined
        }
      }

  // process inputs
  if (inputTitle.value.trim() !== '') {
    let deadlineDate
    if (inputDeadline.value.trim() !== '') {
      deadlineDate = new Date(inputDeadline.value)
    } else {
      deadlineDate = undefined
    }

    let timeExpenditure: number | undefined = 0
    if (inputExpenditure.value) {
      const sec = convertToSeconds(parseInt(inputExpenditure.value), inputDurationUnit.value)

      timeExpenditure = sec
    } else {
      timeExpenditure = undefined
    }

    entry.title = inputTitle.value
    entry.description = inputDescription.value
    entry.color = inputColor.value
    entry.deadline = deadlineDate
    entry.expenditure = timeExpenditure
  }

  // save or update
  if (props.entry) {
    console.log('Updating existing entry')
    entry.metadata.lastModifiedAt = new Date()
    updateLS()
  } else {
    console.log('Adding existing entry')
    addEntry(entry)
  }

  sortEntries()
  console.log(entry)
  clearInput()
  emit('closeaction')
}

const cancelEdit = () => {
  clearInput()
  emit('closeaction')
}

const clearInput = () => {
  inputTitle.value = ''
  inputDeadline.value = ''
  inputExpenditure.value = ''
  inputDurationUnit.value = 'min'
  inputDescription.value = ''
  inputTags.value = ''
}
</script>

<template>
  <div class="edit">
    <form class="input-field" @submit.prevent="saveEdit">
      <!-- @submit.prevent Called on submit + prevents Reload -->

      <label for="id_title">Title:</label>
      <input
        class="user-input"
        type="text"
        id="id_title"
        v-model="inputTitle"
        placeholder="Title"
        required
      />

      <label for="id_date">Date:</label>
      <input
        class="user-input"
        type="date"
        id="id_date"
        v-model="inputDeadline"
        placeholder="Date"
      />

      <label for="id_duration">Estimated duration:</label>
      <div style="display: flex">
        <input
          class="user-input duration"
          type="number"
          pattern="[0-9]*"
          inputmode="numeric"
          id="id_duration"
          v-model="inputExpenditure"
          placeholder="Estimated duration"
          min="0"
        />
        <select class="user-input duration_unit" id="id_duration_unit" v-model="inputDurationUnit">
          <option value="min">minutes</option>
          <option value="h">hours</option>
          <option value="days">days</option>
          <option value="weeks">weeks</option>
        </select>
      </div>

      <div>
        <TagDropdown />
      </div>

      <label for="id_descript">Description:</label>
      <textarea
        class="user-input input_descript"
        id="id_descript"
        v-model="inputDescription"
        placeholder="Description"
        rows="4"
        style="resize: none"
      ></textarea>
      <span class="edit_btn">
        <AcceptDeclineButton class="btn_cancel" type="button" @click="cancelEdit"
          >Cancel</AcceptDeclineButton
        >
        <AcceptDeclineButton class="btn_save" type="submit">Save</AcceptDeclineButton>
      </span>
    </form>
  </div>
</template>

<style>
form {
  margin: 5px;
}

label {
  color: #808080;
  font-size: 14pt;
  margin-left: 6px;
  display: block;
}

.user-input {
  font-family:
    Inter,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    sans-serif;
  font-size: 14pt;
  height: 2.1em;
  width: 100%;
  background: #2c2c2e;
  color: #f8f8f8;
  outline: none;
  border: none;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 5px 8px;
  margin-bottom: 5px;
}

.duration {
  max-width: calc(70% - 10px);
  margin-right: 8px;
}

.duration_unit {
  width: 30%;
  min-width: 6em;
}

.short {
  width: 30%;
  min-width: 6em;
}

.input_descript {
  height: revert;
}

.user-input:hover,
.user-input:focus,
.user-input:active {
  background-color: #3c3c3e;
}

.btn_save {
  color: #4caf50;
}

.btn_cancel {
  color: #d05050;
  margin-right: 10px;
}

.btn_save:hover,
.btn_save:active,
.btn_save:focus {
  background-color: #4caf50;
  color: #fff;
}

.btn_cancel:hover,
.btn_cancel:active,
.btn_cancel:focus {
  background-color: #d05050;
  color: #fff;
}
</style>
