import HomeService from '../service/home';

export default {
    index: async (ctx, next) => {
        ctx.response.body = "<h1>index page</h1>"
    },
    login: async (ctx, next) => {
        let data = await  HomeService.login(ctx.request.body);
        ctx.send({
            status: '200',
            data
        })
    }
}