import Navbar from "../components/Navbar";
import ContactList from "../components/ContactList";
import ListItem from "../components/ListItem";

const HomeView = () => {
    return(
            <section>
                <Navbar/>
                <div>
                <ContactList>
                <ListItem/>
                </ContactList>
                </div>
            </section>
    )
};

export default HomeView;