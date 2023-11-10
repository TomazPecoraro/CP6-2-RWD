import React from "react";

export default function Login() {
  //CP-3 / Ex-2: Criando a função de validação do formulário.
  //Vale 50Pts
  return (
    <div>
      <h1>Identificação de Usuários</h1>
      <div>
        <form>
          <fieldset>
            <legend>Login de Usuários</legend>
            <div>
              <label htmlFor="idEmail">E-mail</label>
              <input
                type="email"
                name="email"
                id="idEmail"
                placeholder="Digite seu E-mail."
              />
            </div>
            <div>
              <label htmlFor="idSenha">Senha</label>
              <input
                type="password"
                name="senha"
                id="idSenha"
                placeholder="Digite sua Senha."
              />
            </div>
            <div>
              <button>Login</button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
