<template>
  <Page actionBarHidden="true" class="coverColor">
      <ScrollView orientation="vertical" height="100%">
          <StackLayout width="100%" class="pembungkus">
            <HeaderBack />
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
                      <ScrollView orientation="vertical" height="100%">






                      <StackLayout width="100%">

                        <FlexboxLayout class="dashBoardAtasContent">
                          <Label class="flexKetQRLabel"></Label>
                          <Label class="DashboardDivItemLabel1_black"></Label>
                        </FlexboxLayout>

                        <!-- <Ripple @tap="addDataModal()" rippleColor="#c8c8c8" ippleDuration="10" class="buttonLogin" >
                          <FlexboxLayout androidElevation="3" alignItems="center" justifyContent="center" flexDirection="column">
                            <Label class="buttonLoginLable" text="LOGINX" textWrap="true" />

                          </FlexboxLayout>
                        </Ripple> -->

                        
                        <GridLayout columns="*" rows="auto, auto, auto, auto" >


                          <!-- <BarcodeView  class="imageQRCODE1"  @scanResult="resultx" beepOnScan="true" reportDuplicates="false" preferFrontCamera="false"/> -->
                          <BarcodeView class="imageQRCODE1" formats="QR_CODE, EAN_13, CODE_128" beepOnScan="true" reportDuplicates="false" preferFrontCamera="false" @scanResult="resultx" />
                          <Image src="~/assets/img/crosshair.png" width="250" height="250" style="margin-top: 14; opacity: 0.3" horizontalAlignment="center" verticalAlignment="center" />

                         
                        </GridLayout>
                        
                        <FlexboxLayout class="flexKetQR">
                          <Label class="flexKetQRLabel">Silahkan Tap dan Arahkan camera ke qr-code</Label>
                        </FlexboxLayout>
                        <!-- <FlexboxLayout class="divQRCODE">
                            <Image class="imageQRCODE" :src="QRCODE" stretch="aspectFit"/>
                        </FlexboxLayout> -->
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

import { isIOS } from '@nativescript/core/platform';
import { generateBarCode } from '@nativescript-community/ui-barcodeview';
// import {BarcodeScanner} from "nativescript-barcodescanner";

// import { BarcodeScanner } from "nativescript-barcodescanner";

// import { QrGenerator } from 'nativescript-qr-generator';

// const camera = require("@nativescript/camera");

// import { requestPermissions } from '@nativescript/camera';

// import {BarcodeScanner} from "nativescript-barcodescanner";

// import { screen } from 'platform'
// const platform = require("platform")
// import { screen } from '@nativescript/core/platform';

import * as AppSettings from '@nativescript/core/application-settings';

import {screen} from "@nativescript/core/platform"

const Detail = {
  props: ['id'],
  template: `
    <Frame :width="width">
      <Page :width="width" actionBarHidden="true" class="coverModal">
        <ScrollView orientation="vertical">
            <StackLayout width="100%" class="pembungkus">

                
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

                        <Button @tap="$modal.close" text="Close" />
                      </StackLayout>
                    
                
            </StackLayout>
        </ScrollView>
      </Page>
    </Frame>
  `,

  data() {
    return {
      width: 0
    }
  },
  mounted () {
    this.width = screen.mainScreen.widthDIPs
  },
};




export default {
  data() {
      return {
        isIOS,
        QRCODE : '',
        TextQR : 'Telaso Jarot',
        form : {
          master_unit_id : '',
          nik : '',
        },
        profile : {
          nama : '',
          unit_uraian : ""
        },
        listData:[],

        test_lolo : 'KAMIOOOOOOOOOO'
      };
  },
  methods: {
      coba() {
          console.log("Yeaaah");
      },
      login() {
          this.$router.push("dashboard.index");
      },

      resultx(evt){

        // console.log(`onScanResult: ${evt.text} (${evt.format})`);
        this.form.master_unit_id = evt.text
        this.getUsaha()



        // console.log('NABULEEEE = ' +this.form.master_unit_id);
        // this.addDataModal();


        // alert({
        //   title: "Informasi Pembayaran",
        //   // message: result.text,
        //   message: 'Anda Berhasi Melakukan Pembayaran',
        //   okButtonText: "OK"
        // });
        // barcodescanner.available().then(
        //     function(avail) {
        //       console.log("Available? " + avail);
        //     }
        // );
      },


      getUsaha: function () {

        fetch(this.$store.state.url.CLIENT_QRBAYAR_RETRIBUSI + "viewOne", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: "kikensbatara " + AppSettings.getString("token")
            },
            body: JSON.stringify(this.form)
        })
            .then(res => res.json())
            .then(res_data => {
                // console.log(res_data);
                this.listData = res_data
                this.profile.unit_uraian = this.listData[0].uraian

                this.addDataModal();
            });
      },





















      addDataModal(){

        
        this.$showModal("QRBayarRetribusi_modalAdd", {
          props: {
            listUsaha : this.listData,
            profile : this.profile
          },
          fullscreen: false,
          dismissEnabled : false,
          animated: true,
          stretched: false,
          dimAmount: 0.2 // Sets the alpha of the background dim,
        })


      },




      onScanResult(evt) {
        console.log(`onScanResult: ${evt.text} (${evt.format})`);
      },
      doScanWithBackCameraWithFlip() {
        this.scan(false, true);
      },
      doScanWithFrontCameraNoFlip() {
        this.scan(true, false);
      },
      scan(preferFrontCamera, showFlipCameraButton) {
        new BarcodeScanner().scan({
          cancelLabel: "EXIT. Also, try the volume buttons!", // iOS only, default 'Close'
          cancelLabelBackgroundColor: "#333333", // iOS only, default '#000000' (black)
          message: "Sesuaikan dengan posisi QR-Code", // Android only, default is 'Place a barcode inside the viewfinder rectangle to scan it.'
          preferFrontCamera,            // Android only, default false
          // showFlipCameraButton,         // default false
          showTorchButton: true,        // iOS only, default false
          torchOn: false,               // launch with the flashlight on (default false)
          resultDisplayDuration: 500,   // Android only, default 1500 (ms), set to 0 to disable echoing the scanned text
          beepOnScan: true,             // Play or Suppress beep on scan (default true)
          openSettingsIfPermissionWasPreviouslyDenied: true, // On iOS you can send the user to the settings app if access was previously denied
          closeCallback: () => {
            console.log("Scanner closed @ " + new Date().getTime());
          }
        }).then(
            function (result) {
              // console.log("--- scanned: " + result.text);
              // Note that this Promise is never invoked when a 'continuousScanCallback' function is provided
              setTimeout(function () {
                // if this alert doesn't show up please upgrade to {N} 2.4.0+
                // alert({
                //   title: "Scan result",
                //   message: "Format: " + result.format + ",\nValue: " + result.text,
                //   okButtonText: "OK"
                // });

                


                // alert({
                //   title: "Informasi Pembayaran",
                //   // message: result.text,
                //   message: 'Anda Berhasi Melakukan Pembayaran',
                //   okButtonText: "OK"
                // });


              }, 500);
            },
            function (errorMessage) {
              console.log("No scan. " + errorMessage);
            }
        );
      }


  },


  mounted () {

    const profile2 = AppSettings.getString("profile")
    const profile1 = JSON.parse(profile2)
    const profile = profile1.profile

    // console.log(profile);

    this.form.nik = profile.nik
    this.profile.nama = profile.nama



    // this.$showModal(Detail, { fullscreen: true, props: { id: 14 }});
    // this.$showModal(Detail, { props: { id: 14 }});



    // setTimeout(() => {
    //   this.addDataModal();
    // }, 500);
  },

};
</script>

<style scoped lang="css">



</style>
