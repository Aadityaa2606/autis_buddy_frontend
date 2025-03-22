import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-white px-6 py-4 shadow-sm border-[0.5px] border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link href="/" className="text-gray-700 hover:text-black">
            <span className="text-2xl font-bold text-black">
              Autis<span className="text-blue-500">Buddy</span>
            </span>
          </Link>
        </div>
        <div className="flex items-center space-x-6">
          <Link
            href="https://github.com/Aadityaa2606/Autis_Buddy"
            className="text-gray-700 hover:text-black flex items-center space-x-1"
          >
            <FaGithub size={20} />
            <span>GitHub</span>
          </Link>
          <Link
            href="/upload"
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
