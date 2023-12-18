<script setup lang="ts">
/*defineProps<{
    btnType: string
  }>()*/
</script>

<template>
  <button class="navbtn">
    <slot></slot>
  </button>
</template>

<style>
.navbtn {
  outline: none;
  border: none;
  width: calc(100% / 3);
  height: 8vh;
  color: #fff;
  background-color: #1c1c1e;
  font-size: 8px;
  letter-spacing: 1px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5s;
  transition-property: border-left, border-right, box-shadow;
}
</style>
