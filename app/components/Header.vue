<template>
    <FlexboxLayout class="dashBoardTopBar" width="100%">
        <FlexboxLayout class="DashboardTopItem">
            <FlexboxLayout class="DashboardTopImage">
            <Image class="DashboardTopItemIcon" src="~/assets/img/jml_saldo.png" stretch="aspectFit"/>
            </FlexboxLayout>
            <Label class="DashboardTopItemLabel1">Rp. {{ $store.state.JML_SALDO }}</Label>
        </FlexboxLayout>
        <FlexboxLayout class="DashboardTopItem1" @tap="logOut()">
            <Ripple class="DashboardTopImage">
            <Image class="DashboardTopItemIcon" src="~/assets/img/logout.png" stretch="aspectFit"/>
            </Ripple>
        </FlexboxLayout>
    </FlexboxLayout>
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







                UMUM : UMUM,
                MASTER : MASTER
            }
        },
        methods: {
            logOut() {
                AppSettings.remove("token");
                AppSettings.remove("profile");
                this.$router.push('login.index')
            },


            checkSaldo() {

                MASTER.getSaldo('')


                // fetch(this.$store.state.url.URL_DOMPET +'cek_saldo' , {
                //     method: "POST",
                //     headers: {
                //         "content-type": "application/json",
                //         authorization: "kikensbatara " + AppSettings.getString("token")
                //     },
                //     body: JSON.stringify({
                //         user: ''
                //     })
                // })
                //     .then(res => res.json())
                //     .then(res_data => {
                //         console.log('+++++++++++++++++++++++++++++');
                //         console.log(res_data.saldo);
                        
                //     });
            },




        },



        mounted () {
            this.checkSaldo();

        },
        
    }
</script>

<style lang="scss" scoped>

</style>