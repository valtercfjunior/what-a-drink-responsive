

function Modal({details, toggleStateModal}){
    return(
        <div className="h-full w-full bg-black fixed flex justify-center items-center" >
            <div className="w-40 h-40 bg-slate-50 rounded-lg flex justify-center items-center fixed ">
                <h1 className="text-black">{details.idDrink}</h1>
                <button onClick={() => toggleStateModal(false)} className="w-min p-1 h-auto m-2 mx-6 rounded-xl bg-slate-500">X</button>
            </div>
            
        </div>
    )
}

export default Modal