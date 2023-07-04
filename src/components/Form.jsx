import useAppContext from "../Context/AppContext";
import {useLocation, useNavigate} from "react-router-dom";
import {useState} from "react";
import {useNavigation} from "react-router-dom";
const Form = () => {

    const {store, actions} = useAppContext();
    const{handleOnSubmit,handleGetUserInput, handleOnSubmitEdit} = actions;
    const {newList, selectedContactId} = store;
    const location = useLocation()
    const contact = newList.find(contact => Number(contact.id)===Number(selectedContactId))
    const[contactData, setContactData] = useState({...contact})


    const navigate = useNavigate()

    return(
        <section className="col-9 p-5">
            <h1 className="text-center">{location.pathname==='/myform'?'Add new contact':'Edit Contact'}</h1>
            <form action="POST" className="p-3" onSubmit={location.pathname==='/myform'?handleOnSubmit:handleOnSubmitEdit}>
                <label className="w-100 mt-3" htmlFor="fullName">Full Name</label>
                <input onChange={(e)=>{handleGetUserInput(e); setContactData(e.target.value)}} value={contactData.fullname}  placeholder='Enter Full Name' className="form-control w-100" type="text"  name="fullname" id="fullNameInput" required minLength='3'/>

                <label className="w-100 mt-3" htmlFor="emailInput">Email</label>
                <input onChange={(e)=>{handleGetUserInput(e); setContactData(e.target.value)}} value={contactData.email} className="form-control w-100" type="text" placeholder='Enter your email' name="email" id="emailInput" required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"/>

                <label className="w-100 mt-3" htmlFor="phoneInput">Phone</label>
                <input onChange={(e)=>{handleGetUserInput(e); setContactData(e.target.value)}} value={contactData.phone} className="form-control w-100" type="number" placeholder='Enter your phone' name="phone" id="phoneInput" required minLength='9'/>

                <label className="w-100 mt-3" htmlFor="addressInput">Address</label>
                <input onChange={(e)=>{handleGetUserInput(e); setContactData(e.target.value)}} value={contactData.address} className="form-control w-100" type="text" placeholder='Enter your address' name='address' id="addressInput" required minLength='6'/>

                <button className="btn btn-primary w-100 mt-4" type="submit">Save</button>
                <button className="btn btn-secondary w-100 mt-2" onClick={()=>{navigate('/')}}>Cancel</button>
            </form>
        </section>
    )
};

export default Form;
