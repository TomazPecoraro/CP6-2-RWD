
import Link from "next/link";
import { redirect } from "next/navigation";


export default async function FrutaViewAll() {
  
    let frutas;
    
    
    try{
        const response = await fetch("http://localhost:3000/dados/produto-api/0")
        frutas = await response.json()
        
        
    
    }catch(error){

        console.log(error)
        redirect("/error")
    }
    

    return (
    <div>
        <h1>Fruta view</h1>

        <div>
            <ul>
                {frutas.map((fruta)=>(
                    <li key={fruta.id}>
                        <p>{fruta.nome}</p>
                        <p>{fruta.tipo}</p>
                        <p><Link href={`/consumo/frutas-view/${fruta.id}`}>DESCRIÇÃO</Link></p>
                        <hr />
                    </li>
                ))}
            </ul>
        </div>

    </div>
  )
}
