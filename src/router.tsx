import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import UserDashboard from "./pages/UserDashboard";
import ProductDashboard from "./pages/ProductDashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <UserDashboard /> },
            { path: "dashboard", element: <UserDashboard /> },
            { path: "products", element: <ProductDashboard /> },
        ],
    },
]);
