import { useParams } from "react-router-dom";

export default function ChampionDetailPage() {
  const id = useParams().id;
  return (
    <>
      <h1>Champion Detail</h1>
      <p>{id}</p>
    </>
  );
}
