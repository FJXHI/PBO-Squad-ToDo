<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { search, sortEntries } from '@/services/searchService'
import FilterModal from './FilterModal.vue'

const router = useRouter()
let input = ref<string>('')
let isModalOpen = ref<boolean>(false)

function handleInputChange() {
  search(input.value)
}

function settingsClick() {
  router.push('/settings')
}

function openModal() {
  isModalOpen.value = true
}

function closeModal() {
  isModalOpen.value = false

  sortEntries()
}

function clearClick() {
  input.value = '' // clear the search string
  search(input.value) // reload the todo entries
}
</script>

<template>
  <div :style="`position: relative;`">
    <div class="shadow" :style="`top: 0; position: absolute; height: 3rem; width: 100%`"></div>
    <div class="topbar" :style="`position: relative`">
      <div class="search">
        <img alt="Search" src="/assets/icon_search.svg" class="search-icon" />
        <input
          class="search-input"
          type="text"
          v-model="input"
          placeholder="Search"
          @input="handleInputChange()"
        />
        <template v-if="input.length != 0">
          <button @click="clearClick()" class="button">
            <img src="/assets/icon_close.svg" />
          </button>
        </template>
      </div>
      <button @click="openModal()" class="button">
        <img alt="Filter" src="/assets/icon_filter.svg" />
      </button>
      <button @click="settingsClick()" class="button">
        <img alt="Settings" src="/assets/icon_settings.svg" />
      </button>
    </div>
  </div>
  <FilterModal :is-open="isModalOpen" @close="closeModal()"></FilterModal>
</template>

<style scoped>
.search-input {
  background: none;
  outline: none;
  border: none;

  margin-right: 1vh;
  width: 100%;
  color: #f8f8f8;
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

.shadow {
  background: linear-gradient(to bottom, #000000 70%, rgba(255, 255, 255, 0) 100%);
}

.filter {
  background-color: #1c1c1e;
  border-radius: 10px;
  height: 6vh;
  width: 100%;
}
</style>
