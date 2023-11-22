<script lang="ts">
import NavigationButton from '@/components/NavigationButton.vue';
export default {
    components: {
        NavigationButton,
    },
    methods: {
    homeClicked() {
        console.log("homeClicked");
        this.$router.push('/');
    },
    homeAdd() {
        console.log("addClicked");
    },
    menuClicked() {
        console.log("menuClicked");
      this.$router.push('/edit');
    }
  },
};
</script>

<template>
<div class="nav">
    <div class="nav-field">
        <span class="nav_btn">
            <NavigationButton class="btn_home" @click=homeClicked btnType="@/assets/home_icon.png"> 
                <img alt="" class="icon" src="@/assets/home_icon.png"/>
            </NavigationButton>      
            <NavigationButton class="btn_add" @click=homeAdd btnType="@/assets/add_icon.png">
                <img alt="" class="icon" src="@/assets/add_icon.png"/>
            </NavigationButton>
            <NavigationButton class="btn_overview" @click=menuClicked btnType="@/assets/menu_icon.png">
                <img alt="" class="icon" src="@/assets/menu_icon.png"/>
            </NavigationButton>
        </span>
    </div>
</div>
</template>

<style>

.nav_btn {
  display: flex;
  justify-content: space-around;
  /* width: 100%; */
  background-color: #1C1C1E;
}

.nav_btn button {
  outline: none;
  border: none;
  width: 40%;
  height: 55px;
  color: #fff;
  background-color: #1C1C1E;
  font-size: 18px;
  letter-spacing: 1px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5s;
  transition-property: border-left, border-right, box-shadow;
  padding: 15px 32px;
  margin: 4px 2px;
}

</style>
