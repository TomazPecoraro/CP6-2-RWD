import Link from 'next/link'


export default function Cabecalho() {
  return (
    <header className="cabecalho">
      <nav>
        <Link href="/">HOME</Link>
        <Link href="/login">Login</Link>
        <Link href="/consumo-user/usuarios-view">USUARIOS</Link>
        <Link href="/consumo/frutas-view">FRUTAS</Link>
        <Link href="/Produtos/mamao">MAMÃO</Link>
        <Link href="/Produtos/melao">MELÃO</Link>
        <Link href="/Produtos/manga">MANGA</Link>
      </nav>
    </header>
  );
}
