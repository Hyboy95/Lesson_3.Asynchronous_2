// const axios = require("axios");
//
// async function getJSONAsync() {
//     let json = await axios.get('http://jsonplaceholder.typicode.com/posts/1');
//     return json.data;
// }
// getJSONAsync().then(result =>console.log(result));

try {
    try {
        throw new Error('oops');
    } catch (ex) {
        console.error('inner', ex.message);
    } finally {
        console.log('finally');
    }
} catch (ex) {
    console.error('outer', ex.message);
}