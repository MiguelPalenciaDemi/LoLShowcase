import type React from "react";
import { useContext } from "react";
import { ChampionContext } from "../../../store/champion-ctx";
import classes from "./SpellButton.module.css";

const SpellButton: React.FC<{ name: string; id: string }> = ({ name, id }) => {
  const ctx = useContext(ChampionContext);
  const imgUrl = `https://ddragon.leagueoflegends.com/cdn/${ctx.version}/img/spell/${id}.png`;
  return (
    <div className={classes.buttonContainer}>
      <img className={classes.button} src={imgUrl} />
      <p>{name}</p>
    </div>
  );
};
export default SpellButton;
