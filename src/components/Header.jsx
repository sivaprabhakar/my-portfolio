// import React, { useState } from 'react';
// import './Header.css';
// import { CiMenuFries } from 'react-icons/ci';
// import { AiOutlineClose } from 'react-icons/ai';
// import NavBar from './NavBar';

// function Header() {
//   const [openMenu, setOpenMenu] = useState(false);

//   const toggleMenu = () => {
//     setOpenMenu(!openMenu);
//   };

//   return (
//     <>
//       <NavBar isOpen={openMenu} toggleMenu={toggleMenu} />
//       <nav className='nav-wrapper sticky top-0'>
//         <div className='nav-content'>
//         <h1  className='font-bold '>Port<span className='bg-gradient-to-r from-purple-600 via-rose-500 to-red-700 bg-clip-text  tracking-tight text-transparent '>folio.</span></h1>
//           <ul className={`nav-links ${openMenu ? 'open' : ''}`}>
//             <li><a className="menu-item" href="/">Home</a></li>
//             <li><a className="menu-item" href="#about">About</a></li>
//             <li><a className="menu-item" href="#skills">Skills</a></li>
//             <li><a className="menu-item" href="#projects">Projects</a></li>
//             <li><a className="menu-item" href="#contact">Contact</a></li>
//           </ul>
//           <button className='menu-btn' onClick={toggleMenu}>
//             <span style={{ fontSize: "1.6rem" }}>
//               {openMenu ? <AiOutlineClose /> : <CiMenuFries />}
//             </span>
//           </button>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Header;


import React, { useState } from 'react';
import './Header.css';
import { CiMenuFries } from 'react-icons/ci';
import { AiOutlineClose } from 'react-icons/ai';
import NavBar from './NavBar';

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <NavBar isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className='nav-wrapper sticky top-0'>
        <div className='nav-content'>
          <h1 className='font-bold'>
            Port<span className='bg-gradient-to-r from-purple-600 via-rose-500 to-red-700 bg-clip-text tracking-tight text-transparent'>folio.</span>
          </h1>
          <ul className={`nav-links ${openMenu ? 'open' : ''}`}>
            <li><a className="menu-item" href="#">Home</a></li>
            <li><a className="menu-item" href="#about">About</a></li>
            <li><a className="menu-item" href="#skills">Skills</a></li>
            <li><a className="menu-item" href="#projects">Projects</a></li>
            <li><a className="menu-item" href="#contact">Contact</a></li>
          </ul>
          <button className='menu-btn' onClick={toggleMenu}>
            <span style={{ fontSize: "1.6rem" }}>
              {openMenu ? <AiOutlineClose /> : <CiMenuFries />}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Header;
