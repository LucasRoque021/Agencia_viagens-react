import React from "react";
import TituloCadastro from "../TituloCadastro/TituloCadastro";
import TabelaDestinos from "./TabelaDestinos/TabelaDestinos";

export default () => {
  return(
    <main class="pb-3 mt-1">
      <TituloCadastro titulo={"Cadastro de Destinos"} nomeBotao={"Adicionar novo destino"}/>

      <TabelaDestinos/>      
    </main>
  );
}