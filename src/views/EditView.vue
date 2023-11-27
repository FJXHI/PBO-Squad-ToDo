<script lang="ts">
//import editButton from '@/components/editButton.vue';
export default {
    /*components: {
        editButton,
    },*/
    data() {
        return {
            inputTitle: '',
            inputDate: '',
            inputDuration: '',
            inputDurationUnit: 'minutes',
            inputDescript: '',
            inputTags: ''
        }
    },
    methods: {
    saveEdit() {
      if (this.inputTitle.trim() !== '') {
        const output = {
          title: this.inputTitle,
          date: this.inputDate,
          duration: this.inputDuration,
          unit: this.inputDurationUnit,
          description: this.inputDescript,
          tags: this.inputTags,
        }; 
        console.log(output);
        this.clearInput(); // Clear Inputs after Save
      }
    },
    cancelEdit() {
      this.clearInput(); // Clear Inputs after Cancel
      this.$router.push('/'); //Return to Home
    },
    clearInput() {
      this.inputTitle = '';
      this.inputDate = '';
      this.inputDuration = '';
      this.inputDescript = '';
      this.inputTags = '';
    }
  },
};

</script>

<template>
  <div class="edit">
    <form class="input-field"><!-- action="#" method="post" -->
      <span class="edit_btn">
        <button class="btn_cancel" type="button" @click="cancelEdit">Chancel</button>
        <button class="btn_save" type="submit" @click="saveEdit">Save</button>
      </span>
      
      <label for="id_title">Title:</label>
      <input class="user-input" type="text" id="id_title" v-model="inputTitle" placeholder="Title" required>

      <label for="id_date">Date:</label>
      <input class="user-input" type="date" id="id_date" v-model="inputDate" placeholder="Date" required>

      <label for="id_duration">Estimated duration:</label>
      <input class="user-input duration" type="number" id="id_duration" v-model="inputDuration" placeholder="Estimated duration" min="0">
      <select class="user-input duration_unit" id="id_duration_unit" v-model="inputDurationUnit">
          <option value="minutes">minutes</option>
          <option value="hours">hours</option>
          <option value="days">days</option>
          <option value="weeks">weeks</option>
      </select>

      <label for="id_tags">Tags:</label>
      <input class="user-input" type="text" id="id_tags" v-model="inputTags" placeholder="Tags">

      <label for="id_descript">Description:</label>
      <textarea class="user-input input_descript" id="id_descript" v-model="inputDescript" placeholder="Description" rows="4" style="resize: none;"></textarea>      
    </form>
  </div>
</template>

<style>
    form {
      margin: 5px;
    }

    label {
        color: #808080;
        font-size: 18px;
        margin-left: 6px;
        display: block;
    }

    .user-input {
        font-size: 16px;
        height: 35px;
        width: 100%;
        background: #1C1C1E;
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

    .user-input:hover, .user-input:focus, .user-input:active{
      background-color: #2C2C2E;
    }

    .edit_btn button {
      font-size: 18px;
      height: 40px;
      width: calc(50% - 5px);
      min-width: 6em;
      background: #1C1C1E;
      letter-spacing: 1px;
      outline: none;
      border: none;
      border-radius: 5px;
      margin-top: 32px;
    }

    .btn_save {
      color: #4CAF50;
    }

    .btn_cancel {
      color: #d05050;
      margin-right: 10px;
    }

    .btn_save:hover, .btn_save:active, .btn_save:focus {
      background-color: #4CAF50;
      color: #fff;
    }

    .btn_cancel:hover, .btn_cancel:active, .btn_cancel:focus {
      background-color: #d05050;
      color: #fff;
    }

</style>