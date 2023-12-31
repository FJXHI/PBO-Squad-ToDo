<script setup lang="ts">
import type { ToDoEntry, ToDoEntryMeta } from '@/stores/entry_store'
import { useToDoEntryStore } from '@/stores/entry_store'
import { useDeleteStore } from '@/stores/delete_done_store'
import { removeAndAddEntry } from '@/services/DeleteDoneService'
import type { assert } from '@vue/compiler-core'
import type { PropType, ComponentPublicInstance } from 'vue'
import { useElementSize, useSwipe } from '@vueuse/core'
import type { UseSwipeDirection } from '@vueuse/core'
import { ref, computed, reactive, defineComponent } from 'vue'
import InputModal from './TheInputModal.vue'

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
let isExpanded = ref(false)

const title = ref(null)
const titleSize = useElementSize(title)

const content = ref(null)
const initialContentSize = {
  width: useElementSize(content).width,
  height: useElementSize(content).height
}

const emit = defineEmits(['collapse-others'])

let showEntryInput = ref(false)

let entry: ToDoEntry = props.entry
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
  if (!entry.metadata.isExpanded) {
    collapseOthers()
  }
  entry.metadata.isExpanded = !entry.metadata.isExpanded
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

function collapseOthers() {
  // Iterate through all entries and collapse them
  for (const entry of store.entries) {
    console.log(entry.metadata.isExpanded)
    if (entry.metadata.isExpanded) {
      entry.metadata.isExpanded = false
    }
  }
}

const container = ref<HTMLElement | null>(null)
const containerWidth = computed(() => container.value?.offsetWidth)
const left = ref('0')
const opacity = ref(1)

let deleteWidth = ref(0)
let tickWidth = ref(0)
let swipeDir = ref(0)
const { direction, isSwiping, lengthX, lengthY } = useSwipe(entryBox, {
  // dont change this to false -> prevent click event
  // passive: true,
  // onSwipe(e: TouchEvent){
  //   if (swipeDir.value == 0)
  //     swipeDir.value = lengthX.value > 0 ? 1 : -1;

  //     // check for swipe in same direction
  //     // -> only do things if swipe diretion for ongoing swipe hasnt changed
  //     if (lengthX.value * swipeDir.value >= 0){
  //       if (lengthX.value < 0)
  //         deleteWidth.value = Math.abs(lengthX.value)
  //       else
  //         tickWidth.value = Math.abs(lengthX.value)
  //     }
  // },
  passive: true,
  onSwipe(e: TouchEvent) {
    if (containerWidth.value && Math.abs(lengthY.value) < 50) {
      const length = Math.abs(lengthX.value)
      const percentage = length / containerWidth.value

      if (percentage * 100 > boxWidth) left.value = `${-Math.sign(lengthX.value) * boxWidth}%`
      else left.value = `${-Math.sign(lengthX.value) * length}px`
    } else {
      left.value = '0'
      opacity.value = 1
    }
  },
  // onSwipeEnd(e: TouchEvent, direction: UseSwipeDirection){
  //   // check for "enough swipe" for tick/delete
  //   // do stuff if critera is met

  //   // reset swipe changes if not
  //   deleteWidth.value = tickWidth.value = 0;
  //   swipeDir.value = 0
  // }
  onSwipeEnd(e: TouchEvent, direction: UseSwipeDirection) {
    // if (lengthX.value < 0 && containerWidth.value && (Math.abs(lengthX.value) / containerWidth.value) >= 0.5) {
    //   left.value = '20%'
    //   opacity.value = 0
    // }
    // else {
    //   left.value = '0'
    //   opacity.value = 1
    // }

    left.value = `0`
  }
})
</script>

<template>
  <span
    ref="container"
    class="horizontal-box stretch-horizontally"
    :style="`position: relative; min-height: 16vh; overflow: hidden; background-color: ${backgoundColor}; `"
  >
    <!-- main entry box -->
    <!-- '--element-color: ' + backgoundColor -->
    <article
      ref="entryBox"
      :class="['entry-box', entry.metadata.isExpanded ? 'detail-height' : 'compact-height']"
      :style="`position: relative; width: 100%; left: ${left}; margin: 0; transition: all 200ms ease-out;`"
      @click="changeExpand()"
    >
      <!-- delete box to the left of the main entry -->
      <aside
        class="delete-box restrict-size"
        :style="`position: absolute; display: flex; width: ${boxWidth}%; height: 100%; left: 0; transform: translateX(-100%)`"
      >
        <img
          alt=""
          class="icon no-padding center"
          src="@/assets/icon_delete.svg"
          :style="`max-width: ${entryBoxSize.height.value / 2}px`"
        />
      </aside>

      <!-- tick box to the right of the main entry  -->
      <aside
        class="tick-box restrict-size"
        :style="`position: absolute; display: flex; width: ${boxWidth}%; height: 100%; right: 0; transform: translateX(100%)`"
      >
        <img
          alt=""
          class="icon no-padding center"
          src="@/assets/icon_done.svg"
          :style="`max-width: ${entryBoxSize.height.value / 2}px`"
        />
      </aside>

      <!-- div holding the content -->
      <div ref="content" :style="`width: ${initialContentSize.width}px; padding: 10px;`">
        <!-- transform: translateX(${deleteWidth-tickWidth}px); -->
        <h1 ref="title" class="text-2xl font-medium">
          {{ entry?.title ? entry?.title : '' }}
        </h1>

        <!-- row for deadline and expenditure -->
        <section class="info-box-1d">
          <template v-if="entry.deadline != undefined">
            <span class="entry-text">
              <img alt="Deadline" src="@/assets/icon_deadline.png" />
              {{ entry?.deadline.toLocaleDateString() }}
            </span>
          </template>
          <template v-if="entry.expenditure != undefined">
            <span class="entry-text">
              <img alt="Expenditure" src="@/assets/icon_timespan.png" />
              {{ entry.expenditure.time + ' ' + entry.expenditure.unit }}
            </span>
          </template>
        </section>

        <template v-if="entry && entry.description != undefined">
          <p :style="`color: #000000; padding: 0 0 10px 0; position: relative;`" class="text-base">
            {{ entry.description }}
          </p>
        </template>

        <!-- action buttons -->
        <!-- <span class="info-box-1d" v-if="entry.isExpanded"> -->
        <span v-if="entry.metadata.isExpanded">
          <nav class="info-box-1d">
            <button @click="delClicked(entry)" class="flex justify-center">
              <img alt="Delete" style="" src="@/assets/icon_delete.svg" />
            </button>
            <button @click="editClicked(entry)" class="flex justify-center">
              <img alt="Edit" src="@/assets/icon_edit.svg" />
            </button>
            <button @click="doneClicked(entry)" class="flex justify-center">
              <img alt="Done" src="@/assets/icon_done.svg" />
            </button>
          </nav>
        </span>
      </div>
    </article>
    <InputModal :is-open="showEntryInput" @close="closeInputModal()" :entry="entry"></InputModal>
  </span>
</template>

<style scoped>
.entry-title {
  font-size: 27pt;
  font-weight: 600;
}

.center {
  width: 100%;
  margin: auto;
  display: block;
}

.tick-box {
  background-color: green;
}

.delete-box {
  background-color: red;
}

.restrict-size {
  flex-grow: 0;
  max-width: 40vw;
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

.horizontal-box {
  display: flex;
  position: relative;
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
  /* min-width: 100vh; */

  /* padding: 10px; */
  flex-grow: 1;

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

.no-padding {
  padding: 0;
}

.center-vertically {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

.gorg {
  /* <what is animatied> <length> <timing-function> */
  transition: all 200ms ease-out;
}
</style>
