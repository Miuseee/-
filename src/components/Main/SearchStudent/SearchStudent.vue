<template>
    <div class="search-box">
        <input v-model="search" class="search-txt" type="text" placeholder="Type to search" />
        <a class="search-btn" href="#">
            <i class="fas fa-search">
                <img @click="onSubmit" src="../../../../public/wxb搜索推广.png" alt="">
            </i>
        </a>
    </div>
</template>

<script>
import { ref } from 'vue'
import { searchStuByName } from '@/request/api'
export default {
    setup() {
        let search = ref('')
        const onSubmit = () => {
            searchStuByName({
                stuName: search.value
            }).then(res => {
                console.log(res.data.data);
            })
            // console.log(search.value);
        }
        return {
            onSubmit,
            search
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
    /* display: flex; */
    flex: 1;
    margin: 0 10px;
    position: fixed;
    top: 3.5%;
    left: 33%;
    transform: translate(-50%, -50%);
    background: #2f3640;
    height: 15px;
    border-radius: 40px;
    padding: 6px;
}

.search-btn {
    /* color: #e84118; */
    font-style: 10px;
    /* text-align: center; */
    float: right;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s;
    text-decoration: none;
}

.search-txt {
    border: none;
    background: none;
    outline: none;
    float: left;
    padding: 0;
    color: white;
    font-size: 12px;
    transition: 0.4s;
    line-height: 15px;
    width: 0;
}

.search-box:hover>.search-txt {
    width: 120px;
    padding: 0 6px;
}

.search-box:hover>.search-btn {
    background: white;
}
</style>