<template>
    <Page actionBarHidden="true" class="coverColor">
        <StackLayout>
          <ScrollView orientation="vertical" class="scrollViewsz" height="100%">
              <StackLayout width="100%" class="pembungkus">
                <Headerx />
                  <FlexboxLayout class="dashBoardAtas">
                    <FlexboxLayout class="DashboardDivItem">
                      <FlexboxLayout class="DashboardDivItemLogo">
                          <Image class="DashboardDivItemIcon" src="~/assets/img/isi_saldo.png" stretch="aspectFit"/>
                      </FlexboxLayout>
                      <Label class="DashboardDivItemLabel1">Profile</Label>
                    </FlexboxLayout>
                  </FlexboxLayout>
                  
                  <StackLayout class="dashBoardContent1" >
                      <ScrollView orientation="vertical" height="100%">
  
                        <StackLayout v-if="loadingData ==true" width="100%">
                          <FlexboxLayout class="FlexlistPhotoProfile1">
                            <Gif class="PhotoLoading" src="~/assets/img/loading.gif" stretch="aspectFit"/>
                            <Label class="flexKetQRLabel">LOADING..!!</Label>
                          </FlexboxLayout>
                        </StackLayout>
                        
                        <StackLayout v-if="loadingData == false" width="100%">
                          <StackLayout width="100%" v-for="data in listData" :key="data.id">
                            
                            
                            <FlexboxLayout v-if="checkPhotoAvailable(data.foto_profile) == false" class="FlexlistPhotoProfile">
                              <Image class="PhotoProfile" src="~/assets/img/blank.png" stretch="aspectFit"/>
                            </FlexboxLayout>
  
                            <FlexboxLayout v-if="checkPhotoAvailable(data.foto_profile) == true" class="FlexlistPhotoProfile">
                              <Image class="PhotoProfile" :src="$store.state.url.URL_APP+'uploads/'+data.foto_profile" stretch="aspectFit"/>
                            </FlexboxLayout>
  
                            <FlexboxLayout class="FlexlistProfile">
                              <Label class="flexKetQRLabel">NIK</Label>
                              <Label class="flexLabelValue">{{data.nik}}</Label>
                            </FlexboxLayout>
  
                            <FlexboxLayout class="FlexlistProfile">
                              <Label class="flexKetQRLabel">Nama</Label>
                              <Label class="flexLabelValue">{{data.nama}}</Label>
                            </FlexboxLayout>
  
                            <FlexboxLayout class="FlexlistProfile">
                              <Label class="flexKetQRLabel">Tempat/Tgl Lahir</Label>
                              <Label class="flexLabelValue">{{data.tmp_lahir}}, {{UMUM.tglConvert(data.tgl_lahir).tgl}}</Label>
                            </FlexboxLayout>
  
                            <FlexboxLayout class="FlexlistProfile">
                              <Label class="flexKetQRLabel">Telp</Label>
                              <Label class="flexLabelValue">{{data.hp}}</Label>
                            </FlexboxLayout>
  
                            <FlexboxLayout class="FlexlistProfile">
                              <Label class="flexKetQRLabel">Alamat</Label>
                              <Label class="flexLabelValue">Rumah : {{data.alamat}}</Label>
                              <Label class="flexLabelValue">KECAMATAN {{data.nama_kecamatan}}, DESA/KELURAHAN {{data.nama_des_kel}}</Label>
                              <Label class="flexLabelValue">{{data.nama_kabupaten}}</Label>
                            </FlexboxLayout>
                          
  
                          </StackLayout>
                        </StackLayout>
                        
                      </ScrollView>
                  </StackLayout>
                      
                  
              </StackLayout>
          </ScrollView>
        </StackLayout>
   
    </Page>
  </template>
  
  <script>
  
  import * as AppSettings from '@nativescript/core/application-settings';


  import UMUM from "../library/umum";
  
  export default {
    data() {
        return {
            QRCODE : '',
            TextQR : 'Telaso Jarot',
            listData : [],
            UMUM : UMUM,


            loadingData : true,
            checkFoto : false,
        };
    },
    methods: {
        coba() {
            console.log("Yeaaah");
        },

        viewOne: function () {
          this.loadingData = true
          fetch(this.$store.state.url.CLIENT_PROFILE + "viewOneMasyarakat", {
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
                  // this.profile.unit_uraian = this.listData[0].uraian
                  // this.addDataModal();
                  this.loadingData = false
              });

        },



        checkPhotoAvailable : function(data){
          if (data == null || data== '' || data == undefined) {
            return false
          } else {
            return true
          }
        },
      
  
  
    },
  
  
    mounted () {
      // console.log("ZZZZZZZZZZZZZZZZZZZZZZ");
      // setTimeout(() => {
      //   this.doScanWithBackCameraWithFlip()
      // }, 1000);

      this.viewOne();
    },
  
  };
  </script>
  
  <style scoped lang="css">

    
  
  </style>
  