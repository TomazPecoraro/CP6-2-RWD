import { promises as fs } from 'fs';

export async function getAllUsers() {
  try {
    
    const file = await fs.readFile(process.cwd() + '/src/app/api/base/db.json', 'utf8');
    const listaUsuarios = await JSON.parse(file);

    return listaUsuarios.usuarios;
  } catch (error) {
    
    console.error('Erro ao obter usuários:', error);
    throw error;
  }
}

export async function getUserById(userId) {
  try {
  
    const file = await fs.readFile(process.cwd() + '/src/app/api/base/db.json', 'utf8');
    const listaUsuarios = await JSON.parse(file);

    const user = listaUsuarios.usuarios.find((user) => user.id === userId);

    if (!user) {
      return null;
    }

    return user;
  } catch (error) {

    console.error('Erro ao obter usuário por ID:', error);
    throw error;
  }
}