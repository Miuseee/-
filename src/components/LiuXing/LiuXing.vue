<template>
    <div class="starrain" @mousemove="rocket" @mouseleave="hide" @mouseenter="nohide">
        <div class="star one">
        </div>
        <div class="star two">
        </div>
        <div class="star third">
        </div>
        <div class="star four">
        </div>
        <div class="star five">
        </div>
        <div class="star six">
        </div>
        <div class="star seven">
        </div>
        <div class="star eight">
        </div>
        <keep-alive>
            <div ref="rocketShow" v-if="showRocket" class="rocket">
                <div class="cockpit">
                </div>
                <div class="fire">
                </div>
                <div class="flanks">
                </div>
                <div class="fireflowers red">
                </div>
                <div class="fireflowers pink">
                </div>
                <div class="fireflowers green">
                </div>
                <div class="fireflowers blue">
                </div>
                <div class="fireflowers yellow">
                </div>
                <div class="fireflowers white">
                </div>
            </div>
        </keep-alive>
        <addPlanet @click="showAdd" />
        <TablePlanet ref="tablePlanet" @emitFather="emitFather" @emitFather1="emitFather1" />
        <auditPlanet />
        <RegisterPlanet />
    </div>
</template>


<script>
import { ref } from 'vue';
import addPlanet from '@/components/addPlanet/addPlanet.vue'
import TablePlanet from '@/components/TablePlanet/TablePlanet.vue'
import auditPlanet from '@/components/auditPlanet/auditPlanet.vue'
import RegisterPlanet from '../RegisterPlanet/RegisterPlanet.vue';
export default {
    components: {
        addPlanet,
        TablePlanet,
        auditPlanet,
        RegisterPlanet
    },
    setup(p, ctx) {
        let rocketShow = ref()
        let showRocket = ref(false)
        let tablePlanet = ref()
        const nohide = () => {
            showRocket.value = true
        }
        const showAdd = () => {
            ctx.emit('addshow')
        }
        const rocket = (e) => {
            let x3 = e.clientX - 170 + "px"
            let y3 = e.clientY - 60 + "px"
            rocketShow.value.style.transform = "translate(" + x3 + "," + y3 + ") rotate(" + 45 + "deg)"
        }
        const hide = () => {
            showRocket.value = false
        }
        const emitFather = () => {
            ctx.emit('tablePlanet')
        }
        const emitFather1 = () => {
            ctx.emit('tableMinus')
        }
        return {
            rocket,
            rocketShow,
            hide,
            nohide,
            showRocket,
            showAdd,
            emitFather,
            tablePlanet,
            emitFather1,

        }
    }

}
</script>

<style scoped>
.starrain {
    position: absolute;
    top: 0;
    overflow: hidden;
    /* left: 0; */
    width: 100%;
    height: 45%;
    /* height: 100%; */
    z-index: 0;
}

.star {
    position: absolute;
    width: 2px;
    height: 2px;
    opacity: 0.9;
    border-radius: 50%;
    animation: fly 3s ease-out infinite;

}

.one {
    top: 20%;
    left: 35%;
}

.two {
    top: 10%;
    left: 88%;
    animation-delay: 0.8s;
}

.third {
    top: 20%;
    left: 15%;
    animation-delay: 1s;
}

.four {
    top: 3%;
    left: 75%;
}

.five {
    top: 0%;
    left: 55%;
    animation-delay: 0.3s;
}

.six {
    top: 0%;
    left: 35%;
    animation-delay: 0.8s;
}

.seven {
    top: 30%;
    left: 30%;
    animation-delay: 0.8s;
}

.rocket {
    position: absolute;
    /* z-index: 2; */
}

.star:before {
    content: "";
    display: block;
    position: absolute;
    top: -40%;
    left: -8%;
    width: 2px;
    height: 5px;
    transform: rotate(-45deg);
    background: white;
    opacity: 1;
    box-shadow: 0 0 20px 5px white;
}

.star:after {
    content: "";
    display: block;
    position: absolute;
    width: 200px;
    height: 2px;
    top: -70px;
    left: -170px;
    background: linear-gradient(-90deg, #fff, transparent);
    opacity: 0.3;
    transform: scale(1.5) rotate(45deg);
    animation: tail 4s ease-in-out infinite;

}


@keyframes fly {
    0% {
        opacity: 0;
        /* background-color: blue; */
        transform: translate(0px, 0px);
    }

    50% {
        opacity: 0.9;
        /* background-color: green; */
    }

    70% {
        opacity: 0.4;
    }

    100% {
        /* background-color: red; */
        opacity: 0;
        transform: translate(300px, 300px);
    }
}

@keyframes tail {
    0% {
        /* scale: 0; */
        transform: rotate(45deg);
    }

    30% {

        transform: rotate(45deg);
        /* width: 130px; */
    }

    70% {}

    100% {
        /* width: 0px; */
        transform: rotate(45deg);

    }
}

.cockpit {
    position: absolute;
    width: 28px;
    height: 40px;
    background: linear-gradient(whitesmoke, darkgray);
    border-radius: 50% / 70% 70% 5% 5%;
    background-color: grey;
    z-index: 1;
}

.cockpit:before {
    position: absolute;
    content: "";
    top: 30%;
    left: 25.2%;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 2px solid grey;
    background-color: skyblue;
}

.fire {
    position: absolute;
    top: 9.2%;
    left: 6px;
    width: 15px;
    height: 5px;
    border-radius: 20%;
    background-color: grey;
    /* z-index: 1; */
}

.fire:before {
    display: block;
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    top: 10%;
    left: 17.5%;
    background-color: yellow;
    background: gold;
    border: 0.01rem solid orange;
    border-radius: 80% 0 50% 45% /50% 0 80% 45%;
    transform: rotate(135deg);
    z-index: -1;
}

.flanks::before,
.flanks::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 23px;
    background: linear-gradient(tomato, darkred);
    top: 7.5%;
    left: 24.0px;
}

.flanks::before {
    border-radius: .1rem 0 50% 100%;
    left: -4.5px;
}

.flanks::after {
    border-radius: 0 .1rem 100% 50%;
    right: -8px;
}

.fireflowers {
    position: absolute;
    top: 15%;
    left: 10px;
    width: 2px;
    height: 2px;
    background-color: red;
    z-index: 100;
    animation: firework 0.3s infinite ease-out;
}

.pink {
    background-color: pink;
    top: 10%;
    left: 18px;
    animation-delay: 0.1s;
}

.green {
    background-color: green;
    top: 13%;
    left: 15px;
    animation-delay: 0.11s;
}

.blue {
    background-color: blue;
    top: 12%;
    left: 5px;
    animation-delay: 0.21s;
}

.yellow {
    background-color: yellow;
    top: 12%;
    left: 22px;
    animation-delay: 0.21s;
}

.white {
    background-color: white;
    top: 14%;
    left: 2px;
    animation-delay: 0.21s;
}

@keyframes launch {
    0% {}

    100% {}
}

@keyframes firework {
    0% {}

    80% {}

    100% {
        transform: translateY(30px);
        /* transform: translateX(30px) */
    }
}
</style>