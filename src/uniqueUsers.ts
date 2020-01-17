import proxyStreamsData from "./proxyStreams.json";
import streamsData from "./streams.json";
import { IOccurrence, IProxyStream, IStream } from "./types";

const streams: IStream[] = streamsData.data.streams;
const proxyStreams: IProxyStream[] = proxyStreamsData.data.proxyStreams;
const length: number = proxyStreams.length;
const occurrences: IOccurrence = {};

for (let i: number = 0; i < length; i += 1) {
  const proxyStream = proxyStreams[i];
  const sender = proxyStream.sender;
  occurrences[sender] = true;
}

const accounts = Object.keys(occurrences);

console.log({
  "Total number of streams": streams.length,
  "Number of unique users": accounts.length,
});
