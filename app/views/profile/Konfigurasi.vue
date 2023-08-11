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
                    <Label class="DashboardDivItemLabel1">Konfigurasi</Label>
                  </FlexboxLayout>
                </FlexboxLayout>
                
                <StackLayout class="dashBoardContent1" >
                    <ScrollView orientation="vertical">
                        <StackLayout width="100%">


                          <FlexboxLayout class="FlexbatasBesar"></FlexboxLayout>

                          <FlexboxLayout class="FlexinputField">
                            <Label class="inputFieldKuLabel">NIK</Label>
                            <TextField v-model="form.nik" class="inputFieldKu"/>
                          </FlexboxLayout>

                          <FlexboxLayout class="FlexinputField">
                            <Label class="inputFieldKuLabel">Nama</Label>
                            <TextField v-model="form.nama" class="inputFieldKu"/>
                          </FlexboxLayout>

                          <FlexboxLayout class="FlexinputField">
                            <Label class="inputFieldKuLabel">Tempat</Label>
                            <TextField v-model="form.tmp_lahir" class="inputFieldKu"/>
                          </FlexboxLayout>

                          <FlexboxLayout class="FlexinputField">
                            <Label class="inputFieldKuLabel">Tgl Lahir</Label>
                            <TextField v-model="form.tgl_lahir" class="inputFieldKu"/>
                          </FlexboxLayout>

                          <FlexboxLayout class="FlexinputField">
                            <Label class="inputFieldKuLabel">Telp</Label>
                            <TextField v-model="form.hp" class="inputFieldKu"/>
                          </FlexboxLayout>

                          <FlexboxLayout class="FlexbatasBesar" marginTop="14"></FlexboxLayout>

                          <FlexboxLayout class="FlexinputField">
                            <Label class="inputFieldKuLabel">Provinsi</Label>
                            <TextField v-model="form.prov" class="inputFieldKu"/>
                          </FlexboxLayout>
                          <FlexboxLayout class="FlexinputField">
                            <Label class="inputFieldKuLabel">Kab/kota</Label>
                            <TextField v-model="form.kab" class="inputFieldKu"/>
                          </FlexboxLayout>
                          <FlexboxLayout class="FlexinputField">
                            <Label class="inputFieldKuLabel">Kecamatan</Label>
                            <TextField v-model="form.kec" class="inputFieldKu"/>
                          </FlexboxLayout>
                          <FlexboxLayout class="FlexinputField">
                            <Label class="inputFieldKuLabel">Desa/Kelurahan</Label>
                            <TextField v-model="form.des" class="inputFieldKu"/>
                          </FlexboxLayout>
                          <FlexboxLayout class="FlexinputField">
                            <Label class="inputFieldKuLabel">Alamat</Label>
                            <TextField v-model="form.alamat" class="inputFieldKuTextArea"/>
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
              id: "",
              nik: "",
              username: "",
              nama: "",
              hp: "",
              email: "",
              password: "",
              menu_klp: 0,
              foto_profile: "",
              kec: "",
              des: "",
              kab: "",
              prov: "",
              alamat: "",
              tmp_lahir: "",
              tgl_lahir: "",
              jenis_kelamin: "",
              createdAt: "",
              createdBy: "",
              editedAt: "",
              editedBy: "",
              nama_kabupaten: "",
              nama_kecamatan: "",
              nama_des_kel: ""
            }
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
                  console.log(res_data);
                  this.form = res_data[0]
                  // this.profile.unit_uraian = this.listData[0].uraian
                  // this.addDataModal();
                  this.loadingData = false
              });

        },
      
  
  
    },
  
  
    mounted () {
      // setTimeout(() => {
      //   this.doScanWithBackCameraWithFlip()
      // }, 1000);

      this.viewOne()
    },
  
  };
  </script>
  
  <style scoped lang="css">

    
    .FlexbatasBesar{
      height: 17;
      background-color: #D9D9D9;
      margin-left: 5%;
      margin-right: 5%;
      margin-bottom: 7;
    }
    .FlexinputField{
      flex-direction: column;
    }


    .inputFieldKu{
      /* background: yellow; */
      height: 27;
      border-radius: 5;
      border-style: solid;
      border-width: 1;
      border-color: #dadada;
      margin-top: -1;
      padding-left: 3
    }

    .inputFieldKuTextArea{
      height: 75;
      border-radius: 5;
      border-style: solid;
      border-width: 1;
      border-color: #dadada;
      margin-top: -1;
      padding-left: 3
    }

    .inputFieldKuLabel{
      margin-left: 5%;
      font-size: 10;
      /* margin-top: 10; */
    }

  
  </style>
  