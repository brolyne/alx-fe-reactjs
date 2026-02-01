import { useState } from "react"
import {fetchUserData} from "../services/githubService";

export default function Search(){

    const [input, setinput]= useState('');
    const [numberofrepos, setnumberofrepos]= useState(0);
    const [location, setlocation] = useState('');
    const [data,setdata]= useState(null);
    const [loading, setloading]= useState(false);

    async function submit(e){
        e.preventDefault();
        setloading(true);
        console.log("Fetching");
        setdata(null);
        const data = await fetchUserData(input, numberofrepos);
        setdata(data);
        setloading(false);
        console.log("Data: ",data);

    }

    return(
        <div>
            <h2>GitHub User Search</h2>
            <form onSubmit={(e)=>{submit(e)}}>
                <p>Name</p>
                <input type="text" onChange={(e)=>{setinput(e.target.value)}}  placeholder="Enter the github name"/>
                <br/>
                 <p>Location</p>
                <input type="text" onChange={(e)=>{setlocation(e.target.value)}}  placeholder="Location"/>
                <br/>
                <p>Minimum no. of repos</p>
                <input type="number" onChange={(e)=>setnumberofrepos(e.target.value)}/>
                <br/><br/>
                <button type="submit">Search</button>
            </form>
            {loading && <p>Loading...</p>}
            <div>
                <h3>Results</h3>
                {!data&& <p>Looks like we cant find the user</p>}
                
               {data &&
                data.map((item)=>{
                    return(
                        <div key={item.id}>
                            <p>Login: {item.login}</p>
                            
                            <p>Bio: {item.bio}</p>
                            <p>Public Repos: {item.public_repos}</p>
                            <p>Followers: {item.followers}</p>
                            <p>Following: {item.following}</p>
                            <img src={item.avatar_url} alt="avatar" width="100"/>
                
                        </div>
                    )

                })
               }
            </div>

        
        </div>
    )
}
