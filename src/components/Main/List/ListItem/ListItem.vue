<template>
    <table>
        <thead>
            <tr>
                <th>姓名</th>
                <th>性别</th>
                <th>年龄</th>
                <th class="td4">地址</th>
                <th class="td5">学习能力</th>
                <th class="td5">表达能力</th>
                <th class="td5">思辨能力</th>
                <th class="td5">执行能力</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(list, index ) in arr" :key="list.id">
                <td>{{ list.stuName }}</td>
                <td>{{ list.sex }}</td>
                <td>{{ list.age }}</td>
                <td class="td4">{{ list.address }}</td>
                <td class="td5">{{ list.learningAbility }}</td>
                <td class="td5">{{ list.expressAbility }}</td>
                <td class="td5">{{ list.thinkingAbility }}</td>
                <td class="td5">{{ list.executeAbility }}</td>
                <td><button @click="deleteInfo(index)" class="button1 delete">删除</button><button
                        class="button1 modify">修改</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { ref } from 'vue'
import { onBeforeMount } from 'vue'
import { getStuInfo, delStuInfo } from '../../../../request/api'
import NProgress from 'nprogress'

import 'nprogress/nprogress.css'


export default {

    name: 'ListItem',
    setup() {
        let arr = ref([])
        onBeforeMount(() => {

            getStuInfo().then(res => {
                NProgress.start();
                if (res.status === 200) {
                    console.log('成功获取数据');
                    arr.value = res.data.data
                    NProgress.done()

                }
            })
                ;
        })
        const deleteInfo = (index) => {
            delStuInfo({
                id: arr.value[index].stuId,
            }).then(res => {
                if (res.status === 200)
                // console.log(res);
                {
                    arr.value.splice(index, 1)
                }
            })
        }
        const addInfo = () => {
            arr.value.push({
                id: 4,
                name: 'zyk',
                sex: '男',
                tel: '120',
                address: 'tshua'
            })
        }
        return {
            arr,
            // info,
            deleteInfo,
            addInfo
        }
    }
}
</script>

<style lang="less" scoped>
table {
    display: block;
    padding: 5px 10px;
    position: absolute;
    // margin-top: 50px;
    max-height: 70%;
    width: 100%;
    // max-width: 70%;
    overflow: scroll;
    top: 30%;
    // left: 20%;
    font-size: 12px;
    border: 1px solid #000000;
    border-collapse: collapse;
}



th,
td {
    // display: inline-block;
    padding: 8px 25px;
    width: 70px;
    text-align: center;
}

.td4 {
    width: 80px;
}

.td5 {
    width: 80px;
}

tr {
    /* display: block; */

}

tbody>tr {
    border-bottom: 1px solid gray;
}

tbody>tr:hover {
    background-color: grey;
    transition: 0.2s;
}

.button1 {
    border: none;
    // margin-right: 4px;
    width: 50px;
    height: 23px;
}

.delete {
    background-color: red;
    color: white;
    border-radius: 10px;
    padding: 2px 4px;
}

.delete:hover {
    opacity: 0.7;
}

.delete:active {
    border: 1px solid lightcoral;
    width: 49px;
    height: 22px;
}

.modify {
    background-color: lightblue;
    color: gray;
    border-radius: 10px;
    padding: 2px 5px;
}

.modify:hover {
    opacity: 0.7;
}

.modify:active {
    border: 1px solid lightcyan;
    width: 49px;
    height: 22px;
}
</style>