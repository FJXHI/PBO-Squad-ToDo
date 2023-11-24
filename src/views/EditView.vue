<script setup lang="ts">
import ComButton from '../components/ComButton.vue'
</script>

<template>
  <div class="edit">
    <div class="edit-field">
      <h1>Edit</h1>
      
      <form>
        <div class="edit_btn">
          <button class="btn_save">Speichern</button>
          <button class="btn_cancel">Abbruch</button>
          


        </div>
        <label for="f_name">Name</label>
			  <input class="user-input" type="text" id="id_name" name="idn_name" placeholder="Name">
        <label for="f_date">Datum</label>
			  <input class="user-input" type="datetime-local" id="id_date" name="idn_date" placeholder="Datum">
        <br>
        <label for="f_time">Zeitaufwand</label>
			  <input class="user-input" type="number" id="id_time" name="idn_time" placeholder="Zeitaufwand" min="0">
			  <label for="f_text">Beschreibung</label>
			  <input class="user-input" type="text" id="id_text" name="idn_text" placeholder="Beschreibung">
        <label for="f_tags">Tags</label>
			  <input class="user-input" type="text" id="id_tags" name="idn_tags" placeholder="Tags">
      </form>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .edit {
    min-height: 100vh;
    display: flex;
    align-items: center;
    /*background-color: black;*/
  }
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
  /* 
  color: #fff;
  background: rgba(255, 255, 255, 0.2);
  text-align: center;
  border: 1px solid #ccc;
  
  */
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
