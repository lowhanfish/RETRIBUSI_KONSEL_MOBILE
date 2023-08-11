import Vue from 'nativescript-vue'

import NSVueRouter from 'nativescript-vue-router-ns'

import DataStore from '../store/DataStore'
import * as AppSettings from '@nativescript/core/application-settings';








import Dashboard from '../views/Dashboard'
import Login from '../views/auth/Login'

import QRProfile from '../views/QRcode/QRProfile'
import QRBayarRetribusi from '../views/QRcode/QRBayarRetribusi'

import RiwayatRetribusi from '../views/riwayat/RiwayatRetribusi'

import SaldoDetile from '../views/saldo/SaldoDetile'
import SaldoIsi from '../views/saldo/SaldoIsi'

import Aduan from '../views/profile/Aduan'
import Konfigurasi from '../views/profile/Konfigurasi'
import ListUsaha from '../views/profile/ListUsaha'
import Profile from '../views/profile/Profile'

import Berita from '../views/berita/List'
import Detile_berita from '../views/berita/Detile'

Vue.use(NSVueRouter)

const routes = [
  {
    name: 'login.index',
    component: Login,
    meta: { auth: false }
  },
  {
    name: 'dashboard.index',
    component: Dashboard,
    meta: { auth: true }
  },
  {
    name: 'QRProfile.index',
    component: QRProfile,
    meta: { auth: true }
  },
  {
    name: 'QRBayarRetribusi.index',
    component: QRBayarRetribusi,
    meta: { auth: true }
  },
  {
    name: 'riwayatRetribusi.index',
    component: RiwayatRetribusi,
    meta: { auth: true }
  },
  {
    name: 'SaldoDetile.index',
    component: SaldoDetile,
    meta: { auth: true }
  },
  {
    name: 'SaldoIsi.index',
    component: SaldoIsi,
    meta: { auth: true }
  },



  {
    name: 'Aduan.index',
    component: Aduan,
    meta: { auth: true }
  },
  {
    name: 'Konfigurasi.index',
    component: Konfigurasi,
    meta: { auth: true }
  },
  {
    name: 'ListUsaha.index',
    component: ListUsaha,
    meta: { auth: true }
  },
  {
    name: 'Profile.index',
    component: Profile,
    meta: { auth: true }
  },

  {
    name: 'Berita.index',
    component: Berita,
    meta: { auth: true }
  },
  {
    name: 'Detile_berita.index',
    component: Detile_berita,
    meta: { auth: true }
  },








]










const router = new NSVueRouter({
  // ignoreSame, // <-- Optional. Will set if reject or accept navigate to same current component.
  routes,
  /* eslint-disable-next-line no-undef  */
//   verbose: TNS_ENV !== 'production' // <-- Optional. Will output the warnings to console.
})


router.beforeEach((to, next) => {
 
  const token = AppSettings.getString("token")

  if (to.meta.auth == true) {
    console.log("INI UNTUK DASHBOARD");
      if (token == null || token == '' || token == undefined) {
        router.push('login.index')
      } else {
        next();
      }
  } else {

      console.log("INI UNTUK LOGIN");
      if (token == null || token == '' || token == undefined) {
        next();
      } else {
        router.push('dashboard.index')
      }
  }



  // next()
})





// function loggedInRedirectDashboard(to, from, next) {
//   if (localStorage.token) {
//     next('/office');
//   } else {
//     next();
//   }
// }

// function isLoggedIn(to, from, next) {
//   if (localStorage.token) {
//     next();
//   } else {
//     next('/login');
//   }
// }


Vue.prototype.$router = router;

export default router