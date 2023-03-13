<template>
    <div @click="changeDay" ref="main" class="main">
        <NavBar ref="Navbar" @get2="get2" />
        <ListVersion @get2="get2" @mouse="changeHeight" @getnav="getNav" ref="ListVersion" />
        <FloatCloud ref="floatCloud " @tableMinus="minTable" @tablePlanet="changeHeight" @get2="get2" v-if="!showStar"
            @addshow="addShow" />
        <LiuXing @tableMinus="minTable" @tablePlanet="changeHeight" ref="rocket" v-if="showStar" @addshow="addShow" />
        <SearchStudent v-if="showStar" @get2="get2" />
    </div>
</template>
<script>
import ListVersion from '@/components/Main/List/ListVersion.vue';
import NavBar from '@/components/Main/Navbar/NavBar.vue';
import LiuXing from '@/components/LiuXing/LiuXing.vue'
import FloatCloud from '@/components/FloatCloud/FloatCloud.vue'
import SearchStudent from '@/components/Main/SearchStudent/SearchStudent.vue';
import { ref } from 'vue'
export default {
    name: "ListView",
    components: {
        ListVersion,
        NavBar,
        LiuXing,
        FloatCloud,
        SearchStudent
    },
    setup(props) {
        console.log(props)
        let floatCloud = ref()
        let redplanet = ref()
        let showStar = ref(false)
        let rocket = ref()
        let showTab = ref(false)
        const ListVersion = ref()
        const main = ref()
        const Navbar = ref()
        const get2 = () => {
            ListVersion.value.get1()
        }
        const changeDay = () => {
            const { style } = main.value
            let day = Navbar.value.showSunny
            if (day) {
                style.opacity = 1
                style.background = 'linear-gradient(skyblue,  40%,#e3e0cf, 90%,lightyellow)'
                style.color = 'black'
                Navbar.value.navbar.style.background = 'skyblue '
                Navbar.value.navbar.style.color = 'rgb(55,87,122)'
                ListVersion.value.addStudent.th.backgroundColor = 'skyblue'
                showStar.value = false
                localStorage.setItem('showStar', showStar.value)
            }
            else {
                style.transition = '0.8s'
                style.background = 'linear-gradient(black,  90%, grey)'
                style.color = 'grey'
                Navbar.value.navbar.style.background = 'black '
                Navbar.value.navbar.style.color = 'white'
                showStar.value = true
                localStorage.setItem('showStar', showStar.value)
            }
        }
        const addShow = () => {
            ListVersion.value.add()
        }
        const changeHeight = () => {
            ListVersion.value.changeTableHeight()
        }
        const minTable = () => {
            ListVersion.value.minusTableHeight()

        }
        return {
            Navbar,
            ListVersion,
            get2,
            main,
            changeDay,
            showStar,
            FloatCloud,
            redplanet,
            addShow,
            rocket,
            showTab,
            changeHeight,
            minTable,
            floatCloud
        }
    }

}
</script>

<style scope>
.main {
    /* overflow: hidden; */

    height: 100%;
    background: linear-gradient(skyblue, 40%, #e3e0cf, 90%, lightyellow)
}

.line:before {
    content: '';
    display: block;
    position: absolute;
    top: 18%;
    left: 22%;
    width: 370px;
    height: 180px;
    transform: rotate(10deg);
    background-color: red;
    border-radius: 90%;
    border-bottom: 1px solid white;
    background-color: transparent;
    z-index: 0;
}
</style>