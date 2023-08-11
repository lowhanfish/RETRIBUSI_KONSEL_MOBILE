<template>
    <Page actionBarHidden="true" class="coverColor">
        <ScrollView orientation="vertical" class="scrollViewsz">
            <StackLayout width="100%" class="pembungkus">

                <Headerx />
  
                <FlexboxLayout class="dashBoardAtas">
                  <FlexboxLayout class="DashboardDivItem">
                    <FlexboxLayout class="DashboardDivItemLogo">
                        <Image class="DashboardDivItemIcon" src="~/assets/img/isi_saldo.png" stretch="aspectFit"/>
                    </FlexboxLayout>
                    <Label class="DashboardDivItemLabel1">Berita</Label>
                    <Label class="DashboardDivItemLabel2">Terkini</Label>
                  </FlexboxLayout>
                </FlexboxLayout>
                
                <StackLayout class="dashBoardContent1" >
                        <ScrollView orientation="vertical">
                        <StackLayout width="100%">
  
                            <FlexboxLayout flexDirection="column" class="">
                                <TextField style="placeholder-color:#a3a3a3" v-model="cari_value" @textChange="cariValue()" class="cariValue" hint="Cari Berita"/>
                            </FlexboxLayout>

                            <FlexboxLayout class="pembatas"></FlexboxLayout>

                          <FlexboxLayout class="FlexlistPhotoProfile1" v-if="loadingData ==true">
                            <FlexboxLayout class="FlexlistPhotoProfile1">
                              <Gif class="PhotoLoading" src="~/assets/img/loading.gif" stretch="aspectFit"/>
                              <Label class="flexKetQRLabel">LOADING..!!</Label>
                            </FlexboxLayout>
                          </FlexboxLayout>

  
                            <FlexboxLayout v-for="data in listData" :key="data.id" class="flexContentNews">
                              <FlexboxLayout class="imgNewsFlex">
                                <Ripple @tap="BeritaDetile(data)">
                                  <Image class="imgNews" :src="$store.state.url.URL_WEB+'uploads/'+data.foto"/>
                                </Ripple>
                              </FlexboxLayout>
                              <FlexboxLayout class="labelNewsFlex">
                                <Ripple @tap="BeritaDetile(data)" class="RippleTitleNews">
                                  <Label class="labelNews1" :textWrap="true">{{data.judul}}</Label>
                                </Ripple>
                                <Label class="labelNews2">{{data.createBy}}, {{UMUM.tglConvert(data.createAt).tgl}} ({{UMUM.tglConvert(data.createAt).time}})</Label>
                              </FlexboxLayout>
                            </FlexboxLayout>


                            <FlexboxLayout class="pembatas"></FlexboxLayout>

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
            data_batas : 8,
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
            console.log(this.cari_value);
          this.loadingData = true
          fetch(this.$store.state.url.CLIENT_WEB_BERITA + "viewWebsiteBaruMobile", {
              method: "POST",
              headers: {
                  "content-type": "application/json",
                  authorization: "kikensbatara " + AppSettings.getString("token")
              },
              body: JSON.stringify({
                    cari_value : this.cari_value,
                    data_ke: this.page_first,
                    data_batas : this.data_batas,
                    // unit_kerja : this.unit_kerja
                })
          })
              .then(res => res.json())
              .then(res_data => {
                // console.log(res_data);
                this.listData = res_data.data;
                this.page_last = res_data.jml_data;
                this.loadingData = false
              });
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

        cariValue : function(){
            this.page_first = 1
            this.getView();
        }

      
  
  
    },
  
  
    mounted () {

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
  