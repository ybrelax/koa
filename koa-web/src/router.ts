import koaRouter from "koa-router";
import HomeController from "./controller/home";
const router = koaRouter();

export default (app) => {
  router.get('/', HomeController.index);
  router.post('/user/login', HomeController.login)
  app.use(router.routes());
};
