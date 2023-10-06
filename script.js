const userTableBody = document.getElementById('userTableBody');
const createUserButton = document.getElementById('createUserButton');
const userFormModal = document.getElementById('userFormModal');
const paginationContainer = document.getElementById('pagination');

// 1- Function to fetch a list of users from the API
function fetchUsers(page = 1) {
    // Make a GET request to the API to fetch users for the specified page
    fetch(`https://gorest.co.in/public-api/users?page=${page}`)
        .then(response => response.json())
        .then(data => {
            // Process and display the user list
            displayUsers(data.data);
            // Add pagination controls
           //displayPagination(data.meta.pagination);
        })
        //.catch(error => console.error('Error fetching users:', error));
}

// 2- Function to show the user creation form in a modal
function showUserCreationForm() {
    userFormModal.style.display = 'block';
}

// Function to create a new user using the API
function createUser(userData) {
    // Send a POST request to the API with user data
    fetch('https://gorest.co.in/public-api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Need Authorization' 
        },
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
        // Handle the API response (e.g., show a success message, close the modal, etc.)
        console.log('User created:', data);
        // Close the modal after successful user creation
        userFormModal.style.display = 'none';
    })
    .catch(error => {
        // Handle any errors (e.g., display an error message)
        console.error('Error creating user:', error);
    });
}

// Event listener for the "Create New User" button
createUserButton.addEventListener('click', () => {
    showUserCreationForm(); // Show the user creation form in the modal
});

// 3- Function to fetch user details by user ID
function getUserDetails(userId) {
    // Replace '123' with the actual user ID you want to retrieve
    const apiUrl = `https://gorest.co.in/public-api/users/123/${userId}`;

    // Send a GET request to the API
    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Need Authorization' 
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Handle the API response (e.g., display user details on the page)
        console.log('User details:', data);
        // Example: Display user details in a modal or a specific section of the page
        displayUserDetails(data);
    })
    .catch(error => {
        // Handle any errors (e.g., display an error message)
        //console.error('Error fetching user details:', error);
    });
}

// Example function to display user details (you need to implement this)
function displayUserDetails(userData) {
    // Replace this with your code to display user details on the page
    // For example, you can populate a modal with user information
    const modal = document.getElementById('userDetailsModal');
    modal.style.display = 'block';
    // Add code to display user details in the modal
    // userData contains the user's details like name, email, gender, etc.
}

// Example: Call getUserDetails with a specific user ID (e.g., 123)
getUserDetails(123);
// Function to display users in the table
function displayUsers(users) {
    // Clear the existing user table
    userTableBody.innerHTML = '';

    // Loop through the users and create table rows
    users.forEach(user => {
        const userRow = document.createElement('tr');
        userRow.innerHTML = `
            <td>${user.id=")"}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.gender}</td>
            <td>${user.status}</td>
            <td>
                <button class="viewUserButton" data-id="${user.id}">View</button>
                <button class="editUserButton" data-id="${user.id}">Edit</button>
                <button class="deleteUserButton" data-id="${user.id}">Delete</button>
            </td>
        `;
        userTableBody.appendChild(userRow);
    });
}

// 4- Function to update user details by user ID
function updateUserDetails(userId, updatedData) {
    // Replace '123' with the actual user ID you want to update
    const apiUrl = `https://gorest.co.in/public-api/users/123${userId}`;

    // Send a PUT request to the API with updated user data
    fetch(apiUrl, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Need Authorization' 
        },
        body: JSON.stringify(updatedData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Handle the API response (e.g., show a success message)
        console.log('User details updated:', data);
        // Example: Display a success message on the page
        displaySuccessMessage('User details updated successfully');
    })
    .catch(error => {
        // Handle any errors (e.g., display an error message)
        console.error('Error updating user details:', error);
        // Example: Display an error message on the page
        displayErrorMessage('Failed to update user details');
    });
}

// Example function to display a success message (you need to implement this)
function displaySuccessMessage(message) {
    // Replace this with your code to display a success message on the page
    // For example, you can show a toast or a notification
    console.log(message);
}

// Example function to display an error message (you need to implement this)
function displayErrorMessage(message) {
    // Replace this with your code to display an error message on the page
    // For example, you can show a toast or a notification
    console.error(message);
}

// Example: Call updateUserDetails with a specific user ID (e.g., 123) and updated data
const updatedUserData = {
    name: 'Updated Name',
    email: 'updatedemail@example.com',
    gender: 'male',
    status: 'active'
};

updateUserDetails(123, updatedUserData);

// 5- Function to delete a user by user ID
function deleteUser(userId) {
    // Replace '123' with the actual user ID you want to delete
    const apiUrl = `https://gorest.co.in/public-api/users/123${userId}`;

    // Send a DELETE request to the API
    fetch(apiUrl, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Need Authorization' 
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Handle the API response (e.g., show a success message)
        console.log('User deleted:', data);
        // Example: Display a success message on the page
        displaySuccessMessage('User deleted successfully');
    })
    .catch(error => {
        // Handle any errors (e.g., display an error message)
        console.error('Error deleting user:', error);
        // Example: Display an error message on the page
        displayErrorMessage('Failed to delete user');
    });
}

// Example function to display a success message (you need to implement this)
function displaySuccessMessage(message) {
    // Replace this with your code to display a success message on the page
    // For example, you can show a toast or a notification
    console.log(message);
}

// Example function to display an error message (you need to implement this)
function displayErrorMessage(message) {
    // Replace this with your code to display an error message on the page
    // For example, you can show a toast or a notification
    console.error(message);
}

// Example: Call deleteUser with a specific user ID (e.g., 123)
deleteUser(123);

// Function to display pagination controls
const totalPages = 280; // Replace with the actual total number of pages

// The current page, which can be changed dynamically
let currentPage = 1;

// Function to generate pagination controls
function generatePaginationControls() {
    const paginationContainer = document.getElementById('pagination');

    // Clear any existing pagination controls
    paginationContainer.innerHTML = '';

    // Create a "Previous" button
    const prevButton = document.createElement('button');
    prevButton.textContent = 'Previous';
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            fetchUsers(currentPage); // Replace with your fetchUsers function
        }
    });

    // Create a "Next" button
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            fetchUsers(currentPage); // Replace with your fetchUsers function
        }
    });

    // Add the "Previous" button to the pagination container
    paginationContainer.appendChild(prevButton);

    // Create and add numbered page buttons
    for (let page = 1; page <= totalPages; page++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = page;
        pageButton.addEventListener('click', () => {
            currentPage = page;
            fetchUsers(currentPage); // Replace with your fetchUsers function
        });
        paginationContainer.appendChild(pageButton);
    }

    // Add the "Next" button to the pagination container
    paginationContainer.appendChild(nextButton);
}

// Call the function to generate pagination controls
generatePaginationControls();
 {
    // Implement pagination controls here
}

// Handle click on "Create New User" button
createUserButton.addEventListener('click', () => {
    // Show the user creation/edit form modal
    // You can implement this functionality
});

// Handle click on user actions (View, Edit, Delete)
userTableBody.addEventListener('click', (event) => {
    if (event.target.classList.contains('viewUserButton')) {
        // Handle view user action
        const userId = event.target.getAttribute('data-id');
        // Implement logic to fetch and display user details
    } else if (event.target.classList.contains('editUserButton')) {
        // Handle edit user action
        const userId = event.target.getAttribute('data-id');
        // Implement logic to fetch user details for editing
    } else if (event.target.classList.contains('deleteUserButton')) {
        // Handle delete user action
        const userId = event.target.getAttribute('data-id');
        // Implement logic to confirm and delete the user
    }
});

// Initial load of users (you may specify a default page)
fetchUsers();
