import Link from "next/link";
import styles from "../../styles/characters.module.scss";

export default function Characters({ characters }) {
  return (
    <div className={styles.Characters}>
      <ul>
        {characters.map((character) => (
          <div className={styles.characterContainer} key={character.id}>
            <Link href={`/characters/${character.id}`}>
              <h3>{character.name}</h3>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
}

/* FETCH */

export async function getStaticProps() {
  const res = await fetch(`https://hp-api.onrender.com/api/characters`);
  const characters = await res.json();

  return {
    props: {
      characters,
    },
  };
}
