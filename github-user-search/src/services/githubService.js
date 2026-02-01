import axios from 'axios';


export async function fetchUserData(name, minRepos, location){
    try {
        const query = `${name} location:${location} repos:>=${minRepos}`;
        const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}`;
        
        const res = await axios.get(url);
    //const data = await res.json();
    return res.data.items;
    } catch (error) {
        
        console.log("Error: ",error)
        return null;
        
    }
}
