<template>
    <div class="addstu">
        <el-form ref="form" :model="sizeForm" label-width="60px" :label-position="labelPosition" :size="size">
            <el-form-item class="input" label="姓名">
                <el-input v-model="sizeForm.stu_name" />
            </el-form-item>
            <el-form-item class="input2" label="性别">
                <!-- <el-select v-model="sizeForm.sex" placeholder="男/女"> -->
                <!-- <el-option style="height:30px" label="男" value="男" />
                    <el-option label="女" value="女" /> -->
                <el-input v-model="sizeForm.sex" />
                <!-- </el-select> -->
            </el-form-item>
            <el-form-item class="input" label="学号">
                <el-input v-model="sizeForm.stu_number" />
            </el-form-item>
            <el-form-item class="input" label="年龄">
                <el-input placeholder="年龄" v-model="sizeForm.age" />
            </el-form-item>
            <el-form-item class="input" label="电话">
                <el-input v-model="sizeForm.telephone" />
            </el-form-item>
            <el-form-item class="input" label="家庭地址">
                <el-input v-model="sizeForm.address" />
            </el-form-item>
            <el-form-item class="input" label="QQ">
                <el-input v-model="sizeForm.qq" />
            </el-form-item>
            <el-form-item>
                <el-button class="input button1" type="primary" @click="onSubmit">Create</el-button>
                <el-button class="input button2" @click="onCancel">Cancel</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import { ref, reactive, inject } from 'vue'
import { addStuInfo } from '@/request/api'
export default {
    setup(props, context) {
        // console.log();
        // const emit = defineEmits(['refresh'])
        // const ctx = useContext();
        const labelPosition = ref('left')
        const reload = inject('reload')
        const size = ref('small')
        const sizeForm = reactive({
            // stu_id: '1asd',
            stu_number: '',
            stu_name: '',
            age: '',
            sex: '',
            telephone: '',
            address: '',
            qq: '',
            permissions: 0,
            learning_ability: '',
            express_ability: '',
            thinking_ability: '',
            execute_ability: '',
        })
        function onSubmit() {
            console.log(sizeForm.stu_name)
            addStuInfo({
                // stu_id: sizeForm.stu_id,
                stuName: sizeForm.stu_name,
                stuNumber: sizeForm.stu_number,
                age: sizeForm.age,
                sex: sizeForm.sex,
                telephone: sizeForm.telephone,
                address: sizeForm.address,
                qq: sizeForm.qq,
                permissions: sizeForm.permissions
            }).then(res => {
                if (res.status === 200) {
                    reload()
                }

                console.log(res);
            })
        }
        function onCancel() {
            context.emit('refresh')
        }
        return {
            labelPosition,
            size,
            sizeForm,
            onSubmit,
            onCancel


        }
    }

}
</script>
<style lang="less" scoped>
.addstu {
    // overflow: hidden;
    position: absolute;
    z-index: 1000;
    height: 400px;
    width: 300px;
    top: 10%;
    left: 30%;
    background-color: red;
}


// /deep/ 
/deep/ .input {
    position: absolute;
    top: 10%;
    left: 5%;
    // height: 10px;
}

.el-form-item--small {
    position: absolute;
    height: 30px;
}

/deep/ .input2 {
    position: absolute;
    top: 20%;
    left: 5%;
}


/deep/ .el-input {

    position: absolute;
    top: 0%;
    left: 0%;
    height: 20px;
    width: 150px;
}

/deep/ .el-form-item {
    position: absolute;
}

/deep/ .el-form-item:nth-child(3) {
    position: absolute;
    top: 30%;
}

/deep/ .el-form-item:nth-child(4) {
    position: absolute;
    top: 40%;
}

/deep/ .el-form-item:nth-child(5) {
    position: absolute;
    top: 50%;
}

/deep/ .el-form-item:nth-child(6) {
    position: absolute;
    top: 60%;
}

/deep/ .el-form-item:nth-child(7) {
    position: absolute;
    top: 70%;
}

/deep/ .el-form-item:nth-child(8) {
    position: absolute;
    top: 80%;
}

/deep/ .el-form-item:nth-child(9) {
    position: absolute;
    top: 100%;
}

/deep/ .el-button+.el-button {
    // position: absolute;
    margin-left: 120px;
}
</style>