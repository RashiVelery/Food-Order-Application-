import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ children, role }) => {

    const user = JSON.parse(localStorage.getItem("authUser"))

    // Not logged in
    if (!user) {
        return <Navigate to="/login" />
    }

    // Role mismatch
    if (role && user.role !== role) {

        if (user.role === "admin") {
            return <Navigate to="/admin-panel" />
        } else {
            return <Navigate to="/user-panel" />
        }

    }

    return children
}

export default ProtectedRoute;