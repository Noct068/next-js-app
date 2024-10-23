import { EmptyPlaceholder } from "@/components/EmptyPlaceholder";
import CharacterList from "@/components/characters/CharacterList";
import { getFollowedCharacters } from "@/queries/followedCharacters";

const FollowingCharacters = ({ characters }: { characters: any[] }) => {
  return (
    <>
      {characters.length ? (
        <CharacterList characters={characters} />
      ) : (
        <EmptyPlaceholder />
      )}
    </>
  );
};
export default FollowingCharacters;

export const getServerSideProps = async () => {
  const data = await getFollowedCharacters();
  return {
    props: {
      characters: data,
    },
  };
};
