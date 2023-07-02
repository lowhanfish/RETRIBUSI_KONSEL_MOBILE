import Vue from 'nativescript-vue'

import Vuex from 'vuex'
Vue.use(Vuex);

// var URL = 'http://localhost:5014/';
// var URL = 'http://192.168.1.5:5014/';
var URL = 'http://192.168.1.8:5044/';


const store1 = {
    // state
    state: {
        FCM_TOKEN : 'ccccccccccccc',
        url:{
            URL_APP                  : URL,
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






            CLIENT_LIST_USAHA             : URL + 'api/v1/client_ListUsaha/',




            
        },
      
    },
    // mutations
    mutations: {

    },
    getters: {

    }
}



const DataStore = new Vuex.Store(store1);

export default DataStore;