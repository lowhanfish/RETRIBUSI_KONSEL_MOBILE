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
                <Label class="lableModalNotif1 poppins">Hy Ilfen, anda akan melakukan transaksi pada Pasar :</Label>
                <Label class="lableModalNotif2 poppins-bold">PASAR UNIT TINANGGEA</Label>
                <Label class="lableModalNotif3 poppins">Silahkan cheklist Usaha yang akan anda bayarkan.....</Label>


                <FlexboxLayout class="flexModalList" v-for="data in listUsaha" :key="data.id">
                  

                  <FlexboxLayout class="flexModalListLeft">
                    <Label class="lableflexModalList1 poppins">{{data.uraian}}</Label>
                    <Label class="lableflexModalList2 poppins">Los Kelas I</Label>
                    <Label class="lableflexModalList3 poppins">Rp. 15.000</Label>
                  </FlexboxLayout>

                  <FlexboxLayout class="flexModalListRight">
                    <check-box class="flexModalListRightCheck" @checkedChange="getCheck(data)" />
                  </FlexboxLayout>

                  <!-- <Label class="lableModalNotif2 poppins-bold">{{isChecked}}</Label> -->
                </FlexboxLayout>


                <Label class="lableModalHeader poppins" marginTop="13">Rp. 35.000</Label>

                <Ripple @tap="closeModal()">
                  <FlexboxLayout class="BtnAdd">
                    <Label class="BtnAddList poppins-Medium">Tap Untuk Mulai Membayar (Rp.35.000)</Label>
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
  
  
  
  
  export default {
    data() {
      return {
        isChecked: false,
        listUsaha :[
          {id : 1, uraian : 'Toko Bumi Karya'},
          {id : 1, uraian : 'Toko Gemilang'},
        ]
      }
    },
    methods: {
      closeModal() {
        this.$modal.close();
      },

      getCheck(e){
        console.log(e);
      }




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
  