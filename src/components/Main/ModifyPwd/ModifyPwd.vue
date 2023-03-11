<template>
    <div class="modify">
        <el-form ref="form" :model="sizeForm.value" label-width="90px" :label-position="labelPosition" :size="size">
            <el-form-item prop="stuName" class="input" label="用户名">
                <el-input v-model="sizeForm.userName" />
            </el-form-item>
            <el-form-item prop="stuNumber" class="input" label="旧密码">
                <el-input v-model="sizeForm.pwd" />
            </el-form-item>
            <el-form-item prop="stuNumber" class="input" label="新密码">
                <el-input v-model="sizeForm.newPwd" />
            </el-form-item>
            <el-form-item prop="age" class="input" label="确认密码">
                <el-input v-model="sizeForm.newPwd1" />
            </el-form-item>
            <el-form-item>
                <el-button class="input1 button1" type="primary" @click="onSubmit">Create</el-button>
                <el-button class="input1 button2" @click="onCancel">Cancel</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { ref, reactive } from 'vue'
import { updatePwd } from '@/request/api'
import store from '@/store/index'
export default {
    props: {
        list: String
    },
    setup(props, context) {
        let sizeForm = reactive({
            userName: store.state.username,
            userId: localStorage.getItem('id'),
            pwd: '',
            newPwd: '',
            newPwd1: '',
        })
        const labelPosition = ref('left')
        const onSubmit = () => {
            if (sizeForm.pwd !== store.state.password) {
                alert('旧密码不符')
                return
            }
            if (sizeForm.newPwd !== sizeForm.newPwd) {
                alert('两次密码不匹配')
                return
            }
            else {
                updatePwd({
                    sizeForm
                }).then((res) => {
                    if (res.data.code === 200) {
                        alert('修改成功')
                        onCancel()
                    }

                }).catch(error => {
                    alert(error)
                })
            }

        }
        const onCancel = () => {
            context.emit('changeModifyShow1')
        }
        return {
            labelPosition,
            onSubmit,
            onCancel,
            sizeForm,
            props
        }
    }

}
</script>

<style lang="less" scoped>
.modify {
    position: absolute;
    top: 20%;
    left: 5%;
    height: 380px;
    width: 280px;
    background-color: lightgray;
    // font-size: 200px;
    opacity: 0.9;
    border-radius: 30px;
    z-index: 100000;

}

/deep/ .input {
    margin-top: 35px;
    // height: px;
    width: 230px;
}

.el-form-item {

    height: 32px;
    margin-left: 30px;
}

.button1 {
    font-size: 18px;
    height: 28px;
    width: 70px;
    margin-left: -58px;
}


.button2 {
    font-size: 18px;
    height: 28px;
    width: 70px;
    margin-left: 20px;
}

.input1 {
    margin-top: 20px;
}

/deep/ .el-form--label-left .el-form-item__label {
    justify-content: flex-start;
    font-size: 19px;
}
</style>