# Pactly API

Base URL: `http://localhost:4000`

Swagger docs: `http://localhost:4000/docs`

## Endpoints

### Auth
- `POST /api/v1/auth/register`
- `POST /api/v1/auth/login`
- `POST /api/v1/auth/logout`

### Users
- `GET /api/v1/users/me`
- `GET /api/v1/users/:id`

### Groups
- `GET /api/v1/groups`
- `POST /api/v1/groups`
- `GET /api/v1/groups/:id`

### Predictions
- `GET /api/v1/predictions`
- `POST /api/v1/predictions`
- `GET /api/v1/predictions/:id`
- `POST /api/v1/predictions/:id/resolve`

### Bets
- `GET /api/v1/bets/prediction/:predictionId`
- `POST /api/v1/bets/record`

### Wallet
- `GET /api/v1/wallet`
- `POST /api/v1/wallet/link`

### Notifications
- `GET /api/v1/notifications`
- `PATCH /api/v1/notifications/:id/read`

### Admin
- `GET /api/v1/admin/dashboard`
- `GET /api/v1/admin/users`
- `GET /api/v1/admin/predictions`
- `GET /api/v1/admin/reports`
- `GET /api/v1/admin/analytics`
