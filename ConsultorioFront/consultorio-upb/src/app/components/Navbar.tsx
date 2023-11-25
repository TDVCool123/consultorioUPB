// components/Navbar.js
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="bg=fcefdc p-4">
      <div className="container mx-auto">
        <div className="flex items-start ">
          <div className="text-82363A  pr-10">
            <Link href="/">[Logo]</Link>
          </div>
          <div className="space-x-4 text-82363A">
            <Link href="/">Tests</Link>
            <Link href="/about">Videos</Link>
            {/* Add more links as needed */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
