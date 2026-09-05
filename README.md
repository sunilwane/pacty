# Pactly

Prediction markets with Web2 UX and Web3 settlement.

## Architecture

Modular monolith in a pnpm monorepo — **not microservices**.

```
pactly/
├── apps/
│   ├── web/          # Next.js (user + admin)
│   ├── api/          # Bun + Elysia (modular monolith)
│   └── worker/       # Blockchain events / background jobs
├── packages/
│   ├── contracts/    # Solidity + Foundry
│   ├── database/     # Prisma schema/client
│   ├── shared/       # Shared TypeScript types
│   ├── validation/   # Zod schemas
│   └── config/       # Shared configuration
├── infrastructure/
│   ├── docker/
│   ├── nginx/
│   └── terraform/
└── docs/
```

See [docs/architecture/overview.md](docs/architecture/overview.md) for the full architecture.

## Prerequisites

- Node.js 20+
- pnpm 9+
- Bun
- Docker (for PostgreSQL + Redis)
- Foundry (for smart contracts)

## Quick Start

```bash
# Install dependencies
pnpm install

# Start PostgreSQL + Redis
docker compose up -d postgres redis

# Set up database
cp packages/database/.env.example packages/database/.env
pnpm db:generate
pnpm db:migrate

# Start all apps in development
pnpm dev
```

Services:
- **Web**: http://localhost:3000
- **API**: http://localhost:4000
- **API Docs**: http://localhost:4000/docs

## Individual Apps

```bash
pnpm dev:web      # Next.js frontend
pnpm dev:api      # Elysia API
pnpm dev:worker   # Blockchain worker
```

## Smart Contracts

```bash
cd packages/contracts
forge install foundry-rs/forge-std
pnpm contracts:build
pnpm contracts:test
```

## Environment Variables

Copy `.env.example` files in each app/package and configure:

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection string |
| `REDIS_URL` | Redis connection string |
| `RPC_URL` | Blockchain RPC endpoint |
| `CONTRACT_ADDRESS` | Deployed contract address |
| `NEXT_PUBLIC_API_URL` | API URL for frontend |

## Design Principles

1. **One repo, multiple apps** — shared types and validation without version sync pain
2. **Modular monolith API** — business modules, single process
3. **Separate worker** — blockchain listening is a different runtime responsibility
4. **Single Next.js app** — user and admin routes, role-based access
5. **PostgreSQL for app data, chain for trust** — clear data boundary

## License

MIT
