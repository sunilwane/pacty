# Pactly Architecture

## Overview

Pactly is a **modular monolith** in a **pnpm monorepo** — not microservices.

```
                     ┌───────────────┐
                     │    Next.js    │
                     │ User + Admin  │
                     └───────┬───────┘
                             │
                  ┌──────────┴──────────┐
                  │                     │
                  ▼                     ▼
           Elysia API              wagmi/viem
                  │                     │
                  │                     ▼
                  │                MetaMask
                  │                     │
                  │                     ▼
                  │               Smart Contract
                  │                     │
                  │                     ▼
                  │                Blockchain
                  │                     │
                  │                     ▼
                  │              Contract Events
                  │                     │
                  ▼                     ▼
             PostgreSQL              Worker
                  ▲                     │
                  └─────────────────────┘
                            │
                          Redis
                            │
                        WebSocket
                            │
                            ▼
                        Next.js
```

## Applications

| App | Stack | Port | Responsibility |
|-----|-------|------|----------------|
| `apps/web` | Next.js | 3000 | User UI + Admin UI |
| `apps/api` | Bun + Elysia | 4000 | Business logic (modular monolith) |
| `apps/worker` | Bun + viem | — | Blockchain event indexing |

## Packages

| Package | Purpose |
|---------|---------|
| `packages/database` | Prisma schema + client |
| `packages/contracts` | Solidity + Foundry |
| `packages/shared` | Shared TypeScript types |
| `packages/validation` | Zod schemas |
| `packages/config` | Shared configuration |

## Data Split

**PostgreSQL** — application data (questions, comments, metadata, UI state)

**Smart Contract** — trust layer (pools, bets, settlement, claims)

## Key Flows

### Create Prediction
Browser → Next.js → API → PostgreSQL → return ID → wagmi → contract

### Place Bet
Browser → wagmi → MetaMask → contract → event → Worker → PostgreSQL → WebSocket → clients

## Evolution Path

Start with modular monolith. Extract microservices only when a module has distinct scaling needs.
