import { useContext, createContext, useState } from "react";


const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [newList, setNewList] = useState([]);
    const [userInput, setUserInput] = useState({});
    


    const createNewContact = () => {
        setNewList(prev=> [...prev, userInput])
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        createNewContact();
        
        
    }
    const handleGetUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        
        setUserInput((prev)=> {
            
            return {...prev,[name]:value}
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