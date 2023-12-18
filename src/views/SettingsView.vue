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
    </div>
    <div class="line">
      <span class="text">Switch</span>
      <label class="switch">
        <input type="checkbox" />
        <span class="slider round"></span>
      </label>
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
}
</style>
