import { useContext } from "react";

import ChampionListItem from "./ChampionListItem";

import classes from "./ChampionList.module.css";
import { ChampionContext } from "../../store/champion-ctx";

export default function ChampionList() {
  const championList = useContext(ChampionContext).champions;

  console.log(championList);

  return (
    <section className={classes.listContainer}>
      <ul className={classes.list}>
        {championList.map((champ) => (
          <ChampionListItem key={champ.id} champion={champ} />
        ))}
      </ul>
    </section>
  );
}
