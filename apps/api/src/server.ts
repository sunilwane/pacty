import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";
import { config } from "@pactly/config";
import { authModule } from "./modules/auth/controller";
import { usersModule } from "./modules/users/controller";
import { groupsModule } from "./modules/groups/controller";
import { predictionsModule } from "./modules/predictions/controller";
import { betsModule } from "./modules/bets/controller";
import { walletModule } from "./modules/wallet/controller";
import { notificationsModule } from "./modules/notifications/controller";
import { adminModule } from "./modules/admin/controller";

export const app = new Elysia()
  .use(cors({ origin: config.web.url }))
  .use(swagger({ path: "/docs" }))
  .get("/health", () => ({ status: "ok", service: "pactly-api" }))
  .group("/api/v1", (app) =>
    app
      .use(authModule)
      .use(usersModule)
      .use(groupsModule)
      .use(predictionsModule)
      .use(betsModule)
      .use(walletModule)
      .use(notificationsModule)
      .use(adminModule)
  );

export type App = typeof app;

app.listen(config.api.port, () => {
  console.log(`Pactly API running at http://${config.api.host}:${config.api.port}`);
});
