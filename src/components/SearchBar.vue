<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { search } from '@/services/searchService'

const router = useRouter()
let input = ref('')

function handleInputChange() {
  search(input.value)
}

function settingsClick() {
  router.push('/settings')
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
    <button @click="settingsClick()" class="button">
      <img src="@/assets/icon_settings.svg" />
    </button>
  </div>
</template>

<style scoped>
.search-input {
  background: none;
  outline: none;
  border: none;

  margin-right: 1vh;
  width: 100%;
  color: hsl(0, 0%, 50%);
  font-size: 16pt;
}

.search-icon {
  padding: 1vh;
}

.search {
  display: flex;
  flex-grow: 1;
  background-color: #1c1c1e;
  border-radius: 10px;
}

.topbar {
  display: flex;
  height: 8vh;
  padding: 1vh;
}

button {
  background: none;
  outline: none;
  border: none;
  background-color: #1c1c1e;
  border-radius: 10px;
  margin-left: 1vh;
  width: 6vh;
  justify-content: center;
}

button img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 80%;
  width: 80%;
}
</style>
