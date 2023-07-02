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
                    <Label class="DashboardDivItemLabel1">Profile</Label>
                  </FlexboxLayout>
                </FlexboxLayout>
                
                <StackLayout class="dashBoardContent1" >
                    <ScrollView orientation="vertical">
                        <StackLayout width="100%">
                          <FlexboxLayout class="FlexlistPhotoProfile">
                            <Image class="PhotoProfile" src="~/assets/img/ilfen.jpg" stretch="aspectFit"/>
                          </FlexboxLayout>

                          <FlexboxLayout class="FlexlistProfile">
                            <Label class="flexKetQRLabel">NIK</Label>
                            <Label class="flexLabelValue">74710851XXX0000X</Label>
                          </FlexboxLayout>

                          <FlexboxLayout class="FlexlistProfile">
                            <Label class="flexKetQRLabel">Nama</Label>
                            <Label class="flexLabelValue">ILFEN FEBRINA NINETIN, S.Kg</Label>
                          </FlexboxLayout>

                          <FlexboxLayout class="FlexlistProfile">
                            <Label class="flexKetQRLabel">Tempat/Tgl Lahir</Label>
                            <Label class="flexLabelValue">Kendari, 11 Februari 1990</Label>
                          </FlexboxLayout>

                          <FlexboxLayout class="FlexlistProfile">
                            <Label class="flexKetQRLabel">Telp</Label>
                            <Label class="flexLabelValue">085241766456</Label>
                          </FlexboxLayout>

                          <FlexboxLayout class="FlexlistProfile">
                            <Label class="flexKetQRLabel">Alamat</Label>
                            <Label class="flexLabelValue">Rumah : Jl. Torada No.10</Label>
                            <Label class="flexLabelValue">Kecamatan Kadia, Desa/Kelurahan Bende</Label>
                            <Label class="flexLabelValue">Kodya/Kab Kendari</Label>
                          </FlexboxLayout>
                        

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

    
  
  </style>
  