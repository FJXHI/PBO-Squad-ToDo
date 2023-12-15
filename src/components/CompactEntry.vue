<script setup lang="ts">
import type { ToDoEntry } from '@/stores/entry_store'
import type { assert } from '@vue/compiler-core'
import type { PropType, ComponentPublicInstance } from 'vue'
import { ref, computed, reactive } from 'vue'
import { useElementSize, useSwipe } from '@vueuse/core'
import type { UseSwipeDirection } from '@vueuse/core'

const props = defineProps({
  entry: {
    type: Object as PropType<ToDoEntry>,
    required: true
  }
})

const entryBox = ref(null)
let isExpanded = ref(false)

const content = ref(null)
const initialContentSize = {width: useElementSize(content).width, height: useElementSize(content).height}

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
  isExpanded.value = !isExpanded.value
}


let deleteWidth = ref(0);
let tickWidth = ref(0);
const {direction, isSwiping, lengthX, lengthY} = useSwipe(
  entryBox,
  {
    passive: true,
    onSwipe(e: TouchEvent){
      if (lengthX.value < 0)
        deleteWidth.value = Math.abs(lengthX.value)
      else
        tickWidth.value = Math.abs(lengthX.value)
    },
    onSwipeEnd(e: TouchEvent, direction: UseSwipeDirection){
      // check for enough swipe for tick/delete
      // do stuff if critera is met

      // reset swipe chanes if not
      deleteWidth.value = tickWidth.value = 0;
    }
  }
)

</script>

<template>
  <span class="horizontal-box stretch-horizontally">
    <!-- delete tooltip-->
    <aside class="delete-box restrict-size"
      :style="`width: ${deleteWidth}px;`">
      <img alt="" class="icon no-padding" src="@/assets/icon_delete.svg" />
    </aside>

    <!-- main entry content -->
    <article
    ref="entryBox"
    :class="['entry-box', isExpanded ? 'detail-height' : 'compact-height']"
    :style="`--element-color: ${backgoundColor};`"
    @click="changeExpand()">
      <div ref="content" 
        :style="`width: ${initialContentSize.width}px;
        `">
        <!-- transform: translateX(${deleteWidth-tickWidth}px); -->
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
            <button @click="console.log('delClicked')"><img src="@/assets/icon_delete.svg" /></button>
            <button @click="console.log('editClicked')"><img src="@/assets/icon_edit.svg" /></button>
            <button @click="console.log('doneClicked')"><img src="@/assets/icon_done.svg" /></button>
          </nav>
        </span>
      </div>

    </article>

    <!-- accept tooltip -->
    <aside class="tick-box restrict-size"
      :style="`width: ${tickWidth}px;`">
      <img alt="" class="icon no-padding" src="@/assets/icon_done.svg" />
    </aside>

  </span>
  
</template>

<style scoped>
.entry-title {
  font-size: 27pt;
  font-weight: 600;
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

  padding: 10px;
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
</style>
