<script setup lang="ts">
import TodoEntry from '@/classes/TodoEntry';
import type { PropType } from 'vue';

defineProps({
    entry: {
        type: Object as PropType<TodoEntry>,
        required: true
    }
});

</script>

<template>
    <section>
        <h1>{{ entry?.title }}</h1>
        <br>
        <p>{{ entry?.description }}</p>
    </section>
</template>
  
<style scoped></style>