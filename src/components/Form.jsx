import useAppContext from "../Context/AppContext";


const Form = ({contact}) => {

    const {store, actions} = useAppContext();
    const{handleOnSubmit,handleGetUserInput} = actions;
    
    return(
        <section className="col-9 p-5">
            <h1 className="text-center">Add new contact</h1>
            <form action="POST" className="p-3" onSubmit={handleOnSubmit}>
                <label className="w-100 mt-3" htmlFor="fullName">Full Name</label>
                <input onChange={handleGetUserInput}value={contact?.fullname || null} className="form-control w-100" type="text" placeholder="Full Name" name="fullname" id="fullNameInput"/>

                <label className="w-100 mt-3" htmlFor="emailInput">Email</label>
                <input onChange={handleGetUserInput} value={contact?.email || null} className="form-control w-100" type="text" placeholder="Enter email" name="email" id="emailInput"/>

                <label className="w-100 mt-3" htmlFor="phoneInput">Phone</label>
                <input onChange={handleGetUserInput} value={contact?.phone || null} className="form-control w-100" type="text" placeholder="Enter phone" name="phone" id="phoneInput"/>

                <label className="w-100 mt-3" htmlFor="addressInput">Address</label>
                <input onChange={handleGetUserInput} value={contact?.address || null} className="form-control w-100" type="text" placeholder="Enter Address" name="address" id="addressInput"/>

                <button className="btn btn-primary w-100 mt-4" type="submit">save</button>
            </form>
        </section>
    )
};

export default Form;
