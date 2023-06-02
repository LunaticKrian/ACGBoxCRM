// 要为Volar类型检查定义全局组件，需要添加：
declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        LottieAnimation: typeof import('vue3-lottie')['Vue3Lottie']
    }
}

declare module '*.json' {
    const value: any;
    export default value;
}

export {}