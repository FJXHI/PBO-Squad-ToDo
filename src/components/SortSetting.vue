<script setup lang="ts">
import { useSearchStore } from '@/stores/search_store'
import { computed } from 'vue'

const searchStore = useSearchStore()

const isDescending = computed(() => {
  const option = searchStore.sortOptions[props.title]
  return option ? option.isDescending : false
})

const isTicked = computed(() => {
  const option = searchStore.sortOptions[props.title]
  return option ? option.isActive : false
})

/**
 * This function first deactivates every sort,
 * and then activates the corresponding sort,
 * as only one sort is allowed to be active at a time
 */
function handleSortActiveChange() {
  const currentStatus = searchStore.sortOptions[props.title].isActive

  if (currentStatus) {
    const activeOptions = Object.values(searchStore.sortOptions).filter((option) => option.isActive)

    if (activeOptions.length == 1) {
      return
    }
  }

  Object.keys(searchStore.sortOptions).forEach((key) => {
    searchStore.sortOptions[key].isActive = false
  })

  searchStore.sortOptions[props.title].isActive = !currentStatus
}

function handleSortOrderChange() {
  const option = searchStore.sortOptions[props.title]
  if (!option) {
    return
  }

  option.isDescending = !option.isDescending
}

const props = defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="line">
    <span>{{ props.title }}</span>
    <div class="controls">
      <label class="switch">
        <input type="checkbox" :checked="isTicked" @input="handleSortActiveChange" />
        <span class="slider round"></span>
      </label>
      <button @click="handleSortOrderChange">
        <img class="pl-[6px]" v-show="isDescending" src="/assets/icon_sort_descending.svg" alt="" />
        <img class="pl-[6px]" v-show="!isDescending" src="/assets/icon_sort_ascending.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<style scoped>
@import '@/css/slider.css';

.line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2c2c2e;
  color: #808080;
  border-radius: 10px;
  margin-bottom: 1vh;
  padding: 6px;
  font-size: 14pt;
}
.controls {
  display: flex;
  align-items: center;
}
</style>
