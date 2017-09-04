// Get modal element
let modal = document.getElementById('simpleModal');
// Get open modal button
let modalBtn = document.getElementById('modalBtn');
// Get close button
let closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for a click
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', clickOutside);

// Function to open/close modal
function openModal(){
  modal.style.display = 'block';
}

function closeModal(){
  modal.style.display = 'none';
}

// Function to close modal if outside click
function clickOutside(e){
  if (e.target == modal) modal.style.display = 'none';
}
