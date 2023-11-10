import{promises as fs} from 'fs'
import { NextResponse } from 'next/server';



export async function GET(){
  
  const file =await fs.readFile(
    process.cwd() + "/src/app/api/base/db.json",
    "utf-8"
  );

  const listaUsuarios = await JSON.parse(file);

 
  return NextResponse.json(listaUsuarios.usuarios);
}
export async function POST(request,response) {
  
  const file = await fs.readFile(
    process.cwd() + "/src/app/api/base/db.json",
    "utf-8"
  );

  
    const userLogin = await request.json();


  const listaUsuarios = await JSON.parse(file);

    const userValid = listaUsuarios.usuarios.find((user)=> user.email == userLogin.email && user.senha == userLogin.senha)

    
    if(!userValid){
        //Retornando os status da validação
        return NextResponse.json({ "status": false});
    }

 
  return NextResponse.json({"status":true},userValid);
}