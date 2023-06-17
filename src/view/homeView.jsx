import Navbar from "../components/Navbar";
import ContactList from "../components/ContactList";
import ListItem from "../components/ListItem";
import useAppContext from "../Context/AppContext";
const HomeView = () => {

    const {store, actions} = useAppContext();
    // console.log(store.newList)

    return(
            <section>
                <Navbar/>
                <div>
                <ContactList>
                {store.newList.map((contact) => {
                    <ListItem id={contact.id} name={contact.name} email={contact.email} phone={contact.phone} address={contact.address} />
                })}
                </ContactList>
                </div>
            </section>
    )
};

export default HomeView;