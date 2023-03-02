<template>
    <div class="list">
        <div class="listview" cellspacing="20">
            <ListItem ref="addStudent" />
            <Transition>
                <AddStudent v-if="isshowed" />
            </Transition>
            <div class="bc" v-if="isshowed">

            </div>

        </div>
        <button class="add" @click="add">addStudent</button>

    </div>
</template>
  
<script>
import { ref } from 'vue'
import ListItem from './ListItem/ListItem.vue';
import AddStudent from '../AddStudent/AddStudent.vue'
export default {
    name: "ListView",
    components: {
        ListItem,
        AddStudent
    },
    setup() {
        const addStudent = ref()
        const isshowed = ref(false)
        const add = () => {
            // addStudent.value.addInfo()
            // nb.value.showdiv()
            isshowed.value = true
        }
        return {
            add,
            addStudent,
            isshowed
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
    top: 10%;
    left: 20%;
    padding: 5px 5px;
    border: none;
    border-radius: 10px;
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
</style>