<script setup lang="ts">
import NavigationButton from '@/components/NavigationButton.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function homeClicked() {
  router.push('/')
}
function addClicked() {
  router.push('/add')
}
function moreClicked() {
  router.push('/more')
}
</script>

<template>
  <div class="nav">
    <div class="nav-field">
      <span class="flex">
        <NavigationButton class="flex justify-center items-center" @click="homeClicked">
          <img alt="Home" class="h-[45%]" src="/assets/icon_density_small.svg" />
        </NavigationButton>
        <NavigationButton class="flex justify-center items-center" @click="addClicked">
          <img alt="Add" class="h-[45%]" src="/assets/icon_add.svg" />
        </NavigationButton>
        <NavigationButton class="flex justify-center items-center" @click="moreClicked">
          <img alt="More" class="h-[45%]" src="/assets/icon_grid_view.svg" />
        </NavigationButton>
      </span>
    </div>
  </div>
</template>
