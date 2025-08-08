import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import  Cabecalho  from "./componentes/cabecalho";
import { Rodape } from "./Rodape";
import { Dashboard } from "./dashboard";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home(){
  return (
    <main>
    <Cabecalho></Cabecalho>
      <Dashboard></Dashboard>
      <footer>
        <Rodape></Rodape>
      </footer>
    </main>

  );
}

// node-v(para ver a verção) node = tecnologia que roda javascrip em cima de uma vm//
// npm é um conjunto de pacotes,  "-g" sendo global
// npx procura arquivos no node para criar um app
// typescript 
// 'tutorial em video html' para relembrar
// cd peças_de_informatica
// npm run dev
// fazer login no figuima
// 