import VueDevtools from 'nativescript-vue-devtools'
import Vue from 'nativescript-vue'

import Dashboard from './views/Dashboard'

import Apx from './views/auth/Login'
import QRBayarRetribusi from './views/QRcode/QRBayarRetribusi'
import QRProfile from './views/QRcode/QRProfile'
import ContohCamera from './views/QRcode/ContohCamera'
import RiwayatRetribusi from './views/riwayat/RiwayatRetribusi'
import SaldoDetile from './views/saldo/SaldoDetile'
import SaldoIsi from './views/saldo/SaldoIsi'

import Aduan from './views/profile/Aduan'
import Konfigurasi from './views/profile/Konfigurasi'
import ListUsaha from './views/profile/ListUsaha'
import Profile from './views/profile/Profile'

import DetileBerita from './views/berita/Detile'

import router from './router'


import './assets/css/animated.css'
import './assets/css/kiken.css'
import './assets/css/button.css'
import './assets/css/bg.css'
import './assets/css/huruf.css'



import store from './store/DataStore'
// Vue.use(store)

Vue.use(VueDevtools)


import Vuex from 'vuex'
Vue.use(Vuex);

Vue.registerElement('Ripple', () => require('nativescript-ripple').Ripple);
Vue.registerElement('BarcodeView', () => require('@nativescript-community/ui-barcodeview').BarcodeView)





import QRBayarRetribusi_modalAdd from './views/QRcode/QRBayarRetribusi_modalAdd'
Vue.component('QRBayarRetribusi_modalAdd', QRBayarRetribusi_modalAdd);

import ListUsahaDetile from './views/profile/ListUsahaDetile'
Vue.component('ListUsahaDetile', ListUsahaDetile);

import RiwayatRetribusiDetile from './views/riwayat/RiwayatRetribusiDetile'
Vue.component('RiwayatRetribusiDetile', RiwayatRetribusiDetile);


import Headerx from './components/Header.vue'
Vue.component('Headerx', Headerx);
import HeaderBack from './components/HeaderBack.vue'
Vue.component('HeaderBack', HeaderBack);
import ProgresBar from './components/ProgresBar.vue'
Vue.component('ProgresBar', ProgresBar);


import { ModalStack, overrideModalViewMethod, VueWindowedModal } from "nativescript-windowed-modal"

overrideModalViewMethod()
Vue.registerElement("ModalStack", () => ModalStack)
Vue.use(VueWindowedModal)


import { CheckBox } from '@nstudio/nativescript-checkbox';
Vue.registerElement('CheckBox',() => CheckBox,{
    model: {
      prop: 'checked',
      event: 'checkedChange'
    }
  }
);

import { Gif } from "nativescript-gif";
Vue.registerElement('Gif', () => Gif);



new Vue({
  router,
  store,
  render: (h) => h('frame', [h(Apx)]),
}).$start()
