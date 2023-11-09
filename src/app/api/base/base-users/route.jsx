import {promises as fs} from 'fs';
import { NextResponse } from 'next/server';


export async function GET() {
    //Realziando a leitura do arwquivo db.json desde a raiz do projeto.
    const file = await fs.readFile(process.cwd() + '/src/app/api/base/db.json', 'utf8');  //process.cwd() retorna o caminho da raiz do projeto.
  
    const listaUsuarios = await JSON.parse(file); //Convertendo o arquivo para JSON.

    //Retornando os dados do arquivo db.json.
    return NextResponse.json(listaUsuarios.usuarios);

}

export async function POST(request,response) {
    //Realziando a leitura do arwquivo db.json desde a raiz do projeto.
    const file = await fs.readFile(process.cwd() + '/src/app/api/base/db.json', 'utf8');  //process.cwd() retorna o caminho da raiz do projeto.
    
    //Recendo os dados do formulário através do request.json.
    const userLogin = await request.json();

    const listaUsuarios = await JSON.parse(file); //Convertendo o arquivo para JSON.


    //Criando a lógica de validação do usuário.
    const userValidado = listaUsuarios.usuarios.find((user) => user.email == userLogin.email && user.senha == userLogin.senha);

    //Verificando se o usuário foi validado.
    if(!userValidado) {
        //Retornando o status da validação.
        return NextResponse.json({"status": false});
    }

    //Retornando o status da validação.
    return NextResponse.json({"status": true},userValidado);
}