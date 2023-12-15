<script setup lang="ts">
import { ref } from 'vue'

const sortOptions = ref([
  { name: 'Title', value: false, sortOrder: 'descending' },
  { name: 'Deadline', value: false, sortOrder: 'descending' },
  { name: 'Expenditure', value: false, sortOrder: 'descending' },
  { name: 'Last Added', value: false, sortOrder: 'descending' }
])

function handleSortChange(sortOption: string) {
  sortOptions.value.forEach((option) => {
    if (option.name === sortOption) {
      option.value = !option.value
      option.sortOrder = option.value ? 'ascending' : 'descending'
    }
  })
}

function getSortIcon(title: string) {
  const sortOption = sortOptions.value.find((option) => option.name === title)
  if (sortOption?.sortOrder === 'ascending') {
    return '/src/assets/icon_sort_ascending.svg'
  } else {
    return '/src/assets/icon_sort_descending.svg'
  }
}

function changeSortIcon(title: string) {
  const sortOption = sortOptions.value.find((option) => option.name === title)
  if (sortOption?.sortOrder === 'ascending') {
    sortOption.sortOrder = 'descending'
  } else {
    sortOption.sortOrder = 'ascending'
  }
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
        <input type="checkbox" @input="handleSortChange('Title')" />
        <span class="slider round"></span>
      </label>
      <button class="sort-order" @click="handleSortChange(props.title)">
        <img :src="getSortIcon(props.title)" alt="" />
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
  outline: none;
  border: none;
  background-color: #1c1c1e;
  border-radius: 10px;
  margin-left: 1vh;
  justify-content: center;
}
</style>
