import Vue from 'nativescript-vue'

import Vuex from 'vuex'
Vue.use(Vuex);

// var URL = 'http://localhost:5045/';
// var URL = 'http://192.168.1.5:5045/';
// var URL = 'http://192.168.1.3:5045/';
// var URL = 'http://192.168.1.10:5045/';
var URL = 'https://server-e-retribusi.konaweselatankab.go.id/';
// var URL_WEB = 'http://192.168.1.3:5005/';
var URL_WEB = 'https://server-web.konaweselatankab.go.id/';


const store1 = {
    // state
    state: {
        FCM_TOKEN : 'ccccccccccccc',
        url:{
            URL_APP                  : URL,
            URL_WEB                  : URL_WEB,
            URL_DASHBOARD            : URL + 'api/v1/dashboard/',
            URL_WILAYAH              : URL + 'api/v1/m_wilayah/',
            M_UNIT_RETRIBUSI         : URL + 'api/v1/m_unit_retribusi/',
            M_HARGA_RETRIBUSI        : URL + 'api/v1/m_harga_retribusi/',
            M_LIST_UNIT_RETRIBUSI    : URL + 'api/v1/m_list_unit_retribusi/',
            M_MENU                   : URL + 'api/v1/menuList/',
            URL_DM_KLP_USERS         : URL + 'api/v1/kelompokUsers/',
            URL_REGISTER             : URL + 'api/v1/registrasi/',
            URL_DOMPET               : URL + 'api/v1/dompet/',
            LOGIN_URL                : URL + 'auth/',
            
            MASTER_UNIT              : URL + 'api/v1/master_unit/',
            MASTER_LAPAK             : URL + 'api/v1/master_lapak/',
            MASTER_JENIS_USAHA       : URL + 'api/v1/master_jenis_usaha/',
            MASTER_JENIS_USAHA_LIST  : URL + 'api/v1/master_jenis_usaha_list/',
            MASTER_USAHA             : URL + 'api/v1/master_usaha/',

            CLIENT_PROFILE                : URL + 'api/v1/client_Profile/',
            CLIENT_LIST_USAHA             : URL + 'api/v1/client_ListUsaha/',
            CLIENT_QRBAYAR_RETRIBUSI      : URL + 'api/v1/client_QRBayarRetribusi/',
            CLIENT_RIWAYAT_TRANSAKSI      : URL + 'api/v1/client_RiwayatTransaksi/',
            CLIENT_RIWAYAT_SALDO          : URL + 'api/v1/client_RiwayatSaldo/',

            CLIENT_WEB_BERITA          : URL_WEB + 'api/v1/web_publish_berita/',

            URL_CHECK_TOKEN            : URL + 'check_connections',
        },


        JML_SALDO : 0,
        ROUTE_DUMMY : ''
      
    },
    // mutations
    mutations: {

    },
    getters: {

    }
}



const DataStore = new Vuex.Store(store1);

export default DataStore;