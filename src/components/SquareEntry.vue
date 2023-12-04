<script setup lang="ts">
import type { ToDoEntry } from '@/stores/entry_store'
import type { assert } from '@vue/compiler-core'
import type { PropType, ComponentPublicInstance } from 'vue'
import { ref, computed, reactive } from 'vue'

const props = defineProps({
  entry: {
    type: Object as PropType<ToDoEntry>,
    required: true
  }
})

const entryBox = ref(null)
let isExpanded = ref(false)

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
</script>

<template>
  <article
    ref="entryBox"
    :class="['entry-box', 'stretch-horizontally', isExpanded ? 'detail-height' : 'compact-height']"
    :style="'--element-color: ' + backgoundColor"
    @click="changeExpand()"
  >
    <div>
      <h1 class="entry-title">{{ entry?.title ? entry?.title : '' }}</h1>
      <section class="info-box-1d">
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
            {{ entry.expenditure.time + ' ' + entry.expenditure.unit }}
          </span>
        </template>
      </section>
      <template v-if="isExpanded && entry.description != undefined">
        <p class="entry-text">{{ entry.description }}</p>
      </template>
      <span v-if="isExpanded">
        <nav class="info-btn">
          <button @click="console.log('delClicked')"><img src="@/assets/icon_delete.svg" /></button>
          <button @click="console.log('editClicked')"><img src="@/assets/icon_edit.svg" /></button>
          <button @click="console.log('doneClicked')"><img src="@/assets/icon_done.svg" /></button>
        </nav>
      </span>
    </div>
  </article>
</template>

<style scoped>
.entry-title {
  font-size: 4vw;
  font-weight: 600;
}

.entry-text {
  font-size: 2.5vw;
}

.info-box-1d span {
  flex: 0 0 50%;
}

.entry-box {
  background-color: var(--element-color);
  color: #000000;
  padding: 1%;
  height: 100%;
}

.info-btn button {
  width: calc(100% / 3);
  border: none;
  background-color: transparent;
}

.info-btn button:hover,
button:focus,
button:active {
  background-color: grey;
}
</style>
