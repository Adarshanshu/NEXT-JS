export default async function Home() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await response.json();

  return (
    <>
      <h1 className="text-6xl text-green-500 text-center">
        Hello I am Users Page
      </h1>
      <ul className="flex flex-wrap flex-row">
        {data.map((user) => (
          <li
            key={user.id}
            className="border-2 border-red-500 p-4 m-6 w-full max-w-md hover:text-amber-300 flex flex-col gap-4 hover:bg-amber-950"
          >
            <h3>{user.name}</h3>
            <h3>{user.username}</h3>
            <h3>{user.email}</h3>
            <h3>{user.address.city}</h3>
          </li>
        ))}
      </ul>
    </>
  );
}
