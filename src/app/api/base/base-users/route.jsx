import{promises as fs} from 'fs'
import { NextResponse } from 'next/server';



export async function GET(){
  //Realizando a leitura do arquivo db.json desde a raiz do projeto
  const file =await fs.readFile(
    process.cwd() + "/src/app/api/base/db.json",
    "utf-8"
  );

  const listaUsuarios = await JSON.parse(file);

  //Retornando os dados do arquivo
  return NextResponse.json(listaUsuarios.usuarios);
}
export async function POST(request,response) {
  //Realizando a leitura do arquivo db.json desde a raiz do projeto
  const file = await fs.readFile(
    process.cwd() + "/src/app/api/base/db.json",
    "utf-8"
  );

  //recebendos os dados do formulario pelo request
    const userLogin = await request.json();


  const listaUsuarios = await JSON.parse(file);

    //Logica de validação
    const userValid = listaUsuarios.usuarios.find((user)=> user.email == userLogin.email && user.senha == userLogin.senha)

    //verificando se o usuario foi validado
    if(!userValid){
        //Retornando os status da validação
        return NextResponse.json({ "status": false});
    }

  //Retornando os dados do arquivo
  return NextResponse.json({"status":true},userValid);
}