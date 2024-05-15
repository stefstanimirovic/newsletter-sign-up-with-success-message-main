let input = document.querySelector('#email');
let container = document.querySelector('.container');
let successDiv = document.querySelector('.successDiv');
let errorLabel = document.querySelector('.errorLabel');



document.getElementById('subscribe').addEventListener('click', (event) => {
  event.preventDefault();
  if (validateEmail(input.value)) {
    console.log("GOOD");
    container.style.display = 'none';
    successDiv.style.display = 'block';
  } else {
    input.style = `border-color:#FF6A3A;;
                 background-color:#fee1c9;
                 border-color:#FF6A3A;`
    errorLabel.style = `display:block;
                      color:#FF6A3A;
                      padding-bottom:10px`;

  }
})

document.getElementById('dismissMess').addEventListener('click', (event) => {
  container.style.display = 'flex';
  successDiv.style.display = 'none';

});

const validateEmail = (email) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
}

