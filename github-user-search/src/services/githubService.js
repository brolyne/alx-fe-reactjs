import axios from 'axios';


export async function fetchUserData(name, numberofrepos){
    try {
        const res = await axios.get(`https://api.github.com/users/${name}`);
    //const data = await res.json();
    return res.data;
    } catch (error) {
        return null;
        console.log("Error: ",error)
    }
}
