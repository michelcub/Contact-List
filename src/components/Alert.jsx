import useAppContext from "../Context/AppContext.jsx";

export const Alert = () => {

    const {store, actions} = useAppContext();


  return (
    <div className={`${store.showModal?'display-block': 'd-none'} w-75  h-25 align-self-center m-auto p-5 border border-secondary rounded-3 my-5`} >
        <div className='modal-header'>
          <h3>Eliminar Contacto</h3>
        </div>
        <div className='modal-body'>
          <p>Estas segur@ que quieres eliminar el contacto?</p>
        </div>
        <div className='d-flex justify-content-end gap-4 p-0'>
            <button onClick={actions.handleConfirmDelete} className=' btn btn-outline-danger'> Si, Eliminar</button>
            <button onClick={()=>{ actions.setShowModal(false)}} className='btn btn-secondary'> Cancelar</button>
        </div>
    </div>
  )
};


