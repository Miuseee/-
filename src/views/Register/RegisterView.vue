<template>
    <div class="registercard">
        <div class="register">
            <el-form :label-position="labelPosition" ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="60px"
                class="demo-ruleForm" :size="small" status-icon>
                <el-form-item class="formitem" label="用户名" prop="username">
                    <el-input v-model="username" class="forminput" />
                </el-form-item>
                <el-form-item class="formitem" label="密码" prop="name">
                    <el-input v-model="password" type="password" class="forminput" />
                </el-form-item>
                <el-form-item class="formitem" label="确认密码" prop="name">
                    <el-input v-model="passwordcheck" type="password" class="forminput" />
                </el-form-item>
                <!-- <el-form-item class="formitem" label="性别">
                    <el-select class="formselect" size="small" v-model="choose" placeholder="性别">
                        <el-option size="small" label="男" value="男" />
                        <el-option size="small" label="女" value="女" />
                    </el-select>
                </el-form-item> -->
            </el-form>
            <el-button class="submit" round @Click="submit">Submit</el-button>
            <router-link to="/login"><span>注册</span></router-link>
        </div>

    </div>
</template>
<script  scoped>
import { ref } from 'vue'
import { registerAdmin } from '@/request/api'
export default {

    name: 'RegisterCard',
    setup() {
        let username = ref('')
        let password = ref('')
        let passwordcheck = ref('')
        let choose = ref('男')
        const labelPosition = ref('center')
        const small = ref('small')
        let pat = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{5,20}$/;
        // const rules = reactive({
        //     username: [{ required: true, trigger: 'blur', message: '用户名不能为空' }],

        // })
        const submit = () => {
            let judge = pat.test(password.value)
            if (!judge) {
                alert('密码必须为5~10位的数字+字母；字母+特殊字符，特殊字符+数字')
                username.value = ''
                password.value = ''
                return
            }
            if (password.value === passwordcheck.value) {
                registerAdmin({
                    userName: username.value,
                    userPwd: password.value
                }).then(res => {
                    console.log(res.data);
                })
            }
            console.log(username.value, password.value, passwordcheck.value)
        }
        return {
            choose,
            labelPosition,
            small,
            username,
            password,
            passwordcheck,
            submit
        }
    }

}
</script>

<style scoped lang="less">
select {
    display: block;
}

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


.registercard {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 400px;
}

.register {
    position: absolute;
    /* margin-top: 100px; */
    top: 20%;
    left: 50%;
    width: 300px;
    height: 300px;
    background-color: red;
}

/deep/ .demo-ruleForm {
    position: absolute;
    top: 28%;
    left: 5%;
}

/deep/ .forminput {
    margin-top: 5px;
    width: 140px;
    height: 15px;
}

/deep/ .formoption {
    width: 140px;
    height: 15px;
}

/deep/ .formselect {
    // font-size: 10px;
    width: 70px;
    height: 20px;
}

/deep/ .formitem {
    height: 10px
}

/deep/ .submit {
    position: absolute;
    width: 50px;
    height: 15px;
    font-size: 10px;
    transform: scale(0.8);
    top: 57%;
    left: 23%;
    color: gray
}

/deep/ .submit:hover {
    width: 70px;
    height: 25px;
    transition: 0.3s;
    color: orangered;
    border: 1px solid orange;
}
</style>