<script setup lang="ts">
</script>

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
}

.btn:hover,
button:focus,
button:active {
  background-color: grey;
}
</style>
