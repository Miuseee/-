<template>
    <div class="game">
        <vue-particles color="#dedede" linesColor="#fff"></vue-particles>
        <!-- <div class="plane" ref="plane" @click="createDiv">

        </div> -->
    </div>
</template>

<script>

import { ref, onMounted } from 'vue'
import { onBeforeMount } from 'vue'
export default {
    setup() {
        const plane = ref()
        let arr = []

        // setInterval(() => {
        //     let div = document.createElement("div")
        //     div.style.backgroundColor = 'blue'
        //     div.style.width = '5px'
        //     div.style.height = '5px'
        //     div.style.top = Math.random() * 300 + 'px'
        //     div.style.left = Math.random() * 1200 + 'px'
        //     div.style.position = 'absolute'
        //     div.innerHTML = 'wocao'
        //     arr.push(div)
        //     document.getElementsByClassName('game')[0].append(div)
        // }, 3000)

        return {

            plane,
            // createDiv
        }
    }
}
</script>

<style scoped>
.plane {
    width: 10px;
    height: 25px;
    background-color: black;
    border-radius: 30px;
}

.move {
    position: absolute;
    /* width: 300px; */
    animation: shoot 1s ease;
    /* transition: 1s; */
}

.game {
    position: absolute;
    top: 48%;
    width: 100%;
    height: 50%;
    background-color: transparent;
    overflow: hidden;
    opacity: 0.7;
}

@keyframes shoot {
    0% {
        transform: translateY(0);
    }

    100% {
        transform: translateY(100px);
    }
}
</style>