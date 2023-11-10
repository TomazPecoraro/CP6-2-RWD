export default async function ProdutoID({params}) {

    const reponse = await fetch("http://localhost:3000/dados/produto-api");
    const produtos = await reponse.json()
    const produto = produtos.find(produto => produto.id ==params.id)

  return (
    <div>
        <h1>Identificação das Frutas</h1>
        <p>Esta página é um exemplo de como receber os parametros da 
        api  e apresentar um produto selecionado dela:
        </p>
        <p>Valor do ID : {params.id}</p>
        <p>Nome do Produto:{produto.nome}</p>
        <p>Tipo do produto:{produto.tipo}</p>
        <p>Descrição :{produto.desc}</p>
    </div>
  )
}