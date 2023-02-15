let changeIcon = function(icon){
    icon.classList.toggle('fa-circle-pause')
}
let colorChange = function(icon){
    icon.classList.toggle('fa-repeat-1')
}
var myModal = document.getElementById('containerpopup')
var myInput = document.getElementById('popup')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})
