import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="nav">
            <div className="nav-brand"> Assignment </div>
            <nav className="nav-links">
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                    }
                >
                    Users
                </NavLink>
                <NavLink
                    to="/products"
                    className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                    }
                >
                    Products
                </NavLink>
            </nav>
        </header>
    );
}
