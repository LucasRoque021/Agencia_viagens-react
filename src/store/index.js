import { createStore } from "redux";

const initialState = {
  destinoEscolhido: "Todas as Promoções"
}

function destino(state = initialState, action){
  if(action.type === "SELECIONAR_DESTINO"){
    return{...state, destinoEscolhido: action.destinoEscolhido}
  } 
  else if(action.type === "RESETAR_DESTINO"){
    return{...state, destinoEscolhido: action.destinoEscolhido}
  }


  return state
}

const store = createStore(destino)

export default store