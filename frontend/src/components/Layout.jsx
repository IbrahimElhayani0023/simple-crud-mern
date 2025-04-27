import { Link } from "react-router-dom"
function Layout({ children }) {
    return (
        <>
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="text-blue-500 hover:underline">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-blue-500 hover:underline">About</Link>
                    </li>
                    <li>
                        <Link to="/create" className="text-blue-500 hover:underline">Create product</Link>
                    </li>
                </ul>
            </nav>
            <section>
                <div className="container mx-auto p-4">
                    {children}
                </div>
            </section>
            <footer>
                <div className="container mx-auto p-4">
                    <p className="text-center text-gray-500">© 2025 My Company</p>
                </div>
            </footer>
        </>
    )
}

export default Layout