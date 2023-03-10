<template>
    <div class="personcard" ref="pc">
        <div class="username">
            {{ realName }}
        </div>
        <div class="buttonfather">
            <el-button size="small" class="button1" type="success" @click="showCard" plain>修改信息</el-button>
            <el-button size="small" class="button2" type="primary" @click="showCard1" plain>修改密码</el-button>
            <el-button size="small" class="button" type="danger" plain @click="exitlogin">exit</el-button>
        </div>

    </div>
</template>
<script>
import router from '../../../router/index'
import { ref } from 'vue'

export default {
    name: "PersonCard",
    components: {

    },
    setup(props, ctx) {
        let realName = ref("");
        realName = localStorage.getItem("realName");
        const exitlogin = () => {
            localStorage.setItem("token", "null");
            localStorage.setItem("realName", "null");
            router.push("/");
        };
        const showCard = () => {
            ctx.emit('changeModifyShow')
        }
        const showCard1 = () => {
            ctx.emit('changeModifyShow1')
        }
        return {
            exitlogin,
            realName,
            showCard,
            showCard1
        };
    },

}
</script>

<style lang="less" scoped>
.personcard {
    position: fixed;
    width: 90px;
    height: 170px;
    // border-radius: 0px 0px 20px 20p;
    background-color: white;
    border: 1px solid lightgray;
    opacity: 0.7;
    z-index: 1000;
}

.buttonfather {
    display: block;
    position: relative
}

.username {
    position: absolute;
    font-size: 20px;
    text-align: center;
    margin-top: 10px;
    height: 15%;
    left: 15%;
    // background-color: green;
}

/deep/ .button1 {
    position: absolute;
    font-size: 15px;
    top: 32%;
    left: 8%;
    width: 80%;
    height: 18%;
}

/deep/ .button1:hover {
    background-color: red;
}

.button2 {
    position: absolute;
    padding: 8px 5px;
    top: 56%;
    left: -3%;
    height: 30px;
    font-size: 14px;
}

/deep/ .button {
    height: 20px;
    position: absolute;
    // margin-top: 100px;
    left: 48%;
    top: 80%;
    // margin-top: 90px;
    margin-left: -21.1px;
}
</style>