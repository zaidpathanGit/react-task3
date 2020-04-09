import './Globals';

// const MASTER_URL = "http://localhost:8000/rtcrc/index.php/api/";
const MASTER_URL = "http://zaidpathansite.000webhostapp.com/index.php/api/";

//POST function without authorization token
export const post_no_auth = (endpoint, values) =>
    fetch(MASTER_URL + endpoint, {
        method: "POST",
        body: values,
    });

//GET function
export const get = (endpoint) =>
    fetch(MASTER_URL + endpoint + "Authorization=" + global.token + "&username=" + global.username, {
        method: "GET",
        // headers: {
        //     "Authorization": localStorage.getItem("Token"),
        //      "Username": localStorage.getItem('username'),
        // }
    });

//POST function with authorization
export const post = (endpoint, values) =>
    fetch(MASTER_URL + endpoint, {
        method: "POST",
        // headers: {
        //     "Authorization": localStorage.getItem("Token"),
        //     "Username": localStorage.getItem('username'),
        // },
        body: values,
    });
