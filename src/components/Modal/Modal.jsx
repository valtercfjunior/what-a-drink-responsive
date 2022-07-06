function Modal({details, toggleStateModal }) {
  
  function getIngredientsList(){
    
  const ingredientsList = []

  for (var ingredients in details){
    if(ingredients.includes('strIngredient')){
      if(details[ingredients] != null){
        ingredientsList.push(details[ingredients])
      }
    }
  }  

  return ingredientsList
    
  } 

  return (
    <div className="h-full w-full bg-black fixed flex justify-center items-center">
      <div className="w-1/3 p-1 bg-slate-50 rounded-lg flex flex-col fixed">
        <div className="w-full align-middle h-10 flex justify-between items-center mb-1">
          <div className="w-full flex justify-center ">
            <h1 className="text-black font-bold text-lg justify-end">{details.strDrink}</h1>
          </div>
          <button
            onClick={() => toggleStateModal(false)}
            className=" text-zinc-100 p-1 mr-2 align-middle rounded-lg leading-3 bg-pink-600 opacity-50 hover:opacity-100 transition-colors"
          >
            X
          </button>
        
        </div>
        <section>
            <div className="flex justify-center ">
              <img className="w-1/2 rounded-lg"src={details.strDrinkThumb} alt="" />
            </div>
            <div className="flex my-5 flex-col items-center rounded-lg">
              <h1 className="text-slate-800 font-semibold">Instructions</h1>
              <div className="p-1 ">{details.strInstructions}</div>
            </div>
            <div className="flex flex-col items-center my-9">
              <h1 className="text-slate-800 font-semibold">Ingredients</h1>
              <div className="grid grid-cols-3 gap-2 mt-3 " >
                
                  {getIngredientsList().map((e, key)=> <p className="text-center" key={key} >- {e}</p>)}
              
                
              </div>
            </div>
          </section>
      </div>
    </div>
  );
}

export default Modal;
