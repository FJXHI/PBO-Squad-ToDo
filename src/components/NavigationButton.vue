<script setup lang="ts"></script>

<template>
  <button class="navbtn">
    <slot></slot>
  </button>
</template>

<style scoped>
.navbtn {
  width: calc(100% / 3);
  height: 8vh;
  background-color: #1c1c1e;
}
</style>
