import Link from "next/link";

export const Head = () => {
    return (
        <header className="hidden  md:flex justify-around items-center mt-10 py-3 bg-purple-700 text-gray-300 rounded-md">

            <nav className="flex gap-4 list-none">
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
            </nav>

            <div
                className="w-15 h-15 flex items-center justify-center text-2xl font-bold 
                border-b rounded-full text-purple-500 shadow shadow-white
                "
            >
                MDN
            </div>

            <nav className="flex gap-4 list-none">
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

            <div>
                <button 
                className="tracking-widest border border-purple-500 p-2 rounded-md cursor-pointer
                duration-300 ease-in-out hover:bg-purple-400 hover:border-purple-300 hover:text-purple-800"
                >Create your app</button>
            </div>

        </header>
    );
}