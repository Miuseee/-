import { createStore } from 'vuex'
import { login, getAdminInfo } from '../request/api'
import router from '../router/index'
import Type from './stuInfo'
// import {  } from '../router/index
/**
 * 创建仓库和导出
 */
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
    }
    ,
    actions: {
        loginn(state, data) {

            login({
                username: data.username,
                password: data.password,
            }).then(res => {

                localStorage.setItem('token', res.data.data)
                if (res.data.code === 200) {
                    // router.push('/home')
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
                                // window.location.href = "1.15.62.89:81"
                                return
                            }
                            alert('欢迎登录 管理员' + res.data.data.realName)
                            router.push('/home')
                            localStorage.setItem('realName', res.data.data.realName)
                            localStorage.setItem('id', res.data.data.id)
                            this.commit('UpdateAdminInfo', {
                                userName: res.data.data.userName,
                                passWord: res.data.data.userPwd
                            })
                        })

                }
                else {
                    // alert('用户名或密码错误')
                    // console.log(data);
                }
                // console.log(res.data.code);
            })
        }
    },
    modules: {
        Type
    }
})