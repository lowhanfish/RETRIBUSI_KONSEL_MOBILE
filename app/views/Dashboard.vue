<template>
    <Page actionBarHidden="true" class="coverColor">
        <ScrollView orientation="vertical">
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
                      <Label class="DashboardDivItemLabel1">Isi</Label>
                      <Label class="DashboardDivItemLabel2">Saldo</Label>
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
                        <ScrollView orientation="vertical">
                        <StackLayout width="100%">

                          <FlexboxLayout class="dashBoardAtas_white">

                            <Ripple class="DashboardDivItem" @tap="routex('Profile.index')">
                              <FlexboxLayout class="DashboardDivItem_blue">
                                <FlexboxLayout class="DashboardDivItemLogo_blue">
                                  <Image class="DashboardDivItemIcon" src="~/assets/img/isi_saldo.png" stretch="aspectFit"/>
                                </FlexboxLayout>
                                <Label class="DashboardDivItemLabel1_blue">Profil</Label>
                              </FlexboxLayout>
                            </Ripple>

                            <Ripple class="DashboardDivItem" @tap="routex('ListUsaha.index')">
                              <FlexboxLayout class="DashboardDivItem_blue">
                                <FlexboxLayout class="DashboardDivItemLogo_blue">
                                  <Image class="DashboardDivItemIcon" src="~/assets/img/isi_saldo.png" stretch="aspectFit"/>
                                </FlexboxLayout>
                                <Label class="DashboardDivItemLabel1_blue">List Usaha</Label>
                              </FlexboxLayout>
                            </Ripple>
                            <Ripple class="DashboardDivItem" @tap="routex('Aduan.index')">
                              <FlexboxLayout class="DashboardDivItem_blue">
                                <FlexboxLayout class="DashboardDivItemLogo_blue">
                                  <Image class="DashboardDivItemIcon" src="~/assets/img/isi_saldo.png" stretch="aspectFit"/>
                                </FlexboxLayout>
                                <Label class="DashboardDivItemLabel1_blue">Lapor</Label>
                              </FlexboxLayout>
                            </Ripple>
                            <Ripple class="DashboardDivItem" @tap="routex('Konfigurasi.index')">
                              <FlexboxLayout class="DashboardDivItem_blue">
                                <FlexboxLayout class="DashboardDivItemLogo_blue">
                                  <Image class="DashboardDivItemIcon" src="~/assets/img/isi_saldo.png" stretch="aspectFit"/>
                                </FlexboxLayout>
                                <Label class="DashboardDivItemLabel1_blue">Konfigurasi</Label>
                              </FlexboxLayout>
                            </Ripple>

                           

                          </FlexboxLayout>
                            <Label class="" :text="tester" textWrap="true"/>
                            <Label class="" :text="stringx" textWrap="true"/>
                            <Label class="" :text="stringx" textWrap="true"/>
                            <Label class="" :text="stringx" textWrap="true"/>
                            <Label class="" :text="stringx" textWrap="true"/>
                            <Label class="" :text="stringx" textWrap="true"/>
                            <Label class="" :text="stringx" textWrap="true"/>
                            <Label class="" :text="stringx" textWrap="true"/>
                            <Label class="" :text="stringx" textWrap="true"/>

                        </StackLayout>

                        </ScrollView>

    
    
                        
                    </StackLayout>
                    
                
            </StackLayout>
        </ScrollView>
   
    </Page>
</template>

<script>


import * as AppSettings from '@nativescript/core/application-settings';


export default {
    data() {
        return {
            stringx: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
            tester : AppSettings.getString("token"),
        };
    },
    methods: {
        coba() {
            console.log("Yeaaah");
        },
        routex(name_route) {
            this.$router.push(name_route);
        }
    },


    mounted () {

      const token = AppSettings.getString("token")
      if (token == null || token == '' || token == undefined) {
        router.push('login.index')
      } else {}



    },

};
</script>

<style scoped lang="css">





</style>
