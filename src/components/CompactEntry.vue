<script setup lang="ts">
import type { ToDoEntry, ToDoEntryInfo } from '@/stores/entry_store'
import { useToDoEntryStore } from '@/stores/entry_store'
import { useDeleteStore } from '@/stores/delete_done_store'
import { removeAndAddEntry } from '@/services/DeleteDoneService'
import type { assert } from '@vue/compiler-core'
import type { PropType, ComponentPublicInstance } from 'vue'
import { ref, computed, reactive, defineComponent } from 'vue'
import InputModal from './TheInputModal.vue'

const store = useToDoEntryStore()

const props = defineProps({
  entry: {
    type: Object as PropType<ToDoEntry>,
    required: true
  }
})

const emit = defineEmits(['collapse-others'])
const entryBox = ref(null)

let isExpanded = ref(false)
let showEntryInput = ref(false)

let entry: ToDoEntry = props.entry
let backgoundColor =
  'rgba(' +
  entry.todoEntry.color.r.toString() +
  ',' +
  entry.todoEntry.color.g.toString() +
  ',' +
  entry.todoEntry.color.b.toString() +
  ',' +
  (entry.todoEntry.color.a ? entry.todoEntry.color.a : 255) +
  ')'

function changeExpand() {
  if (!entry.isExpanded) {
    emit('collapse-others')
  }
  entry.isExpanded = !entry.isExpanded
}

function delClicked(entry: ToDoEntry): void {
  console.log('Clicked Delete')
  removeAndAddEntry(entry, true)
}

function editClicked(entry: ToDoEntry) {
  console.log('editClicked')
  //showEntryInput = ref(true);
  showEntryInput.value = !showEntryInput.value
}

function doneClicked(entry: ToDoEntry) {
  console.log('Clicked Done')
  removeAndAddEntry(entry, false)
}

function closeInputModal() {
  showEntryInput.value = false
}
</script>

<template>
  <article
    ref="entryBox"
    :class="[
      'entry-box',
      'stretch-horizontally',
      entry.isExpanded ? 'detail-height' : 'compact-height'
    ]"
    :style="'--element-color: ' + backgoundColor"
    @click="changeExpand"
  >
    <!-- <div class="center-vertically"> v-if="showEntryInput" -->
    <div class="Entry-InputForm">
      <InputModal :is-open="showEntryInput" @close="closeInputModal()" :entry="entry"></InputModal>
      <!-- <InputModal :is-open="showEntryInput" @close="closeInputModal()" :entry="entry"></InputModal> -->
      <!-- ERR: Entry not sent to Input Form-->
    </div>
    <div>
      <h1 class="entry-title">{{ entry?.todoEntry.title ? entry?.todoEntry.title : '' }}</h1>

      <section class="info-box-1d">
        <template v-if="entry.todoEntry.deadline != undefined">
          <span class="entry-text"
            ><img src="@/assets/icon_deadline.png" />
            {{ entry?.todoEntry.deadline.toLocaleDateString() }}</span
          >
        </template>
        <template v-if="entry.todoEntry.expenditure != undefined">
          <span class="entry-text"
            ><img src="@/assets/icon_timespan.png" />
            {{ entry.todoEntry.expenditure.time + ' ' + entry.todoEntry.expenditure.unit }}</span
          >
        </template>
      </section>
      <template v-if="entry.isExpanded && entry.todoEntry.description != undefined">
        <p class="entry-text">{{ entry.todoEntry.description }}</p>
      </template>
      <span v-if="entry.isExpanded">
        <nav class="info-box-1d">
          <button @click="delClicked(entry)"><img src="@/assets/icon_delete.svg" /></button>
          <button @click="editClicked(entry)"><img src="@/assets/icon_edit.svg" /></button>
          <button @click="doneClicked(entry)"><img src="@/assets/icon_done.svg" /></button>
        </nav>
      </span>
    </div>
  </article>
</template>

<style scoped>
.entry-title {
  font-size: 27pt;
  font-weight: 600;
}

.info-box-1d {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 0;
}

.info-box-1d span {
  flex: 0 0 50%;
}

.info-box-1d button {
  flex: 0 0 calc(100% / 3);
  border: none;
  background-color: transparent;
}

.info-box-1d button:hover,
button:focus,
button:active {
  background-color: grey;
}

.entry-text {
  font-size: 16pt;
}

.entry-box {
  /* border-radius: 5px; */

  background-color: var(--element-color);

  padding: 10px;

  color: #000000;
  position: relative;
}

.stretch-horizontally {
  position: inherit;
  left: 0px;
  right: 0px;
}

.compact-height {
  /* height in [10, 20] */
  height: 16vh;
}

.detail-height {
  min-height: 16vh;
}

.center-vertically {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
</style>
