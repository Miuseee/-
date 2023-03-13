<template>
    <div class="auditplanet" @mouseenter="big" @mouseleave="small" ref="audit">
        <div class="messagecount" ref="message">
            {{ count }}

            <!-- 0 -->
        </div>
        <div class="list" ref="list">
            <table @click="showInfo" style="font-size: 12px;">
                <thead>
                    <th>申请人</th>
                    <th>内容</th>
                    <th>审批人</th>
                    <th>状态</th>
                    <th>操作</th>
                </thead>
                <tbody>
                    <tr v-for="(list, index) in auditInfo" :key="list.id">
                        <td>{{ list.applicant }}</td>
                        <td>{{ list.reasonContent
                        }}</td>
                        <td>{{ list.auditor }}</td>
                        <td>{{ list.result }}</td>
                        <td><button @click="submitModify(index)">通过</button>
                            <!-- <button @click="sendEmail(list.id)">发送邮件</button> -->
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { ref, reactive, onBeforeMount } from 'vue';
import { getAllAuditInfo, SubmitModifyAudit, sendEmailToUser } from '@/request/api'
export default {
    setup() {
        let auditInfo = ref([])
        let count = ref(0)
        onBeforeMount(() => {
            getAllAuditInfo()
                .then(res => {
                    res.data.data.forEach((value, index) => {
                        if (value.result !== '已通过') {
                            count.value++
                            auditInfo.value.push(value)
                        }
                    })
                })
        })
        let audit = ref()
        let message = ref()
        let list = ref()
        const big = () => {
            audit.value.style.transform = 'rotate(90deg,90deg) translateY(5px)'
            audit.value.style.width = '600px'
            audit.value.style.height = '300px'
            audit.value.style.top = '80px'
            audit.value.style.left = '50%'
            list.value.style.display = 'block'
            audit.value.style.borderRadius = '0'
            message.value.style.display = 'none'
        }
        const small = () => {
            audit.value.style.transform = ''
            audit.value.style.top = '48%'
            audit.value.style.width = '60px'
            audit.value.style.height = '60px'
            audit.value.style.left = '66%'
            audit.value.style.borderRadius = '50%'
            list.value.style.display = 'none'
            message.value.style.display = 'block'
        }
        const submitModify = (index) => {
            const { id } = auditInfo.value[index]
            const userId = localStorage.getItem('id')
            SubmitModifyAudit({
                id: id,
                userId: userId
            }).then(res => {

                if (res.data.code === 200) {
                    sendEmailToUser({
                        id: id
                    }).then(() => {
                        alert('已通过并发送邮件')
                    })
                    auditInfo.value = []
                    getAllAuditInfo()
                        .then(res => {
                            count.value = 0
                            res.data.data.forEach((value, index) => {
                                if (value.result !== '已通过') {

                                    count.value++
                                    auditInfo.value.push(value)
                                }
                            })
                        })
                }
            })
        }

        return {
            big,
            audit,
            small,
            message,
            list,
            auditInfo,
            submitModify,
            count,
        }
    }
}
</script>

<style scoped>
button {
    display: inline-block;
    font-size: 18px;
    border: none;
    margin-right: 3px;
    border-radius: 3px;
}

button:nth-child(1) {
    background-color: rgb(110, 114, 202);
}

button:hover {
    background-color: purple;
}

button:nth-child(2) {
    background: linear-gradient(rgb(212, 70, 127), red);
}

td:nth-child(5) {
    width: 80px;
}

.auditplanet {
    position: absolute;
    width: 60px;
    height: 60px;
    top: 48%;
    left: 66%;
    border-radius: 50%;
    background: linear-gradient(135deg, rgb(17, 38, 174), 40%, rgb(132, 117, 213));
    box-shadow: 0 0 100px 28px rgb(8, 77, 152);
    animation: float 3s infinite ease;
    transition: 0.5s ease-in-out;
}

.auditplanet:before {
    content: '审核列表';
    position: absolute;
    top: -34px;
    left: -5px;
    width: 90px;
    font-size: 18px;
    text-shadow: 1.5px 1.5px rgb(91, 94, 203);
    color: rgb(139, 129, 175);
}

.list {
    position: relative;
    font-size: 20px;
    left: 10px;
    overflow: scroll;
    display: none;
}

::-webkit-scrollbar {

    width: 5px;

}

.messagecount {
    position: absolute;
    width: 25px;
    height: 25px;
    font-size: 18px;
    font-weight: bold;
    left: 35px;
    text-align: center;
    line-height: 25px;
    border-radius: 50%;
    background-color: red;
    color: white;
    transition: 1s;
}

table {
    display: block;
    padding: 10px 20px;
    /* position: absolute; */
    height: 100px;
    font-size: 20px;
}

th,
td {
    height: 30px;
    font-size: 20px;
    width: 100px;
    text-align: center;
}

@keyframes float {
    0% {
        box-shadow: 0 0 40px 12px rgb(8, 77, 152);
    }

    50% {
        box-shadow: 0 0 30px 8px rgb(150, 11, 94);
        /* background: linear-gradient(45deg, rgb(172, 52, 118), 40%, rgb(44, 16, 207)); */
    }

    100% {
        box-shadow: 0 0 40px 12px rgb(8, 77, 152);
    }
}
</style>