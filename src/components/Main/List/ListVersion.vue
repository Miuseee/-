<template>
    <div class="list">
        <div class="listview" cellspacing="20">
            <ListItem ref="addStudent" @refresh="show2" />
            <Transition>
                <AddStudent v-if="isshowed" @refresh="show" />
            </Transition>
            <keep-alive>
                <Transition name="move">
                    <ModifyStudent v-if="isshowed2" @get="getId" @refresh="invisible" :list="sendIdToList" />
                </Transition>
            </keep-alive>
            <div class="bc" v-if="isshowed3">
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue'
import ListItem from './ListItem/ListItem.vue';
import AddStudent from '../AddStudent/AddStudent.vue'
import ModifyStudent from '../ModifyStudent/ModifyStudent.vue';
export default {
    name: "ListView",
    components: {
        ListItem,
        AddStudent,
        ModifyStudent
    },
    setup() {
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
            isshowed2.value = true
            isshowed3.value = true
        }
        const invisible = () => {
            isshowed2.value = false
            isshowed3.value = false
        }
        const get1 = () => {
            addStudent.value.updateList()
        }
        const changeTableHeight = () => {
            addStudent.value.changeTable()
        }
        const minusTableHeight = () => {
            addStudent.value.minusTable()
        }
        return {
            add,
            addStudent,
            isshowed,
            isshowed2,
            isshowed3,
            show,
            show2,
            invisible,
            sendIdToList,
            get1,
            changeTableHeight,
            minusTableHeight
        }
    }
}

</script>
<style scoped>
.list {
    height: 100%;
    width: 100%;
    background-color: transparent;
}

span {
    position: absolute;
    top: -10.5%;
    left: -22.3%;
    font-size: 30px;
    transform: rotate(90deg) scaleY(2.5);
    animation: shining 1s ease infinite;
}

.bc {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: black;
    opacity: 0.8;
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
    transition: 0.5s ease-in-out;
}

.move-enter-from,
.move-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

@keyframes shining {
    0% {
        color: gray;
    }

    50% {}

    100% {
        color: white;

    }
}
</style>