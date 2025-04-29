export interface NFT {
    link: string;
    date: string;
    title: string;
    mint: string;            // адреса мінта
    name: string;            // ім’я NFT
    uri: string;             // URI метаданих
    image: string;           // зображення
    description?: string;    // опціонально — опис
  }