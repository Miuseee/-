<template>
    <div class="login">
        <div class="header" style="font-size:12px">
            <span>新生用户画像分析管理系统</span>
            <span>登录</span>
        </div>
        <div class="middle">
            <LoginCard />
        </div>
    </div>
</template>

<script>
import LoginCard from '@/components/Login/LoginCard/LoginCard.vue';

export default {
    name: 'LoginView',
    components: {
        LoginCard
    },
    setup() {

    }

}

</script>

<style scoped>
.login {
    background-image: url('https://images5.alphacoders.com/110/1100065.jpg');
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
}

.header {
    position: relative;
    width: 100%;
    height: 50px;
    background-color: white;
    opacity: 0.6;
    line-height: 50px;
}

.header>span {
    margin-left: 20px;
}

.footer {
    position: relative;
    /* width: 100%; */
    /* height: 22%; */

}
</style>