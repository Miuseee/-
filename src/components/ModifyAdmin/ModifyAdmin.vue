<template>
    <div class="modifyadmin">
        <el-form :model="adminInfo.value" label-width="90px" label-position="left">
            <el-form-item prop="realName" label="姓名">
                <el-input v-model="adminInfo.realName" />
            </el-form-item>
            <el-form-item prop="sex" label="性别">
                <el-input v-model="adminInfo.sex" />
            </el-form-item>
            <el-form-item prop="telephone" label="联系方式">
                <el-input v-model="adminInfo.telephone" />
            </el-form-item>
            <el-form-item prop="age" label="年龄">
                <el-input v-model="adminInfo.age" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">Create</el-button>
                <el-button @click="changeShow">Cancel</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { ref, reactive, onBeforeMount } from 'vue'
import { getAdminInfo, modifyAdminInfo } from '@/request/api'
export default {
    setup(props, ctx) {
        let userName = localStorage.getItem('userName')
        onBeforeMount(() => {
            getAdminInfo({
                userName
            }).then(res => {
                console.log(res.data.data);
                adminInfo.id = res.data.data.id
                adminInfo.realName = res.data.data.realName
                adminInfo.sex = res.data.data.sexy,
                    adminInfo.telephone = res.data.data.telephone
                adminInfo.age = res.data.data.age
            })
        })
        const changeShow = () => {
            ctx.emit('changeModifyShow')
        }
        const onSubmit = () => {
            if (adminInfo.realName === '' || adminInfo.sex === '' || adminInfo.telephone === '' ||
                adminInfo.age === '') {
                alert('信息不能为空')

            } else {
                modifyAdminInfo({ adminInfo })
                    .then(res => {
                        if (res.status === 200) {
                            localStorage.setItem('realName', adminInfo.realName)
                            alert('修改成功')
                        }
                    }).catch(error => {
                        console.log(error);
                    })
            }
        }
        const input = ref('')
        let adminInfo = reactive({
            realName: '',
            sex: '',
            telephone: '',
            age: ''
        })
        return {
            input,
            adminInfo,
            changeShow,
            onSubmit
        }
    }
}
</script>
<style lang="less" scoped>
.modifyadmin {
    position: absolute;
    height: 300px;
    width: 270px;
    top: 100%;
    left: 6%;
    border-radius: 10%;
    z-index: 10000;
    background-color: lightgray;
    opacity: 0.9;
}

/deep/ .el-form {
    margin-left: 15px;
    // height: 20px;
}

/deep/ .el-form-item {
    margin-top: 35px;
    height: 20px;
}

/deep/ .el-input {
    display: block;
    position: absolute;
    height: 30px;
    top: 0%;
    font-size: 18px;
    // margin-bottom: 51px;
    width: 150px;
    margin: 0px auto;
}

/deep/ .el-button:first-child {
    position: absolute;
    height: 30px;
    width: 70px;
    left: -34%;
    top: 30%;
}

/deep/ .el-button:last-child {
    position: absolute;
    height: 30px;
    width: 70px;
    left: 21%;
    top: 30%;
}

/deep/ .el-form--label-left .el-form-item__label {
    font-size: 18px;
}
</style>