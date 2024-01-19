<script setup lang="ts">
import { completeEntry } from '@/services/entryStorageService'
import type { ToDoEntry } from '@/stores/entry_store'
import { useToDoEntryStore } from '@/stores/entry_store'
import type { PropType } from 'vue'
import { ref } from 'vue'
import EntryButton from './EntryButton.vue'
import InputModal from './InputModal.vue'

import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(duration)
dayjs.extend(relativeTime)

const store = useToDoEntryStore()

const props = defineProps({
  entry: {
    type: Object as PropType<ToDoEntry>,
    required: true
  }
})

const entryBox = ref(null)

const title = ref(null)

const content = ref(null)

let showEntryInput = ref(false)

let entry: ToDoEntry = props.entry

function changeExpand() {
  if (!entry.metadata.isExpanded) {
    collapseEntries()
  }
  entry.metadata.isExpanded = !entry.metadata.isExpanded
}

function delClicked(entry: ToDoEntry) {
  console.log('Clicked Delete')
  completeEntry(entry, true)
}

function editClicked() {
  console.log('editClicked')
  showEntryInput.value = !showEntryInput.value
}

function doneClicked(entry: ToDoEntry) {
  console.log('Clicked Done')
  completeEntry(entry, false)
}

function closeInputModal() {
  showEntryInput.value = false
}

function collapseEntries() {
  // Iterate through all entries and collapse them
  for (const entry of store.entries) {
    if (entry.metadata.isExpanded) {
      entry.metadata.isExpanded = false
    }
  }
}
</script>

<template>
  <span>
    <article
      ref="entryBox"
      :class="[
        'entry-box',
        'stretch-horizontally',
        entry.metadata.isExpanded ? 'detail-height' : 'entry-height'
      ]"
      :style="'--element-color: ' + entry.color"
      @click="changeExpand()"
    >
      <div ref="content">
        <h1 ref="title" class="entry-title">
          <!--class="text-2xl font-medium"-->
          {{ entry?.title ? entry?.title : '' }}
        </h1>
        <section>
          <template v-if="entry.deadline != undefined">
            <span class="entry-text">
              {{ entry?.deadline.toLocaleDateString() }}
            </span>
          </template>
          <span
            class="entry-text"
            v-if="entry.deadline != undefined && entry.expenditure != undefined"
          >
            -
          </span>
          <template v-if="entry.expenditure != undefined">
            <span class="entry-text">
              <!-- text-lg flex -->
              {{ dayjs.duration({ seconds: entry.expenditure }).humanize() }}
            </span>
          </template>
        </section>

        <template v-if="entry.metadata.isExpanded && entry.description != undefined">
          <p :style="`color: #000000; padding: 0 0 10px 0; position: relative;`" class="text-base">
            {{ entry.description }}
          </p>
        </template>

        <!-- action buttons -->
        <span v-if="entry.metadata.isExpanded">
          <nav class="info-btn">
            <!-- info-box-1d -->
            <EntryButton @click="delClicked(entry)">
              <!-- class="flex justify-center" -->
              <img alt="Delete" style="" src="/assets/icon_delete.svg" />
            </EntryButton>
            <EntryButton @click="editClicked()">
              <img alt="Edit" src="/assets/icon_edit.svg" />
            </EntryButton>
            <EntryButton @click="doneClicked(entry)">
              <img alt="Done" src="/assets/icon_done.svg" />
            </EntryButton>
          </nav>
        </span>
      </div>
    </article>
    <InputModal :is-open="showEntryInput" @close="closeInputModal()" :entry="entry"></InputModal>
  </span>
</template>

<style scoped>
.entry-title {
  font-size: 3.5vw;
  font-weight: 600;
}

.entry-height {
  min-height: 18vh;
}

.entry-text {
  font-size: 2.5vw;
}

.entry-box {
  background-color: var(--element-color);
  color: #000000;
  padding: 1%;
  height: 100%;
}

.info-btn {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 0;
}

.info-btn img {
  display: inline-block;
}
</style>
