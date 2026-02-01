import axios from 'axios';


export async function fetchUserData(name, minRepos, location){
    try {
        const query = `${name} location:${location} repos:>=${minRepos}`;
        const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}`;
        
        const res = await axios.get(url);
    return res.data.items;
    } catch (error) {
        
        return null;
        
    }
}
