import Image from 'next/image'


export default function notFound() {
  return (
    <div>
        <h1>!OOPS - 404</h1>
        <h2>Pagina não encontrada</h2>
        <div>
            <figure>
                <Image src="https://http.cat/images/404.jpg" alt='Gato'
                width={750} height={600}/>
            </figure>
        </div>
    </div>
  )
}
