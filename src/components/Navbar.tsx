import { useState } from "react"
import { NavLink, Link } from "react-router-dom"
import "../styles/Navbar.css"

const links = [
 { label: "Home", to: "/" },
 { label: "Articles", to: "/articles" },
 { label: "About", to: "/about" },
 { label: "Contact", to: "/contact" },
]

const Navbar = () => {
 const [expanded, setExpanded] = useState(false)

 const toggleNavbar = () => {
  setExpanded(!expanded)
 }

 return (
  <nav>
   <Link to="/">
    <img src="/logo.png" alt="Thomas Jefferson Recites" height="80px" />
   </Link>
   <ul className={expanded ? "expanded" : ""}>
    {links.map((item, i) => (
     <li key={i}>
      <NavLink to={item.to}>{item.label}</NavLink>
     </li>
    ))}
   </ul>
   <button onClick={toggleNavbar}>
    <svg
     xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 24 24"
     width="2.5em"
     height="2.5em"
     fill="#ffffff"
    >
     {expanded ? (
      <path d="M16.192 6.344l-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z" />
     ) : (
      <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
     )}
    </svg>
   </button>
  </nav>
 )
}

export default Navbar