

document.addEventListener('DOMContentLoaded', function () {
  // Get a reference to the '+' button
  const addCardButton = document.getElementById('addCardButton');
  // Get a reference to the box area where new cards will be added
  const boxArea = document.querySelector('.box-area');
  // Get a reference to the user form
  const userForm = document.getElementById('userForm');
  // Get references to form elements
  const userNameInput = document.getElementById('userName');
  const genderSelect = document.getElementById('gender');
  const ageSelect = document.getElementById('age');

  // Function to create a new card
  function createNewCard(userName, gender, age) {
    const newCard = document.createElement('div');
    newCard.className = 'box';
    let imageUrl = '';
    if (gender === 'male' && age === 'child') {
      imageUrl = 'https://www.pngkey.com/png/full/115-1150420_avatar-png-pic-male-avatar-icon-png.png';
    } else if (gender === 'male' && age === 'adult') {
      imageUrl = 'https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg';
    } else if (gender === 'female' && age === 'adult') {
      imageUrl = 'https://www.pngitem.com/pimgs/m/0-6243_user-profile-avatar-scalable-vector-graphics-icon-woman.png';
    } else if (gender === 'female' && age === 'child') {
      imageUrl = 'https://cdn5.vectorstock.com/i/1000x1000/20/74/woman-avatar-profile-vector-21372074.jpg';
    } else {
      imageUrl = 'https://cdn5.vectorstock.com/i/1000x1000/44/64/blue-user-icon-of-profile-and-account-vector-42404464.jpg';
    }
    newCard.innerHTML = `
       <div class="box">
          <img src="${imageUrl}" alt="">
          <div class="overlay">
              <h3>${userName}</h3>
              <p></p>
              <a href="profile.html">Edit profile</a>
              <a href="#">Question</a>
              <a href="#">Report</a>
          </div>
      </div>
    `;
    return newCard;
  }

  // Add a click event listener to the '+' button
  addCardButton.addEventListener('click', function () {
    // Show the user form
    userForm.style.display = 'block';
  });

  // Add a submit event listener to the user form
  userForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const userName = userNameInput.value.trim();
    const gender = genderSelect.value;
    const age = ageSelect.value;
    if (userName !== '') {
      // Create a new card with the user's name, gender, and age
      const newCard = createNewCard(userName, gender, age);
      // Add the new card to the box area
      boxArea.appendChild(newCard);
      // Reset the form
      userForm.style.display = 'none';
      userNameInput.value = '';
      genderSelect.value = 'male'; // Reset gender to default
      ageSelect.value = 'child'; // Reset age to default
    }
  });
});

