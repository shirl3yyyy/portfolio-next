import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-white text-lg font-bold">MyApp</Link>
            <div>
                <Link href="/about" className="text-gray-300 hover:text-white mx-2">About</Link>
                <Link href="/contact" className="text-gray-300 hover:text-white mx-2">Contacts</Link>
                <Link href="/projects" className="text-gray-300 hover:text-white mx-2">Projects</Link>
            </div>
        </div>
    </nav>
  );
}