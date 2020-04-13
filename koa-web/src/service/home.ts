
const login = async ({name, password}) => {
    let data;
    if (name === 'ybrelax' && password === '123456') {
        data = {
            message: '登陆成功'
        }
    } else {
        data = '账号信息错误'
    }
    return data;
}

export default {
    login
}