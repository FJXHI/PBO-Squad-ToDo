<script setup lang="ts">
import { ref, defineEmits } from 'vue'

const emit = defineEmits(['sortChange'])

// order: true = ascending, false = descending
const sortOptions = ref([
  { name: 'Title', value: false, sortOrder: false },
  { name: 'Deadline', value: false, sortOrder: false },
  { name: 'Expenditure', value: false, sortOrder: false },
  { name: 'Last Added', value: false, sortOrder: false }
])

function handleSortChange(sortOption: string) {
  sortOptions.value.forEach((option) => {
    if (option.name === sortOption) {
      option.value = !option.value
    }
  })
  emit('sortChange', sortOptions.value)
}

function handleSortOrderChange(sortOption: string) {
  sortOptions.value.forEach((option) => {
    if (option.name === sortOption) {
      option.sortOrder = !option.sortOrder
    }
  })
  emit('sortChange', sortOptions.value)
}

function getSortIcon(title: string) {
  const sortOption = sortOptions.value.find((option) => option.name === title)
  if (sortOption?.sortOrder) {
    return '/src/assets/icon_sort_ascending.svg'
  } else {
    return '/src/assets/icon_sort_descending.svg'
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
      <button class="sort-order" @click="handleSortOrderChange(props.title)">
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
  border: none;
  margin-left: 1vh;
  justify-content: center;
}
</style>
