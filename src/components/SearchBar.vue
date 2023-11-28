<script lang="ts">
export default {
    methods: {
        settingsClick() {
            console.log("Settings button clicked");
            this.$router.push('/settings');
        }
    },
}
</script>

<template>
    <div class="topbar">
        <div class="search">
            <img src="@/assets/icon_search.png" class="search-icon">
            <input class="search-input" type="text" placeholder="Search">
        </div>
        <button @click=settingsClick>
            <img src="@/assets/icon_settings.png" class="settings-icon">
        </button>
    </div>
</template>

<style scoped>
.search-input {
    outline: none;
    border: none;
    background: none;
    color: #808080;
    font-size: 20px;
    display: inline-block;
    box-sizing: border-box;
    padding: 5px;
    width: 80%;
}

.search-icon {
    padding: 10px;
}

.search {
    height: 50px;
    width: 90%;
    display: flex;
    background-color: #1C1C1E;
    border-radius: 10px;
}

.topbar {
    display: flex;
    justify-content: space-evenly;
    position: fixed;
    top: 0;
    padding: 1em;
    height: 50px;
    width: 100%;
}

button {
    width: 50px;
    height: 50px;
    border: none;
    background-color: #1C1C1E;
    border-radius: 10px;
    background: none;
}
</style>
