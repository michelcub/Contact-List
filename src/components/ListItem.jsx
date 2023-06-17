import image from "./../assets/img/user-img.png";
import "./../../styles.css"

const ListItem = () => {
    return (
        <li className="d-flex list-group-item " >
                <div className="">
                <img src={image} className="user-image rounded-circle object-fit-cover" alt="user-image" />
                </div>
                <div>
                    <h2>
                        Nombre Apellido
                    </h2>
                    <ul>
                        <li className="list-group-item"><a className="nav-link-item" href=""><i className="bi bi-geo-alt-fill"></i> Calle Ficticia 123</a></li>
                        <li className="list-group-item"><a className="nav-link-item" href=""><i className="bi bi-telephone-fill"></i> 043 012351 025</a></li>
                        <li className="list-group-item"><a className="nav-link-item" href=""><i className="bi bi-envelope-fill"></i> lucas@gmail.com</a></li>
                    </ul>
                </div>
                <div>
                    <button><i className="bi bi-pencil"></i>
                    </button>
                    <button>
                        <i className="bi bi-trash-fill"></i>
                    </button>
                </div>
            
        </li>
    )
};

export default ListItem;