import { searchStuByName, getStuInfo } from "@/request/api";
const Type = {
    state: {
        stuArr: []
    },
    mutations: {
        UpdateStateStuInfo(state, index) {
            state.stuArr = index
            console.log(state.stuArr[0]);
        }
    },
    actions: {
        UpdateStuInfo(state, index) {
            // console.log('vuex', index);
            searchStuByName({
                stuName: index
            }).then(res => {
                if (res.status === 200)
                    this.commit('UpdateStateStuInfo', res.data.data)
            })
        },
        getAllStuInfo() {
            getStuInfo({
            }).then(res => {
                this.commit('UpdateStateStuInfo', res.data.data)
            })
        },
    }
}
export default Type