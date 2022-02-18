export const OPENSEA_URL_PATTERN = /https:\/\/opensea.io\/assets\/(\w*)\/(\w*)/;

interface OpenSeaDetails {
  contractAddress: string;
  tokenId: string;
}

export function isOpenSeaUrl(url: string): boolean {
  return url.indexOf("https://opensea.io/") === 0;
}

export function getDetailsFromOpenSeaUrl(url: string): OpenSeaDetails {
  let [, contractAddress, tokenId] = url.match(OPENSEA_URL_PATTERN);

  return {
    contractAddress, tokenId
  };
}