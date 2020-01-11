import { BigNumber } from "bignumber.js";
import { ethers } from "ethers";

import data from "./streams.json";
import { IStream } from "./types";

const streams: IStream[] = data.data.streams;
const length = streams.length;

const tokens = {
  CHAI: "0x06af07097c9eeb7fd685c692751d5c66db49c215",
  DAI: "0x6b175474e89094c44da98b954eedeac495271d0f",
  FREE: "0x2f141ce366a2462f02cea3d12cf93e4dca49e4fd",
  SAI: "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359",
  SELF: "0x67ab11058ef23d0a19178f61a050d3c38f81ae21",
  USDC: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
  cDAI: "0x5d3a536e4d6dbd6114cc1ead35777bab948e3643",
  cUSDC: "0x39aa39c021dfbae8fac545936693ac917d5e7563",
};

const totalValue: { [address: string]: BigNumber } = {
  [tokens.CHAI]: new BigNumber(0), // CHAI
  [tokens.DAI]: new BigNumber(0), // DAI
  [tokens.FREE]: new BigNumber(0), // FREE
  [tokens.SAI]: new BigNumber(0), // SAI
  [tokens.SELF]: new BigNumber(0), // SELF
  [tokens.USDC]: new BigNumber(0), // USDC
  [tokens.cDAI]: new BigNumber(0), // cDAI,
  [tokens.cUSDC]: new BigNumber(0), // cUDSC
};

for (let i: number = 0; i < length; i += 1) {
  const stream: IStream = streams[i];
  const tokenAddress = stream.token.id;
  const atomicUnits: string = stream.deposit;
  const humanUnits: string = ethers.utils.formatUnits(atomicUnits, stream.token.decimals);
  totalValue[tokenAddress] = totalValue[tokenAddress].plus(new BigNumber(humanUnits));
}

console.log("Total value transferred in CHAI", totalValue[tokens.CHAI].toString(10));
console.log("Total value transferred in DAI", totalValue[tokens.DAI].toString(10));
console.log("Total value transferred in FREE", totalValue[tokens.FREE].toString(10));
console.log("Total value transferred in SAI", totalValue[tokens.SAI].toString(10));
console.log("Total value transferred in SELF", totalValue[tokens.SELF].toString(10));
console.log("Total value transferred in USDC", totalValue[tokens.USDC].toString(10));
console.log("Total value transferred in cDAI", totalValue[tokens.cDAI].toString(10));
console.log("Total value transferred in cUSDC", totalValue[tokens.cUSDC].toString(10));
