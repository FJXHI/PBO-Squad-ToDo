<script lang="ts">
import InputForm from '@/components/TheInputForm.vue'

export default {
  components: {
    InputForm
  },
  methods: {
    closeView() {
      console.log('CloseAddView')
      this.$router.push('/')
    }
  }
}

/* //setup
function closeView() {
  console.log('LeaveAddView')
  this.$router.push('/') // is not working, "this.$router"
}
*/
</script>

<template>
  <InputForm @closeaction="closeView()" />
  <button @click="closeView()">Close</button>
</template>
