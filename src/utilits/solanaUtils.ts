import { Connection, PublicKey } from '@solana/web3.js';
import { useMemo } from 'react';

const NETWORK = 'https://api.devnet.solana.com';  // Заміни на mainnet або тестову мережу

export const useSolanaConnection = () => {
  const connection = useMemo(() => new Connection(NETWORK, 'confirmed'), []);
  return connection;
};

export const getNFTMetadata = async (mintAddress: string) => {
  const connection = new Connection(NETWORK, 'confirmed');
  const metadataAddress = await PublicKey.findProgramAddress(
    [Buffer.from('metadata'), Buffer.from('metadataProgram'), new PublicKey(mintAddress).toBuffer()],
    new PublicKey('MetaplexProgramAddressHere')
  );
  const metadata = await connection.getAccountInfo(metadataAddress[0]);
  return metadata;
};
