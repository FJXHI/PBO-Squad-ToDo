<script lang="ts">
import NavigationButton from '@/components/NavigationButton.vue'
export default {
  components: {
    NavigationButton
  },
  methods: {
    homeClicked() {
      console.log('homeClicked')
      this.$router.push('/')
    },
    addClicked() {
      console.log('addClicked')
      this.$router.push('/add')
    },
    moreClicked() {
      console.log('moreClicked')
      this.$router.push('/more')
    }
  }
}
</script>

<template>
  <span class="nav_bar">
    <NavigationButton class="btn_home" @click="homeClicked">
      <img alt="Home" class="icon" src="/assets/icon_density_small.svg" />
    </NavigationButton>
    <NavigationButton class="btn_add" @click="addClicked">
      <img alt="Add" class="icon" src="/assets/icon_add.svg" />
    </NavigationButton>
    <NavigationButton class="btn_overview" @click="moreClicked">
      <img alt="More" class="icon" src="/assets/icon_grid_view.svg" />
    </NavigationButton>
  </span>
</template>

<style scoped>
.nav_bar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #1c1c1e;
}

.icon {
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 1vh;
  height: 70%;
  width: 70%;
}
</style>
