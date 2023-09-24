<template>
    <FlexboxLayout class="dashBoardTopBar" width="100%">
        <FlexboxLayout class="DashboardTopItem">
            <FlexboxLayout class="DashboardTopImage" @tap="backx()">
                <Image class="DashboardTopItemIcon" src="~/assets/img/jml_saldo.png" stretch="aspectFit"/>
            </FlexboxLayout>
            <Label @tap="backx()" class="DashboardTopItemLabel1">Back</Label>
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
    export default {
        data() {
            return {
                key: ''
            }
        },
        methods: {
            logOut() {
                AppSettings.remove("token");
                AppSettings.remove("profile");
                this.$router.push('login.index')
            },
            backx(){

                console.log('sa di back');
                this.$router.back()
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>