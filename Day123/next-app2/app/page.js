import Image from "next/image";

export default function Home() {
  return (
    <div className="container my-5 size-80 bg-red-300 relative"> 
      <Image className="mx-auto  object-cover"  fill={true} src="https://static.independent.co.uk/2023/10/12/05/SEI175556776.jpg" alt="Dikkat" />
    </div>
  );
}
