<template>
    <div class="redplanet">

    </div>
</template>

<script>
export default {
    name: "addPlanet"
}
</script>

<style scoped>
.redplanet {
    position: absolute;
    top: 55%;
    left: 10%;
    width: 60px;
    height: 60px;
    background: linear-gradient(45deg, white 10%, grey);
    box-shadow: 0 0 38px 0px gray, 0 0 100px 1px white;
    border-radius: 50%;
    z-index: 10011;
    animation: upAndDown 2s ease-in-out infinite;
}


.redplanet:after {
    content: "添加学生";
    display: block;
    position: absolute;
    top: -32px;
    left: 0px;
    text-shadow: 1px 1px grey;
    font-size: 15px;
    width: 120px;
}

@keyframes upAndDown {
    0% {
        transform: translateY(0px)
    }


    50% {
        transform: translateY(10px)
    }

    100% {
        transform: translateY(0px)
    }
}
</style>