<script setup lang="ts"></script>

<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<style scoped>
.btn {
  font-size: 18px;
  height: 40px;
  width: calc(50% - 5px);
  min-width: 6em;
  background: #2c2c2e;
  letter-spacing: 1px;
  outline: none;
  border: none;
  border-radius: 5px;
}
</style>
