<script lang="ts">
import { useToDoEntryStore } from '@/stores/entry_store'
//import editButton from '@/components/editButton.vue';
const store = useToDoEntryStore()

export default {
  /*components: {
        editButton,
    },*/
  data() {
    return {
      inputTitle: '',
      inputDate: '',
      inputDuration: '',
      inputDurationUnit: 'm',
      inputDescript: '',
      inputTags: ''
    }
  },
  methods: {
    saveEdit() {
      if (this.inputTitle.trim() !== '') {
        store.addEntry({
          title: this.inputTitle,
          description: this.inputDescript,
          color: { r: 255, g: 59, b: 48 },
          deadline: new Date(this.inputDate),
          expenditure: { time: parseInt(this.inputDuration), unit: this.inputDurationUnit }
        })
        const output = {
          title: this.inputTitle,
          date: this.inputDate,
          duration: this.inputDuration,
          unit: this.inputDurationUnit,
          description: this.inputDescript,
          tags: this.inputTags
        }
        console.log(output)
        this.clearInput() // Clear Inputs after Save
      }
    },
    cancelEdit() {
      this.clearInput() // Clear Inputs after Cancel
      this.$router.push('/') //Return to Home
    },
    clearInput() {
      this.inputTitle = ''
      this.inputDate = ''
      this.inputDuration = ''
      this.inputDescript = ''
      this.inputTags = ''
    }
  }
}
</script>

<template>
  <div class="edit">
    <form class="input-field">
      <!-- action="#" method="post" -->
      <span class="edit_btn">
        <button class="btn_cancel" type="button" @click="cancelEdit">Cancel</button>
        <button class="btn_save" type="submit" @click="saveEdit">Save</button>
      </span>

      <label for="id_title">Title:</label>
      <input
        class="user-input"
        type="text"
        id="id_title"
        v-model="inputTitle"
        placeholder="Title"
        required
      />

      <label for="id_date">Date:</label>
      <input
        class="user-input"
        type="date"
        id="id_date"
        v-model="inputDate"
        placeholder="Date"
        required
      />

      <label for="id_duration">Estimated duration:</label>
      <div style="display: flex;">
      <input
        class="user-input duration"
        type="number"
        id="id_duration"
        v-model="inputDuration"
        placeholder="Estimated duration"
        min="0"
      />
      <select class="user-input duration_unit" id="id_duration_unit" v-model="inputDurationUnit">
        <option value="m">minutes</option>
        <option value="h">hours</option>
        <option value="d">days</option>
        <option value="w">weeks</option>
      </select>
      </div>

      <label for="id_tags">Tags:</label>
      <input class="user-input" type="text" id="id_tags" v-model="inputTags" placeholder="Tags" />

      <label for="id_descript">Description:</label>
      <textarea
        class="user-input input_descript"
        id="id_descript"
        v-model="inputDescript"
        placeholder="Description"
        rows="4"
        style="resize: none"
      ></textarea>
    </form>
  </div>
</template>

<style>
form {
  margin: 5px;
}

label {
  color: #808080;
  font-size: 14pt;
  margin-left: 6px;
  display: block;
}

.user-input {
  font-size: 14pt;
  height: 2.1em;
  width: 100%;
  background: #1c1c1e;
  color: #808080;
  outline: none;
  border: none;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 5px 8px;
  margin-bottom: 5px;
}

.duration {
  max-width: calc(70% - 10px);
  margin-right: 8px;
}

.duration_unit {
  width: 30%;
  min-width: 6em;
}

.input_descript {
  height: revert;
}

.user-input:hover,
.user-input:focus,
.user-input:active {
  background-color: #2c2c2e;
}

.edit_btn button {
  font-size: 18px;
  height: 40px;
  width: calc(50% - 5px);
  min-width: 6em;
  background: #1c1c1e;
  letter-spacing: 1px;
  outline: none;
  border: none;
  border-radius: 5px;
  margin-top: 32px;
}

.btn_save {
  color: #4caf50;
}

.btn_cancel {
  color: #d05050;
  margin-right: 10px;
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
</style>
