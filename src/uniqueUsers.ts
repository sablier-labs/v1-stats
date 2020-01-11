import data from "./proxyStreams.json";
import { IOccurrence, IProxyStream } from "./types";

const proxyStreams: IProxyStream[] = data.data.proxyStreams;
const length: number = proxyStreams.length;
const occurrences: IOccurrence = {};

for (let i: number = 0; i < length; i += 1) {
  const proxyStream = proxyStreams[i];
  const sender = proxyStream.sender;
  occurrences[sender] = true;
}

const accounts = Object.keys(occurrences);

console.log({
  "Number of unique users": accounts.length,
});
