import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
    
  const [busca, setBusca] = useState("");
  const [tipoBusca, setTipoBusca] = useState("bebida");


  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex w-80 flex-col p-2 rounded-lg bg-cyan-300 gap-2">
        <img
          src="https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg/preview"
          alt="imagem-bebida"
        />
        <input
          onInput={(e) => setBusca(e.target.value)}
          className="rounded-lg p-1 text-zinc-800"
          type="search"
          placeholder="Digite uma bebida ou um ingrediente"
        />
        <select
        value={tipoBusca}
        className="rounded-lg p-1 text-zinc-800" 
        onChange={(e) => setTipoBusca(e.target.value)}
        name="search" id="search">
          <option value="ingrediente">Ingrediente</option>
          <option value="bebida">Bebida</option>
        </select>
        <Link to={`/lista?type=${tipoBusca}&value=${busca}`}><button className="bg-cyan-900 rounded-lg text-zinc-100 min-w-full">Buscar</button></Link>
      </div>
    </div>
  );

 
}

export default Home;
