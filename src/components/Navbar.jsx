import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 d-flex justify-content-end pe-4">
			<Link className="btn btn-success" to="/myform">
				Add new contact
			</Link>
		</nav>
	);
};

export default Navbar;
