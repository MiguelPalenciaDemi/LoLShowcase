import type { Champion } from "../models/champion-data";
import classes from "./ChampionListItem.module.css";
import { Link, useNavigate } from "react-router-dom";

const ChampionListItem: React.FC<{ champion: Champion }> = ({ champion }) => {
  const navigate = useNavigate();
  function clickHandler() {
    navigate(`/champions/${champion.id}`);
  }

  return (
    <li
      className={classes.item}
      onClick={clickHandler}
      style={{
        backgroundImage:
          "url(" +
          `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg` +
          ")",
      }}
    >
      {/* <div>
        <img
          
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
        />
      </div> */}
      <p className={classes.name}>{champion.name.toUpperCase()}</p>
    </li>
  );
};
export default ChampionListItem;
