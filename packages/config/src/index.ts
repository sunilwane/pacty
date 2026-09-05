export const config = {
  api: {
    port: Number(process.env.PORT ?? 4000),
    host: process.env.HOST ?? "0.0.0.0",
  },
  database: {
    url: process.env.DATABASE_URL ?? "postgresql://pactly:pactly@localhost:5432/pactly",
  },
  redis: {
    url: process.env.REDIS_URL ?? "redis://localhost:6379",
  },
  blockchain: {
    rpcUrl: process.env.RPC_URL ?? "http://127.0.0.1:8545",
    contractAddress: process.env.CONTRACT_ADDRESS ?? "",
    chainId: Number(process.env.CHAIN_ID ?? 31337),
  },
  web: {
    url: process.env.WEB_URL ?? "http://localhost:3000",
  },
} as const;

export type Config = typeof config;
