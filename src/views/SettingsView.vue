<script setup lang="ts">
import {
  clearEntries,
  clearLocalStorage,
  revertToDebugEntries,
  restoreLastEntry
} from '@/services/entryStorageService'
</script>

<template>
  <div class="settings">
    <div class="line">
      <span class="text">Remove all entries</span>
      <button class="btn" @click="clearEntries">Clear</button>
    </div>
    <div class="line">
      <span class="text">DEBUG: Revert to debug entries</span>
      <button class="btn" @click="revertToDebugEntries">Revert</button>
    </div>
    <div class="line">
      <span class="text">DEBUG: Clear Local Storage</span>
      <button class="btn" @click="clearLocalStorage">Revert</button>
    </div>
    <div class="line">
      <span class="text">Restore last deleted Entry</span>
      <button class="btn" @click="restoreLastEntry">Restore</button>
    </div>
  </div>
</template>

<style scoped>
@import '@/css/slider.css';
.settings {
  margin-top: 4vh;
  color: #808080;
  padding: 1vh;
}

.line {
  display: flex;
  justify-content: space-between;
  background-color: #1c1c1e;
  border-radius: 10px;
  margin-bottom: 1vh;
  padding: 6px;
  font-size: 14pt;
}

.text {
  flex-grow: 1;
}

.settings .btn {
  min-width: 10%;
  background-color: #808080;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 5px;
  letter-spacing: 1px;
  outline: none;
}

.settings .btn:hover,
.btn:active,
.btn:focus {
  background-color: #d05050;
}
</style>
