import functions from "../../services/API";

function Card({ item, toggleStateModal, setDetails }) {
  async function getDetails() {
    const valoresModal = await functions.getDetails(item.idDrink);
    setDetails(valoresModal);
    toggleStateModal(true);
  }

  return (
    <div
      onClick={() => getDetails()}
      className=" bg-zinc-200  flex flex-col justify-evenly items-center max-h-96 rounded-xl cursor-pointer "
    >
      <h1 className="text-[#009fb7] font-semibold text-xl">{item.strDrink}</h1>
      <img
        className="object-scale-down rounded-b-md w-72 "
        src={item.strDrinkThumb}
        alt=""
      />
    </div>
  );
}

export default Card;
