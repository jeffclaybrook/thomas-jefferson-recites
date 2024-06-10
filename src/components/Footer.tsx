import { Link } from "react-router-dom"
import "../styles/Footer.css"

const links = [
 { label: "Home", to: "/" },
 { label: "Articles", to: "/articles" },
 { label: "About", to: "/about" },
 { label: "Contact", to: "/contact" },
]

const Footer = () => {
 return (
  <footer>
   <Link to="/">
    <img src="/logo.png" alt="Thomas Jefferson Recites" height="150px" />
   </Link>
   <ul>
    {links.map((item, i) => (
     <li key={i}>
      <Link to={item.to}>{item.label}</Link>
     </li>
    ))}
   </ul>
   <p>&copy; 2024 Jeffrey Claybrook</p>
  </footer>
 )
}

export default Footer