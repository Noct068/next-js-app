import apolloClient from "../lib/apolloClient";

export const isFollowingCharacter = async (id) => {
  const client = apolloClient();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/follow`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const { storedData: followedCharacters } = await response.json();
  return followedCharacters.includes(id);
};
