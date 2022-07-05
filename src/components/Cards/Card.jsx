import functions from "../../services/API";

function Card({ item, toggleStateModal, setDetails }) {
 async function getDetails(){
    const valoresModal = await functions.getDetails(item.idDrink)
    setDetails(valoresModal)
    toggleStateModal(true)
  }
  
  return (
    <div
      onClick={() => getDetails()  }
      
      className=" bg-lime-300 flex flex-col justify-center items-center h-90 rounded-sm"
    >
      <h1 className="text-red-600">{item.strDrink}</h1>
      <img className="object-cover h-48 w-96" src={item.strDrinkThumb} alt="" />
    </div>
  );
}

export default Card;
