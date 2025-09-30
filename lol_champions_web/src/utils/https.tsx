import type { Champion } from "../models/champion-data";

export async function fetchChamps() {
  try {
    const response = await fetch(
      "https://ddragon.leagueoflegends.com/cdn/15.19.1/data/en_US/champion.json"
    );

    if (!response.ok)
      throw new Error(`Failed to fetch champs ${response.status}`);

    const data = await response.json();
    const champs: Champion[] = data.data;
    return champs;
  } catch (error: unknown) {
    console.error((error as Error).message);
  }
}
