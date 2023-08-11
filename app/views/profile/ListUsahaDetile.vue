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
              <Label class="lableModalHeader poppins-Medium">DETILE USAHA</Label>
            </FlexboxLayout>

            <FlexboxLayout class="flexLableModalNotif">
              


              <FlexboxLayout class="flexModalList">
                

                <FlexboxLayout class="flexModalListLeft">
                  <Label class="lableModalNotif4 poppins-bold">Pasar Unit</Label>
                  <Label class="lableModalNotif5 poppins" textWrap="true">{{data.master_unit_uraian}}</Label>

                  <Label class="lableModalNotif4 poppins-bold">Nama Pemilik Usaha</Label>
                  <Label class="lableModalNotif5 poppins" textWrap="true">{{data.nama}}</Label>
                  <Label class="lableModalNotif4 poppins-bold">NIK</Label>
                  <Label class="lableModalNotif5 poppins" textWrap="true">{{data.nik}}</Label>
                  <Label class="lableModalNotif4 poppins-bold">Alamat Pemilik Usaha</Label>
                  <Label class="lableModalNotif5 poppins" textWrap="true">{{data.alamat}}</Label>

                  <Label class="lableModalNotif4 poppins-bold">Nama Toko/Usaha</Label>
                  <Label class="lableModalNotif5 poppins" textWrap="true">{{data.master_usaha_uraian}}</Label>
                  <Label class="lableModalNotif4 poppins-bold">Alamat Usaha</Label>
                  <Label class="lableModalNotif5 poppins" textWrap="true">{{data.master_unit_alamat}}</Label>

                  <Label class="lableModalNotif4 poppins-bold">Type / Nomor Perizinan</Label>
                  <Label class="lableModalNotif5 poppins" textWrap="true">{{data.master_usaha_tipe_perizinan}}/{{data.master_usaha_nomor_perizinan}}</Label>
                  <Label class="lableModalNotif4 poppins-bold">Jenis Lapak</Label>
                  <Label class="lableModalNotif5 poppins" textWrap="true">{{data.master_lapak_uraian}} ({{ data.master_lapak_keterangan }})</Label>

                  <Label class="lableModalNotif4 poppins-bold">Nilai Retribusi Lapak</Label>
                  <Label class="lableModalNotif5 poppins" textWrap="true">Rp. {{data.master_lapak_harga}}</Label>

                  <Label class="lableModalNotif4 poppins-bold">Jenis Usaha</Label>
                  <Label v-for="data1 in data.master_jenis_usaha" :key="data1.master_jenis_usaha_id" class="lableModalNotif5 poppins" textWrap="true">- {{data1.master_jenis_usaha_uraian}}</Label>

                </FlexboxLayout>



                <!-- <Label class="lableModalNotif2 poppins-bold">{{isChecked}}</Label> -->
              </FlexboxLayout>


              <Ripple @tap="closeModal()">
                <FlexboxLayout class="BtnCancel">
                  <Label class="BtnAddList poppins-Medium">Kembali ke list usaha</Label>
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
  props:['data'],
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



    closeModal() {
      this.$modal.close();
      // this.$router.push('ListUsaha.index');

    },




  },


  mounted () {
    console.log(this.data);

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

  .lableModalNotif4{
    color :#7E7E7E;
    font-size: 10;
    margin-top: 0;
  }

  .lableModalNotif5{
    color :#7E7E7E;
    font-size: 10;
    /* flex-wrap: wrap; */
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
