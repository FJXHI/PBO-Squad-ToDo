<script lang="ts">
import editButton from '@/components/editButton.vue';
export default {
    components: {
        editButton,
    },
    data() {
        return {
            inputName: '',
            inputDate: '',
            inputTime: '',
            inputDescrript: '',
            inputTags: ''
        }
    },
    methods: {
    saveEdit() {
      if (this.inputName.trim() !== '') {
        const output = {
          name: this.inputName,
          date: this.inputDate,
          time: this.inputTime,
          description: this.inputDescrript,
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
      this.inputName = '';
      this.inputDate = '';
      this.inputTime = '';
      this.inputDescrript = '';
      this.inputTags = '';
    }
  },
};
 


</script>

<template>
  <div class="edit">
    <div class="edit-field">
      <div><!--<form> Err: Form submission canceled because the form is not connected -->
        <span class="edit_btn">
          <editButton class="btn_cancel" @click=cancelEdit>Cancel</editButton>          
          <editButton class="btn_save" @click=saveEdit>Save</editButton>
        </span>
        <label for="id_name">Name</label>
			  <input class="user-input" type="text" v-model="inputName" placeholder="Name" required>
        <label for="f_date">Deadline Date & Time</label>
			  <input class="user-input" type="datetime-local" v-model="inputDate" placeholder="Date">
        <label for="f_time">Time expenditure</label>
			  <input class="user-input" type="number" v-model="inputTime" placeholder="Time expenditure" min="0">
			  <label for="f_text">Description</label>
			  <input class="user-input" type="text" v-model="inputDescrript" placeholder="Description">
        <label for="f_tags">Tags</label>
			  <input class="user-input" type="text" v-model="inputTags" placeholder="Tags">
      </div>
    </div>
  </div>
</template>

<style>
/*
@media (min-width: 1024px) {
  .edit {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
*/

label {
  color: #808080;
  font-size: 18px;
}

.user-input{
  width: 100%;
  height: 55px;
  padding: 12px 20px;
  margin-bottom: 30px;
  outline: none;
  border: none;
  background: #1C1C1E;
  color: #808080;
  font-size: 18px;
  margin: 8px 0;
  display: inline-block;
  border-radius: 5px;
  box-sizing: border-box;  
  transition: 0.5s;
  transition-property: border-left, border-right, box-shadow;
}

.user-input:hover, .user-input:focus, .user-input:active{
  border-left: solid 8px #4285F4;
  border-right: solid 8px #4285F4;
  box-shadow: 0 0 100px rgba(66, 133, 244, 0.9);
}

.edit_btn {
  display: flex;
  justify-content: space-around;
}

.edit_btn button {
  outline: none;
  border: none;
  width: 40%;
  height: 55px;
  color: #fff;
  font-size: 18px;
  letter-spacing: 1px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5s;
  transition-property: border-left, border-right, box-shadow;
  padding: 15px 32px;
  margin: 4px 2px;
  
}

.btn_save {
  background-color: #4CAF50;
}

.btn_cancel {
  background-color: #d05050;
}

.edit_btn button:hover {
  border-left: solid 8px rgba(255, 255, 255, 0.5);
  border-right: solid 8px rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 100px rgba(66, 133, 244, 0.8);
}

</style>
