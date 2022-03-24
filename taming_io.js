window.tamingAuto = function() {
  var keyAuto = document.createElement("div")
  var element = `
    <div>
      <select name="clicks" id="clicks">
			</select>
    </div>`
  keyAuto.innerHTML = element.trim(); 
  document.querySelector(".key-category-box").appendChild(keyAuto.firstChild)
}
