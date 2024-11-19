'use client';
import Image from "next/image";
import styles from "./page.module.css";
import Canvas from "./Canvas";
import Canvas_copy from "./Canvas_copy";
import Scoreboard from "./Scoreboard";
export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Ejercicio 1</h1>
      <Scoreboard />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>Ejercicio 2</h1>
      <Canvas />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>Ejercicio 3</h1>
      <Canvas_copy></Canvas_copy>

    </div>
  );
}
