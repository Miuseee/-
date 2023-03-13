import { createStore } from 'vuex'
import { login, getAdminInfo } from '../request/api'
import router from '../router/index'
import Type from './stuInfo'
export default createStore({
    state: {
        username: '',
        password: '',
        userid: ''
    },
    mutations: {
        UpdateAdminInfo(state, data) {
            state.password = data.passWord
            state.username = data.userName
        }
    },
    actions: {
        loginn(state, data) {
            login({
                username: data.username,
                password: data.password,
            }).then(res => {
                if (res.data.code === 404) {
                    alert('用户名或密码不正确')
                    data.error()
                    return
                }
                localStorage.setItem('token', res.data.data)
                if (res.data.code === 200) {
                    getAdminInfo({
                        userName: data.username
                    })
                        .then(res => {
                            console.log(res.data.data.userType);
                            if (res.data.data.userType === 1) {
                                alert('欢迎登录 超级管理员' + res.data.data.realName)
                                let h5URL = '1.15.62.89:81'
                                let path = window.location.protocol + '//' + h5URL
                                window.location.href = path
                                return
                            }
                            alert('欢迎登录 管理员' + res.data.data.realName)
                            router.push('/home')
                            localStorage.setItem('realName', res.data.data.realName)
                            localStorage.setItem('userName', res.data.data.userName)
                            localStorage.setItem('userType', res.data.data.userType)
                            localStorage.setItem('id', res.data.data.id)
                            this.commit('UpdateAdminInfo', {
                                userName: res.data.data.userName,
                                passWord: res.data.data.userPwd
                            })
                        })
                }

            })
        }
    },
    modules: {
        Type
    }
})