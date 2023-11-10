import Link from "next/link";
import { redirect } from "next/navigation";


export default async function UserviewAll(){

let users;
try{
const response  = await fetch("http://localhost:3000/dados/usuarios-api/0")
users = await response.json()
}
catch(error){
    console.log(error)
    redirect("/error")
}



return(
    <div>
        <ul>

            {users.map((usuario)=>(
                <li key={usuario.id}>
                    <p>{usuario.id}</p>
                    <p>{usuario.nome}</p>
                    <p>{usuario.email}</p>
                    
                    <p><Link href={`/consumo-user/usuarios-view/${usuario.id}`}>Ver mais...</Link></p>
                    <hr />
                    

                </li>
            ))}

        </ul>

    </div>
)


}