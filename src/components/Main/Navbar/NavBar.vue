<template>
    <div class="all">
        <div class="navbar">
            <div>
                <el-avatar @mouseenter="onEnterTd" class="image"
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
            </div>

            <el-divider direction="vertical" class="vertical" />
            <span class="text-large font-600 mr-3">新生用户画像分析管理系统</span>
            <span class="login">
                <router-link to="/login">登录</router-link>
            </span>

            <span class="register"><router-link to="/register">注册</router-link></span>
        </div>
        <Transition>
            <PersonCard @mouseleave="onLeaveTd" v-if="show" />
        </Transition>
    </div>
</template>
<script>
import PersonCard from '../PersonCard/PersonCard.vue';
import { ref } from 'vue'
export default {
    name: 'NavbarView',
    components: {
        PersonCard
    },
    setup() {
        let show = ref(false)
        //鼠标移入展示信息卡片
        const onEnterTd = () => {
            show.value = true
        }
        //鼠标移出隐藏信息卡片
        const onLeaveTd = () => {
            show.value = false
        }
        return {
            onEnterTd,
            onLeaveTd,
            show
        }
    }


}
</script>

<style lang="less" scoped>
.navbar {
    height: 5%;
}

a {
    text-decoration: none;
    color: black;
}

div {}

span {
    display: block
}

.login {
    flex: 1;
    font-size: 12px;
    text-align: center;
    line-height: 25px;
}

.login:hover {
    font-weight: bold;
    color: black;
    border-bottom: 1px gray solid;
}

.register {
    flex: 1;
    text-align: center;
    font-size: 12px;
    line-height: 25px;
}

.register:hover {
    font-weight: bold;
    color: black;
    border-bottom: 1px gray solid;
}

/deep/ .image {
    width: 25px;
    height: 25px;

    margin-left: 10px;
}

.navbar {
    display: flex;
    // width: 100%;
    margin: 0;
    padding: 6px;
    background-color: #6b6d71;
    border-bottom: 1px grey solid;
}

.navbar:hover {
    margin: 0;
    background-color: white;
    color: grey;
    transition: 1s;
    border-bottom: 1px lightgray solid;
}

/deep/ .mr-3 {
    flex: 11;
    font-size: 13px;

    margin-left: 13px;
    line-height: 23px;
}

/deep/ .vertical {
    margin: 5px 0 0 13px
}


.v-enter-active,
.v-leave-active {
    transition: 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>