import Link from "next/link";

export default function Cabecalho(){
    return(
        <header className="cabecalho">
             <Link href="/layouts/home">Home</Link>
      <Link href="./layouts/dashboard">Dashboard</Link>
      <Link href="./layouts/leads">Leads</Link>
      <Link href="./layouts/conversao">Conversao</Link>
      <Link href="./layouts/clientes">Clientes</Link>
      <Link href="./layouts/produtos">Produtos</Link>
      
           <div>
                <a href=""><img src="logo.png" alt=""/></a>
                <h3>nome do usuario</h3>
                <button></button>
                <button></button>
                <button></button>
                <ul>
                    <li><a href="">Produtos</a></li>
                    <li><a href="">Suporte</a></li>
                    <li><a href="">Carrinho</a></li>
                </ul>
            </div>
        </header>
    );
}