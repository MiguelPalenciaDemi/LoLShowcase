import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchChampion } from "../utils/https";
import { ChampionContext } from "../store/champion-ctx";
import type { ChampionInfo } from "../models/champion-info";
import ChampionHeader from "../components/ChampionDetail/ChampionDetailHeader";
import ChampionSpells from "../components/ChampionDetail/Spell/ChampionDetailSpells";

export default function ChampionDetailPage() {
  const [information, setInformation] = useState<ChampionInfo>();

  const id = useParams().id || "";
  const { version } = useContext(ChampionContext);
  useEffect(() => {
    async function getInfo() {
      const champInfo: ChampionInfo =
        (await fetchChampion(version, id)) || ({} as ChampionInfo);
      setInformation(champInfo);
    }

    getInfo();
  }, [version, id]);

  //Fallback
  if (!information) return <p>Fetching champion information</p>;

  return (
    <>
      <ChampionHeader
        image={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`}
        name={information!.name}
        championSubtitle={information!.title}
        lore={information!.lore}
      />
      <ChampionSpells spells={information.spells} />
      {information?.skins.map((skin) => (
        <div key={skin.id}>
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_${skin.num}.jpg`}
          />
        </div>
      ))}
    </>
  );
}
