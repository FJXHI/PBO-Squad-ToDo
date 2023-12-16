s
<script setup lang="ts">
import { useSearchStore } from '@/stores/search_store'
import { computed } from 'vue'

const searchStore = useSearchStore()

/**
 * Computed property that determines if the item is ticked.
 * @returns {boolean} True if the item is ticked, false otherwise.
 */
const isTicked = computed(() => {
  const option = searchStore.sortOptions[props.title]
  return option ? option.isActive : false
})

/**
 * This function first deactivates eevery sort,
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
  console.log(searchStore.sortOptions)
}

function handleSortOrderChange() {
  const option = searchStore.sortOptions[props.title]
  if (!option) {
    return
  }

  option.isDescending = !option.isDescending
  console.log(option.isDescending)
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
      <button class="sort-order" @input="handleSortOrderChange">
        <img src="@/assets/icon_sort_descending.svg" alt="" />
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
  border-radius: 10px;
  margin-bottom: 1vh;
  padding: 6px;
  font-size: 14pt;
}
.controls {
  display: flex;
  align-items: center;
}
.sort-order {
  height: 34px;
  background: none;
  border: none;
  justify-content: center;
}
</style>
