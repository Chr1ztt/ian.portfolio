"use client";
import { Instagram, Linkedin } from "lucide-react";

import Logo from "./logo";

export default function AppFooter() {
  return (
    <footer className=' p-4 w-full px-6 mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-5 gap-4'>
        {/* Column 1: Logo */}
        <div className=' p-4'>
        <Logo/>
        </div>

        {/* Column 2: Contact */}
        <div className=' p-4'>
          <h3 className='font-semibold mb-2'>Contact</h3>
          <p className='mb-2'>ananta.chriss@gmail.com</p>
          <p>+62 8222 4125 2353</p>
        </div>

        {/* Column 3: Services */}
        <div className=' p-4'>
          <h3 className='font-semibold mb-2'>Services</h3>
          <ul>
            <li className='mb-1'>Backend Development</li>
            <li className='mb-1'>Web Development</li>
            <li className='mb-1'>Mobile App Development</li>
            <li className='mb-1'>Dev Ops</li>
            <li>Real-time Analytics Solutions</li>
          </ul>
        </div>

        <div className=' p-4'>
          <h3 className='font-semibold mb-2'>Projects</h3>
          <ul className='mb-4'>
            <li className='mb-1'>e-payload</li>
            <li>edupedia</li>
          </ul>
        </div>

        {/* Column 4: Projects & Social */}
        <div className='p-4'>
          <h3 className='font-semibold mb-2'>Social</h3>
          <div className='flex space-x-2'>
            <a href='https://www.instagram.com/atarachris_/' aria-label='Instagram' className='hover:text-gray-600'>
              <Instagram size={24} />
            </a>
            <a href='https://www.linkedin.com/in/christian-adi-ananta/' aria-label='LinkedIn' className='hover:text-gray-600'>
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
