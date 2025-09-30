import type { Champion } from "../models/champion-data";

import { useEffect, useState } from "react";
import { fetchChamps } from "../utils/https";
import ChampionListItem from "../components/ChampionListItem";

import classes from "./ChampionList.module.css";

export default function ChampionList() {
  const [champions, setChampions] = useState<Champion[]>([]);
  useEffect(() => {
    const fetchChampions = async () => {
      const champs: Champion[] = (await fetchChamps()) || [];
      //console.log(champs[0]);
      setChampions(Object.values(champs));
    };
    fetchChampions();
  }, []);

  console.log(champions);

  return (
    <section className={classes.listContainer}>
      <ul className={classes.list}>
        {champions.map((champ) => (
          <ChampionListItem key={champ.id} champion={champ} />
        ))}
      </ul>
    </section>
  );
}
