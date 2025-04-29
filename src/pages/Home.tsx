import React, { useState, useEffect } from 'react';
import AchievementCard from '../components/AchievementCard';
import { getNFTMetadata } from '../utilits/solanaUtils';
import { NFT } from '../types/HomeTypeNFT';
const Home: React.FC = () => {
  const [nfts, ] = useState<NFT[]>([]);

  useEffect(() => {
    // Тут буде код для отримання NFT даних
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Diplomas & Achievements</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {nfts.map((nft, index) => (
          <AchievementCard key={index} title={nft.title} date={nft.date} nftLink={nft.link} />
        ))}
      </div>
    </div>
  );
};

export default Home;
