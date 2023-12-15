<script setup lang="ts">
import { ref } from 'vue'

const message = ref('This is a modal popup')
const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}

defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
})
</script>

<template>
  <Transition name="modal">
    <div v-if="isOpen" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">default header</slot>
          </div>

          <div class="modal-body">
            <slot name="body">default body</slot>
          </div>

          <button class="btn_cancel" type="button" @click="closeModal()">Close</button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
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
  width: 80%;
  max-width: 500px;
  margin: auto;
  padding: 20px 30px;
  background-color: #1c1c1e;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
}

.modal-body {
  margin: 20px 0;
}

.btn_cancel {
  color: #d05050;

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

.btn_cancel:hover,
.btn_cancel:active,
.btn_cancel:focus {
  background-color: #d05050;
  color: #fff;
}

/*
   * The following styles are auto-applied to elements with
   * transition="modal" when their visibility is toggled
   * by Vue.js.
   *
   * You can easily play with the modal transition by editing
   * these styles.
   */

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
