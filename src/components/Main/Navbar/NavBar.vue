<template>
    <div class="all">
        <div class="navbar" ref="navbar">
            <div>
                <el-avatar ref="img" @mouseenter="onEnterTd" class="image"
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
            </div>
            <el-divider direction="vertical" class="vertical" />
            <span class="text-large font-600 mr-3">新生用户画像分析管理系统</span>
        </div>
        <Transition>
            <PersonCard @changeModifyShow="changeModifyShow" @changeModifyShow1="changeModifyShow1" @mouseleave="onLeaveTd"
                v-if="show" />
        </Transition>
        <Transition name="sun">
            <div class="weather sunny" v-if="showSunny" @click="showSun"></div>
        </Transition>
        <Transition name="moon">
            <div class="moon" v-if="!showSunny" @click="showSun"></div>
        </Transition>
        <Transition>
            <ModifyAdmin v-if="showModifyAdmin" @changeModifyShow="changeModifyShow" />
        </Transition>
        <Transition>
            <ModifyPwd v-if="showModifyAdmin1" @changeModifyShow1="changeModifyShow1" />
        </Transition>
    </div>
</template>
<script>
import PersonCard from '../PersonCard/PersonCard.vue';
import { ref } from 'vue'
import ModifyAdmin from '@/components/ModifyAdmin/ModifyAdmin.vue';
import ModifyPwd from '../ModifyPwd/ModifyPwd.vue';
export default {
    name: 'NavbarView',
    components: {
        PersonCard,
        ModifyAdmin,
        ModifyPwd
    },
    setup(a, ctx) {
        let navbar = ref()
        let img = ref()
        // const reload = inject('reload')
        let Search = ref()
        let realName = ref('')
        realName = localStorage.getItem('realName')
        let show = ref(false)
        let showSunny = ref(true)
        let showModifyAdmin = ref(false)
        let showModifyAdmin1 = ref(false)
        const onEnterTd = () => {
            show.value = true
            img.value.top = '100px'
        }
        const onLeaveTd = () => {
            show.value = false
        }
        const get3 = () => {
            console.log('get3')
            ctx.emit('get2')
        }
        const showSun = () => {
            showSunny.value = !showSunny.value
        }
        const changeModifyShow = () => {
            showModifyAdmin.value = !showModifyAdmin.value
        }
        const changeModifyShow1 = () => {
            showModifyAdmin1.value = !showModifyAdmin1.value
        }
        return {
            changeModifyShow,
            changeModifyShow1,
            onEnterTd,
            onLeaveTd,
            show,
            realName,
            get3,
            Search,
            showSunny,
            showSun,
            showModifyAdmin,
            showModifyAdmin1,
            navbar,
            img
        }
    }
}
</script>

<style lang="less" scoped>
.all {
    position: absolute;
    height: 8%;
    width: 100%;
    z-index: 1;
    // background-color: black;
}

a {
    text-decoration: none;
    color: black;
}

span {
    display: block
}

/deep/ .image {
    width: 50px;
    height: 50px;
    margin-top: 10px;
    margin-left: 10px;
}


.search {
    flex: 1
}

.navbar {
    display: flex;
    // width: 100%;
    margin: 0;
    padding: 6px;
    opacity: 0.8;
    background-color: skyblue;
    color: rgb(55, 87, 122) // border-bottom: 1px grey solid;
}

.navbar:hover {
    margin: 0;
    background-color: white;
    color: grey;
    transition: 1s;
    border-bottom: 1px lightgray solid;
}

/deep/ .mr-3 {
    font-size: 29px;
    flex: 11;
    // font-size: 13px;
    margin-left: 20px;
    margin-top: 20px;
    line-height: 23px;
}

/deep/ .vertical {
    margin: 12px 10px 0px 25px;
    height: 50px;

}


.v-enter-active,
.v-leave-active {
    transition: 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}


.sun-enter-active,
.sun-leave-active {
    transition: 0.5s ease;
}

.sun-enter-from,
.sun-leave-to {
    transform: translateX(-40px);
    opacity: 0;
}

.moon-enter-active,
.moon-leave-active {
    transition: 0.5s ease;
}

.moon-enter-from,
.moon-leave-to {
    transform: translateX(40px);
    opacity: 0;
}

.sunny {
    position: absolute;
    left: 95%;
    top: 6px;
}

.sunny:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 18px;
    height: 18px;
    background: #f6d963;
    border-radius: 50%;
    box-shadow: 0 0 20px #ff0;
    z-index: 2;
}

.sunny:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -17.5px 0 0 -17.5px;
    width: 35px;
    height: 35px;
    background: #ffeb3b;
    clip-path: polygon(50% 0%,
            65.43% 25%,
            93.3% 25%,
            78.87% 50%,
            93.3% 75%,
            64.43% 75%,
            50% 100%,
            35.57% 75%,
            6.7% 75%,
            21.13% 50%,
            6.7% 25%,
            35.57% 25%);
    z-index: 1;
    animation: sunScale 2s linear infinite;
}

@keyframes sunScale {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.2);
    }

    100% {
        transform: scale(1);
    }
}

.moon {
    position: absolute;
    top: 35%;
    left: 88%;
    width: 30px;
    height: 30px;
    background: yellow;
    border-radius: 50%;
    box-shadow: 0 0 30px 0px yellow, 0 0 100px 0 white;
    background-image: linear-gradient(45deg,
            lightyellow 0%,
            yellow 90%,
            yellow 100%);

}
</style>