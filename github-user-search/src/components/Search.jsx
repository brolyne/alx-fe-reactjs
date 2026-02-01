import { useState } from "react"
import {fetchUserData} from "../services/githubService";

export default function Search(){

    const [input, setinput]= useState('');
    const [numberofrepos, setnumberofrepos]= useState(0);

    async function submit(e){
        e.preventDefault();
        console.log("Fetching");
        const data = await fetchUserData(input, numberofrepos);
        console.log("Data: ",data);

    }

    return(
        <div>
            <h2>GitHub User Search</h2>
            <form onSubmit={(e)=>{submit(e)}}>
                <input type="text" onChange={(e)=>{setinput(e.target.value)}}  placeholder="Enter the github name"/>
                <input type="number" onChange={(e)=>setnumberofrepos(e.target.value)}/>
                <br/>
                <button type="submit">Search</button>
            </form>
        
        </div>
    )
}