import useAppContext from "../Context/AppContext.jsx";
import Form  from "../components/Form.jsx";

const Edition = () => {

    const {store} = useAppContext();

    return(
        <section className="container">
            <div className="row d-flex justify-content-center">
                <Form contact={store.editContact}/>
            </div>
        </section>
    )
};

export default Edition;