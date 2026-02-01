import axios from 'axios';


export async function fetchUserData(name, numberofrepos, location){
    try {
        const res = await axios.get(`https://api.github.com/search/users`,{params:{
            q:`${name} location:${location} repos:>=${numberofrepos}`,
            per_page:30
        }});
    //const data = await res.json();
    return res.data.items;
    } catch (error) {
        
        console.log("Error: ",error)
        return null;
        
    }
}
