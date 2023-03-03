<template>
    <div class="logincard">
        <div class="login">
            <label class="username" for="username">UserName</label>
            <input class="usernameinput" v-model="username" type="text" name="username" placeholder="请输入用户名">
            <label class="password" for="password">Password</label>
            <input class="passwordinput" v-model="password" type="password" name="password" placeholder="请输入密码">
            <el-button class="submit" round @Click="loginn">登录</el-button>
            <router-link to='/register'><span>登录</span></router-link>
        </div>

    </div>
</template>
<script  scoped>
import { ref } from 'vue'
// import { login } from '../../../request/api'
import router from '../../../router/index'
import { useStore } from 'vuex'
export default {
    name: 'LoginCard',
    setup() {
        let username = ref('')
        let password = ref('')
        const store = useStore()
        let pat = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{5,20}$/;
        const fail = () => {
            console.log('123')
        }
        const loginn = () => {

            let judge = pat.test(password.value)
            if (!judge) {
                alert('密码必须为5~10位的数字+字母；字母+特殊字符，特殊字符+数字')
                username.value = ''
                password.value = ''
                return
            }
            if (username.value === '' || password.value === '')
                alert('用户名和密码不能为空')
            else {
                // console.log(username.value, password.value);
                store.dispatch('loginn', {
                    username: username.value,
                    password: password.value
                }).then(
                    router.push('/home')
                )

            }
        }
        return {
            username,
            password,
            loginn,
            fail
        }
    },

}
</script>

<style scoped lang="less">
a {
    color: gray;
    position: absolute;
    cursor: pointer;
    top: 0;
    right: 0;
    font-weight: 300;
    text-align: right;
    height: 50px;
    width: 50px;
    background-image: url(https://img.alicdn.com/imgextra/i3/O1CN01yz6fEl1MwaRtkJyvf_!!6000000001499-55-tps-70-70.svg);

}

a:hover {
    color: black;
    transition: 0.3s;
    font-weight: 800;
}

span {
    position: absolute;
    font-size: 10px;
    transform: scale(0.8);
    right: 5px;
    top: 5px;
}

input {
    border: none;
    outline: none;
    background: none;
    left: 15%;
}

label {
    left: 15%;
}

input::-webkit-input-placeholder {
    /* placeholder颜色 */
    color: #aab2bd;
    /* placeholder字体大小 */
    font-size: 4px;
}

// input:hover,
// input:checked {
//     // background-color: white;
//     border-bottom: 1px solid black;
//     transition: 0.5s;
// }

.logincard {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 400px;
    background-color: gray;
    opacity: 0.8;
}

.login {
    position: absolute;
    /* margin-top: 100px; */
    top: 10%;
    left: 40%;
    width: 400px;
    height: 300px;
    background-color: white;
    box-shadow: 1px 1px 1px gray;
    opacity: 0.9;
}

.username {
    position: absolute;
    top: 27%;
    font-size: 18px;

}

.password {
    position: absolute;
    top: 41%;
    font-size: 18px;
}

.usernameinput {
    position: absolute;
    top: 35%;
    height: 12px;
    border-bottom: 1px solid lightgrey;
    padding: 2px 0 5px 0
}

.passwordinput {
    position: absolute;
    top: 50%;
    height: 12px;
    border-bottom: 1px solid lightgrey;
    padding: 0 0 5px 0
}

.usernameinput:hover,
.usernameinput:focus {

    border-bottom: 1px solid black;

}

.passwordinput:hover,
.passwordinput:focus {

    border-bottom: 1px solid black;

}

/deep/ .submit {
    position: absolute;
    width: 40px;
    height: 20px;
    font-size: 10px;
    top: 60%;
    left: 15%;
    color: white;
    background-color: lightgray;
}

/deep/ .submit:hover {
    font-weight: bold;
    color: black;
    transition: 0.3s;
    background-color: gray;
    border: 1px solid black;
}
</style>