import React, { createContext } from "react";
import { fetchChamps, getVersion } from "../utils/https";
import type { Champion } from "../models/champion-data";

export interface ChampionCtx  {
    version: string,
    champions:Champion[],
}
export const ChampionContext = createContext<ChampionCtx>({champions:[],version:""})
const currentVersion = await getVersion()||"";
const championsList = await fetchChamps(currentVersion) || [];

const ctxValue:ChampionCtx = {
    version:currentVersion,
    champions: Object.values(championsList),
}

const ChampionContextProvider:React.FC<{children:React.ReactNode}> = ({children})=>{
    return <ChampionContext.Provider value={ctxValue}>{children}</ChampionContext.Provider>

}
export default ChampionContextProvider
