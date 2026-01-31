
export async function fetchUserData(name){
    try {
        const res = await fetch(`https://api.github.com/users/${name}`);
        if(!res.ok){
        throw new Error('User not found');
    }
    const data = await res.json();
    return data;
    } catch (error) {
        console.log("Error: ",error)
    }
}
