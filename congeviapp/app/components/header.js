"use client";
import Link from 'next/link';
import styles from './Header.module.css'; 
import { useEffect } from 'react';

function Header() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const body = document.body;
      body.classList.add("lightmode");
    }
  }, []); 

  function changeColor() {
    const body = document.body;
    const imagem = document.getElementById("toggledark");
    body.classList.toggle("darkmode");
    if (body.classList.contains("darkmode")) {
      imagem.src = '/moon.png'; 
    } else {
      imagem.src = '/sun.png'; 
    }
  }

  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.navi}>
        <img src="logo.png" alt="congevi logo" className={styles.logo}></img>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/">
                Página Principal
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/about">
                Sobre Nós
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href='/submissoes'>
                Submissões
              </Link>
            </li>
            {/* Adicione mais links conforme necessário */}
          </ul>
        </div>
      </nav>
      <img className={styles.toggledark} id="toggledark" onClick={changeColor} src="sun.png"></img>
      <img className={styles.placeholder} src="placeholder.png"></img>
    </header>
  );
}

export default Header;
