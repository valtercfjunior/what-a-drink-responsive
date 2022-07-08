import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import functions from "../../services/API";

function Home() {
  const [busca, setBusca] = useState("");
  const [tipoBusca, setTipoBusca] = useState("ingrediente");
  const [openModal, setOpenModal] = useState(false);
  const [resultado, setResultado] = useState([]);

  async function reqAPIRandom() {
    const drinks = await functions.getAPIRandom();
    setResultado(drinks);
    setOpenModal(true);
  }

  return (
    <div className="h-screen flex flex-col text-center items-center">
      <div className="text-2xl text-zinc-100 flex flex-col justify-center items-center">
        <h1>Clique no botão "Random" para retornar uma bebida aleatória.</h1>
        <p>ou</p>
        <h1>
          Selecione uma bebida ou ingrediente para retornar possíveis Drinks!{" "}
        </h1>
      </div>
      <button
        onClick={() => reqAPIRandom()}
        className="bg-[#009fb7] mb-20 font-semibold hover:bg-[#fed766] hover:text-[#009fb7] text-zinc-100 rounded-xl p-2 mt-10 w-40 ]"
      >
        Random
      </button>
      <div className="flex w-full md:w-1/3 flex-col justify-center items-center  p-2 rounded-lg bg-[#eff1f3] gap-2">
        <img
          className="rounded-md w-1/2"
          src="https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg/preview"
          alt="imagem-bebida"
        />
        <input
          onInput={(e) => setBusca(e.target.value)}
          className="rounded-lg outline-[#FED766] w-full  p-1 text-zinc-800"
          type="search"
          placeholder="Digite uma bebida ou um ingrediente"
        />
        <select
          value={tipoBusca}
          className="rounded-lg p-1 w-full outline-[#FED766] text-zinc-800"
          onChange={(e) => setTipoBusca(e.target.value)}
          name="search"
          id="search"
        >
          <option value="ingrediente">Ingrediente</option>
          <option value="bebida">Bebida</option>
        </select>
        <Link to={`/lista?type=${tipoBusca}&value=${busca}`}>
          <button className="bg-[#009fb7] hover:bg-[#fed766] w-24 h-20 hover:text-[#009fb7] transition-colors font-semibold rounded-full md:rounded-md text-zinc-100 min-w-full">
            Buscar
          </button>
        </Link>
      </div>

      {openModal && (
        <Modal toggleStateModal={setOpenModal} details={resultado} />
      )}
    </div>
  );
}

export default Home;
