<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import ComButton from './components/ComButton.vue'
import TodoEntry from './classes/TodoEntry'
import Expenditure from './classes/Expenditure'
import {TimeUnit} from "./classes/TimeUnit"
import CompactEntry from './components/CompactEntry.vue';

let entryList: TodoEntry[] = [];
entryList.push(new TodoEntry("Test Entry 1", "Test 1 Description", [255, 59, 48, 255], undefined, new Date("2024-01-07"), new Expenditure(5, TimeUnit.Hour)));
entryList.push(new TodoEntry("Test Entry 2", "Test 2 Description", [50, 173, 230, 255], undefined, undefined, new Expenditure(30, TimeUnit.Minute)));
entryList.push(new TodoEntry("Test Entry 3", "Test 3 Description", [162, 132, 94, 255], undefined, new Date("2027-09-29"), undefined));
entryList.push(new TodoEntry("Test Entry 4", "Test 4 Description", [52, 199, 89, 255], undefined, undefined, undefined));
entryList.push(new TodoEntry("Test Entry 5", "Test 5 Description", [255, 204, 0, 255], undefined, undefined, undefined));

</script>

<template>
  <header>

    <!--<img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />-->

    <div>
      <!-- <HelloWorld msg="You did it!" /> -->
      <!--search bar here-->
      <nav>
        <!-- <RouterLink to="/">Home</RouterLink>Logo Haus? -->
        <!-- <RouterLink to="/edit">Edit</RouterLink>+ -->
        <!-- <RouterLink to="/more">More</RouterLink>Logo 3 Streifen? -->
      </nav>
    </div>
  </header>
  <main class="full-width">
      <div v-for="entry in entryList">
        <CompactEntry :entry="entry"></CompactEntry>
      </div>

    <!-- <TodoEntryVue :entry="e" /> -->

    <!-- <RouterView /> -->
    <!--edit options ...-->
  </main>
  <footer>
    <div class="menu">
      <!--nav bar-->
      <nav>
        <!-- <RouterLink to="/">Home</RouterLink>Logo Haus? -->
        <!-- <RouterLink to="/edit">Edit</RouterLink>
        <RouterLink to="/more">More</RouterLink>Logo 3 Streifen? -->
      </nav>
    </div>
    <!--Menü-Leiste-->
  </footer>
</template>

<style scoped>
.full-width {
    position: absolute;
    left: 0px;
    right: 0px
}

/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  header nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }

  .menu {
    display: center;
  }
  

  .menu nav {
    background-color: black;
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
  }
} */
</style> 
