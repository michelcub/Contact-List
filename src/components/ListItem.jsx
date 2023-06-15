const ListItem = () => {
    return (
        <li>
            <div>
                <img src="" alt="" />
                <div>
                    <h2>
                        Nombre Apellido
                    </h2>
                    <ul>
                        <li><a href=""><i class="bi bi-geo-alt-fill"></i> Calle Ficticia 123</a></li>
                        <li><a href=""><i class="bi bi-telephone-fill"></i> 043 012351 025</a></li>
                        <li><a href=""><i class="bi bi-envelope-fill"></i> lucas@gmail.com</a></li>
                    </ul>
                </div>
                <div>
                    <button><i className="bi bi-pencil"></i>
                    </button>
                    <button>
                        <i className="bi bi-trash-fill"></i>
                    </button>
                </div>
            </div>
        </li>
    )
};

export default ListItem;