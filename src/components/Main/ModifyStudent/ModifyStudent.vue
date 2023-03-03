<template>
    <div class="modify">
        <el-form ref="form" :model="sizeForm.value" label-width="50px" :label-position="labelPosition" :size="size">
            <el-form-item prop="stuName" class="input" label="姓名">
                <el-input v-model="sizeForm.stuName" />
            </el-form-item>
            <el-form-item prop="sex" class="input" label="性别">
                <!-- <el-select v-model="sizeForm.sex" placeholder="男/女"> -->
                <!-- <el-option style="height:30px" label="男" value="男" />
                    <el-option label="女" value="女" /> -->
                <el-input v-model="sizeForm.sex" />
                <!-- </el-select> -->
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
import { onBeforeMount, onMounted } from 'vue'
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
        onBeforeMount(() => {

        })
        onMounted(() => {
            context.emit('get')
            // let stuId = props.stuId
            console.log(props.list);
            // findStuById({ stuId }).then(res => {
            //     sizeForm.value = res.data.data
            //     console.log('res', sizeForm.value.stuName);
            // })
        })

        const labelPosition = ref('left')
        const onSubmit = () => {
            updateStuInfo({
                sizeForm
            }).then(res => {
                console.log(res);
            })
            // console.log(props.stuId);
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
    height: 300px;
    width: 250px;
    background-color: red;
    z-index: 1000;
}

/deep/ .input {
    margin-top: 10px;
    height: 18px;
    width: 180px;
}

.el-form-item {
    // position: absolute;
    height: 18px;
    margin-left: 30px;
}

.button1 {
    font-size: 12px;
    height: 18px;
    width: 50px;
}


.button2 {
    font-size: 12px;
    height: 18px;
    width: 50px;
}
</style>