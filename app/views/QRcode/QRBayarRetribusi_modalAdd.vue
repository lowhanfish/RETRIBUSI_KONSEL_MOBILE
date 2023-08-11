<template>
    <Page>
      <ModalStack dismissEnabled="false" class="scrollModal">
        <ScrollView>
          <StackLayout class="coverModal">
            <FlexboxLayout class="coverModalHeader">
              <FlexboxLayout class="flexLabelModalClose" @tap="closeModal()">
                <Label class="labelModalClose poppins-bold">X</Label>
              </FlexboxLayout>
              
              <FlexboxLayout class="flexLableModalHeader">
                <Label class="lableModalHeader poppins-Medium">PILIH RETRIBUSI USAHA</Label>
              </FlexboxLayout>

              <FlexboxLayout class="flexLableModalNotif">
                <Label class="lableModalNotif1 poppins" textWrap="true">Hy {{profile.nama}}, anda akan melakukan transaksi pada Pasar :</Label>
                <Label class="lableModalNotif2 poppins-bold">{{profile.unit_uraian}}</Label>
                <Label class="lableModalNotif3 poppins">Silahkan cheklist Usaha yang akan anda bayarkan.....</Label>


                <FlexboxLayout class="flexModalList" v-for="(data, index) in listUsaha" :key="data.id">
                  

                  <FlexboxLayout class="flexModalListLeft">
                    <Label class="lableflexModalList1 poppins">{{data.master_usaha_uraian}}</Label>
                    <Label class="lableflexModalList2 poppins">{{data.master_lapak_uraian}}</Label>
                    <Label class="lableflexModalList3 poppins">Rp. {{data.master_lapak_harga}}</Label>
                  </FlexboxLayout>

                  <FlexboxLayout class="flexModalListRight">
                    <check-box class="flexModalListRightCheck" @checkedChange="getCheck(index, $event.value)" />
                  </FlexboxLayout>

                  <!-- <Label class="lableModalNotif2 poppins-bold">{{isChecked}}</Label> -->
                </FlexboxLayout>


                <Label class="lableModalHeader poppins" marginTop="13">Rp. {{ form.nilai }}</Label>

                <Ripple v-if="!loading" @tap="addRetribusi()">
                  <FlexboxLayout class="BtnAdd">
                    <Label class="BtnAddList poppins-Medium">Tap Untuk Mulai Membayar (Rp.{{ form.nilai }})</Label>
                  </FlexboxLayout>
                </Ripple>


                <Ripple v-if="loading">
                  <FlexboxLayout class="BtnAdd">
                    <ActivityIndicator busy="true" @busyChange="loading" />
                  </FlexboxLayout>
                </Ripple>


                <Ripple @tap="closeModal()">
                  <FlexboxLayout class="BtnCancel">
                    <Label class="BtnAddList poppins-Medium">Batalkan pembayaran</Label>
                  </FlexboxLayout>
                </Ripple>

                




              </FlexboxLayout>
            </FlexboxLayout>
           
          </StackLayout>

        </ScrollView>
      </ModalStack>
    </Page>
  </template>
  
  <script>
  
  import * as AppSettings from '@nativescript/core/application-settings';
  
  
  export default {
    props:['listUsaha', 'profile'],
    data() {
      return {
        isChecked: false,
        form : {
          nama : '',
          nik : '',
          nilai : 0,
        },


        loading : false,





        

      }
    },
    methods: {


      addRetribusi: function () {


        this.loading = true;

        fetch(this.$store.state.url.CLIENT_QRBAYAR_RETRIBUSI + "addOne", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: "kikensbatara " + AppSettings.getString("token")
            },
            body: JSON.stringify({
              listUsaha: this.listUsaha,
              nilai : this.form.nilai
            })
        })
            .then(res => res.json())
            .then(res_data => {
                console.log(res_data);
                // this.listData = res_data
                // this.profile.unit_uraian = this.listData[0].uraian

                this.loading = false;

                alert({
                  title: res_data.jud,
                  // message: result.text,
                  message: res_data.ket,
                  okButtonText: "OK"
                });

                this.closeModal();

                // this.addDataModal();
            });
      },



      closeModal() {
        this.$modal.close();
        this.$router.push('dashboard.index');

      },

      getCheck(i, e){
        
        this.listUsaha[i].status = e

        var nilai = 0
        this.listUsaha.forEach(element => {
          if (element.status == true) {
            nilai = nilai + parseFloat(element.master_lapak_harga)
          }          
        });


        this.form.nilai = nilai




      }




    },


    mounted () {


    },

  };
  </script>
  
  <style scoped lang="css">
    .coverModalHeader{
      flex-direction: column;
      padding-bottom: 32;
    }

    .flexLableModalHeader{
      justify-content: center;
      align-items: center;
    }

    .flexLabelModalClose{
      align-self: flex-end;
      padding-right: 5;
    }

    .lableModalHeader{
      font-size: 14;
      color: #000000;
    }

    .labelModalClose{
      color: #7E7E7E;
      font-size: 14;
    }



    .flexLableModalNotif{
      flex-direction: column;
      padding-left: 30;
      padding-right: 30;
    }
    .lableModalNotif1{
      color :#7E7E7E;
      font-size: 10;
      /* flex-wrap: wrap; */

    }
    .lableModalNotif2{
      color :#7E7E7E;
      font-size: 10;
      margin-top: -7;
    }
    .lableModalNotif3{
      color :#7E7E7E;   
      font-size: 8;
      margin-top: -5;
    }


    .flexModalList{
      flex-direction: row;
      background-color: white;
      border-radius: 5;
      padding-right: 7;
      padding-left: 7;
      padding-top: 7;
      padding-bottom: 7;
      justify-content: center;
      align-items: center;
      margin-top: 8;
    }

    .flexModalListLeft{
      flex-direction: column;
      /* background-color: yellowgreen; */
      flex: 1;
    }

    .flexModalListRight{
      /* background-color: pink; */
      flex-direction: column;
      /* align-self: flex-end; */
      width: 30;
      
    }

    .lableflexModalList1{
      font-size: 10;
      color: #000000;
    }
    .lableflexModalList2{
      font-size: 8;
      color: #7E7E7E;
      margin-top: -9; 
    }
    .lableflexModalList3{
      font-size: 10;
      color: #000000;
      margin-top: -5;       
    }
  
  
  
  </style>
  