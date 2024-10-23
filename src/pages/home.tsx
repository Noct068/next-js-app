import CharacterList from "@/components/characters/CharacterList";
import { getCharacters } from "@/queries/characters";

export default function Home({ data }) {
  return <CharacterList characters={data.characters.results} />;
}

export const getStaticProps = async () => {
  const data = await getCharacters();
  return {
    props: {
      data,
    },
  };
};
