import Link from 'next/link';
import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function Footer() {
    return (
        <footer className="bg-gray-800/90 dark:bg-gray-900/90 text-white py-8 transition-colors duration-200">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between items-start">
                    <div className="w-full sm:w-1/2 lg:w-1/3 mb-6 lg:mb-0">
                        <h3 className="text-xl font-bold mb-2">Cars Collection</h3>
                        <p className="text-gray-400">Explore our exclusive collection of iconic and modern cars.</p>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 mb-6 lg:mb-0">
                        <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-blue-600 transition-colors">About</Link></li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 mt-6 lg:mt-0">
                        <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
                        <div className="flex space-x-4">
                            <Link href="https://github.com/Zeenat-Somroo911">
                                <FiGithub className="text-2xl" />
                            </Link>
                            <Link href="https://www.linkedin.com/in/zeenat-somroo-76b5872bb">
                                <FiLinkedin className="text-2xl" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-700 text-center">
                    <p>&copy; 2024 Cars Collection. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
