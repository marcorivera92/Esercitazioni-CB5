const CharacterCard = ({ character }) => {
  return (
    <div>
      {/* <h3> Character: {id} </h3> */}
      <div>
        <img src={character.image} alt={character.name} />
      </div>
      <h3>{character.name}</h3>
      <p>{character.gender}</p>
      <p>{character.house}</p>
      <p>{character.ancestry}</p>
      <p>{character.house}</p>
    </div>
  );
};

export default CharacterCard;

/* FETCH */

export async function getStaticPaths() {
  const res = await fetch(`https://hp-api.onrender.com/api/characters`);
  const data = await res.json();

  const paths = data.map((character) => {
    return {
      params: { id: character.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  console.log(context);
  const res = await fetch("https://hp-api.onrender.com/api/characters/" + id);
  const data = await res.json();

  return {
    props: { character: data },
  };
}
