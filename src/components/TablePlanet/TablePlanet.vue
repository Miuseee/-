<template>
    <div class="tableplanet" ref="changeContent" @click="large">
    </div>
    <div class="hidetable" ref="changeHeight" @click="minus">
    </div>
</template>
<script>
import { ref } from 'vue';
export default {
    setup(p, ctx) {
        let changeContent = ref()
        let changeHeight = ref()
        const large = () => {
            ctx.emit('emitFather')
        }
        const minus = () => {
            ctx.emit('emitFather1')
        }
        return {
            changeContent,
            changeHeight,
            large,
            minus,
        }
    }
}
</script>
<style>
.tableplanet {
    position: absolute;
    width: 50px;
    height: 50px;
    top: 68%;
    left: 46%;
    border-radius: 50%;
    background: linear-gradient(45deg, orangered, yellow);
    box-shadow: 0 0 50px 8px orangered;
    animation: float 2s infinite ease;
}

.tableplanet:before {
    content: '展示表格';
    position: absolute;
    top: -34px;
    left: -10px;
    width: 90px;
    font-size: 18px;
    text-shadow: 1px 1px red;
    color: orangered;
}

.hidetable {
    position: absolute;
    width: 15px;
    height: 15px;
    top: 68%;
    left: 50%;
    border-radius: 50%;
    background: linear-gradient(45deg, green, rgb(16, 200, 120));
    box-shadow: 0 0 50px 8px rgb(35, 213, 32);
    animation: float2 2s infinite ease;
}

.hidetable:before {
    content: '收起';
    position: absolute;
    top: -4px;
    left: 20px;
    width: 90px;
    font-size: 14px;
    text-shadow: 1px 1px greenyellow;
    /* transform: rotate(); */
    color: green;
}

@keyframes float {
    0% {
        transform: translateY(0);
    }

    15% {
        transform: translateY(20px);
        /* background: linear-gradient(45deg, rgb(16, 200, 120), green); */
    }

    100% {
        transform: translateY(0);
    }
}

@keyframes float2 {
    0% {
        transform: translate(0px, 0px);
    }

    50% {
        transform: translate(0px, 10px);
    }

    100% {
        transform: translate(0px, 0px);
    }
}
</style>
