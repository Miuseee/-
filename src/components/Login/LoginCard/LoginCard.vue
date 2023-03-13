<template>
    <div id="app">
        <vue-particles color="#dedede"></vue-particles>

        <div class="logincard">
            <div class="login">
                <label class="username" for="username">UserName</label>
                <input class="usernameinput" v-model="username" type="text" name="username" placeholder="请输入用户名">
                <label class="password" for="password">Password</label>
                <input class="passwordinput" v-model="password" type="password" name="password" placeholder="请输入密码"
                    @keydown.enter="loginn">
                <el-button class="submit" round @click="loginn">登录</el-button>
            </div>
        </div>
    </div>
</template>
<script  scoped>
import { ref } from 'vue'
import { useStore } from 'vuex'
export default {
    name: 'LoginCard',
    setup(p, ctx) {
        let username = ref('')
        let password = ref('')
        const store = useStore()
        const loginn = () => {

            if (username.value === '' || password.value === '')
                alert('用户名和密码不能为空')
            else {
                store.dispatch('loginn', {
                    username: username.value,
                    password: password.value,
                    error() {
                        username.value = '',
                            password.value = ''
                    }
                })


            }
        }

        return {
            username,
            password,
            loginn,

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
    font-size: 35px;

}

.password {
    position: absolute;
    top: 41%;
    font-size: 35px;
}

.usernameinput {
    position: absolute;
    top: 35%;
    height: 25px;
    width: 200px;
    border-bottom: 2px solid lightgrey;
    padding: 0px 0 5px 0
}

.passwordinput {
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
.passwordinput:focus {
    transition: 0.5s;
    border-bottom: 2px solid red;

}

/deep/ .submit {
    position: absolute;
    width: 80px;
    height: 40px;
    font-size: 20px;
    top: 65%;
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
    left: 35.5%;
    /* linear-gradient() 函数用于创建一个线性渐变的 "图像"。 参数1:用角度值指定渐变的方向（或角度）  12点钟方向为0deg*/
    background: linear-gradient(235deg, rgb(239, 204, 147), #060c21, white);
}
</style>