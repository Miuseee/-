<template>
    <div class="search-box" ref="searchbox">
        <input v-model="search" @keydown.enter="onSubmit" ref="searchinput" class="search-txt" type="text"
            placeholder="Type to search" />
        <a class="search-btn" href="#">
            <i class="fas fa-search">
                <img @click="onSubmit" src="../../../../public/wxb搜索推广.png" alt="">
            </i>
        </a>
    </div>
</template>

<script>
import store from '@/store'
import { ref } from 'vue'
export default {
    setup(a, ctx) {
        let search = ref('')
        let searchbox = ref('')
        const onSubmit = () => {
            if (search.value === '') {
                store.dispatch('getAllStuInfo')
                ctx.emit('get2')
                // search.value = ''
            }
            else {
                ctx.emit('get2')
                store.dispatch('UpdateStuInfo', search.value)
                // search.value = ''
            }
        }

        return {
            onSubmit,
            search,
            searchbox,

        }
    }
}
</script>

<style scoped>
body {
    margin: 0;
    padding: 0;
    background: #e84118;
}

.search-box {
    flex: 1;
    margin: 0 10px;
    position: absolute;
    top: 14%;
    left: 34%;
    transform: translate(-50%, -50%);
    background: linear-gradient(black, 80%, lightgray);
    box-shadow: 0 0 30px 8px lightgray;
    opacity: 0.9;
    height: 35px;
    border-radius: 40px;
    padding: 10px;
    animation: upAndDown infinite 5s ease-in;
}

.search-box:after {
    content: "搜索";
    display: block;
    position: absolute;
    top: -32px;
    left: 12px;
    text-shadow: 1px 1px grey;
    font-size: 15px;
    width: 120px;
}

.search-btn {
    font-style: 10px;
    float: right;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    text-decoration: none;
}

.search-txt {
    border: none;
    background: none;
    outline: none;
    float: left;
    padding: 0;
    color: gray;
    font-size: 20px;
    transition: 0.5s;
    line-height: 15px;
    width: 0;
}

input {
    height: 30px;
}

img {
    width: 30px;
    height: 30px;
    padding: 0px 0px 15px;
}

.search-box:hover>.search-txt {
    width: 180px;
    padding: 0 6px;
}

.search-box>.search-txt:focus {
    width: 180px;
    padding: 0 6px;
}

.search-box:hover>.search-btn {
    background: white;
}

@keyframes upAndDown {
    0% {
        transform: translateY(0px)
    }


    50% {
        transform: translateY(20px)
    }

    100% {
        transform: translateY(0px)
    }
}
</style>