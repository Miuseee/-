<template>
    <div class="personcard" ref="pc">
        <div class="username">
            {{ realName }}
        </div>

        <div class="buttonfather">
            <el-button size="small" class="button" type="danger" plain @click="exitlogin">exit</el-button>
        </div>
    </div>
</template>
<script>
import router from '../../../router/index'
import { ref } from 'vue'
export default {
    name: 'PersonCard',
    setup() {
        let realName = ref('')
        realName = localStorage.getItem('realName')
        const exitlogin = () => {
            localStorage.setItem('token', 'null')
            router.push('/login')
        }
        return {
            exitlogin,
            realName
        }
    }
}
</script>

<style lang="less" scoped>
.personcard {
    position: fixed;
    // display: block;
    width: 70px;
    height: 120px;
    background-color: lightgray;
    border: 1px solid gray;
    /* opacity: 0; */
    /* display: none; */
}

.buttonfather {
    display: block;
    position: relative
}

.username {
    position: absolute;
    font-size: 12px;
    text-align: center;
    margin-top: 10px;
    height: 15%;
    left: 20%;
    background-color: green;
}

/deep/ .button {
    height: 2%;
    position: absolute;
    // margin-top: 100px;
    left: 50%;
    margin-top: 90px;
    margin-left: -21.1px;
}
</style>