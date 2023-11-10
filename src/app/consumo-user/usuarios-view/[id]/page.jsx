
import { redirect } from "next/navigation";



export default async function UserViewId({params}){

let usuario;
try{
const response  = await fetch(`http://localhost:3000/dados/usuarios-api/${params.id}`)
usuario = await response.json()
}
catch(error){
    console.log(error)
    redirect("/error")
}



return(
    <div>
        <h1>USUARIO SELECIONADO</h1>
            <div>
                <ul>
            
            
                <li key={usuario.id}>
                    
                    <p>{usuario.id}</p>
                    <p>{usuario.nome}</p>
                    <p>{usuario.email}</p>
                    <p>{usuario.senha}</p>
                    <hr />

                </li>
           

                </ul>
            </div>
        

    </div>
)


}