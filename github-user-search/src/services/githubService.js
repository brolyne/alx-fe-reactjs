import axios from 'axios';


export async function fetchUserData(name, numberofrepos, location){
    try {
        const res = await axios.get(`https://api.github.com/users/${name}`,{params:{
            q:`${name} location:${location} repos:>=${numberofrepos}`
        }});
    //const data = await res.json();
    return res.data;
    } catch (error) {
        
        console.log("Error: ",error)
        return null;
        
    }
}
