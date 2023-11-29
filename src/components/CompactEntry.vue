<script setup lang="ts">
import type { ToDoEntry } from '@/stores/entry_store';
import type { assert } from '@vue/compiler-core';
import type { PropType, ComponentPublicInstance } from 'vue';
import { ref, computed, reactive } from 'vue';

const props = defineProps({
    entry: {
        type: Object as PropType<ToDoEntry>,
        required: true
    }
});

const entryBox = ref(null);
let isExpanded = ref(false);

let entry: ToDoEntry = props.entry;
let backgoundColor = "rgba(" + entry.color.r.toString() + "," + entry.color.g.toString() + "," + entry.color.b.toString() + "," + (entry.color.a ? entry.color.a : 255) + ")";

function changeExpand() {
    isExpanded.value = !(isExpanded.value);
};
</script>

<template>
    <article ref="entryBox" :class="['entry-box', 'stretch-horizontally', isExpanded ? 'detail-height' : 'compact-height']" :style="'--element-color: ' + backgoundColor" @click="changeExpand()">
        <!-- <div class="center-vertically"> -->
        <div>
            <h1 class="entry-title">{{ entry?.title ? entry?.title : "" }}</h1>
            <section class="info-box-1d">
                <template v-if="entry.deadline != undefined">
                    <span class="entry-text"><img src="@/assets/icon_deadline.png" /> {{ entry?.deadline.toLocaleDateString()
                    }}</span>
                </template>
                <template v-if="entry.expenditure != undefined">
                    <span class="entry-text"><img src="@/assets/icon_timespan.png" /> {{ entry.expenditure.time + " " + entry.expenditure.unit }}</span>

                </template>
            </section>
            <template v-if="isExpanded && entry.description != undefined">
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

.info-box-1d span, button {
    flex: 0 0 50%;
}

.entry-text {
    font-size: 16pt;
}

.entry-box {
    /* border-radius: 5px; */

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