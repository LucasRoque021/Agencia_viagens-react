import api from "../api";

export async function getPromocoes( ) {
  return (await api.get('/promocoes')).data
}


export async function deletarPromocao(id){
  await api.delete(`/promocoes/${id}`)
}

export async function postPromocao(promocao) {
  await api.post("/promocoes", {
    localPartida: promocao.localPartida,
    precoPromocao: promocao.precoPromocao,
    tempoDeViagem: promocao.tempoDeViagem,
    data: promocao.data,
    destino: {idDestino: promocao.destino.idDestino}
    })
}