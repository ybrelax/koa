import Koa from "koa";
import router from "./router";
import middleware from "./middleware";
import customer from "./models/customer";

const app = new Koa();


customer.create({
    name: '牛郎',
})
https://www.jianshu.com/p/c148a3e9e39b






middleware(app);
router(app);

app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
});
