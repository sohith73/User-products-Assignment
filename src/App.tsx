import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/common/Navbar";

export default function App() {
    const { pathname } = useLocation();
    return (
        <div className="app-root">
            <Navbar />
            <main className="app-main">
                <Outlet key={pathname} />
            </main>
        </div>
    );
}
