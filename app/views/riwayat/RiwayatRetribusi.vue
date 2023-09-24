<template>
    <Page actionBarHidden="true" class="coverColor">
        <ScrollView orientation="vertical" class="scrollViewsz">
            <StackLayout width="100%" class="pembungkus" height="100%">
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

                <HeaderBack />
  
                <FlexboxLayout class="dashBoardAtas">
                  <FlexboxLayout class="DashboardDivItem">
                    <FlexboxLayout class="DashboardDivItemLogo">
                        <Image class="DashboardDivItemIcon" src="~/assets/img/isi_saldo.png" stretch="aspectFit"/>
                    </FlexboxLayout>
                    <Label class="DashboardDivItemLabel1">Riwayat</Label>
                    <Label class="DashboardDivItemLabel2">Retribusi</Label>
                  </FlexboxLayout>
                </FlexboxLayout>
                
                <StackLayout class="dashBoardContent1" >
                        <ScrollView orientation="vertical" height="100%">
                        <StackLayout width="100%">
  
                          <FlexboxLayout class="dashBoardAtasList">
                            <Label class="flexKetQRLabel">Total Kontribusi anda tahun ini ({{form.tahun}})</Label>
                            <Label class="DashboardDivItemLabel1_black">Rp. {{form.nilai}}</Label>
                          </FlexboxLayout>


                          <FlexboxLayout class="FlexlistPhotoProfile1" v-if="loadingData ==true">
                            <FlexboxLayout class="FlexlistPhotoProfile1">
                              <Gif class="PhotoLoading" src="~/assets/img/loading.gif" stretch="aspectFit"/>
                              <Label class="flexKetQRLabel">LOADING..!!</Label>
                            </FlexboxLayout>
                          </FlexboxLayout>

  
                            <FlexboxLayout v-if="loadingData ==false" class="flexListData" v-for="data in listData" :key="data.id">
                              <FlexboxLayout class="flexListDataItem">
                                  <Label class="flexKetQRLabel">Rp. {{data.jumlah_retribusi}} ({{UMUM.tglConvert(data.createAt).tgl}} || {{UMUM.tglConvert(data.createAt).time}} WITA)</Label>
                                  <Label class="flexKetQRLabel">{{data.master_usaha_uraian}}</Label>
                                  <Label class="labelNotifOrange">{{data.master_unit_uraian}}</Label>
                              </FlexboxLayout>
  
  
                              <FlexboxLayout class="flexListDataItem1">
                                <Ripple @tap="detileModal(data)" class="">
                                  <Label class="labelNotifBlue">Detile</Label>
                                </Ripple>
                              </FlexboxLayout>
                              
  
                            </FlexboxLayout>



                          <FlexboxLayout class="flexPagin">
                            <FlexboxLayout class="btnPagin"  @tap="btn_prev()">
                                <Image class="icon_pagin" src="~/assets/img/right_arrow.png" stretch="aspectFit"/>
                            </FlexboxLayout>

                            <FlexboxLayout class="">
                              <Label class="flexKetQRLabel">hal {{page_first}} - {{page_last}}</Label>
                            </FlexboxLayout>

                            <FlexboxLayout class="btnPagin" @tap="btn_next()">
                                <Image class="icon_pagin" src="~/assets/img/left_arrow.png" stretch="aspectFit"/>
                            </FlexboxLayout>
                          </FlexboxLayout>


                        </StackLayout>
  
                        </ScrollView>
  
    
    
                        
              </StackLayout>
                    
                
            </StackLayout>
        </ScrollView>
   
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
            form : {
              nik : '',
              tahun : 0,
              nilai : 0,
            },

            page_first: 1,
            page_last: 0,
            cari_value: "",
            loadingData : true,


            listData : [],

            UMUM : UMUM
        };
    },
    methods: {
        coba() {
            console.log("Yeaaah");
        },

        getView: function () {
          this.loadingData = true
          fetch(this.$store.state.url.CLIENT_RIWAYAT_TRANSAKSI + "view", {
              method: "POST",
              headers: {
                  "content-type": "application/json",
                  authorization: "kikensbatara " + AppSettings.getString("token")
              },
              body: JSON.stringify({
                  nik : this.form.nik,
                  data_ke: this.page_first,
                })
          })
              .then(res => res.json())
              .then(res_data => {
                this.listData = res_data.data;
                this.page_last = res_data.jml_data;

                this.loadingData = false

                this.getViewOne();
              });
        },

        getViewOne: function () {

          fetch(this.$store.state.url.CLIENT_RIWAYAT_TRANSAKSI + "viewOne", {
              method: "POST",
              headers: {
                  "content-type": "application/json",
                  authorization: "kikensbatara " + AppSettings.getString("token")
              },
              body: JSON.stringify({
                nik : this.form.nik,
                tahun: this.form.tahun,
                })
          })
              .then(res => res.json())
              .then(res_data => {
                  // console.log(res_data);
                  this.form.nilai = res_data.total
                  // this.listData = res_data
              });
        },

        detileModal(data){


          console.log(data);

                  
          this.$showModal("RiwayatRetribusiDetile", {
            props: {
              data : data,
            },
            fullscreen: false,
            dismissEnabled : false,
            animated: true,
            stretched: false,
            dimAmount: 0.2 // Sets the alpha of the background dim,
          })


        },


        btn_prev : function(){
            if(this.page_first>1){
                this.page_first--
            }else{
                this.page_first = 1;
            }
            this.getView();
        },

        btn_next : function(){
            if(this.page_first >= this.page_last){
                this.page_first == this.page_last
            }else{
                this.page_first++;
            }
            this.getView();
        },

      
  
  
    },
  
  
    mounted () {
      // setTimeout(() => {
      //   this.doScanWithBackCameraWithFlip()
      // }, 1000);

      const profile2 = AppSettings.getString("profile")
      const profile1 = JSON.parse(profile2)
      const profile = profile1.profile

      // console.log(profile);

      this.form.nik = profile.nik

      let date =  new Date().getFullYear();
      this.form.tahun = date

      this.getView();
      
      // this.profile.nama = profile.nama

    },
  
  };
  </script>
  
  <style scoped lang="css">

    .dashBoardAtasList{
        justify-content: center;
        /* align-items: center; */
        flex-direction: column;
        margin-top: -5;
        margin-bottom: 23;
        /* background: yellow; */
        border-style: solid;
        border-bottom-width: 2;
        border-bottom-color: #a5a5a5;

    }
    .flexListData{
        /* height: 79; */
        border-radius: 5;
        padding: 7 14 7 14;
        flex: 1;
        /* justify-content: center */
        border-style: solid;
        border-width: 1;
        border-color: #E2E2E2;
        margin-top: 4;
        margin-bottom: 4;
    }
    
    .flexListDataItem{
        flex-direction: column;
        /* justify-content: center; */
        /* flex: 1; */
    }

    .flexListDataItem1{
        flex: 1;
        justify-content : flex-end;
        align-items: center;
    }

    


  
  </style>
  