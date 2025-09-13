import Link from "next/link";

export default function Footer() {
    return(
        <footer className="w-full border-t py-6 mt-10">
            <div className="container mx-auto text-center text-gray-300">
                <Link href="/privacy" className="hover:text-white mx-2">Privacy Policy</Link>
                &copy; 2025 MyApp. All rights reserved.
            </div>
        </footer>
    );
}