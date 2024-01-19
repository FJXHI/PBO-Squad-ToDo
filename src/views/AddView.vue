<script setup lang="ts">
import { useRouter } from 'vue-router'
import InputForm from '@/components/InputForm.vue'
const router = useRouter()

function closeView() {
  router.push('/')
}
</script>

<template>
  <InputForm @closeaction="closeView()" />
</template>
