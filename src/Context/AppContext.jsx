import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const lStorage = JSON.parse(window.localStorage.getItem('listContact'));

    const [listContact, setListContact] = useState(lStorage?.length>0?lStorage:[]);
    const [newContact, setNewContact] = useState({})
    const [selectedContact, setSelectedContact] = useState({})
    const [editedContact, setEditedContact] = useState({})
    const navigate = useNavigate();
    

   
    useEffect(()=>{
        const list = JSON.stringify(listContact)
        window.localStorage.setItem('listContact',list)
    },[listContact])

    const resetData = () => {
        setNewContact({})
        setSelectedContact({})
        setEditedContact({})
    }

    const handleSetContactInList = () => {
        const contact = { ...newContact, id: Math.random()*9999999 }
        if (contact.fullname === undefined || contact.address === undefined || contact.phone === undefined || contact.email === undefined) {
            alert('Please fill all the fields')
            return
        }
        setListContact(prev => [...prev, contact])
        navigate('/')
        setNewContact({})
    }

    const handleSetContact = (e) => {
        setNewContact(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    
    const handleGetContact = (e) => {
        const {id} = e.target.parentNode.parentNode
        const contact = listContact.find(contact=>parseInt(contact.id)===parseInt(id))
        console.log(contact)
        setSelectedContact(contact)
        navigate('/edit')
        setEditedContact(contact)
    }

    const handleGetContactForDelete = (e) => {
        const {id} = e.target.parentNode.parentNode
        const contact = listContact.find(contact=>parseInt(contact.id)===parseInt(id))
        setSelectedContact(contact)
    }

    const handleSetEditedContact = (e) => {
        setEditedContact(prev => ({ ...prev,'id':selectedContact.id, [e.target.name]: e.target.value }))
    }

    const handleEditContact = () => {
        const editedList = listContact.map(contact => {
            if (parseInt(contact.id) === parseInt(editedContact.id)) {
                return editedContact
            }
            return contact
        })
        setListContact(editedList)
        resetData()
        navigate('/')
    }

    const handleDeleteContact = () => {
        const {id} = selectedContact
        const newList = listContact.filter(contact=> parseInt(contact.id)!==parseInt(id))
        setListContact(newList)
        
    }

    

    const store = {
        newContact,
        listContact,
        selectedContact,
        editedContact,

    }
    const actions = {
        handleSetContact,
        handleSetContactInList,
        handleGetContact,
        handleEditContact,
        handleSetEditedContact,
        handleDeleteContact,
        handleGetContactForDelete

    }

    return (
        <AppContext.Provider value={{ store, actions }}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => useContext(AppContext);
export default useAppContext;