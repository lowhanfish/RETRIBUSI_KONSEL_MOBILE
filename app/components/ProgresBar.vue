<template>
    <Progress :value="val" :maxValue="max" />
</template>

<script>

    import * as AppSettings from '@nativescript/core/application-settings';
    import UMUM from "../views/library/umum";
    import MASTER from "../views/library/master";

    // import { UMUM } from "../views/library/umum";

    export default {
        data() {
            return {
                key: '',
                max : 100,
                val : 0,
            }
        },
        methods: {
            countx() {
                this.val = 0;
                for (let i = 0; i < this.max; i++) {
                    setTimeout(() => {
                        this.val = this.val + 1;
                    }, 5000);
                }
                this.val = 0;
            },

        },



        mounted () {
            this.countx();

        },
        
    }
</script>

<style lang="scss" scoped>

</style>