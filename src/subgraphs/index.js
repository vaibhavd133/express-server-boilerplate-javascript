import pkg from '@apollo/client';
import fetch from 'node-fetch';

globalThis.fetch = fetch;
const { ApolloClient, InMemoryCache, gql } = pkg;
const APIURL = 'https://api.studio.thegraph.com/query/25517/rewards/0.1.0';

const query = `query{ 
  
    promptSubmissionRewards{
    id
    promptSubmissionRewardId
    contractAddress
    recipientAddress
    }
}`;

const client = new ApolloClient({
  uri: APIURL,
  cache: new InMemoryCache()
});

const data = await client.query({
  query: gql(query)
});
export { data };
