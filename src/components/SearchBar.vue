<script lang="ts">
export default {
  methods: {
    settingsClick() {
      console.log('Settings button clicked')
      this.$router.push('/settings')
    }
  }
}
</script>

<template>
  <div class="topbar">
    <div class="search">
      <img src="@/assets/icon_search.svg" class="search-icon" />
      <input class="search-input" type="text" placeholder="Search" />
    </div>
    <button @click="settingsClick" class="button">
      <img src="@/assets/icon_settings.svg" style="width: 100%; height: 100%" />
    </button>
  </div>
</template>

<style scoped>
.search-input {
  background: none;
  outline: none;
  border: none;

  width: 100%;
  color: hsl(0, 0%, 50%);
  font-size: 16pt;
}

.search-icon {
  padding: 1vh;
}

.search {
  display: flex;
  width: 0;
  flex-grow: 1;
  background-color: #1c1c1e;
  border-radius: 10px;
  margin-right: 1vh;
}

.topbar {
  display: flex;
  height: 8vh;
  width: 100%;
  padding: 1vh;
}

button {
  background: none;
  outline: none;
  border: none;

  height: 6vh;
  width: 6vh;
  padding: 0;
}
</style>
