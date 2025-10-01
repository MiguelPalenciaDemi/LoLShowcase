import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchChampion } from "../utils/https";
import { ChampionContext } from "../store/champion-ctx";
import type { ChampionInfo } from "../models/champion-info";

export default function ChampionDetailPage() {

  const [information,setInformation] = useState<ChampionInfo>();

  const id = useParams().id||"";
  const {version} = useContext(ChampionContext)
  useEffect(()=>{
    async function getInfo(){
      const champInfo:ChampionInfo = (await fetchChampion(version,id) || {} as ChampionInfo);
      setInformation(champInfo);
      
    }

   getInfo();

  },[])
  return (
    <>
      <h1>Champion Detail</h1>
      <p>{information?.id}</p>
      <p>{information?.lore}</p>
      {information?.skins.map((skin)=>(<div key={skin.id}><img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_${skin.num}.jpg`}/></div>))}
    </>
  );
}
