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
    menuClicked() {
      console.log('menuClicked')
    }
  }
}
</script>

<template>
  <div class="nav">
    <div class="nav-field">
      <span class="nav_btn"
        ><!-- .svg file ready, but the icon's are to big -->
        <NavigationButton class="btn_home" @click="homeClicked" btnType="@/assets/home_icon.png">
          <img alt="" class="icon" src="@/assets/icon_density_small.png" />
        </NavigationButton>
        <NavigationButton class="btn_add" @click="homeAdd" btnType="@/assets/add_icon.png">
          <img alt="" class="icon" src="@/assets/icon_add.png" />
        </NavigationButton>
        <NavigationButton
          class="btn_overview"
          @click="menuClicked"
          btnType="@/assets/menu_icon.png"
        >
          <img alt="" class="icon" src="@/assets/icon_grid_view.png" />
        </NavigationButton>
      </span>
    </div>
  </div>
</template>

<style>
.nav_btn {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #1c1c1e;
}

.nav_btn button {
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
