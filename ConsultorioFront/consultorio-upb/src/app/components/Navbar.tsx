// components/Navbar.js
import Link from 'next/link';
import Image from 'next/image';
import { SocialLinks } from './SocialLinks';
import { socialLinks } from '../data/data';
import logo from '../images/upb.png'

const NavBar = () => {
  return (
    <nav className="bg=fcefdc p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-82363A  pr-10 ">
            <Link href="/">
              <Image src={logo} // Aquí se espera un string, pero myImage es de tipo StaticImageData
                     alt="Descripción de la imagen"
                     width={100}
                     height={100}
               />
            </Link>
          </div>
          <div className="space-x-4 text-82363A ">
            <Link href="/">Tests</Link>
            <Link href="/about">Videos</Link>
            {/* Add more links as needed */}
          </div>
          <ul className='nav-icons pr-10'>
            {socialLinks.map((social) => {
              return(
              <SocialLinks key={social.id} social={social.link} icon={social.icon} itemClass='nav-icon'></SocialLinks>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
