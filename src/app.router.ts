import * as Router from "koa-router";

export const appRouter = (options: any = {}) => {
  const router = new Router();

  router.get("/dispatcher", (ctx, next) => {
    ctx.body = "dispatcher here!!";
  });

  return router;
};
