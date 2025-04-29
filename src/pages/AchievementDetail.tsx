import { useParams } from "react-router-dom";

const AchievementDetail = () => {
  const { id } = useParams();
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">🏅 Деталі Досягнення</h1>
      <p className="mt-2">ID NFT: {id}</p>
    </div>
  );
};
export default AchievementDetail;
