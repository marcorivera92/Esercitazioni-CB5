import styles from "../../styles/characters.module.scss";

export default function Characters({ characters }) {
  return (
    <div className={styles.Characters}>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>{character.name}</li>
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
