import Navbar from "../components/Navbar";
import ContactList from "../components/ContactList";
import ListItem from "../components/ListItem";
import useAppContext from "../Context/AppContext";
const HomeView = () => {

    const {store, actions} = useAppContext();

    return(
            <section>
                <Navbar/>
                <div>
                <ContactList>
                {store.newList.map(contact => <ListItem id={contact.id} name={contact.fullname} email={contact.email} phone={contact.phone} address={contact.address} key={contact.id}/>
                )}
                </ContactList>
                </div>
            </section>
    )
};
export default HomeView;