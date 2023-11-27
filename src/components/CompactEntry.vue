<script setup lang="ts">

import type TodoEntry from '@/classes/TodoEntry';
import type { assert } from '@vue/compiler-core';
import type { PropType, ComponentPublicInstance } from 'vue';
import { ref, computed, reactive } from 'vue';

const props = defineProps({
    entry: {
        type: Object as PropType<TodoEntry>,
        required: true
    }
});

const entryBox = ref(null);
let isExpanded = ref(false);

let entry: TodoEntry = props.entry;
let backgoundColor = entry.getCSSColorString();

function changeExpand() {
    isExpanded.value = !(isExpanded.value);
};
</script>

<template>
    <article ref="entryBox"
        :class="['rounded-box', 'stretch-horizontally', isExpanded ? 'detail-height' : 'compact-height']"
        :style="'--element-color: ' + backgoundColor" @click="changeExpand()">
        <!-- <div class="center-vertically"> -->
        <div>
            <h1 class="entry-title">{{ entry?.title }}</h1>
            <section class="info-box-1d">
                <template v-if="entry.deadline != undefined">
                    <span class="entry-text"><img :src="'/deadline_symbol.png'" /> {{ entry?.deadline.toLocaleDateString()
                    }}</span>
                </template>
                <template v-if="entry.expenditure != undefined">
                    <span class="entry-text"><img :src="'/timespan_symbol.png'" /> {{ entry?.expenditure.toString()
                    }}</span>
                </template>
            </section>
            <template v-if="isExpanded">
                <p class="entry-text">{{ entry.description }}</p>
            </template>
            <span v-if="isExpanded">
                <nav class="info-box-1d">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                </nav>
            </span>
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

.info-box-1d span,
button {
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

.detail-height {
    min-height: 16vh;
}

.center-vertically {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
}
</style>