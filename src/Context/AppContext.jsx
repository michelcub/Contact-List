import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const localStorage = JSON.parse(window.localStorage.getItem('list'));

    const [newList, setNewList] = useState(localStorage?localStorage:[]);
    const [userInput, setUserInput] = useState({});
    const navigate = useNavigate();
    const [selectedContactId, setSelectedContactId] = useState(false);
    const [confirmationDelete, setConfirmationDelete] = useState(false);
    const [showModal, setShowModal] = useState()
    const [updateList, setUpdateList] =useState([])


    useEffect(()=>{
        const list = JSON.stringify(newList)
        window.localStorage.setItem('list',list)
    },[newList])

    const createNewContact = () => {
        const userInputsId = { ...userInput, id: Math.random() }
        setNewList(prev => [...prev, userInputsId])
    }

    const editContact = () => {
        const newEditedContact = {...userInput, id:selectedContactId}
        const editedList = newList.map(contact => {
            if(Number(contact.id) === Number(selectedContactId)){
                return newEditedContact;
            }
            return contact;
        })
        setNewList(editedList)
    }

    const handleDeleteContact = (e) => {
        const id = e.target.parentElement.parentElement.id;
        const listDeletedElement = newList.filter(contact => Number(contact.id) !==Number(id));
        setUpdateList(listDeletedElement);
        setShowModal(true)
    }

    const handleConfirmDelete = () => {
        setNewList(updateList);
        setShowModal(false);
    }

    useEffect(()=>{
        if(confirmationDelete){
            setNewList(updateList)
            setShowModal(false)
            setConfirmationDelete((prev)=> !prev)
        }

    },[handleDeleteContact])

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
        // const findId = newList.find(contact => Number(contact.id) === Number(id));
        setSelectedContactId(id);
        
        navigate("/edit");

    }

    const handleOnSubmitEdit = (e) => {
        e.preventDefault();
        editContact();
        navigate('/')
    }



    const store = {
        newList,
        userInput,
        selectedContactId,
        showModal,
        confirmationDelete
    }
    const actions = {
        handleOnSubmit,
        handleGetUserInput,
        handleEditButton,
        handleOnSubmitEdit,
        handleDeleteContact,
        handleConfirmDelete,
        setShowModal
    }

    return (
        <AppContext.Provider value={{ store, actions }}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => useContext(AppContext);
export default useAppContext;