<template>
    <div class="main">
        <ListVersion />
    </div>
</template>

<script>
import ListVersion from '@/components/Main/List/ListVersion.vue';

export default {
    name: "ListView",
    components: {
        ListVersion
    }
}
</script>

<style scope>
.main {
    /* position: absolute; */
    height: 0;
    /* background-color: red; */
}
</style>