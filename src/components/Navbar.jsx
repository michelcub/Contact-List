import { Link } from "react-router-dom";
import useAppContext  from "../Context/appContext";
const Navbar = () => {
	const { store, actions } = useAppContext();

	return (
		<nav className="navbar navbar-light bg-light mb-3 d-flex justify-content-end pe-4">
			<Link onClick={actions.handleResetData} className="btn btn-success" to="/myform">
				Add new contact
			</Link>
		</nav>
	);
};

export default Navbar;
