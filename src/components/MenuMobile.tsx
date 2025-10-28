'use client'
import Link from "next/link";
import { useState } from "react";


export const MenuMobile = () => {
    const [showScret, setShowSecret] = useState(false);

    const mobileClick = () => {
        setShowSecret(!showScret);
    }

    return (

        <div className="">

            <div onClick={mobileClick} className="w-10 h-10 fixed top-10 right-20 md:hidden">
                <img src="img/burger.svg" alt="menu burger"
                    className="cursor-pointer duration-300 ease-in-out hover:opacity-80" />
            </div>

            {showScret &&
                <header
                    className="lg:hidden w-60 h-screen fixed top-0 right-0 bg-purple-700 
                    transition duration-300 ease-in-out">

                    <div className="flex items-center justify-between mx-4">
                        <div
                            className="w-15 h-15 flex items-center justify-center text-2xl font-bold 
                        border-b rounded-full text-purple-500 shadow shadow-white mt-4"
                        >
                            MDN
                        </div>
                        <button
                            onClick={mobileClick}
                            className="w-5 h-5 border rounded-full flex items-center justify-center cursor-pointer
                            duration-300 ease-in-out hover:border-purple-400 hover:text-purple-400"
                        >X</button>
                    </div>

                    <nav className="list-none pt-30 flex flex-col items-center gap-10">
                        <li>
                            <Link href={''}
                                className="text-xl tracking-widest hover:border-b 
                                duration-300 ease-in-out hover:text-purple-900 hover:border-purple-300 hover:pb-2"
                            >About</Link>
                        </li>
                        <li>
                            <Link href={''}
                                className="text-xl tracking-widest hover:border-b 
                                duration-300 ease-in-out hover:text-purple-900 hover:border-purple-300 hover:pb-2"
                            >Skills</Link>
                        </li>

                        <li>
                            <Link href={''}
                                className="text-xl tracking-widest hover:border-b 
                                duration-300 ease-in-out hover:text-purple-900 hover:border-purple-300 hover:pb-2"
                            >Portfolio</Link>
                        </li>
                        <li>
                            <Link href={''}
                                className="text-xl tracking-widest hover:border-b 
                                duration-300 ease-in-out hover:text-purple-900 hover:border-purple-300 hover:pb-2"
                            >Contact</Link>
                        </li>
                    </nav>
                </header>
            }



        </div>
    );
}