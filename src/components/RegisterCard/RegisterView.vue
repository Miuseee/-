<template>
    <div class="logincard">
        <div class="login">
            <label class="username" for="username">UserName</label>
            <input class="usernameinput" v-model="username" type="text" name="username" placeholder="请输入用户名">
            <label class="password" for="password">Password</label>
            <input class="passwordinput" v-model="password" type="password" name="password" placeholder="请输入密码">
            <label class="password2" for="password">Password</label>
            <input class="passwordinput2" v-model="passwordcheck" type="password" name="password" placeholder="请输入密码">
            <el-button class="submit" round @Click="loginn">注册</el-button>
            <!-- <router-link to='/register'></router-link> -->
            <span><a @click="change">登录</a></span>
        </div>
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
                return
            }

            else {
                registerAdmin({
                    userName: username.value,
                    userPwd: password.value
                }).then(res => {
                    if (res.status === 200)
                        alert('注册成功')
                    ctx.emit('changeShow')
                })

            }
        }
        const change = () => {
            ctx.emit('changeShow')
        }
        return {
            username,
            password,
            passwordcheck,
            loginn,
            change
        }
    },

}
</script>
<style scoped lang="less">
span {
    color: gray;
    position: absolute;
    cursor: pointer;
    font-weight: 3000;
    text-align: right;
    height: 70px;
    width: 70px;
    background: no-repeat url(https://img.alicdn.com/imgextra/i3/O1CN01yz6fEl1MwaRtkJyvf_!!6000000001499-55-tps-70-70.svg);
    transform: scale(1.2);
}

span:hover {
    color: black;
    transition: 0.3s;
    font-weight: 800;
}

span {
    position: absolute;
    font-size: 15px;
    transform: scale(1.5);
    right: 17px;
    top: 17px;
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
    font-size: 20px;
}


.logincard {
    display: flex;
    flex-direction: column;
    // position: absolute;
    height: 100%;
    // background-color: gray;
    opacity: 0.8;
}

.login {
    position: absolute;
    top: 20%;
    left: 38%;
    width: 680px;
    height: 500px;
    background-color: white;
    box-shadow: 1px 1px 1px gray;
    opacity: 0.9;
}

.username {
    position: absolute;
    top: 25%;
    font-size: 25px;

}

.password {
    position: absolute;
    top: 39%;
    font-size: 25px;
}

.password2 {
    position: absolute;
    height: 10px;
    top: 53%;
    font-size: 25px;
}

.usernameinput {
    position: absolute;
    top: 33%;
    height: 25px;
    width: 200px;
    border-bottom: 2px solid lightgrey;
    padding: 0px 0 5px 0
}

.passwordinput {
    position: absolute;
    top: 47%;
    height: 25px;
    width: 200px;
    border-bottom: 2px solid lightgrey;
    padding: 0 0 5px 0
}

.passwordinput2 {
    position: absolute;
    top: 60%;
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
    width: 80px;
    height: 40px;
    font-size: 20px;
    top: 70%;
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

.logincard::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: #fff;
    z-index: -1;
}

/* 于上面类似,做一个面积比box略大的矩形,并通过改变层叠次序,置于box的下层,达到给box设置边框的效果 */
.logincard::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: #fff;
    z-index: -2;
    /* 滤镜属性  给图像设置高斯模糊。"radius"一值设定高斯函数的标准差，或者是屏幕上以多少像素融在一起，所以值越大越模糊；如果没有设定值，则默认是0；这个参数可设置css长度值，但不接受百分比值。 */
    filter: blur(80px);
}

.logincard::before,
.logincard::after {
    width: 680px;
    height: 480px;
    top: 18%;
    left: 40.5%;
    // margin-right: 10px;
    /* linear-gradient() 函数用于创建一个线性渐变的 "图像"。 参数1:用角度值指定渐变的方向（或角度）  12点钟方向为0deg*/
    background: linear-gradient(235deg, rgb(239, 204, 147), #060c21, white);
}
</style>