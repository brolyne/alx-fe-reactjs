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
        setdata(null);
        const data = await fetchUserData(input, numberofrepos, location);
        setdata(data);
        setloading(false);

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
                  data.map(item => (
                    <div key={item.id} style={{ borderBottom: "1px solid #ddd", marginBottom: "10px" }}>
                      <img src={item.avatar_url} alt="avatar" width="80" />
                      <p>Username: {item.login}</p>
                
                      <a
                        href={item.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                       >
                        View GitHub Profile
                      </a>
                    </div>
                  ))
                }

            </div>

        
        </div>
    )
}
