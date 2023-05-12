const axios = require("axios");

async function getPictureOfDay() {
    return new Promise(resolve => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=0XbW5PsFnsd0C2Rpt12CuijcObV34FE93ZA4rRSF`)
            .then(json => resolve(json.data))
    })
    // return (await axios.get(`http://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=0XbW5PsFnsd0C2Rpt12CuijcObV34FE93ZA4rRSF`)).data
}

getPictureOfDay().then(result => console.log(result.hdurl));



