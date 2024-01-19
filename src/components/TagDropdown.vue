<script setup lang="ts">
import { ref } from 'vue'

//const inputTags = ref('')
const inputColor = ref('#ff3b30')
const tagData = ['Uni', 'Work', 'Other']
</script>

<template>
  <!--<label for="id_tags">Tags:</label>-->
  <label for="id_tags">Color:</label>
  <div>
    <!--<input
      list="tag-list"
      id="id_tags"
      class="user-input duration"
      placeholder="Tags"
      v-model="inputTags"
    />-->
    <input
      class="user-input"
      type="color"
      id="colorPicker"
      v-model="inputColor"
    /><!-- Inputcolor field slightly too high up -->
  </div>

  <datalist id="tag-list">
    <option v-for="tag in tagData" :key="tag" :value="tag"></option>
  </datalist>
</template>

<style scoped></style>
