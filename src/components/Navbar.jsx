import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        SV
      </div>

      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Tech Stack</a>
        <a href="#">Projects</a>
        <a href="#">Experience</a>
      </div>

    </nav>
  );
}