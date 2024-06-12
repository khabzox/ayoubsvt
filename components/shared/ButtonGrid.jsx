import Link from "next/link";
import Image from "next/image";

export const ButtonGrid1 = (href, Text) => {
    return(
        <>
        <Link href={href} className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 shadow-lg shadow-purple-500/50 font-medium rounded-lg text-sm px-5 py-2.5'>{Text}</Link>
        </>
    )
}

export const ButtonGrid2 = (href, Text) => {
    return(
        <>
        <Link href={href} target="_blank" className='flex items-center text-prim border-spacing-1 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
        <Image className="mr-1" src={"/images/hero/play.png"} alt="Play Icon Image" width={20} height={20}/>
          {Text}</Link>
        </>
    )
}