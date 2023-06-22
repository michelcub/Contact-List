import useAppContext from "../Context/AppContext";
import { useLocation } from "react-router-dom";

const Form = () => {

    const {store, actions} = useAppContext();
    const{handleOnSubmit,handleGetUserInput, handleOnSubmitEdit} = actions;
    const {newList, selectedContactId} = store;
    const location = useLocation()
    const contact = newList.find(contact => Number(contact.id)===Number(selectedContactId))

    const placeholderFullName = location.pathname==='/myform'?'Enter Full Name': contact.fullname;
    const placeholderEmail = location.pathname==='/myform'?'Enter your email': contact.email;
    const placeholderPhone = location.pathname==='/myform'?'Enter your phone': contact.phone;
    const placeholderAddress = location.pathname==='/myform'?'Enter your address': contact.address;


    return(
        <section className="col-9 p-5">
            <h1 className="text-center">{location.pathname==='/myform'?'Add new contact':'Edit Contact'}</h1>
            <form action="POST" className="p-3" onSubmit={location.pathname==='/myform'?handleOnSubmit:handleOnSubmitEdit}>
                <label className="w-100 mt-3" htmlFor="fullName">Full Name</label>
                <input onChange={handleGetUserInput}value={null} className="form-control w-100" type="text" placeholder={placeholderFullName} name="fullname" id="fullNameInput" required minLength='3'/>

                <label className="w-100 mt-3" htmlFor="emailInput">Email</label>
                <input onChange={handleGetUserInput} value={null} className="form-control w-100" type="text" placeholder={placeholderEmail} name="email" id="emailInput" required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"/>

                <label className="w-100 mt-3" htmlFor="phoneInput">Phone</label>
                <input onChange={handleGetUserInput} value={null} className="form-control w-100" type="number" placeholder={placeholderPhone} name="phone" id="phoneInput" required minLength='9'/>

                <label className="w-100 mt-3" htmlFor="addressInput">Address</label>
                <input onChange={handleGetUserInput} value={null} className="form-control w-100" type="text" placeholder={placeholderAddress} name='address' id="addressInput" required minLength='6'/>

                <button className="btn btn-primary w-100 mt-4" type="submit">save</button>
            </form>
        </section>
    )
};

export default Form;
