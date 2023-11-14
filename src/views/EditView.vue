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
			  <input type="text" id="id_name" name="idn_name" placeholder="Name">
        <label for="f_date">Datum</label>
			  <input type="datetime-local" id="id_date" name="idn_date" placeholder="Datum">
        <br>
        <label for="f_time">Zeitaufwand</label>
			  <input type="number" id="id_time" name="idn_time" placeholder="Zeitaufwand" min="0">
			  <label for="f_text">Beschreibung</label>
			  <input type="text" id="id_text" name="idn_text" placeholder="Beschreibung">
        <label for="f_tags">Tags</label>
			  <input type="text" id="id_tags" name="idn_tags" placeholder="Tags">
      </form>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .edit {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.edit_btn button {
  background-color: #4CAF50;
  width: 45%;
  border: none;
  color: white;
  padding: 15px 32px;
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

.edit_btn button:hover {
  background-color: #45a000;
}

</style>
