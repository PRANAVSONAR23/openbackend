import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen w-screen m-0 p-0 gap-0 ">
        <h1> OPEN BACKEND FROM PRANAV</h1>
        <Image src="/dark.jpg" className="rotate-animation" alt="rotating image"/>
    </div>
  );
}
