import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./styles/navBar.css";

const NavBar = ({ active }) => {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_navbar");
	};

	return (
		<div className="nav-container">
			<nav className="navbar">
				<div className="nav-background" ref={navRef}>
					<ul className="nav-list">
						<li
							className={
								active === "home"
									? "nav-item active"
									: "nav-item"
							}
						>
							<Link to="/">Home</Link>
						</li>
						<li
							className={
								active === "about"
									? "nav-item active"
									: "nav-item"
							}
						>
							<Link to="/about">About</Link>
						</li>
						<li
							className={
								active === "projects"
									? "nav-item active"
									: "nav-item"
							}
						>
							<Link to="/projects">Projects</Link>
						</li>
						<li
							className={
								active === "articles"
									? "nav-item active"
									: "nav-item"
							}
						>
							<Link to="/articles">Articles</Link>
						</li>
						<li
							className={
								active === "contact"
									? "nav-item active"
									: "nav-item"
							}
						>
							<Link to="/contact">Contact</Link>
						</li>
						<li
							className={
								active === "Login"
									? "nav-item active"
									: "nav-item"
							}
						>
							<Link to="/sign-in">LogIn</Link>
						</li>
					</ul>
					<button
						className="nav-btn nav-close-btn"
						onClick={showNavbar}
					>
						<FaTimes />
					</button>
				</div>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</div>
	);
};

export default NavBar;
