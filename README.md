## Sablier Stats

GQL queries to run:

### Streams

```gql
{
  streams(first: 1000, orderBy: id, orderDirection: desc) {
    deposit
    id
    recipient
    sender
    token {
      decimals
      id
      name
      symbol
    }
  }
}
```

### Proxy Streams

```gql
{
  proxyStreams(first: 1000, orderBy: timestamp, orderDirection: desc) {
    id
    recipient
    sender
    stream {
      deposit
      id
      recipient
      sender
      token {
        decimals
        id
        name
        symbol
      }
    }
    timestamp
  }
}
```
