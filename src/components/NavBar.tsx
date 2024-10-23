import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav className="border border-white p-1 text-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">NextJs App</div>
        <ul className="flex space-x-4">
          <li>
            <Link
              href="/home"
              className={`hover:text-gray-300 ${
                pathname == "/home" ? "text-red-600" : "text-white"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/following"
              className={`hover:text-gray-300 ${
                pathname == "/following" ? "text-red-600" : "text-white"
              }`}
            >
              Following
            </Link>
          </li>
          <li>
            <Link
              href="/contact-us"
              className={`hover:text-gray-300 ${
                pathname == "/contact-us" ? "text-red-600" : "text-white"
              }`}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
