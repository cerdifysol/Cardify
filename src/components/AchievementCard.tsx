import React from 'react';

interface AchievementCardProps {
  title: string;
  date: string;
  nftLink: string;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ title, date, nftLink }) => {
  return (
    <div className="border p-4 rounded-md shadow-lg">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-500">{date}</p>
      <a href={nftLink} target="_blank" className="text-blue-500 hover:underline">View NFT</a>
    </div>
  );
};

export default AchievementCard;
