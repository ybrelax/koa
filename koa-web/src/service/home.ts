
const login = async ({name, password}) => {
    let data;
    if (name === 'ybrelax' && password === '123456') {
        data = 'success'
    } else {
        data = '账号信息错误'
    }
    return data;
}

export default {
    login
}