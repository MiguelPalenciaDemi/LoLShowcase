import classes from "./ChampionDetailHeader.module.css";

const ChampionHeader: React.FC<{
  name: string;
  championSubtitle: string;
  lore: string;
  image: string;
}> = ({ name, championSubtitle, lore, image }) => {
  return (
    <section
      className={classes.container}
      style={{ backgroundImage: "url(" + image + ")" }}
    >
      <div className={classes.backdrop} />
      <div className={classes.info}>
        <h1 className={classes.championName}>{name.toUpperCase()}</h1>
        <h2 className={classes.championSubtitle}>
          {championSubtitle.toUpperCase()}
        </h2>
        <p className={classes.description}>{lore}</p>
      </div>
    </section>
  );
};

export default ChampionHeader;
