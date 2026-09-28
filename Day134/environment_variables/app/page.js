"use client";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-24">
      <p>Hello {process.env.NAME} </p>
      <p>Your ID is {process.env.NEXT_PUBLIC_ID} </p>
      <p>Your secret is {process.env.SECRET}</p>
    </div>
  );
}
