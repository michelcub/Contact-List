import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [newList, setNewList] = useState([]);
    const [userInput, setUserInput] = useState({});
    const navigate = useNavigate();
    


    const createNewContact = () => {
        const userInputsId = {...userInput, id: Math.random()}
        setNewList(prev=> [...prev, userInputsId])
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        createNewContact();
        navigate("/");
        
        
    }
    const handleGetUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        
        setUserInput((prev)=> {

            const id = newList.length + 1
            return {...prev,id,[name]:value}
        })
        
    }


    const store ={
        newList,
        userInput
    }
    const actions={
        handleOnSubmit,
        handleGetUserInput
    }

    console.log(store.newList)
    return (
        <AppContext.Provider value={{store,actions}}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => useContext(AppContext);
export default useAppContext;