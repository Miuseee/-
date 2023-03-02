import { createStore } from 'vuex'
import { login, getAdminInfo } from '../request/api'
import router from '../router/index'
// import {  } from '../router/index
/**
 * 创建仓库和导出
 */
export default createStore({
    state: {
        username: '',
        password: '',
    },
    mutations: {
        UploadInfo(state, data) {
            console.log(data);
        }
    }
    ,
    actions: {
        loginn(state, data) {

            login({
                username: data.username,
                password: data.password,
            }).then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.data)
                if (res.data.code === 200) {
                    router.push('/home')
                    getAdminInfo({
                        username: data.username
                    })
                        .then(res => {
                            localStorage.setItem('realName', res.data.data.realName)
                            // console.log(res.data.data.realName)
                        })

                }
                else {
                    alert('用户名或密码错误')
                    // console.log(data);
                }
                // console.log(res.data.code);
            })
        }
    }
})