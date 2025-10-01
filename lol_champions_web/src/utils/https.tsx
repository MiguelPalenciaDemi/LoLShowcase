import type { Champion } from "../models/champion-data";
import type { ChampionInfo } from "../models/champion-info";

export async function fetchChamps(version: string) {
  if (version === "") return;
  try {
    const response = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`
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

export async function getVersion() {
  try {
    const response = await fetch(
      "https://ddragon.leagueoflegends.com/api/versions.json"
    );

    if (!response.ok)
      throw new Error(`Failed to fetch patch version ${response.status}`);

    const data = await response.json();
    const version: string[] = data;
    console.log(version);
    return version[0];
  } catch (error: unknown) {
    console.error((error as Error).message);
  }
}

export async function fetchChampion(version: string, id: string) {
  if (version === "") return;
  try {
    const response = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion/${id}.json`
    );

    if (!response.ok)
      throw new Error(`Failed to fetch champs ${response.status}`);

    const data = await response.json();
    const champs: ChampionInfo[] = Object.values<ChampionInfo>(data.data);
    console.log(champs);
    const championSelected: ChampionInfo = champs[0];

    console.log(championSelected);
    if (!championSelected)
      throw new Error("Error to read the champion information");
    return championSelected;
  } catch (error: unknown) {
    console.error((error as Error).message);
  }
}
