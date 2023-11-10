"use client"
import { useState } from "react";

export default function Produtos(props) {

    const [produtos] = useState([
      {id: 1,
      nome: 'Mamão',
      tipo: 'Fruta laranja',
      desc: 'Rica em vitamina E'},
      {id: 2,
      nome: 'Melão',
      tipo: 'Fruta verde',
      desc: 'Rico em vitamina A'},
      {id: 3,
      nome: 'Manga',
      tipo: 'Fruta Amarela',
      desc: 'Rica em vitamina C'}
    ]);


  return (
    <div>
        <h1>Produtos</h1>
        
        {produtos.map((produto,indice) => (

        (props.prod == produto.nome ?
          <div key={indice}>
            <p>Id:{produto.id}</p>
            <p>Nome:{produto.nome}</p>
            <p>Tipo:{produto.tipo}</p>
            <p>Desc:{produto.desc}</p>
          </div> : null)
        
      ))}
      
    </div>
  )
}