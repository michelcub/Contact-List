import image from "./../assets/img/user-img.png";
import "./../../styles.css"

const ListItem = (id,name , address, phone, email) => {
    return (
        <li className="d-flex list-group-item " key={id} >
                <div className="">
                <img src={image} className="user-image rounded-circle object-fit-cover" alt="user-image" />
                </div>
                <div>
                    <h2>{name}</h2>
                    <ul>
                        <li className="list-group-item"><a className="nav-link-item" href=""><i className="bi bi-geo-alt-fill"></i> {address}</a></li>
                        <li className="list-group-item"><a className="nav-link-item" href=""><i className="bi bi-telephone-fill"></i>{phone}</a></li>
                        <li className="list-group-item"><a className="nav-link-item" href=""><i className="bi bi-envelope-fill"></i> {email}</a></li>
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