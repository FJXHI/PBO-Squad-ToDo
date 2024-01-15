<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { PropType } from 'vue'
import type { ToDoEntry } from '@/stores/entry_store'
import { useToDoEntryStore } from '@/stores/entry_store'
import TagDropdown from '@/components/TagDropdown.vue'
import AcceptDeclineButton from '@/components/AcceptDeclineButton.vue'
import { addEntry, updateLS } from '@/services/entryStorageService'

const store = useToDoEntryStore()

const inputTitle = ref('')
const inputDate = ref('')
const inputDuration = ref('')
const inputDurationUnit = ref('min')
const inputDescript = ref('')
const inputTags = ref('')
const inputColor = ref('#000000')

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
    inputDate.value = props.entry.deadline?.toISOString().split('T')[0] || ''
    inputDuration.value = props.entry.expenditure?.time.toString() || ''
    inputDurationUnit.value = props.entry.expenditure?.unit || 'min'
    inputDescript.value = props.entry.description || ''
    inputColor.value = props.entry.color || '#ff3b30' //default color
    //inputTags.value = props.entry.todoEntry.tag || ''
  }
})

const saveEdit = () => {
  // take already existing entry if one was provided or create a new one
  let entry: ToDoEntry = props.entry
    ? props.entry
    : {
        title: '',
        description: '',
        color: '',
        deadline: new Date(),
        expenditure: { time: 0, unit: 'min' },
        metadata: {
          isVisible: true,
          isExpanded: false
        }
      }

  // process inputs
  if (inputTitle.value.trim() !== '') {
    let deadlineDate
    if (inputDate.value.trim() !== '') {
      deadlineDate = new Date(inputDate.value)
    } else {
      deadlineDate = undefined
    }
    let timeExpenditure
    const durationValue = inputDuration.value.trim().replace(/\D/g, '') // remove all non-numeric characters
    if (durationValue !== '') {
      timeExpenditure = { time: parseInt(durationValue), unit: inputDurationUnit.value }
    } else {
      timeExpenditure = undefined
    }

    entry.title = inputTitle.value
    entry.description = inputDescript.value
    entry.color = inputColor.value
    entry.deadline = deadlineDate
    entry.expenditure = timeExpenditure
    //entry.tags = inputTags
  }

  // save or update
  if (props.entry) {
    console.log('Updating existing entry')
    updateLS()
  } else {
    console.log('Adding existing entry')
    addEntry(entry)
  }

  const dataObject = {
    title: inputTitle.value,
    date: inputDate.value,
    duration: inputDuration.value,
    unit: inputDurationUnit.value,
    description: inputDescript.value,
    tags: inputTags.value,
    color: inputColor.value
  }

  console.log(dataObject)
  clearInput()
  emit('closeaction')
}

const cancelEdit = () => {
  clearInput()
  emit('closeaction')
}

const clearInput = () => {
  inputTitle.value = ''
  inputDate.value = ''
  inputDuration.value = ''
  inputDurationUnit.value = 'min'
  inputDescript.value = ''
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
      <input class="user-input" type="date" id="id_date" v-model="inputDate" placeholder="Date" />

      <label for="id_duration">Estimated duration:</label>
      <div style="display: flex">
        <input
          class="user-input duration"
          type="number"
          pattern="[0-9]*"
          inputmode="numeric"
          id="id_duration"
          v-model="inputDuration"
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

      <label for="id_tags">Tags:</label>
      <div>
        <TagDropdown />
        <input
          class="user-input short"
          type="color"
          id="colorPicker"
          v-model="inputColor"
        /><!-- Inputcolor field slightly too high up -->
      </div>

      <label for="id_descript">Description:</label>
      <textarea
        class="user-input input_descript"
        id="id_descript"
        v-model="inputDescript"
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
