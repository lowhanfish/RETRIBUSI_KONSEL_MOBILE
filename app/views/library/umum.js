
// import store from '../../store/DataStore'

// import * as store from '../../store/DataStore';
// import { store } from '../../store/DataStore';

// import store from ('../../store/DataStore');

// import { ResponseHandler } from "js-wheel/dist/index";

const tglConvert = (tgl) => {
    var date = new Date(tgl);
    // console.log(date)
    var getBulan = date.getMonth() + 1; var bulan = '';
    if (getBulan == '1') {bulan = 'Jan'} 
    else if(getBulan == '2') {bulan = 'Februari'}
    else if(getBulan == '3') {bulan = 'Maret'}
    else if(getBulan == '4') {bulan = 'April'}
    else if(getBulan == '5') {bulan = 'Mei'}
    else if(getBulan == '6') {bulan = 'Juni'}
    else if(getBulan == '7') {bulan = 'Juli'}
    else if(getBulan == '8') {bulan = 'Agustus'}
    else if(getBulan == '9') {bulan = 'September'}
    else if(getBulan == '10') {bulan = 'Oktober'}
    else if(getBulan == '11') {bulan = 'November'}
    else if(getBulan == '12') {bulan = 'Desember'}

    if (tgl == undefined || tgl == null || tgl == '') {
        var tglku = "-";
        var time = "-"
    } else {
        var tglku = date.getDate() + " " + bulan + " " + date.getFullYear();
        var time = date.getHours() +':'+date.getMinutes()+':'+date.getSeconds()
    }


    return {
        tgl : tglku,
        time : time
    };
}


const getSaldo = (username) => {
    var data ='store'
    console.log(data);
    // fetch(this.$store.state.url.URL_DOMPET +'cek_saldo' , {
    //     method: "POST",
    //     headers: {
    //         "content-type": "application/json",
    //         authorization: "kikensbatara " + AppSettings.getString("token")
    //     },
    //     body: JSON.stringify({
    //         user: ''
    //     })
    // })
    //     .then(res => res.json())
    //     .then(res_data => {
    //         console.log('+++++++++++++++++++++++++++++');
    //         console.log(res_data.saldo);
            
    //     });
}



module.exports = {
    tglConvert          : tglConvert, 
}