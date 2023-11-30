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
    homeAdd() {
      console.log('addClicked')
      this.$router.push('/edit')
    },
    moreClicked() {
      console.log('moreClicked')
      this.$router.push('/more')
    }
  }
}
</script>

<template>
  <div class="nav">
    <div class="nav-field">
      <span class="nav_bar">
        <!-- .svg file ready, but the icon's are to big -->
        <NavigationButton class="btn_home" @click="homeClicked">
          <img alt="" class="icon" src="@/assets/icon_density_small.png" />
        </NavigationButton>
        <NavigationButton class="btn_add" @click="homeAdd">
          <img alt="" class="icon" src="@/assets/icon_add.png" />
        </NavigationButton>
        <NavigationButton class="btn_overview" @click="moreClicked">
          <img alt="" class="icon" src="@/assets/icon_grid_view.png" />
        </NavigationButton>
      </span>
    </div>
  </div>
</template>

<style>
.nav_bar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #1c1c1e;
}
</style>
