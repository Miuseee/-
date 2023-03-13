<template>
    <div class="logincard">
        <input class="usernameinput" v-model="username" type="text" name="username" placeholder="请输入用户名">
        <input class="passwordinput" v-model="password" type="password" name="password" placeholder="请输入密码">
        <input class="passwordinput2" @keydown.enter="loginn" v-model="passwordcheck" type="password" name="password"
            placeholder="请确认密码">
        <el-button class="submit" round @click="loginn">注册</el-button>
        <el-button class="submit2" round @click="cancel">取消</el-button>
    </div>
</template>
<script  scoped>
import { ref } from 'vue'
import { registerAdmin } from '../../request/api'
export default {
    name: 'LoginCard',
    setup(props, ctx) {
        let username = ref('')
        let password = ref('')
        let passwordcheck = ref('')
        let pat = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{5,20}$/;
        const loginn = () => {
            if (username.value === '' || password.value === '') {
                alert('用户名和密码不能为空')
                return
            }
            let judge = pat.test(password.value)
            if (password.value != passwordcheck.value) {
                alert('两次密码不一致')
                password.value = ''
                passwordcheck.value = ''
                return
            } if (!judge) {
                alert('密码必须为5~10位的数字+字母；字母+特殊字符，特殊字符+数字')
                username.value = ''
                password.value = ''
                passwordcheck.value = ''
                return
            }

            else {
                registerAdmin({
                    userName: username.value,
                    userPwd: password.value
                }).then(res => {
                    console.log(res.data)
                    if (res.data.status === false) {
                        alert('用户名被占用')
                        username.value = ''
                        password.value = ''
                        passwordcheck.value = ''
                        return
                    }
                    if (res.status === 200) {
                        alert('注册成功')
                        ctx.emit('hideRegTag')
                    }
                })

            }
        }
        const cancel = () => {
            ctx.emit('hideRegTag')
        }

        return {
            username,
            password,
            passwordcheck,
            loginn,
            cancel
        }
    },

}
</script>
<style scoped lang="less">
input {
    border: none;
    outline: none;
    background: none;
    left: 15%;
    color: white;
}

label {
    left: 15%;
}

input::-webkit-input-placeholder {
    /* placeholder颜色 */
    color: white;
    /* placeholder字体大小 */
    font-size: 16px;
}

.logincard {
    display: flex;
    width: 280px;
    height: 220px;
    flex-direction: column;
    position: absolute;
    top: 40%;
    right: 5%;
    color: red;
    opacity: 0.8;
}

.username {
    position: absolute;
    top: 5%;
    font-size: 18px;
}

.password {
    position: absolute;
    top: 24%;
    font-size: 18px;
}

.password2 {
    position: absolute;
    height: 10px;
    top: 42%;
    font-size: 18px;
}

.usernameinput {
    position: absolute;
    top: 15%;
    height: 18px;
    width: 200px;
    border-bottom: 2px solid lightgrey;
    padding: 0px 0 5px 0
}

.passwordinput {
    position: absolute;
    top: 34%;
    height: 18px;
    width: 200px;
    border-bottom: 2px solid lightgrey;
    padding: 0 0 5px 0
}

.passwordinput2 {
    position: absolute;
    top: 50%;
    height: 25px;
    width: 200px;
    border-bottom: 2px solid lightgrey;
    padding: 0 0 5px 0
}

.usernameinput:hover,
.usernameinput:focus {
    transition: 0.5s;
    border-bottom: 2px solid blue;

}

.passwordinput:hover,
.passwordinput:focus,
.passwordinput2:hover,
.passwordinput2:focus {
    transition: 0.5s;
    border-bottom: 2px solid red;

}

/deep/ .submit {
    position: absolute;
    width: 50px;
    height: 30px;
    font-size: 15px;
    top: 70%;
    left: 15%;
    color: white;

    background-color: lightgray;
}

/deep/ .submit2 {
    margin-left: 10px;
    position: absolute;
    width: 50px;
    height: 30px;
    font-size: 15px;
    top: 70%;
    left: 35%;
    color: white;

    background-color: lightgray;
}

/deep/ .submit:hover,
.submit2:hover {
    font-weight: bold;
    color: black;
    transition: 0.3s;
    background-color: gray;
    border: 1px solid black;
}
</style>