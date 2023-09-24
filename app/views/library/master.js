// import { store } from '../../store/DataStore';
import * as AppSettings from '@nativescript/core/application-settings';
import storex from '../../store/DataStore'
var store = storex.state

const getSaldo = (username) => {
    // var data ='storexxx'
    // var data = store.url.URL_APP
    // console.log(data);
    fetch(storex.state.url.URL_DOMPET +'cek_saldo' , {
        method: "POST",
        headers: {
            "content-type": "application/json",
            authorization: "kikensbatara " + AppSettings.getString("token")
        },
        body: JSON.stringify({
            user: ''
        })
    })
        .then(res => res.json())
        .then(res_data => {
            console.log('+++++++++++++++++++++++++++++');
            console.log(res_data.saldo);

            storex.state.JML_SALDO = res_data.saldo
            
        });
}


export default {
    getSaldo : getSaldo
};