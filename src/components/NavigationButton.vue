
<script setup lang="ts">
defineProps<{
    btnType: string
  }>()
</script>

<template>
    <button>
        <slot></slot>
    </button>
</template>

<style>
</style>