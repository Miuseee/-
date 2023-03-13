<template>
    <div class="registerplanet" @click="showRegTag" ref="regplanet">

    </div>
    <Transition>
        <RegisterView v-if="showView" @hideRegTag="hideRegTag" />
    </Transition>
</template>

<script>
import { ref } from 'vue';
import RegisterView from '../RegisterCard/RegisterView.vue';
export default {
    components: {
        RegisterView
    },
    setup() {
        let showView = ref(false)
        let regplanet = ref()
        const showRegTag = () => {

            if (localStorage.getItem('userType') === '2') {
                regplanet.value.style.transform = 'translateY(-130px)'
                showView.value = true

            }
            else {
                alert('很抱歉 您还没有权限')
                return
            }

        }
        const hideRegTag = () => {
            regplanet.value.style.transform = 'translateY(20px)'
            showView.value = false
        }
        return {
            showRegTag,
            hideRegTag,
            regplanet,
            showView
        }
    }
}
</script>

<style scoped>
.registerplanet {
    position: absolute;
    top: 60%;
    right: 13%;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    border: none;
    background: linear-gradient(green, rgb(104, 219, 98));
    box-shadow: 0 0 30px 10px rgb(72, 175, 106);
    transition: 1s;
    z-index: -1;
}

.registerplanet:hover {
    cursor: pointer;
}

.registerplanet:before {
    content: '注册管理员';
    color: lightblue;
    position: absolute;
    font-size: 17px;
    width: 100px;
    top: -55%;
    right: -52%;
    text-shadow: 1px 1px white;

}

.v-enter-active,
.v-leave-active {
    transition: opacity 1.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>