document.getElementById('editProfileForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const formData = new FormData(this);
    const userData = {};

    formData.forEach((value, key) => {
        userData[key] = value;
    });

    // Retrieve existing users from local storage
    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Assuming user data is stored with an ID or some identifier, here we'll update the first user for demonstration
    if (users.length > 0) {
        users[0] = { ...users[0], ...userData };
        localStorage.setItem('users', JSON.stringify(users));
        alert('Profile updated successfully!');
    } else {
        alert('No user data found.');
    }

    // Optionally, redirect or clear the form
    // window.location.href = 'profile.html'; // Redirect to profile page
    this.reset(); // Clear form fields
});
