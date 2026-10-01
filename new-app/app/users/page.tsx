export default async function Users(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const user = await res.json();

    return(
        <div>
            <h1 className="text-5xl text-center">users List</h1>
            <ul>
                {user.map((user:{id:number,name:string,username:string,city:string})=>(
                    <li  key={user.id}>
                       <div className="border-2 border-b-blue-500 m-4 p-4">
                        <h2>{user.id}</h2>
                         <h3>{user.name}</h3>
                        <h2>{user.username}</h2>
                       </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}