import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [newList, setNewList] = useState([]);
    const [userInput, setUserInput] = useState({});
    const navigate = useNavigate();
    const [editContact, setEditContact] = useState({});

    const createNewContact = () => {
        const userInputsId = { ...userInput, id: Math.random() }
        setNewList(prev => [...prev, userInputsId])
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        createNewContact();
        navigate("/");


    }
    const handleGetUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserInput((prev) => {

            return { ...prev, [name]: value }
        })

    }

    const handleEditButton = (e) => {
        const id = e.target.parentElement.parentElement.id;
        const findId = newList.find(contact => Number(contact.id) === Number(id));
        setEditContact(findId);
        navigate("/edit");

    }

    const handleOnSubmitEdit = (e) => {
        e.preventDefault();
    
    }


    const store = {
        newList,
        userInput,
        editContact
    }
    const actions = {
        handleOnSubmit,
        handleGetUserInput,
        handleEditButton
    }

    console.log(store.newList)
    return (
        <AppContext.Provider value={{ store, actions }}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => useContext(AppContext);
export default useAppContext;