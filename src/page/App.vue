<template>
    <div id="app">
        <transition name="bounce">
            <router-view keep-alive></router-view>
        </transition>
    </div>
</template>
<script>
    export default {
        name: 'app',
        data(){
            return{
                languages: JSON.parse(localStorage.lang),
                myrouters: this.$router.options.routes
            }
        },
        created() {
            global.LANG = this.languages;
            global.URLROUTERS = this.myrouters;
        }
    }
</script>

<style lang="less">

    @import "../../node_modules/font-awesome/css/font-awesome.min.css";
    @import "../../node_modules/flex.css/dist/flex.css";

    .bounce-enter-active {
        animation: bounce-in .5s;
    }

    .bounce-leave-active {
        animation: bounce-out .2s;
    }

    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.05);
        }
        100% {
            transform: scale(1);
        }
    }

    @keyframes bounce-out {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(0.95);
        }
        100% {
            transform: scale(0);
        }
    }
</style>

