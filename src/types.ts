export interface IOccurrence {
  [address: string]: boolean;
}

export interface IProxyStream {
  id: string;
  recipient: string;
  sender: string;
  stream: IStream;
  timestamp: string;
}

export interface IStream {
  deposit: string;
  id: string;
  token: IToken;
}

export interface IToken {
  decimals: number;
  id: string;
  name: string;
  symbol: string;
}
