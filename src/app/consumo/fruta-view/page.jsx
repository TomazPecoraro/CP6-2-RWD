import Link from "next/link";
import { redirect } from "next/navigation";

export default async function FrutaViewAll() {

    let frutas;

    try {
        const response = await fetch("http://localhost:3000/dados/produto-api/0");

        frutas = await response.json();

        console.log(frutas);

    } catch (error) {
        console.log(error);
        redirect("/error");        
    }

  return (
    <div>

        <h1>Frutas</h1>
        <div>
          <ul>
            {frutas.map((fruta) => (
              <li key={fruta.id}>
                <p>{fruta.nome}</p>
                <p>{fruta.tipo}</p>
                <Link href={`/consumo/fruta-view/${fruta.id}`}>DESCRIÇÃO</Link>
                <hr />
              </li>
            ))}
          </ul>
        </div>
    </div>
  )
}
