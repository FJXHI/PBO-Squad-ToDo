<script setup lang="ts">
import { ref, defineProps } from 'vue'
import type { PropType } from 'vue'
import type { ToDoEntry } from '@/stores/entry_store'
import InputForm from './TheInputForm.vue'

const emit = defineEmits(['close'])

function close() {
  emit('close')
}

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  entry: {
    type: Object as PropType<ToDoEntry>
  }
})
</script>

<template>
  <Transition name="modal">
    <div v-if="isOpen" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-body">
            <!--Sort input fields-->
            <!-- <InputForm @closeaction="close()"></InputForm> -->
            <InputForm @closeaction="close()" :entry="entry"></InputForm>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 99%;
  margin: auto;
  padding: 20px 30px;
  background-color: black;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-body {
  color: #808080;
}

.button-wrapper {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.btn {
  font-size: 14pt;
  height: 40px;
  width: calc(50% - 5px);
  min-width: 6em;
  background: #2c2c2e;
  letter-spacing: 1px;
  outline: none;
  border: none;
  border-radius: 5px;
}

.btn_save {
  color: #4caf50;
}

.btn_cancel {
  color: #d05050;
}

.btn_save:hover,
.btn_save:active,
.btn_save:focus {
  background-color: #4caf50;
  color: #fff;
}

.btn_cancel:hover,
.btn_cancel:active,
.btn_cancel:focus {
  background-color: #d05050;
  color: #fff;
}

/* Auto applied animation styles for Transition */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
