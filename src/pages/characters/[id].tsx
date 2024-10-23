import { Character } from "@/components/characters/Character";
import { getCharacterById } from "@/queries/characterById";
import { isFollowingCharacter } from "@/queries/isFollowingCharacter";

const CharacterPage = ({ character, isFollowing }) => {
  return <Character character={character} following={isFollowing} />;
};
export default CharacterPage;

export const getServerSideProps = async (context) => {
  const data = await getCharacterById(context.params);
  const isFollowing = await isFollowingCharacter(context.params.id);
  return {
    props: {
      character: data.character,
      isFollowing,
    },
  };
};
