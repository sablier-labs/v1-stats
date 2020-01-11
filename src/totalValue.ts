import { BigNumber } from "bignumber.js";
import { ethers } from "ethers";

import data from "./data.json";
import { IProxyStream } from "./types";

const proxyStreams: IProxyStream[] = data.data.proxyStreams;
const length = proxyStreams.length;

const totalValue: { [address: string]: BigNumber } = {
  "0x06af07097c9eeb7fd685c692751d5c66db49c215": new BigNumber(0), // CHAI
  "0x5d3a536e4d6dbd6114cc1ead35777bab948e3643": new BigNumber(0), // cDAI,
  "0x39aa39c021dfbae8fac545936693ac917d5e7563": new BigNumber(0), // cUDSC
  "0x6b175474e89094c44da98b954eedeac495271d0f": new BigNumber(0), // DAI
  "0x2f141ce366a2462f02cea3d12cf93e4dca49e4fd": new BigNumber(0), // FREE
  "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359": new BigNumber(0), // SAI
  "0x67ab11058ef23d0a19178f61a050d3c38f81ae21": new BigNumber(0), // SELF
  "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48": new BigNumber(0), // USDC
};

for (let i: number = 0; i < length; i += 1) {
  const proxyStream: IProxyStream = proxyStreams[i];
  console.log({
    token: proxyStream.stream.token,
  });

  const tokenAddress = proxyStream.stream.token.id;
  const atomicUnits: string = proxyStream.stream.deposit;
  const humanUnits: string = ethers.utils.formatUnits(atomicUnits, proxyStream.stream.token.decimals);
  totalValue[tokenAddress] = totalValue[tokenAddress].plus(new BigNumber(humanUnits));
}

console.log({
  totalValue,
});
