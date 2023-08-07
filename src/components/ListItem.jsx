import image from "./../assets/img/user-img.png";
import styles from "./../../styles.css";
import useAppContext from "../Context/AppContext";

const ListItem = ({id, name , address, phone, email}) => {
    const {actions} = useAppContext();
    
    return (
        <div className="container-fluid">
        <li className=" d-flex list-group-item " id={id} key={id} >
                <div className="">
                <img src={image} className="user-image rounded-circle object-fit-cover" alt="user-image" />
                </div>
                <div className="ms-5">
                    <h2>{name} </h2>
                    <ul className="list-unstyled">
                        <li><a className="nav-link-item text-decoration-none text-secondary" href=""><i className="bi bi-geo-alt-fill"></i> {address}</a></li>
                        <li><a className="nav-link-item text-decoration-none text-secondary" href=""><i className="bi bi-telephone-fill"></i>{phone}</a></li>
                        <li><a className="nav-link-item text-decoration-none text-secondary" href=""><i className="bi bi-envelope-fill"></i> {email}</a></li>
                    </ul>
                </div>
                <div id={id} className="ms-auto">
                    <a className='btn btn-outline-secondary border-0' onClick={actions.handleGetContact}><i className="bi bi-pencil"></i>
                    </a>
                    <a className='btn btn-outline-danger border-0' onClick={actions.handleGetContactForDelete} data-bs-toggle="modal" data-bs-target="#exampleModal" >
                        <i className="bi bi-trash-fill"></i>
                    </a>
                </div>
            
        </li>
        <div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Seguro que quieres guardar los cambios?
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={actions.handleDeleteContact} data-bs-dismiss="modal" className="btn btn-primary">Save changes</button>
                        <button type="button"  className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    )
};

export default ListItem;