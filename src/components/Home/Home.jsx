function Home() {
  return (
    <div className="w-100 h-screen flex justify-center items-center">
      <div className="flex flex-col p-2 rounded-lg bg-cyan-300 gap-2">
          <img
            src="https://www.thecocktaildb.com/images/ingredients/gin-Medium.png"
            alt="imagem-bebida"
          />
          <input className="rounded-lg p-1 text-zinc-800" type="search" placeholder="Digite uma bebida ou um ingrediente" />
          <select name="search" id="search">
            <option value="Ingrediente">Ingrediente</option>
            <option value="Bebida">Bebida</option>
          </select>
          <button className="bg-zinc-200 min-w-full">Buscar</button>
      </div>
    </div>
  );
}

export default Home;
