<template>
    <Page actionBarHidden="true" class="coverColor">
        <ScrollView orientation="vertical" class="scrollViewsz">
            <StackLayout width="100%" class="pembungkus">
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

                <Headerx />
  
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
                        <ScrollView orientation="vertical">
                        <StackLayout width="100%">
  
                          <FlexboxLayout class="dashBoardAtasList">
                            <Label class="flexKetQRLabel">Total Kontribusi anda tahun ini (2022)</Label>
                            <Label class="DashboardDivItemLabel1_black">Rp. 250.000</Label>
                          </FlexboxLayout>
  
                          
                          <FlexboxLayout class="flexListData" v-for="(data, i) in 8" :key="i">
                            <FlexboxLayout class="flexListDataItem">
                                <Label class="flexKetQRLabel">Rp. 2.000</Label>
                                <Label class="flexKetQRLabel">11 Mei 2023</Label>
                                <Label class="labelNotifOrange">Pasar Palangga</Label>
                            </FlexboxLayout>


                            <FlexboxLayout class="flexListDataItem1">
                                <Label class="labelNotifBlue">Detile</Label>
                            </FlexboxLayout>
                            

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
      
  
  
    },
  
  
    mounted () {
      // setTimeout(() => {
      //   this.doScanWithBackCameraWithFlip()
      // }, 1000);
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
  