window.tamingAuto = function() {
  var keyAuto = document.createElement("div")
  var element = `
    <h1 class="control-description" style="width:140px;">
      <span class="shadowed">Autoclicker</span>
      &nbsp&nbsp&nbsp&nbsp
      <div id="auto" class="controls-input popup-input" style="margin-left:0px;">
        <div id="_auto" class="control-selection">
          C
        </div>
      </div
    </h1>`
  keyAuto.innerHTML = element.trim(); 
  document.querySelector(".key-category-box").appendChild(keyAuto.firstChild)
}
