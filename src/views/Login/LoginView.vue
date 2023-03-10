<template>
    <div class="login">
        <div class="header" style="font-size:12px">
            <span>新生用户画像分析管理系统</span>
            <span>登录页</span>
        </div>
        <div class="middle">
            <Transition name="register">
                <RegisterView v-if="!show123" @changeShow="changeShow" />
            </Transition>
            <Transition name="login">
                <LoginCard v-if="show123" @changeShow="changeShow" />
            </Transition>

        </div>

    </div>
</template>

<script>
import LoginCard from '@/components/Login/LoginCard/LoginCard.vue';
import RegisterView from '@/components/RegisterCard/RegisterView.vue';
import { ref } from 'vue'
export default {
    name: 'LoginView',
    components: {
        LoginCard,
        RegisterView
    },
    setup() {
        let show123 = ref(true)
        const changeShow = () => {
            show123.value = !show123.value
        }
        return {
            show123,
            changeShow
        }
    }

}

</script>

<style scoped>
* {
    overflow: hidden;
}

.login {
    /* background-image: url('https://images5.alphacoders.com/110/1100065.jpg');
     */
    background: linear-gradient(lightgray, 70%, grey);
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
}

.middle {
    height: 80%;
}

.header {
    position: relative;
    /* font-size: 30px; */
    width: 100%;
    height: 100px;
    /* font-size: 20px; */
    background-color: white;
    opacity: 0.6;
    line-height: 100px;

}

.header>span {
    margin-left: 20px;
    font-size: 25px;
}

.header>span:last-child {
    /* margin-left: 20px; */
    position: absolute;
    right: 5%;
    font-size: 25px;
    font-weight: bold;
}

.footer {
    position: absolute;
    /* position: relative; */
    /* width: 100%; */
    /* height: 20px; */

}

.register-enter-active,
.register-leave-active {
    transition: 1s ease;
}

.register-enter-from,
.register-leave-to {

    /* transform: rotate(180deg); */
    transform: translate(300px, 100px);
    opacity: 0;
}

.login-enter-active,
.login-leave-active {
    transition: 1.5 ease-in-out;
}

.login-enter-from,
.login-leave-to {
    /* transform: translate(-300px, 100px); */
    opacity: 0;
}
</style>