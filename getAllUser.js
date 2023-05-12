const axios = require("axios");

async function getAllUser() {
    return await axios.get('https://jsonplaceholder.typicode.com/users');
}

getAllUser().then(result => console.log(result.data[0].name))
            .catch(err => console.log(err.message))