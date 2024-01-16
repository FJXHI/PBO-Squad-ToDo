<script setup lang="ts"></script>

<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<style scoped>
.btn {
  flex: 0 0 calc(100% / 3);
  border: none;
  background-color: transparent;
  letter-spacing: 1px;
  outline: none;
  border-radius: 5px;
}

.btn:hover,
button:focus,
button:active {
  background-color: #808080;
}
</style>
