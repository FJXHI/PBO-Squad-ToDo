<script setup lang="ts">
import TodoEntry from '@/classes/TodoEntry';
import type { assert } from '@vue/compiler-core';
import type { PropType } from 'vue';

const props = defineProps({
    entry: {
        type: Object as PropType<TodoEntry>,
        required: true
    }
});

let entry: TodoEntry = props.entry;
let backgoundColor = entry.getCSSColorString();

</script>

<template>
    <article class="rounded-box stretch-horizontally compact-height" :style="'--element-color: ' + backgoundColor">
        <div class="center-vertically">
            <h1 class="entry-title">{{ entry?.title }}</h1>
            <section class="info-box-1d">
                <template v-if="entry.deadline != undefined">
                    <span class="entry-text"><img :src="'/deadline_symbol.png'" /> {{ entry?.deadline.toLocaleDateString() }}</span>
                </template>
                <template v-if="entry.expenditure != undefined">
                    <span class="entry-text"><img :src="'/timespan_symbol.png'" /> {{ entry?.expenditure.toString() }}</span>
                </template>
            </section>
        </div>
    </article>
</template>
  
<style scoped>
.entry-title {
    font-size: 27pt;
    font-weight: 600;
}

.info-box-1d {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-left: 0;

    
}
.info-box-1d span {
    flex: 0 0 33.333333%;
}

.entry-text {
    font-size: 16pt;
}

.rounded-box {
    border-radius: 15px; 
    background-color: var(--element-color);

    padding: 10px;

    color: #000000;
    position: relative;
}

.stretch-horizontally {
    position: inherit;
    left: 0px;
    right: 0px
}

.compact-height {
    /* height in [10, 20] */
    height: 16vh;
}

.center-vertically {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
}

</style>