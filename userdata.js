//function to fetch user data from an API
async function fetchUserData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
        throw new Error('User data contains some error')
    }
    return response.json();
}

//function to display Data in HTML
async function displayUserData() {
    const userList = document.getElementById('user-list');
    try {
        const users = await fetchUserData();
        const listItems = users.map(user => `<li>${user.name} - ${user.email}</li>`)
        userList.innerHTML = listItems;
    } catch (error) {
        console.log('error fetching data', error)
        userList.innerHTML = `<li>Error Fetching User data. Please try again later</li>`
    }
}

//function to hide Data in HTML
function hideUserData() {
    const userList = document.getElementById('user-list');
    userList.innerHTML = '';
}

//Adds Event Listeners to buttons
document.getElementById('show-data').addEventListener('click', displayUserData); //displays the data on the screen
document.getElementById('hide-data').addEventListener('click', hideUserData); //hides the data