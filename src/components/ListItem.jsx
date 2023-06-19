import image from "./../assets/img/user-img.png";
import styles from "./ListItem.module.css";

const ListItem = ({id, name , address, phone, email}) => {
    return (
        <div className="container-fluid">
        <li className=" d-flex list-group-item " >
                <div className="">
                <img src={image} className="user-image rounded-circle object-fit-cover" alt="user-image" />
                </div>
                <div className="ms-5">
                    <h2>{name}Pedro Gutierrez</h2>
                    <ul className="list-unstyled">
                        <li><a className="nav-link-item text-decoration-none text-secondary" href=""><i className="bi bi-geo-alt-fill"></i> {address}</a></li>
                        <li><a className="nav-link-item text-decoration-none text-secondary" href=""><i className="bi bi-telephone-fill"></i>{phone}</a></li>
                        <li><a className="nav-link-item text-decoration-none text-secondary" href=""><i className="bi bi-envelope-fill"></i> {email}</a></li>
                    </ul>
                </div>
                <div className="ms-auto">
                    <button className={styles.buttons}><i className="bi bi-pencil"></i>
                    </button>
                    <button className={styles.buttons}>
                        <i className="bi bi-trash-fill"></i>
                    </button>
                </div>
            
        </li>
        </div>
    )
};

export default ListItem;