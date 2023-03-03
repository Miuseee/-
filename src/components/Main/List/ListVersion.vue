<template>
    <div class="list">
        <div class="listview" cellspacing="20">
            <ListItem ref="addStudent" @refresh="show2" />
            <Transition>
                <AddStudent v-if="isshowed" @refresh="show" />
            </Transition>
            <Transition name="move">
                <ModifyStudent v-if="isshowed2" @get="getId" @refresh="invisible" :list="sendIdToList" />
            </Transition>>
            <div class="bc" v-if="isshowed3">

            </div>

        </div>
        <button class="add" @click="add">addStudent</button>

    </div>
</template>
  
<script>
import { ref } from 'vue'
import ListItem from './ListItem/ListItem.vue';
import AddStudent from '../AddStudent/AddStudent.vue'
import ModifyStudent from '../ModifyStudent/ModifyStudent.vue';
// import { onMounted } from 'vue'
export default {
    name: "ListView",
    components: {
        ListItem,
        AddStudent,
        ModifyStudent
    },
    setup() {
        // onMounted(() => {
        const getId = () => {

        }
        // })
        const addStudent = ref()
        const isshowed = ref(false)
        const isshowed2 = ref(false)
        const isshowed3 = ref(false)
        let sendIdToList = ref([])
        const add = () => {
            isshowed.value = true
            isshowed3.value = true
        }
        const show = () => {
            isshowed.value = false
            isshowed3.value = false
        }
        const show2 = () => {
            sendIdToList.value = addStudent.value.send;
            // console.log('id:', id);
            isshowed2.value = true
            isshowed3.value = true
        }
        const invisible = () => {
            // console.log('123');
            isshowed2.value = false
            isshowed3.value = false
        }


        // console.log(sendIdToList.value)
        // return addStudent.value.send

        return {
            add,
            addStudent,
            isshowed,
            isshowed2,
            isshowed3,
            show,
            show2,
            invisible,
            getId,
            sendIdToList
        }
    }
}

</script>
<style scoped>
.list {
    height: 100%;
    width: 100%;
    background-color: red;
}

.bc {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: black;
    opacity: 0.8;
}

.listview {
    /* position: relative */
    /* top: 0%; */
    /* background-image: url('https://tse3-mm.cn.bing.net/th/id/OIP-C.wB95x5TeYHdYOSveaGyj5gHaEK?pid=ImgDet&rs=1'); */
}

.add {
    position: absolute;
    height: 5%;
    top: 20%;
    left: 3%;
    padding: 5px 5px;
    border: none;
    border-radius: 10px;
    z-index: 1;
}

.add:hover {
    background-color: lightgrey;

}

.add:active {
    border: 1px solid gray;
}

.v-enter-active,
.v-leave-active {
    transition: 1s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
    transform: translateY(30px);
}

.move-enter-active,
.move-leave-active {
    /* transform: s,/cale(5); */
    transition: 0.5s ease-in-out;
}

.move-enter-from,
.move-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>