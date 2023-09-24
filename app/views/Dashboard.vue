<template>
    <Page actionBarHidden="true" class="coverColor">
      <StackLayout>
        <ScrollView orientation="vertical" height="100%">
          <StackLayout width="100%" class="pembungkus">
            
            <Headerx />

              <!-- <Label class="notifError">AAAAAAAAAAASSSUUU</Label> -->

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
                    
                    <Ripple class="DashboardDivItem" @tap="routex('QRProfile.index')">
                    <FlexboxLayout class="DashboardDivItem">
                        <FlexboxLayout class="DashboardDivItemLogo">
                          <Image class="DashboardDivItemIcon" src="~/assets/img/cash.png" stretch="aspectFit"/>
                        </FlexboxLayout>
                        <Label class="DashboardDivItemLabel1">Bayar</Label>
                        <Label class="DashboardDivItemLabel2">Cash</Label>
                      </FlexboxLayout>
                    </Ripple>
  
                    <Ripple class="DashboardDivItem" @tap="routex('QRBayarRetribusi.index')">
                      <FlexboxLayout class="DashboardDivItem">
                        <FlexboxLayout class="DashboardDivItemLogo">
                          <Image class="DashboardDivItemIcon" src="~/assets/img/scan.png" stretch="aspectFit"/>
                        </FlexboxLayout>
                        <Label class="DashboardDivItemLabel1">Bayar dengan</Label>
                        <Label class="DashboardDivItemLabel2">Scan barcode</Label>
                      </FlexboxLayout>
                    </Ripple>
  
  
                    <Ripple class="DashboardDivItem" @tap="routex('SaldoIsi.index')">
                      <FlexboxLayout class="DashboardDivItem">
                        <FlexboxLayout class="DashboardDivItemLogo">
                          <Image class="DashboardDivItemIcon" src="~/assets/img/isi_saldo.png" stretch="aspectFit"/>
                        </FlexboxLayout>
                        <Label class="DashboardDivItemLabel1">Riwayat</Label>
                        <Label class="DashboardDivItemLabel2">Isi Saldo</Label>
                      </FlexboxLayout>
                    </Ripple>
  
                    <Ripple class="DashboardDivItem" @tap="routex('riwayatRetribusi.index')">
                      <FlexboxLayout class="DashboardDivItem">
                        <FlexboxLayout class="DashboardDivItemLogo">
                          <Image class="DashboardDivItemIcon" src="~/assets/img/riwayat.png" stretch="aspectFit"/>
                        </FlexboxLayout>
                        <Label class="DashboardDivItemLabel1">Riwayat</Label>
                        <Label class="DashboardDivItemLabel2">Transaksi</Label>
                      </FlexboxLayout>
                    </Ripple>
  
                  </FlexboxLayout>
                
                
                <StackLayout class="dashBoardContent" >
                  <ScrollView orientation="vertical" height="100%">
                  
                    <StackLayout width="100%">
                      <transition name="bounce" appear>
                      <FlexboxLayout class="dashBoardAtas_white">

                        <Ripple class="DashboardDivItem" @tap="routex('Profile.index')">
                          <FlexboxLayout class="DashboardDivItem_blue">
                            <FlexboxLayout class="DashboardDivItemLogo_blue">
                              <Image class="DashboardDivItemIcon" src="~/assets/img/profile.png" stretch="aspectFit"/>
                            </FlexboxLayout>
                            <Label class="DashboardDivItemLabel1_blue">Profil</Label>
                          </FlexboxLayout>
                        </Ripple>

                        <Ripple class="DashboardDivItem" @tap="routex('ListUsaha.index')">
                          <FlexboxLayout class="DashboardDivItem_blue">
                            <FlexboxLayout class="DashboardDivItemLogo_blue">
                              <Image class="DashboardDivItemIcon" src="~/assets/img/shop.png" stretch="aspectFit"/>
                            </FlexboxLayout>
                            <Label class="DashboardDivItemLabel1_blue">List Usaha</Label>
                          </FlexboxLayout>
                        </Ripple>
                        <Ripple class="DashboardDivItem" @tap="routex('Berita.index')">
                          <FlexboxLayout class="DashboardDivItem_blue">
                            <FlexboxLayout class="DashboardDivItemLogo_blue">
                              <Image class="DashboardDivItemIcon" src="~/assets/img/news.png" stretch="aspectFit"/>
                            </FlexboxLayout>
                            <Label class="DashboardDivItemLabel1_blue">Berita</Label>
                          </FlexboxLayout>
                        </Ripple>
                        <Ripple class="DashboardDivItem" @tap="routex('Konfigurasi.index')">
                          <FlexboxLayout class="DashboardDivItem_blue">
                            <FlexboxLayout class="DashboardDivItemLogo_blue">
                              <Image class="DashboardDivItemIcon" src="~/assets/img/setting.png" stretch="aspectFit"/>
                            </FlexboxLayout>
                            <Label class="DashboardDivItemLabel1_blue">Konfigurasi</Label>
                          </FlexboxLayout>
                        </Ripple>


                      </FlexboxLayout>
                      </transition>
                      <FlexboxLayout class="pembatas"></FlexboxLayout>


                      
                      <transition name="bounce" appear>
                        <FlexboxLayout v-if="loadingData==true" style="justify-content: center; align-items: center;">
                          <FlexboxLayout class="FlexlistPhotoProfile1" style="flex-direction: column; margin-top: 30; margin-bottom: 15; justify-content: center; align-items: center;">
                            <Gif class="PhotoLoading" src="~/assets/img/loading.gif" stretch="aspectFit"/>
                            <Label class="" style="color:#4e4e4e; font-size: 13; font-weight: bold;">MEMUAT BERITA..!!</Label>
                          </FlexboxLayout>
                        </FlexboxLayout>
                        <FlexboxLayout class="newsFlex" v-if="loadingData==false" >
                          <FlexboxLayout v-for="data in listData" :key="data.id" class="flexContentNews">
                            <FlexboxLayout class="imgNewsFlex">
                              <Ripple>
                                <Image @tap="BeritaDetile(data)" class="imgNews" :src="$store.state.url.URL_WEB+'uploads/'+data.foto"/>
                              </Ripple>
                            </FlexboxLayout>
                            <FlexboxLayout class="labelNewsFlex">
                              <Ripple class="RippleTitleNews">
                                <Label @tap="BeritaDetile(data)" class="labelNews1" :textWrap="true">{{data.judul}}</Label>
                              </Ripple>
                              <Label class="labelNews2">{{data.createBy}}, {{UMUM.tglConvert(data.createAt).tgl}} ({{UMUM.tglConvert(data.createAt).time}})</Label>
                            </FlexboxLayout>
                          </FlexboxLayout>
                          
                          <FlexboxLayout class="buttonLainnya" @tap="routex('Berita.index')">
                            <Label class="h_buttonLainnya">SELENGKAPNYA</Label>
                          </FlexboxLayout>
                          
                        </FlexboxLayout>
                      </transition>

                      
                        <FlexboxLayout class="pembatas"></FlexboxLayout>

                        

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
import UMUM from "./library/umum";

export default {
    data() {
        return {
            stringx: `Contoh judul informasi terkait retribusi ke-I`,
            tester : AppSettings.getString("token"),
            unit_kerja : '',

            page_first: 1,
            page_last: 0,
            data_batas : 6,


            loadingData : true,
            routexload : false,
            listData : [],

            UMUM : UMUM,

        };
    },
    methods: {


        check_token_aktif() {
          fetch(this.$store.state.url.URL_CHECK_TOKEN , {
              method: "GET",
              headers: {
                  "content-type": "application/json",
                  authorization: "kikensbatara " + AppSettings.getString("token")
              }
          })
              .then(res => res.json())
              .then(res_data => {
                // console.log('+++++++++++++++++++++++++++++');
                // console.log(res_data.message);
                if (res_data.message == null || res_data.message == undefined || res_data.message=='') {
                  return false
                } else {
                  if (res_data.message == 'Tidak ter-Authorisasi') {
                    AppSettings.remove("token");
                    AppSettings.remove("profile");
                    this.$router.push('Login.index')
                  } else {
                    // console.log("TIDAK HARUS KE LOGIN");
                    return false
                  }
                }

              });
        },

        routex(name_route) {
            this.$router.push(name_route);
        },

        getView: function () {
          // console.log(this.$store.state.url.URL_APP+'uploads/');
          this.loadingData = true
          fetch(this.$store.state.url.CLIENT_WEB_BERITA + "viewLimit", {
              method: "POST",
              headers: {
                  "content-type": "application/json",
                  authorization: "kikensbatara " + AppSettings.getString("token")
              },
              body: JSON.stringify({
                  data_ke: this.page_first,
                  data_batas : this.data_batas,
                  // unit_kerja : this.unit_kerja
                })
          })
              .then(res => res.json())
              .then(res_data => {
                this.listData = res_data
                this.loadingData = false
                // console.log(res_data);

                // this.getViewOne();
              });
        },

        BeritaDetile : function(data){
          this.$router.push('Detile_berita.index', { props: { data: data }});
        },


    },


    mounted () {

      
      
      // console.log(AppSettings.getString("token"));
      
      
      
    },
    
    created (){
      const token = AppSettings.getString("token")
      if (token == null || token == '' || token == undefined) {
        router.push('login.index')
      } else {
        this.check_token_aktif();
      }
      this.getView();
    }

};
</script>

<style scoped lang="css">












</style>
