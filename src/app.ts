import * as Koa from "koa";
import { appRouter } from "./app.router";

export const App = {
  create: () => {
    const app = new Koa();
    const router = appRouter();

    app
      .use(router.routes())
      .use(router.allowedMethods());

    return app;
  },
};
