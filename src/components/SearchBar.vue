<script lang="ts">
export default {
    data() {
      return {
        inputSearch: ''
      }
    },
    methods: {
    clearInput() {
      this.inputSearch = '';
    }
  },
};
</script>

<template>
  <div class="search">
    <img src="@/assets/search_icon.png" class="search-icon">
		<input class="search-input" type="text" v-model="inputSearch" placeholder="Search">
  </div>
</template>

<style scoped>
.search-input {
  height: 100%;
  width: 90%;
  outline: none;
  border: none;
  background: #1C1C1E;
  color: #808080;
  font-size: 20px;
  display: inline-block;
  box-sizing: border-box;
  padding: 5px;
}

.search-icon {
  padding: 10px;
}

.search {
  height: 50px;
  width: 90%;
  overflow: hidden;
  display: flex;
  justify-content: space-around;
  background-color: #1C1C1E;
  border-radius: 10px;
  position: fixed;
  top: 0;
  margin: 1em;
}

</style>
