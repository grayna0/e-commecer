import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

interface Nav {
  id:number;
  link: string;
  title: string;
}

const navbar: Nav[] = [
  {
    id:1,
    link: "/",
    title: "Home",
  },
  {
    id:2,
    link: "/product",
    title: "Product List",
  },
  {
    id:3,
    link: "/news",
    title: "News",
  },
  {
    id:4,
    link: "/about",
    title: "About Us",
  },
];

const Navbar: React.FC = () => {
  return (
    
     
      <Router>
         <ul className={"nav-menu"}>
        {navbar.map((nav) => (
          <li key={nav.id}>
            <Link to={nav.link}>{nav.title}</Link>
          </li>
        ))}
      </ul>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/product" element={<div>Product List Page</div>} />
        <Route path="/news" element={<div>News Page</div>} />
        <Route path="/about" element={<div>About Us Page</div>} />
      </Routes>
      </Router>
      
   
  );
};

export default Navbar;