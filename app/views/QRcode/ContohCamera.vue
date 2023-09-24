<template>
    <Page actionBarHidden="true" class="coverColor">
        <ScrollView orientation="vertical">
            <StackLayout width="100%" class="pembungkus">

              <HeaderBack />
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
                      <Image class="DashboardDivItemIcon" src="~/assets/img/scan.png" stretch="aspectFit"/>
                    </FlexboxLayout>
                    <Label class="DashboardDivItemLabel1">Bayar</Label>
                    <Label class="DashboardDivItemLabel2">Retribusi</Label>
                  </FlexboxLayout>
                </FlexboxLayout>
                
                <StackLayout class="dashBoardContent" >
                        <ScrollView orientation="vertical">
                        <StackLayout width="100%">
  
                          <FlexboxLayout class="dashBoardAtasContent">
                            <Label class="DashboardDivItemLabel1_black">Profile QR</Label>
                            <Label class="DashboardDivItemLabel1_black">62-813*****4122</Label>
                           
  
                          </FlexboxLayout>
  
                          <FlexboxLayout class="divQRCODE">
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
  
  
  import { requestPermissions } from '@nativescript/camera';
  import * as camera from "@nativescript/camera";
  
  // import { QrGenerator } from 'nativescript-qr-generator';
  
  // const camera = require("@nativescript/camera");
  
  // import { requestPermissions } from '@nativescript/camera';
  
  
  export default {
    data() {
        return {
            QRCODE : '',
            TextQR : 'Telaso Jarot'
        };
    },
    methods: {
        coba() {
            console.log("Yeaaah");
        },
        login() {
            this.$router.push("dashboard.index");
        },
  
        takePicture() {
  
          requestPermissions().then(
              function success() {
                  // permission request accepted or already granted
                  // ... call camera.takePicture here ...
  
                  console.log("Kamera Bisa di gunakan");
                   camera.takePicture()
                  .then(function (imageAsset) {
                      console.log("Result is an image asset instance");
                      this.QRCODE = new Image();
                      // image.src = imageAsset;
                  }).catch(function (err) {
                      console.log("Error -> " + err.message);
                  });
              },
              function failure() {
                  // permission request rejected
                  // ... tell the user ...
                  console.log("Kamera Tidak Bisa di gunakan");
              }
  
  
  
          );
  
        }
  
    },
  
  
    mounted () {
        this.takePicture();
    },
  
  };
  </script>
  
  <style scoped lang="css">
  
    .divQRCODE{
      background: red;
    }
  
  
  
  </style>
  