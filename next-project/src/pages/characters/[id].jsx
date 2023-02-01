import { useRouter } from "next/router";

const CharacterCard = () => {
  const router = useRouter();
  const id = router.query.id;

  return <h2> Character: {id} </h2>;
};

export default CharacterCard;
