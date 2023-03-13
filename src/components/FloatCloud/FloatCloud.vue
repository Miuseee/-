<template>
    <div class="cloudmove">
        <div class="messagecount" ref="message">
            {{ count }}
        </div>
        <div class="cloud1" @mouseenter="big" @mouseleave="small" ref="cloud">
            <table @click="showInfo" style="font-size: 12px;" ref="list">
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
        <div class="cloudshadow1">
        </div>
        <div class="cloud two" @click="showAdd">
        </div>
        <div class="cloudshadow twos">
        </div>
        <div class="arrow" @click="showReg">
            >
        </div>
        <div class="yellowlight">
        </div>
        <div class="yellowlight two2">
        </div>
        <div class="yellowlight three">
        </div>
        <div class="yellowlight four">
        </div>
        <div class="yellowlight five">
        </div>
        <div class="sidebar">
            <button class="show" @click="show">展示</button>
            <button class="hide" @click="hide">收起</button>
        </div>
        <SearchStudent @get2="get2" class='search' ref="Search" />
        <RegisterCard class="register" @hideRegTag="hideRegTag" />
    </div>
</template>

<script>
import { ref, onMounted, onBeforeMount } from 'vue';
import SearchStudent from '../Main/SearchStudent/SearchStudent.vue';
import RegisterCard from '@/components/RegisterCard/RegisterView.vue'
import { getAllAuditInfo, SubmitModifyAudit, sendEmailToUser } from '@/request/api'
export default {
    components: {
        SearchStudent,
        RegisterCard
    },
    setup(p, ctx) {
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
        onMounted(() => {
            Search.value.searchbox.style.background = 'white'
            Search.value.searchbox.style.color = 'white'
            Search.value.searchbox.style.boxShadow = '0 0 10px 10px whitesmoke'
        })
        const dick = ref()
        let auditInfo = ref([])
        const showD = ref(false)
        const Search = ref()
        const cloud = ref()
        const list = ref()
        const count = ref(0)
        const message = ref()
        let registerCard = ref()
        const showAdd = () => {
            ctx.emit("addshow")
        }
        const showDick = () => {
            showD.value = true
        }
        const moveDick = (e) => {
            let x3 = e.clientX - 50 + "px"
            let y3 = e.clientY - 100 + "px"
            dick.value.style.transform = "translate(" + x3 + "," + y3 + ") "
        }
        const hideDick = () => {
            showD.value = false
        }
        const get2 = () => {
            ctx.emit('get2')
        }
        const big = () => {
            cloud.value.style.transform = 'rotate(90deg,90deg) translateY(5px)'
            cloud.value.style.width = '600px'
            cloud.value.style.height = '300px'
            cloud.value.style.top = '0px'
            cloud.value.style.left = '40%'
            list.value.style.display = 'block'
            cloud.value.style.borderRadius = '0'
            message.value.style.display = 'none'
        }
        const small = () => {
            cloud.value.style.top = '15%'
            cloud.value.style.left = '60.5%'
            cloud.value.style.width = '110px'
            cloud.value.style.height = '40px'
            // cloud.value.style.left = '66%'
            cloud.value.style.borderRadius = '30px'
            list.value.style.display = 'none'
            message.value.style.display = 'block'
        }
        const submitModify = (index) => {
            const { id } = auditInfo.value[index]
            const userId = localStorage.getItem('id')
            console.log(id, userId);
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
        const hideRegTag = () => {
            document.getElementsByClassName('register')[0].style.transform = 'translateX(100px)'
            document.getElementsByClassName('arrow')[0].style.transform = 'translateX(15px)'
            document.getElementsByClassName('arrow')[0].style.display = 'block'
        }
        const showReg = () => {
            if (localStorage.getItem('userType') === '2') {
                document.getElementsByClassName('register')[0].style.transform = 'translateX(-300px)'
                document.getElementsByClassName('arrow')[0].style.transform = 'translateX(-250px)'
                document.getElementsByClassName('arrow')[0].style.display = 'none'

            }
            else {
                alert('很抱歉 您还没有权限')
                return
            }

        }
        const show = () => {
            ctx.emit('tablePlanet')
        }
        const hide = () => {
            ctx.emit('tableMinus')
        }
        return {
            showAdd,
            showDick,
            dick,
            showD,
            hideDick,
            moveDick,
            Search,
            get2,
            auditInfo,
            big,
            small,
            cloud,
            list,
            message,
            count,
            submitModify,
            registerCard,
            showReg,
            hideRegTag,
            show,
            hide
        }

    }
}
</script>

<style scoped>
.sidebar {
    position: absolute;
    top: 57%;
    left: 0%;
    width: 70px;
    height: 100px;
    /* opacity: 0.9; */
    background-color: transparent;
}

.hide {
    margin-left: 5px;
    height: 30px;
    /* margin-bottom: 20px; */
}

.show {
    margin-left: 5px;
    height: 30px;

}

img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    z-index: -100;
}

.dick {
    z-index: -100;
}

.register {
    position: absolute;
    top: 0;
    right: -300px;
    transition: 1s;
}

.arrow {
    position: absolute;
    top: 20%;
    right: 1%;
    color: white;
    animation: move 1s infinite ease;
}

.arrow:hover {
    cursor: pointer;
}

.arrow:before {
    position: absolute;
    content: '注册新同事';
    color: white;
    font-size: 20px;
    top: 6.5%;
    left: -110px;
    width: 100px;
}

.messagecount {
    position: absolute;
    width: 25px;
    height: 25px;
    font-size: 18px;
    font-weight: bold;
    left: 65%;
    top: 8%;
    text-align: center;
    line-height: 25px;
    border-radius: 50%;
    background-color: lightgrey;
    color: white;
    transition: 1s;
    z-index: 10000000;

}

table {
    margin-top: 10px;
    margin-left: 20px;
    display: none;
    padding: 10px 20px;
    height: 100px;
    font-size: 20px;
}


th,
td {
    height: 20px;
    font-size: 20px;
    width: 100px;
    text-align: center;
}

.cloudmove {
    position: absolute;
    top: 13%;
    width: 100%;
    height: 35%;
    overflow: hidden;
}

.cloud {
    position: absolute;
    top: 15%;
    left: 75.5%;
    width: 110px;
    height: 40px;
    border-radius: 30px;
    background-color: white;
    z-index: 1000;
    animation: floatcloud 3s infinite ease-out;

}

.cloud:before {
    content: "增加学生";
    font-size: 18px;
    color: lightblue;
    display: block;
    position: absolute;
    top: -18px;
    left: 15px;
    width: 40px;
    height: 50px;
    border-radius: 100px;
    transform: rotate(-30deg);
    background-color: white;
    z-index: 100;
}

.cloud:after {
    content: "";
    display: block;
    position: absolute;
    top: -28px;
    left: 45px;
    width: 50px;
    height: 50px;
    border-radius: 100px;
    transform: rotate(60deg);
    /* box-shadow: 0 0 10px black; */
    background-color: white;
}

.cloudshadow {
    position: absolute;
    top: 14.5%;
    left: 75%;
    width: 110px;
    height: 40px;
    border-radius: 30px;
    background-color: lightgray;
    z-index: 1;
    animation: floatcloud 3s infinite ease-out;

}

.cloudshadow:before {
    content: "";
    display: block;
    position: absolute;
    top: -18px;
    left: 15px;
    width: 40px;
    height: 50px;
    border-radius: 100px;
    transform: rotate(-30deg);
    background-color: lightgray;
}

.cloudshadow:after {
    content: "";
    display: block;
    position: absolute;
    top: -28px;
    left: 45px;
    width: 50px;
    height: 50px;
    border-radius: 100px;
    transform: rotate(60deg);
    background-color: lightgray;
}

td:nth-child(5) {
    width: 80px;
}

button {
    display: inline-block;
    font-size: 18px;
    border: none;
    margin-right: 3px;
    border-radius: 3px;
}

button:nth-child(1) {
    background-color: rgb(47, 103, 177);
}

button:nth-child(2) {
    background: linear-gradient(rgb(111, 162, 220), rgb(87, 85, 228));
}

.two {
    top: 24%;
    left: 25%;
}

.twos {
    top: 23.5%;
    left: 24.5%;
}

.yellowlight {
    position: absolute;
    width: 3px;
    height: 3px;
    top: 300px;
    left: 20%;
    box-shadow: 0 0 8px 5px yellow;
    background-color: yellow;
    animation: lightmove 3s ease-in-out infinite;
}

.yellowlight:after {
    position: absolute;
    display: block;
    content: "";
    top: -12px;
    left: -35px;
    width: 1.5px;
    height: 100px;
    /* box-shadow: 0 0 2px 2px white; */
    transform: rotate(45deg);
    background: linear-gradient(180deg, yellow, 55%, transparent);
}

.two2 {
    top: 200px;
    left: 110px;
    animation-delay: 0.3s;
}

.three {
    top: 180px;
    left: 700px;
    animation-delay: 1s;
}

.four {
    top: 180px;
    left: 1000px;
    /* animation-delay: 1s; */
}

.five {
    top: 100px;
    left: 1200px;
    /* animation-delay: 1s; */
}

.cloud1 {
    position: absolute;
    top: 15%;
    left: 60.5%;
    width: 110px;
    height: 40px;
    border-radius: 30px;
    background-color: white;
    z-index: 1000;
    transition: 1s;
    /* animation: floatcloud 3s infinite ease-out; */
}

.cloud1:before {
    content: "审核列表";
    font-size: 18px;
    color: lightblue;
    display: block;
    position: absolute;
    top: -18px;
    left: 15px;
    width: 40px;
    height: 50px;
    border-radius: 100px;
    transform: rotate(-30deg);
    background-color: white;
    z-index: 100;
}


.cloud1:after {
    content: "";
    display: block;
    position: absolute;
    top: -28px;
    left: 45px;
    width: 50px;
    height: 50px;
    border-radius: 100px;
    transform: rotate(60deg);
    /* box-shadow: 0 0 10px black; */
    background-color: white;
}

.cloudshadow1 {
    position: absolute;
    top: 14.5%;
    left: 60%;
    width: 110px;
    height: 40px;
    border-radius: 30px;
    background-color: lightgray;
    z-index: 1;
    /* animation: floatcloud 3s infinite ease-out; */

}

.search {
    top: 15%;
    left: 43%;
}

.cloudshadow1:before {
    content: "";
    display: block;
    position: absolute;
    top: -18px;
    left: 15px;
    width: 40px;
    height: 50px;
    border-radius: 100px;
    transform: rotate(-30deg);
    background-color: lightgray;
}

.cloudshadow1:after {
    content: "";
    display: block;
    position: absolute;
    top: -28px;
    left: 45px;
    width: 50px;
    height: 50px;
    border-radius: 100px;
    transform: rotate(60deg);
    background-color: lightgray;
}

@keyframes floatcloud {
    0% {}

    50% {
        transform: scale(0.9) translateY(10px);
    }

    100% {}
}

@keyframes move {
    0% {
        transform: translateX(0px);
    }

    50% {
        transform: translateX(8px);
    }

    100% {
        transform: translateX(0px);
    }
}

@keyframes lightmove {
    0% {}

    100% {
        opacity: 0;
        transform: translate(300px, -300px);
    }
}
</style>