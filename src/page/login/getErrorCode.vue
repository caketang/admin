<template>
    <div id="getErrorCode">

    </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            init() {
//                if(typeof(settings) === 'undefined' ) {
//                    let _this = this;
//                    this.$http.get(URL.api + '/dev/error.codes', URLCONFIG).then((res) => {
//                        if (res.data.state === 0 && res.data.data) {
//                            let list = res.data.data || [];
//                            for (let i = 0; i < list.length; i++) {
//                                STATEERROR[list[i].code] = list[i].msg;
//                            }
//                        }
//                    })
//                }
            }
        },
        created() {
            this.init();
        }
    }
</script>
<style scopend>

</style>