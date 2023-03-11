<template>
    <div>
        <div class="refresh">
            <button class="button2" ref="button" @click="refresh">刷新</button>
        </div>
        <button class="export" @click="exportList(arr)">导出</button>
        <table ref="table" id="table">
            <thead>
                <tr>
                    <th ref="th">姓名</th>
                    <th ref="th">性别</th>
                    <th ref="th">年龄</th>
                    <th ref="th" class="td4">地址</th>
                    <th ref="th" class="td5">学习能力</th>
                    <th ref="th" class="td5">表达能力</th>
                    <th ref="th" class="td5">思辨能力</th>
                    <th ref="th" class="td5">执行能力</th>
                    <th ref="th">操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(list, index ) in arr" :key="list.id">
                    <td>{{ list.stuName }}</td>
                    <td ref="td">{{ list.sex }}</td>
                    <td>{{ list.age }}</td>
                    <td class="td4">{{ list.address }}</td>
                    <td class="td5">{{ list.learningAbility }}</td>
                    <td class="td5">{{ list.expressAbility }}</td>
                    <td class="td5">{{ list.thinkingAbility }}</td>
                    <td class="td5">{{ list.executeAbility }}</td>
                    <td><button @click="deleteInfo(index)" class="button1 delete">删除</button><button @click="show(list)"
                            class="button1 modify">修改</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import { ref } from 'vue'
import { onBeforeMount } from 'vue'
import { getStuInfo, delStuInfo } from '../../../../request/api'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '@/store'
import * as XLSX from 'xlsx'
export default {
    name: 'ListItem',
    setup(state, context) {
        let arr = ref([])
        let send = ref([])
        let th = ref()
        let button = ref()
        let table = ref()
        onBeforeMount(() => {
            getStuInfo().then(res => {

                if (res.status === 200) {
                    arr.value = res.data.data
                    // console.log(arr.value)
                    NProgress.done()
                }
            })
        })
        const deleteInfo = (index) => {
            delStuInfo({
                id: arr.value[index].stuId,
            }).then(res => {
                NProgress.start();
                if (res.status === 200) {
                    NProgress.done()
                    arr.value.splice(index, 1)
                }
            })
        }
        const show = (list) => {
            send.value = list
            context.emit('refresh')
        }
        const updateList = () => {
            NProgress.start();
            setTimeout(() => {
                arr.value = []
                store.state.Type.stuArr.forEach((value, index,) => {
                    arr.value.push(store.state.Type.stuArr[index])
                })
                if (arr.value.length === 0) {
                    alert('暂无该学生信息')
                    refresh()
                }
                NProgress.done()
            }, 300)
        }
        const changeTable = () => {
            table.value.style.height = '55%'
            table.value.style.transform = 'translateY(0)'
            button.value.style.display = 'block'
        }
        const minusTable = () => {
            table.value.style.height = '100px'
            table.value.style.transform = 'translateY(400px)'
            button.value.style.display = 'none'
        }
        const refresh = () => {
            getStuInfo().then(res => {
                NProgress.start();
                if (res.status === 200) {
                    arr.value = res.data.data
                    NProgress.done()
                }
            })
        }
        const exportList = (arr) => {
            let tableData = [
                ['ID', '姓名', '学号', '性别', '年龄', '电话', 'QQ', '地址', '学习能力', "表达能力", "思辨能力", "执行能力"]
            ]
            arr.forEach((item, index) => {
                let rowData = []
                rowData = [
                    item.stuId,
                    item.stuName,
                    item.stuNumber,
                    item.sex,
                    item.age,
                    item.telephone,
                    item.qq,
                    item.address,
                    item.learningAbility,
                    item.expressAbility,
                    item.thinkingAbility,
                    item.executeAbility
                ]
                tableData.push(rowData)
            })
            let ws = XLSX.utils.aoa_to_sheet(tableData)
            let wb = XLSX.utils.book_new()
            XLSX.utils.book_append_sheet(wb, ws, '学生信息')
            XLSX.writeFile(wb, '学生信息.xlsx')
        }
        return {
            arr,
            deleteInfo,
            show,
            th,
            send,
            updateList,
            table,
            changeTable,
            minusTable,
            refresh,
            button,
            exportList
        }
    }
}
</script>

<style lang="less" scoped>
.refresh {
    position: absolute;
    display: block;
    top: 48%;
    left: 0.35%;
    width: 30px;
    height: 30px;

}

.button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    display: none;
}

.button2 {
    border-radius: 50%;
    width: 50px;
    height: 40px;
    font-size: 15px;
    border: 2px solid white;
    background-color: lightgray;
    display: none;
}

.button2:active {
    border: 1px solid white;
}

.button2:hover {
    background-color: gray;
}

table {
    display: block;
    padding: 0px 10px;
    position: absolute;
    width: 95%;
    height: 100px;
    overflow: scroll;
    top: 40%;
    left: 3%;
    font-size: 20px;
    border-radius: 10px;
    border-collapse: collapse;
    transition: 1s;
    transform: translateY(400px);
}

th:first-child {
    border-radius: 9px 0 0 0;
}

th:last-child {
    border-radius: 0 9px 0 0;
}

th,
td {
    padding: 10px 45px;
    width: 70px;
    text-align: center;
}

.td4 {
    width: 320px;
}

.td5 {
    width: 80px;
}

tbody>tr:nth-child(odd) {
    /* display: block; */
    background-color: whitesmoke;
    opacity: 0.8;

}

tbody>tr:hover {
    background-color: lightgrey;
    transition: 0.2s;
}

.button1 {
    border: none;
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

.export {
    position: absolute;
    height: 40px;
    width: 50px;
    top: 55%;
    left: 0.25%;
    border-radius: 50%;
    border: 2px solid gray;
    background-color: lightgray(222, 207, 207);
}

.export:hover {
    border: 2px solid lightgrey;
    background-color: seashell;
}

::-webkit-scrollbar {
    width: 8px;
    height: 6px;
}

::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px white(85, 72, 72, 0.2);
    background: white;
}

::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 0;
    background: rgba(157, 155, 162, 0.32);

}
</style>