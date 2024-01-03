<script setup lang="ts">
import { ref } from 'vue'

var inputColor = ref('#000000')

function pickColor() {
  var pickColorValue = inputColor.value
  console.log('The Color is: ' + pickColorValue)
  alert('The Color is: ' + pickColorValue)
}
</script>

<template>
  <div class="settings">
    <div class="line">
      <span class="text">Text</span>
      <button class="btn">Test</button>
    </div>
    <div class="line">
      <span class="text">Text</span>
      <button class="btn">Test</button>
      <button class="btn">Test</button>
    </div>
    <div class="line">
      <span class="text">Tags</span>
      <input class="btn" type="color" id="colorPicker" v-model="inputColor" />
      <button @click="pickColor()" class="btn">Pick Color</button>
    </div>
  </div>
</template>

<style scoped>
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
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
}
</style>
