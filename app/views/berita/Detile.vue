<template>
    <Page actionBarHidden="true" class="coverColor">
        <ScrollView orientation="vertical" class="scrollViewsz">
            <StackLayout width="100%" class="pembungkus">
              <Headerx />
                <FlexboxLayout class="dashBoardAtas">

                </FlexboxLayout>
                
                <StackLayout class="dashBoardContent1 NewsDetileContent" >
                    <!-- <ScrollView orientation="vertical"> -->

                      <StackLayout v-if="loadingData ==true" width="100%">
                        <FlexboxLayout class="FlexlistPhotoProfile1">
                          <Gif class="PhotoLoading" src="~/assets/img/loading.gif" stretch="aspectFit"/>
                          <Label class="flexKetQRLabel">LOADING..!!</Label>
                        </FlexboxLayout>
                      </StackLayout>
                      
                      <StackLayout v-if="loadingData == false" width="100%">
                        <StackLayout width="100%" v-for="datax in listData" :key="datax.id">
                          
                          
                          <!-- <FlexboxLayout class="imgNewsFlexDetile">
                            <Image class="imgNewsDetile" src="~/assets/img/contoh.jpeg" stretch="aspectFit"/>
                          </FlexboxLayout> -->



                          <FlexboxLayout class="FlexlistProfile">
                              <!-- <Label class="labelNewsDetile1" textWrap="true">{{datax.judul}}</Label>
                            <Label class="flexKetQRLabel">Publish : {{datax.createBy}} ({{UMUM.tglConvert(datax.createAt).tgl}})</Label> -->

                            <FlexboxLayout class="cobaduluah">
                                <ScrollView>
                                    <WebView :src="
                                        `
                                        <style>
                                            .allImages {
                                            }
                                            .judul {
                                                font-weight: bold;font-size: 14;color: #606060; margin-top:10px;
                                            }

                                            img {
                                                width:100% !important; height:auto !important;
                                            }

                                            .subTitle{
                                                font-size: 10; font-weight: bold; color: #8f8f8f; margin-top:5px;
                                            }
                                            .hrku {
                                                border: 2px solid #8f8f8f
                                            }
                                        </style>
                                        
                                        <div class='allImages'>` +

                                            
                                        `<img src='`+$store.state.url.URL_WEB+`uploads/`+datax.foto+`' alt='xxxxxxx'>` +
                                        `<hr class='hrku'>` +
                                        `<div class='judul'>`+datax.judul+`</div> `+
                                        `<div class='subTitle'> Publish : `+datax.createBy+` (`+UMUM.tglConvert(datax.createAt).tgl+`)</div> `+
                                        
                                        `<hr class='hrku'>` +
                                        `<div style='font-size: 13;color: #606060; margin-top:10px; '>`+datax.isi+`</div> ` +

                                        `<div class='subTitle'> Sumber : `+datax.sumber+`</div> ` +
                                        `</div>`
                                    " />

                                </ScrollView>

                            </FlexboxLayout>



                            <!-- <Label class="flexKetQRLabel" textWrap="true">Sumber : {{datax.sumber}}</Label> -->
                          </FlexboxLayout>

                        
                        

                        </StackLayout>
                      </StackLayout>
                      
                    <!-- </ScrollView> -->
                </StackLayout>
                    
                
            </StackLayout>
        </ScrollView>
   
    </Page>
  </template>
  
  <script>
  
  import * as AppSettings from '@nativescript/core/application-settings';


  import UMUM from "../library/umum";
  
  export default {
    props: ['data'],
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
          fetch(this.$store.state.url.CLIENT_WEB_BERITA + "isi_berita", {
              method: "POST",
              headers: {
                  "content-type": "application/json",
                  authorization: "kikensbatara " + AppSettings.getString("token")
              },
              body: JSON.stringify({
                id : this.data.id
              })
          })
              .then(res => res.json())
              .then(res_data => {
                  console.log(res_data);
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

      console.log(this.data);
      this.viewOne();
    },
  
  };
  </script>
  
  <style scoped lang="css">
    .NewsDetileContent{
        margin-top: -130;
    }

    .cobaduluah{
        height: 100%;
        /* width: 200;          */
    }
    
  
  </style>
  