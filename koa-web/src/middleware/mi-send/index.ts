
export default () => {
    const render = function (json) {
        this.set("Content-Type", "application/json");
        console.log("金国这里");
        this.body = JSON.stringify(json);
      };
  return async (ctx, next) => {
    ctx.send = render.bind(ctx);
    console.log('这里ctx:', ctx.send)
    await next();
  };
};
