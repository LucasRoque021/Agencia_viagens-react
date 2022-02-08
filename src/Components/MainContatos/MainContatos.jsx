import React from "react";
import TituloCadastro from "../TituloCadastro/TituloCadastro";
import TabelaContatos from "./TabelaContatos/TabelaContatos";

export default () => {
  return(
      <main className="pb-3">
        <TituloCadastro titulo={"Cadastro de Clientes"} nomeBotao={"Adicionar cliente"}/>

        <TabelaContatos/>
      </main>
  );
}