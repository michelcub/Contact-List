import useAppContext from "../Context/AppContext";
import {useLocation, useNavigate} from "react-router-dom";


const Form = () => {

    const {store, actions} = useAppContext();
    const{handleSetContact,
        handleSetContactInList,
        handleEditContact,
        handleSetEditedContact} = actions;
    const {selectedContact,
        editedContact,} = store;
    const location = useLocation()
    
    


    const navigate = useNavigate()
    
    if(location.pathname==='/myform'){
        return (
            <section className="col-9 p-5">
                <h1 className="text-center">{location.pathname==='/myform'?'Add new contact':'Edit Contact'}</h1>
                <form action="POST" className="p-3">
                    <label className="w-100 mt-3" htmlFor="fullName">Full Name</label>
                    <input onChange={handleSetContact}   placeholder='Enter Full Name' className="form-control w-100" type="text"  name="fullname" id="fullNameInput" required minLength='3'/>
    
                    <label className="w-100 mt-3" htmlFor="emailInput">Email</label>
                    <input onChange={handleSetContact} className="form-control w-100" type="text" placeholder='Enter your email' name="email" id="emailInput" required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"/>
    
                    <label className="w-100 mt-3" htmlFor="phoneInput">Phone</label>
                    <input onChange={handleSetContact}  className="form-control w-100" type="number" placeholder='Enter your phone' name="phone" id="phoneInput" required minLength='9'/>
    
                    <label className="w-100 mt-3" htmlFor="addressInput">Address</label>
                    <input onChange={handleSetContact}  className="form-control w-100" type="text" placeholder='Enter your address' name='address' id="addressInput" required minLength='6'/>
    
                    <button type="button" className="btn btn-primary w-100 mt-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Save Contact
                    </button>
                    <button className="btn btn-secondary w-100 mt-2" onClick={()=>{navigate('/')}}>Cancel</button>
                </form>

                <div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Seguro que quieres agregar este contacto?
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={handleSetContactInList} data-bs-dismiss="modal" className="btn btn-primary">Save changes</button>
                        <button type="button"  className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        )
    }
  
    return(
        <section className="col-9 p-5">
            <h1 className="text-center">{location.pathname==='/myform'?'Add new contact':'Edit Contact'}</h1>
            <form action="POST" className="p-3">
                <label className="w-100 mt-3" htmlFor="fullName">Full Name</label>
                <input onChange={handleSetEditedContact} value={editedContact?.fullname}  placeholder='Enter Full Name' className="form-control w-100" type="text"  name="fullname" id="fullNameInput" required minLength='3'/>

                <label className="w-100 mt-3" htmlFor="emailInput">Email</label>
                <input onChange={handleSetEditedContact} value={editedContact?.email} className="form-control w-100" type="text" placeholder='Enter your email' name="email" id="emailInput" required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"/>

                <label className="w-100 mt-3" htmlFor="phoneInput">Phone</label>
                <input onChange={handleSetEditedContact} value={editedContact?.phone} className="form-control w-100" type="number" placeholder='Enter your phone' name="phone" id="phoneInput" required minLength='9'/>

                <label className="w-100 mt-3" htmlFor="addressInput">Address</label>
                <input onChange={handleSetEditedContact} value={editedContact?.address} className="form-control w-100" type="text" placeholder='Enter your address' name='address' id="addressInput" required minLength='6'/>

                <button type="button" className="btn btn-primary w-100 mt-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Save Contact
                    </button>
                    <button className="btn btn-secondary w-100 mt-2" onClick={()=>{navigate('/')}}>Cancel</button>
            </form>
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
                        <button type="button" onClick={handleEditContact} data-bs-dismiss="modal" className="btn btn-primary">Save changes</button>
                        <button type="button"  className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
                </div>
        </section>
    )
};

export default Form;
