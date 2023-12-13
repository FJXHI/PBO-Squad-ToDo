<script lang="ts">
function applyColor() {
            // Das Farbeneingabefeld auswählen
            //var colorPicker = document.getElementById("colorPicker");
            alert("Test");
            
            //alert(colorPicker.value);
            // Den ausgewählten Farbwert erhalten
            
            // Den Farbwert in einem Element anzeigen
          }

function updateColor() {
            // Das Farbeneingabefeld auswählen
            var colorPicker = document.getElementById("colorPicker");
            // Den ausgewählten Farbwert erhalten
            var selectedColor = colorPicker.value;
            alert(selectedColor);
            // Den Farbwert in einem Element anzeigen
            var selectedColorElement = document.getElementById("selectedColor");
            selectedColorElement.textContent = selectedColor;
        }


//colorPicker.addEventListener("input", updateFirst, false);
//colorPicker.addEventListener("change", watchColorPicker, false);
/*
function watchColorPicker(event) {
  
}
*/
</script>


<template>
  <div class="settings">
    <div class="line">
      <span class="text">Text</span>
      <button class="btn">Test</button>
    </div>
    <div class="line">
      <span class="text">Text</span>
      <button class="btn">Test</button>
      <button class="btn">Test</button>
    </div>
    <div class="line">
      <span class="text">Tags</span>
      <input class="incolor" type="color" id="colorPicker" v-model="inputColor">
      <!--<button class="btn" @click=applyColor()>Save</button>
      <p class="text" >Die ausgewählte Farbe ist: <span id="selectedColor">#ff0000</span></p>
-->
    </div>
    <div class="line">
      <span class="text">Switch</span>
      <label class="switch">
        <input type="checkbox" />
        <span class="slider round"></span>
      </label>
    </div>
  </div>
</template>

<style scoped>
.settings {
  margin-top: 4vh;
  color: #808080;
  padding: 1vh;
}

.line {
  display: flex;
  justify-content: space-between;
  background-color: #1c1c1e;
  border-radius: 10px;
  margin-bottom: 1vh;
  padding: 6px;
  font-size: 14pt;
}

.text {
  flex-grow: 1;
}

.settings .btn {
  min-width: 10%;
  background-color: #808080;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 5px;
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #808080;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: '';
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #4caf50;
}

input:focus + .slider {
  box-shadow: 0 0 1px #4caf50;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 15px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
