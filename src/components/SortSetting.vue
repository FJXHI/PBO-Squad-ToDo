<script setup lang="ts">
import { useSearchStore } from '@/stores/search_store'

const searchStore = useSearchStore()

function handleSortChange() {
  const option = searchStore.sortOptions.find((option) => option.name == props.title)
  if (option == undefined) {
    return
  }

  option.isActive = !option.isActive
}

function handleSortOrderChange() {
  const option = searchStore.sortOptions.find((option) => option.name == props.title)
  // const option = searchStore.sortOptions
  if (option == undefined) {
    return
  }

  option.descending = !option.descending
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
        <input type="checkbox" @input="handleSortChange" />
        <span class="slider round"></span>
      </label>
      <button class="sort-order" @input="handleSortOrderChange">
        <img src="@/assets/icon_filter.svg" alt="" />
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
  margin-left: 1vh;
  justify-content: center;
}
</style>
