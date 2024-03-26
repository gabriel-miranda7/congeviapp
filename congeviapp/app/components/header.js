"use client";
import Link from 'next/link';
import styles from './Header.module.css'; 
import { useEffect } from 'react';
import { useState } from 'react';

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const body = document.body;
    if(body){
    body.classList.add("lightmode");
    }
  }, []); 

  function toggleMenu(){
    setMenuOpen(!menuOpen);
    let menu = document.getElementById("navList");
    if (menuOpen){
      menu.classList.add('active');
    }else{
      menu.classList.remove('active');
    }
    
  }

  function changeColor() {
    const imagem = document.getElementById("toggledark");
    const body = document.body;
    if (body){
      body.classList.toggle("darkmode");
    if (body.classList.contains("darkmode")) {
      imagem.src = '/sun.png'; 
    } else {
      imagem.src = '/moon.png'; 
    }
  }
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerElementos}>
        <button className={styles.menuButton} onClick={toggleMenu}>
         <div className={`${styles.menuIcon} ${menuOpen ? styles.open : ''}`}>
              <div className={styles.bar}></div>
              <div className={styles.bar}></div>
              <div className={styles.bar}></div>
          </div>
        </button>
      <img src="logo.png" alt="congevi logo" className={styles.logo}></img>
      <nav>
        <div className={styles.navi}>
        <ul className={`${styles.navList} ${menuOpen ? styles.active : ''}`} id='navList'>
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
      <img className={styles.toggledark} id="toggledark" onClick={changeColor} src="moon.png"></img>
      <img className={styles.placeholder} src="placeholder.png"></img>
      </div>

    </header>
  );
}

