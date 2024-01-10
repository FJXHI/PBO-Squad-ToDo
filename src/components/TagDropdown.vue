<script setup lang="ts">
import { ref } from 'vue'

const inputTags = ref('')
const tagData = ['Uni', 'Work', 'Test']
</script>

<template>
  <input
    list="tag-list"
    id="id_tags"
    class="user-input duration"
    placeholder="Tags"
    v-model="inputTags"
  />

  <datalist id="tag-list">
    <option v-for="tag in tagData" :key="tag" :value="tag"></option>
  </datalist>
</template>

<style scoped></style>
