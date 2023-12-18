<script setup lang="ts">
import { useRouter } from 'vue-router'
import InputForm from '@/components/TheInputForm.vue'
const router = useRouter()

function closeView() {
  console.log('CloseAddView')
  router.push('/')
}
</script>

<template>
  <InputForm @closeaction="closeView()" />
</template>
