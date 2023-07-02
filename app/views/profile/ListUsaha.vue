<template>
    <Page actionBarHidden="true" class="coverColor">
        <ScrollView orientation="vertical" class="scrollViewsz">
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
                        <Image class="DashboardDivItemIcon" src="~/assets/img/isi_saldo.png" stretch="aspectFit"/>
                    </FlexboxLayout>
                    <Label class="DashboardDivItemLabel1">List</Label>
                    <Label class="DashboardDivItemLabel2">Usaha</Label>
                  </FlexboxLayout>
                </FlexboxLayout>
                
                <StackLayout class="dashBoardContent1" >
                    <ScrollView orientation="vertical">
                        <StackLayout width="100%">

                          <FlexboxLayout class="dashBoardAtasList">
                            <Label class="flexKetQRLabel">List Usaha anda saat ini</Label>
                          </FlexboxLayout>
  
                          
                          <FlexboxLayout class="flexListData" v-for="(data, i) in listData" :key="data.id+i">
                            <FlexboxLayout class="flexListDataItem">
                                <Label class="flexKetQRLabel">{{data.master_usaha_uraian}}</Label>
                            </FlexboxLayout>


                            <FlexboxLayout class="flexListDataItem1">
                                <Label class="labelNotifBlue">Detile</Label>
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
  
  export default {
    data() {
        return {
            QRCODE : '',
            TextQR : 'Telaso Jarot',



            listData : [],
            form : {
              nik : '',
            },
        };
    },
    methods: {
        coba() {
            console.log("Yeaaah");
        },

        getView: function () {

            fetch(this.$store.state.url.CLIENT_LIST_USAHA + "viewOne", {
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
                });
        },
      
  
  
    },
  
  
    mounted () {

      const profile2 = AppSettings.getString("profile")
      const profile1 = JSON.parse(profile2)

      const profile = profile1.profile

      // console.log(profile.nik);

      this.form.nik = profile.nik



      this.getView()
      // setTimeout(() => {
      //   this.doScanWithBackCameraWithFlip()
      // }, 1000);
    },
  
  };
  </script>
  
  <style scoped lang="css">


  
  </style>
  