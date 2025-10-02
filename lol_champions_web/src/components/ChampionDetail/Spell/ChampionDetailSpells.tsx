import type React from "react";
import type { SpellInfo } from "../../../models/champion-info";
import { useState } from "react";
import SpellButton from "./SpellButton";
import classes from "./ChampionDetailSpells.module.css";
const ChampionSpells: React.FC<{ spells: SpellInfo[] }> = ({ spells }) => {
  const spellSelected = useState(0);
  return (
    <section className={classes.spellSection}>
      <div className={classes.spellList}>
        {spells.map((spell) => (
          <SpellButton key={spell.id} id={spell.id} name={spell.name} />
        ))}
      </div>
    </section>
  );
};

export default ChampionSpells;
