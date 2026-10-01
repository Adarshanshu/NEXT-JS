"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl text-center bg-amber-400 ">Hello evryOne i am home Page </h1>
      <button onClick={()=>alert("i am clicked")}> click me</button>
    </div>
  );
}
