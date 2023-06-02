// 系统配置仓库：
import { defineStore} from "pinia";

let settingStore = defineStore('settingStore', {
    state: () => {
        return {
            // 用于控制左侧菜单是折叠还是展开：
            fold: false
        }
    }
})

export default settingStore;