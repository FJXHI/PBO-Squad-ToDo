<script setup lang="ts">
import type { ToDoEntry, ToDoEntryInfo } from '@/stores/entry_store'
import { useToDoEntryStore } from '@/stores/entry_store'
import { useDeleteStore } from '@/stores/delete_done_store'
import { removeAndAddEntry } from '@/services/DeleteDoneService'
import type { assert } from '@vue/compiler-core'
import type { PropType, ComponentPublicInstance } from 'vue'
import { ref, computed, reactive, defineComponent } from 'vue'

const store = useToDoEntryStore()

const props = defineProps({
  entry: {
    type: Object as PropType<ToDoEntry>,
    required: true
  }
})

const entryBox = ref(null)
let isExpanded = ref(false)

let entry: ToDoEntryInfo = props.entry.todoEntry
let backgoundColor =
  'rgba(' +
  entry.color.r.toString() +
  ',' +
  entry.color.g.toString() +
  ',' +
  entry.color.b.toString() +
  ',' +
  (entry.color.a ? entry.color.a : 255) +
  ')'

function changeExpand() {
  isExpanded.value = !isExpanded.value
}

function delClicked(entry: ToDoEntry): void {
  console.log('delClicked')
  console.log(entry)
  removeAndAddEntry(entry)
}

function editClicked() {
  console.log('editClicked')
}

function doneClicked(entry: ToDoEntry) {
  console.log('doneClicked')
  console.log(entry.todoEntry)
  //deldoneStore.addEntry(entry.todoEntry)
  //store.removeEntry(entry)
}
</script>

<template>
  <article
    ref="entryBox"
    :class="['entry-box', 'stretch-horizontally', isExpanded ? 'detail-height' : 'compact-height']"
    :style="'--element-color: ' + backgoundColor"
    @click="changeExpand()"
  >
    <!-- <div class="center-vertically"> -->
    <div>
      <h1 class="entry-title">{{ entry?.title ? entry?.title : '' }}</h1>
      <section class="info-box-1d">
        <template v-if="entry.deadline != undefined">
          <span class="entry-text"
            ><img src="@/assets/icon_deadline.png" />
            {{ entry?.deadline.toLocaleDateString() }}</span
          >
        </template>
        <template v-if="entry.expenditure != undefined">
          <span class="entry-text"
            ><img src="@/assets/icon_timespan.png" />
            {{ entry.expenditure.time + ' ' + entry.expenditure.unit }}</span
          >
        </template>
      </section>
      <template v-if="isExpanded && entry.description != undefined">
        <p class="entry-text">{{ entry.description }}</p>
      </template>
      <span v-if="isExpanded">
        <nav class="info-box-1d">
          <button @click="delClicked(entry)"><img src="@/assets/icon_delete.svg" /></button>
          <button @click="editClicked()"><img src="@/assets/icon_edit.svg" /></button>
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
