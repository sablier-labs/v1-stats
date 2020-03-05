import { BigNumber } from "bignumber.js";
import { ethers } from "ethers";

import streamsData from "./streams.json";
import tokens from "./tokens";
import { IStream } from "./types";

const streams: IStream[] = streamsData.data.streams;
const length = streams.length;

const totalValue: { [address: string]: BigNumber } = {
  [tokens.BAT]: new BigNumber(0),
  [tokens.CHAI]: new BigNumber(0),
  [tokens.DAI]: new BigNumber(0),
  [tokens.IDRTW]: new BigNumber(0),
  [tokens.KNC]: new BigNumber(0),
  [tokens.LINK]: new BigNumber(0),
  [tokens.LPT]: new BigNumber(0),
  [tokens.SAI]: new BigNumber(0),
  [tokens.SNT]: new BigNumber(0),
  [tokens.TUSD]: new BigNumber(0),
  [tokens.USDC]: new BigNumber(0),
  [tokens.WBTC]: new BigNumber(0),
  [tokens.WETH]: new BigNumber(0),
  [tokens.cDAI]: new BigNumber(0),
  [tokens.cUSDC]: new BigNumber(0),
  [tokens.sUSD]: new BigNumber(0),
};

for (let i: number = 0; i < length; i += 1) {
  const stream: IStream = streams[i];
  const tokenAddress: string = stream.token.id;
  if (Object.values(tokens).indexOf(tokenAddress) === -1) {
    continue;
  }
  const atomicUnits: string = stream.deposit;
  const humanUnits: string = ethers.utils.formatUnits(atomicUnits, stream.token.decimals);
  totalValue[tokenAddress] = totalValue[tokenAddress].plus(new BigNumber(humanUnits));
}

console.log("Total value transferred in BAT", totalValue[tokens.BAT].toString(10));
console.log("Total value transferred in CHAI", totalValue[tokens.CHAI].toString(10));
console.log("Total value transferred in DAI", totalValue[tokens.DAI].toString(10));
console.log("Total value transferred in IDRTW", totalValue[tokens.IDRTW].toString(10));
console.log("Total value transferred in KNC", totalValue[tokens.KNC].toString(10));
console.log("Total value transferred in LINK", totalValue[tokens.LINK].toString(10));
console.log("Total value transferred in LPT", totalValue[tokens.LPT].toString(10));
console.log("Total value transferred in SAI", totalValue[tokens.SAI].toString(10));
console.log("Total value transferred in SNT", totalValue[tokens.SNT].toString(10));
console.log("Total value transferred in TUSD", totalValue[tokens.TUSD].toString(10));
console.log("Total value transferred in USDC", totalValue[tokens.USDC].toString(10));
console.log("Total value transferred in WBTC", totalValue[tokens.WBTC].toString(10));
console.log("Total value transferred in WETH", totalValue[tokens.WETH].toString(10));
console.log("Total value transferred in cDAI", totalValue[tokens.cDAI].toString(10));
console.log("Total value transferred in cUSDC", totalValue[tokens.cUSDC].toString(10));
console.log("Total value transferred in sUSD", totalValue[tokens.sUSD].toString(10));
