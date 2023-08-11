<template>
    <Page actionBarHidden="true" class="coverColor">
        <ScrollView orientation="vertical">
            <StackLayout width="100%" class="pembungkus">
              <Headerx />
                <!-- <FlexboxLayout class="dashBoardTopBar" width="100%">
                    <FlexboxLayout class="DashboardTopItem">
                      <FlexboxLayout class="DashboardTopImage">
                        <Image class="DashboardTopItemIcon" src="~/assets/img/jml_saldo.png" stretch="aspectFit"/>
                      </FlexboxLayout>
                      <Label class="DashboardTopItemLabel1">Rp. 10.000</Label>
                    </FlexboxLayout>
                    <FlexboxLayout class="DashboardTopItem1">
                      <FlexboxLayout class="DashboardTopImage">
                        <Image class="DashboardTopItemIcon" src="~/assets/img/message.png" stretch="aspectFit"/>
                      </FlexboxLayout>
                    </FlexboxLayout>
                </FlexboxLayout> -->
                
                <FlexboxLayout class="dashBoardAtas">
                  <FlexboxLayout class="DashboardDivItem">
                    <FlexboxLayout class="DashboardDivItemLogo">
                      <Image class="DashboardDivItemIcon" src="~/assets/img/cash.png" stretch="aspectFit"/>
                    </FlexboxLayout>
                    <!-- <Label class="DashboardDivItemLabel1">xxxxxxx</Label> -->
                    <Label class="DashboardDivItemLabel1">Barcodeku</Label>
                  </FlexboxLayout>
                </FlexboxLayout>
                
                <StackLayout class="dashBoardContent" >
                        <ScrollView orientation="vertical">
                        <StackLayout width="100%">

                          <FlexboxLayout class="dashBoardAtasContent">
                            <Label class="DashboardDivItemLabel1_black">Profile QR</Label>
                            <Label class="DashboardDivItemLabel1_black">{{this.TextQR}}</Label>
                           

                          </FlexboxLayout>

                          <FlexboxLayout class="divQRCODE">
                            <!-- <Label class="DashboardDivItemLabel1_black">Inis sue</Label> -->
                            <Image class="imageQRCODE" :src="QRCODE" stretch="aspectFit"/>
                          </FlexboxLayout>
                        </StackLayout>

                        </ScrollView>

    
    
                        
                    </StackLayout>
                    
                
            </StackLayout>
        </ScrollView>
   
    </Page>
</template>

<script>

// import QrcodeVue from 'qrcode.vue'
import { QrGenerator } from 'nativescript-qr-generator';
import * as AppSettings from '@nativescript/core/application-settings';

  export default {
    data() {
        return {
            QRCODE : '',
            TextQR : ''
        };
    },
    methods: {
        coba() {
            console.log("Yeaaah");
        },
        login() {
            this.$router.push("dashboard.index");
        },
        loadQR() {
            this.QRCODE = new QrGenerator().generate(this.TextQR, { size: { width: 300, height: 300 }});
            console.log(this.QRCODE);
        },

    },


    mounted () {

        const profile2 = AppSettings.getString("profile")
        const profile1 = JSON.parse(profile2)
        this.TextQR = profile1._id;

        // console.log(profile1._id);

        this.loadQR();
    },

};
</script>

<style scoped lang="css">



</style>
