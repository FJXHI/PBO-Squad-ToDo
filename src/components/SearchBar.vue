<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { search } from '@/services/searchService'
import FilterModal from './FilterModal.vue'

const router = useRouter()
let input = ref<string>('')
let isOpen = ref<boolean>(false)

function handleInputChange() {
  search(input.value)
}

function settingsClick() {
  router.push('/settings')
}

function openModal() {
  isOpen.value = true
}

function closeModal() {
  isOpen.value = false
}
</script>

<template>
  <div class="topbar">
    <div class="search">
      <img src="@/assets/icon_search.svg" class="search-icon" />
      <input
        class="search-input"
        type="text"
        v-model="input"
        placeholder="Search"
        @input="handleInputChange()"
      />
    </div>
    <button @click="openModal()" class="button">
      <img src="@/assets/icon_filter.svg" alt="" />
    </button>
    <button @click="settingsClick()" class="button">
      <img src="@/assets/icon_settings.svg" />
    </button>
  </div>
  <FilterModal :is-open="isOpen" @close="closeModal()" @save="closeModal()"> ></FilterModal>
</template>

<style scoped>
.search-input {
  background: none;
  outline: none;
  border: none;

  margin-right: 1vh;
  width: 100%;
  color: hsl(0, 0%, 50%);
  font-size: 15pt;
}

.search-icon {
  padding: 4px;
}

.search {
  display: flex;
  flex-grow: 1;
  background-color: #1c1c1e;
  border-radius: 10px;
}

.topbar {
  display: flex;
  height: 6vh;
  padding: 6px;
}

button {
  background: none;
  outline: none;
  border: none;
  background-color: #1c1c1e;
  border-radius: 10px;
  margin-left: 1vh;
  width: 5vh;
  justify-content: center;
}

button img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 90%;
  width: 90%;
}

.filter {
  background-color: #1c1c1e;
  border-radius: 10px;
  height: 6vh;
  width: 100%;
}
</style>
