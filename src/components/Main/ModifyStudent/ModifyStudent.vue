<template>
    <div class="modify">
        <el-form ref="form" :model="sizeForm.value" label-width="50px" :label-position="labelPosition" :size="size">
            <el-form-item prop="stuName" class="input" label="姓名">
                <el-input v-model="sizeForm.stuName" />
            </el-form-item>
            <el-form-item prop="sex" class="input" label="性别">
                <el-input v-model="sizeForm.sex" />
            </el-form-item>
            <el-form-item prop="stuNumber" class="input" label="学号">
                <el-input v-model="sizeForm.stuNumber" />
            </el-form-item>
            <el-form-item prop="age" class="input" label="年龄">
                <el-input v-model="sizeForm.age" placeholder="年龄" />
            </el-form-item>
            <el-form-item prop="telephone" class="input" label="电话">
                <el-input v-model="sizeForm.telephone" />
            </el-form-item>
            <el-form-item prop="address" class="input" label="地址">
                <el-input v-model="sizeForm.address" />
            </el-form-item>
            <el-form-item prop='qq' class="input" label="QQ">
                <el-input v-model="sizeForm.qq" />
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
import { onMounted } from 'vue'
import { updateStuInfo } from '@/request/api'
export default {
    props: {
        list: String
    },
    setup(props, context) {
        let sizeForm = reactive({
            stuId: props.list.stuId,
            stuNumber: props.list.stuNumber,
            stuName: props.list.stuName,
            age: props.list.age,
            sex: props.list.sex,
            telephone: props.list.telephone,
            address: props.list.address,
            qq: props.list.qq,
            permissions: 0,
            learning_ability: '',
            express_ability: '',
            thinking_ability: '',
            execute_ability: '',
        })
        onMounted(() => {
            context.emit('get')
        })
        const labelPosition = ref('left')
        const onSubmit = () => {
            updateStuInfo({
                sizeForm
            }).then((res) => {
                if (res.data.code === 200);
                alert('修改成功')
                context.emit('refresh')
            })
        }
        const onCancel = () => {
            context.emit('refresh')
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
    left: 50%;
    height: 500px;
    width: 350px;
    background-color: lightgray;
    opacity: 0.9;
    border-radius: 30px;
    z-index: 1000;
}

/deep/ .input {
    margin-top: 30px;
    height: 38px;
    width: 260px;
}

.el-form-item {
    font-size: 20px;
    // position: absolute;
    height: 28px;
    margin-left: 30px;
}

.button1 {
    font-size: 12px;
    height: 25px;
    width: 50px;
    margin-left: 20px;
}


.button2 {
    font-size: 12px;
    height: 25px;
    width: 50px;
    margin-left: 60px;
}
</style>