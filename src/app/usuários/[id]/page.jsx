import Link from "next/link";


export async function UserViewId({params}){

let user;
try{
const response  = await fetch(`http://localhost:3000/dados/usuarios-api/${params.id}`)
user = await response.json()
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
            
            
                <li key={user.id}>
                    
                    <p>{user.id}</p>
                    <p>{user.nome}</p>
                    <p>{user.email}</p>
                    <p>{user.senha}</p>
                    <hr />
                    <p><Link href={`/dados/usuarios-api/0`}>VOLTAR</Link></p>

                </li>
           

                </ul>
            </div>
        

    </div>
)


}