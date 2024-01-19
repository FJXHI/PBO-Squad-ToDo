<script setup lang="ts">
import type { ToDoEntry } from '@/stores/entry_store'
import { useToDoEntryStore } from '@/stores/entry_store'
import type { PropType } from 'vue'
import { useElementSize, useSwipe } from '@vueuse/core'
import { ref, computed } from 'vue'
import InputModal from './InputModal.vue'
import EntryButton from './EntryButton.vue'
import { completeEntry } from '@/services/entryStorageService'

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

const boxWidth = 40

const entryBox = ref(null)
const entryBoxSize = useElementSize(entryBox)

const title = ref(null)

const content = ref(null)
const initialContentSize = {
  width: useElementSize(content).width,
  height: useElementSize(content).height
}

let showEntryInput = ref(false)

let entry: ToDoEntry = props.entry

function changeExpand() {
  if (!entry.metadata.isExpanded) {
    collapseEntries()
  }
  entry.metadata.isExpanded = !entry.metadata.isExpanded
}

function collapseEntries() {
  // Iterate through all entries and collapse them
  for (const entry of store.entries) {
    if (entry.metadata.isExpanded) {
      entry.metadata.isExpanded = false
    }
  }
}

const container = ref<HTMLElement | null>(null)
const containerWidth = computed(() => container.value?.offsetWidth)
const left = ref('0')
const opacity = ref(1)

const { isSwiping, lengthX, lengthY } = useSwipe(entryBox, {
  passive: true,
  onSwipe() {
    if (containerWidth.value && Math.abs(lengthY.value) < 50) {
      const length = Math.abs(lengthX.value)
      const percentage = length / containerWidth.value

      if (percentage * 100 > boxWidth) left.value = `${-Math.sign(lengthX.value) * boxWidth}%`
      else left.value = `${-Math.sign(lengthX.value) * length}px`
    } else {
      left.value = '0'
      opacity.value = 1
      isSwiping.value = false
    }
  },
  onSwipeEnd() {
    // check if swiped enough
    if (containerWidth.value && Math.abs(lengthX.value) / containerWidth.value >= 0.5) {
      // swiped to right -> delete
      if (lengthX.value < 0) completeEntry(entry, true)
      // swiped to left -> tick
      else completeEntry(entry, false)
    } else {
      left.value = '0'
    }
  }
})
</script>

<template>
  <span
    ref="container"
    class="flex flex-row relative w-full overflow-hidden"
    :style="{ minHeight: '16vh', backgroundColor: entry.color }"
  >
    <!-- main entry box -->
    <!-- '--element-color: ' + backgroundColor -->
    <article
      ref="entryBox"
      class="relative w-full m-0 text-black"
      :class="{
        'min-h-[16vh]': entry.metadata.isExpanded,
        'h-[16vh]': !entry.metadata.isExpanded,
        'transition-none': isSwiping,
        'transition-all duration-200 ease-out': !isSwiping
      }"
      :style="{ left: left }"
      @click="changeExpand()"
    >
      <!-- delete box to the left of the main entry -->
      <aside
        class="absolute bg-red-500 flex flex-grow-0 max-w-[40vw] h-full left-0 -translate-x-full"
        :style="`width: ${boxWidth}%;`"
      >
        <img
          alt=""
          class="p-0 w-full mx-auto block"
          src="/assets/icon_delete.svg"
          :style="`max-width: ${entryBoxSize.height.value / 2}px`"
        />
      </aside>

      <!-- tick box to the right of the main entry  -->
      <aside
        class="absolute flex bg-green-500 flex-grow-0 max-w-[40vw] h-full right-0 translate-x-full"
        :style="`width: ${boxWidth}%;`"
      >
        <img
          alt=""
          class="p-0 w-full mx-auto block"
          src="/assets/icon_done.svg"
          :style="`max-width: ${entryBoxSize.height.value / 2}px`"
        />
      </aside>

      <!-- div holding the content -->
      <div ref="content" :style="`width: ${initialContentSize.width}px; padding: 10px;`">
        <h1 ref="title" class="text-2xl font-medium">
          {{ entry?.title ? entry?.title : '' }}
        </h1>

        <!-- row for deadline and expenditure -->
        <section class="flex flex-row flex-wrap pl-0">
          <template v-if="entry.deadline != undefined">
            <span class="text-lg flex flex-grow-0 flex-shrink-0 basis-1/2">
              <img alt="Deadline" src="/assets/icon_deadline.svg" />
              {{ entry?.deadline.toLocaleDateString() }}
            </span>
          </template>
          <template v-if="entry.expenditure != undefined">
            <span class="text-lg flex flex-grow-0 flex-shrink-0 basis-1/2">
              <img alt="Expenditure" src="/assets/icon_timespan.svg" />
              {{ dayjs.duration({ seconds: entry.expenditure }).humanize() }}
            </span>
          </template>
        </section>

        <template v-if="entry.metadata.isExpanded && entry.description != undefined">
          <p class="text-base relative pb-[10px]">
            {{ entry.description }}
          </p>
        </template>

        <!-- action buttons -->
        <span v-if="entry.metadata.isExpanded">
          <nav class="flex flex-row flex-wrap pl-0">
            <EntryButton @click="completeEntry(entry, true)" class="flex justify-center">
              <img alt="Delete" style="" src="/assets/icon_delete.svg" />
            </EntryButton>
            <EntryButton @click="showEntryInput = !showEntryInput" class="flex justify-center">
              <img alt="Edit" src="/assets/icon_edit.svg" />
            </EntryButton>
            <EntryButton @click="completeEntry(entry, false)" class="flex justify-center">
              <img alt="Done" src="/assets/icon_done.svg" />
            </EntryButton>
          </nav>
        </span>
      </div>
    </article>
    <InputModal
      :is-open="showEntryInput"
      @close="showEntryInput = false"
      :entry="entry"
    ></InputModal>
  </span>
</template>
