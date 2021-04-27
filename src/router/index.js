import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import Login from '../views/Login.vue'

// USE CASE - 12
import MengelolaAkun from '../views/mengelolaAkun/MengelolaAkun.vue'
import ResidenRegister from '../views/mengelolaAkun/ResidenRegister.vue'
import ViewResiden from '../views/mengelolaAkun/ViewResiden.vue'
import StaffRegister from '../views/mengelolaAkun/StaffRegister.vue'
import ViewStaff from '../views/mengelolaAkun/ViewStaff.vue'
import UpdateResiden from '../views/mengelolaAkun/UpdateResiden.vue'
import UpdateStaff from '../views/mengelolaAkun/UpdateStaff.vue'

import HomeResiden from '../views/HomeResiden.vue'
import TugasPresentasiForm from '../views/TugasPresentasiForm.vue'
import KasusSulitForm from '../views/KasusSulitForm.vue'
import TugasPublikasiForm from '../views/TugasPublikasiForm.vue'
import TugasPenelitianAkhirForm from '../views/TugasPenelitianAkhirForm.vue'
import TugasPresentasiDetail from '../views/Details/TugasPresentasiDetail.vue'
import TugasPublikasiDetail from '../views/Details/TugasPublikasiDetail.vue'
import KasusSulitDetail from '../views/Details/KasusSulitDetail.vue'
import TugasPenelitianAkhirDetail from '../views/Details/TugasPenelitianAkhirDetail.vue'
import LaporanTugasChoice from '../views/LaporanTugasChoice.vue'
import DashboardPengurusAkademikMenu from '../views/DashboardPengurusAkademik/DashboardPengurusAkademikMenu.vue'
import DashboardResidenMenu from '../views/DashboardResiden/DashboardResidenMenu.vue'
import DashboardLaporanPasien from '../views/DashboardResiden/DashboardLaporanPasien.vue'
import DashboardLaporanTugas from '../views/DashboardResiden/DashboardLaporanTugas.vue'
import DashboardTugasPresentasi from '../views/DashboardResiden/DashboardTugasPresentasi.vue'
import DashboardPKSM from '../views/DashboardResiden/DashboardPKSM.vue'
import DashboardPublikasi from '../views/DashboardResiden/DashboardPublikasi.vue'
import DashboardTPA from '../views/DashboardResiden/DashboardTPA.vue'
import DashboardProgressTest from '../views/DashboardResiden/DashboardProgressTest.vue'
import DashboardKompetensi from '../views/DashboardResiden/DashboardKompetensi.vue'
import DashboardModul from '../views/DashboardResiden/DashboardModul.vue'
import DashboardTindakan from '../views/DashboardResiden/DashboardTindakan.vue'
import DashboardJaga from '../views/DashboardResiden/DashboardJaga.vue'
import LaporanPasienDetail from '../views/DashboardResiden/LaporanPasienDetail.vue'
import MenuLaporanPasien from '../views/DashboardPengurusAkademik/MenuLaporanPasien.vue'
import MenuResiden from '../views/DashboardPengurusAkademik/MenuResiden.vue'
import MenuKonsulen from '../views/DashboardPengurusAkademik/MenuKonsulen.vue'
import MenuLaporanTugas from '../views/DashboardPengurusAkademik/MenuLaporanTugas.vue'
import MenuModul from '../views/DashboardPengurusAkademik/MenuModul.vue'
import DetailMenuResiden from '../views/DashboardPengurusAkademik/DetailMenuResiden.vue'
import DetailMenuKonsulen from '../views/DashboardPengurusAkademik/DetailMenuKonsulen.vue'
import DetailMenuModul from '../views/DashboardPengurusAkademik/DetailMenuModul.vue'
import DetailMenuLaporanPasien from '../views/DashboardPengurusAkademik/DetailMenuLaporanPasien.vue'
import DetailMenuTugasPresentasi from '../views/DashboardPengurusAkademik/DetailMenuTugasPresentasi.vue'
import DetailMenuTugasPublikasi from '../views/DashboardPengurusAkademik/DetailMenuTugasPublikasi.vue'
import DetailMenuTugasKasusSulit from '../views/DashboardPengurusAkademik/DetailMenuTugasKasusSulit.vue'
import DetailMenuTugasAkhir from '../views/DashboardPengurusAkademik/DetailMenuTugasAkhir.vue'

import PageNotFound from '../views/errors/404'

import LaporanPasienRoute from "@/router/LaporanPasienRoute.js" 
import LaporanTugasRoute from "@/router/LaporanTugasRoute.js" 

const routes = [
  ...LaporanPasienRoute,
  ...LaporanTugasRoute,
  //ALL
  //AUTHOR: ALL
  {
    path: '/',
    name: 'Home',
    component: HomeResiden
  },

  //USE CASE 1
  //AUTHOR: NUR
  // --------------------------------------------
  {
    path: '/dashboardtugaspresentasi/:idResiden',
    name: 'DashboardTugasPresentasi',
    component: DashboardTugasPresentasi
  },
  {
    path: '/dashboardlaporanpasien/:idResiden',
    name: 'DashboardLaporanPasien',
    component: DashboardLaporanPasien
  },
  {
    path: '/laporanpasiendetail/:idLaporanPasien',
    name: 'LaporanPasienDetail',
    component: LaporanPasienDetail
  },
  {
    path: '/dashboardresiden/:idResiden',
    name: 'DashboardResidenMenu',
    component: DashboardResidenMenu
  },
  {
    path: '/components',
    name: 'Components',
    component: Home
  },
  {
    path: '/tugaspresentasiform/:operation',
    name: 'TugasPresentasiForm',
    component: TugasPresentasiForm,
  },
  {
    path: '/tugaspresentasidetail/:idLaporanTugas',
    name: 'TugasPresentasiDetail',
    component: TugasPresentasiDetail,
  },
  {
    path: '/tugaspublikasidetail/:idLaporanTugas',
    name: 'TugasPublikasiDetail',
    component: TugasPublikasiDetail,
  },
  {
    path: '/kasussulitdetail/:idLaporanTugas',
    name: 'KasusSulitDetail',
    component: KasusSulitDetail,
  },
  {
    path: '/tugaspenelitianakhirdetail/:idLaporanTugas',
    name: 'TugasPenelitianAkhirDetail',
    component: TugasPenelitianAkhirDetail,
  },
  {
    path: '/kasussulitform/:operation',
    name: 'KasusSulitForm',
    component: KasusSulitForm
  },
  {
    path: '/tugaspublikasiform/:operation',
    name: 'tugasPublikasiForm',
    component: TugasPublikasiForm
  },
  {
    path: '/tugaspenelitianakhirform/:operation',
    name: 'tugasPenelitianAkhirForm',
    component: TugasPenelitianAkhirForm
  },
  {
    path: '/addlaporantugas',
    name: 'laporanTugasChoice',
    component: LaporanTugasChoice
  },
  {
    path: '/addlaporantugas',
    name: 'laporanTugasChoice',
    component: LaporanTugasChoice
  },

  //USE CASE 12
  //AUTHOR: AVI
  // --------------------------------------------
  {
    path: '/mengelola-akun',
    name: 'MengelolaAkun',
    component: MengelolaAkun,
  },
  {
    path: '/mengelola-akun/view-residen/:idResiden',
    name: 'ViewResiden',
    component: ViewResiden,
  },
  {
    path: '/mengelola-akun/view-staff/:username',
    name: 'ViewStaff',
    component: ViewStaff,
  },
  {
    path: '/mengelola-akun/residen-register',
    name: 'ResidenRegister',
    component: ResidenRegister,
  },
  {
    path: '/mengelola-akun/staff-register',
    name: 'StaffRegister',
    component: StaffRegister,
  },
  {
    path: '/mengelola-akun/residen-update/:idResiden',
    name: 'UpdateResiden',
    component: UpdateResiden,
  },
  {
    path: '/mengelola-akun/staff-update/:username',
    name: 'UpdateStaff',
    component: UpdateStaff,
  },



  // MISCELLANEOUS
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: PageNotFound
  },
  {
    path: '/dashboardpengurusakademik',
    name: 'DashboardPengurusAkademik',
    component: DashboardPengurusAkademikMenu
  },
  {
    path: '/dashboardpengurusakademik/laporanpasien',
    name: 'MenuLaporanPasien',
    component: MenuLaporanPasien
  },
  {
    path: '/dashboardpengurusakademik/residen',
    name: 'MenuResiden',
    component: MenuResiden
  },
  {
    path: '/dashboardpengurusakademik/konsulen',
    name: 'MenuKonsulen',
    component: MenuKonsulen
  },
  {
    path: '/dashboardpengurusakademik/laporantugas',
    name: 'MenuLaporanTugas',
    component: MenuLaporanTugas
  },
  {
    path: '/dashboardpengurusakademik/modul',
    name: 'MenuModul',
    component: MenuModul
  },
  {
    path: '/dashboardpengurusakademik/residen/:idResiden',
    name: 'DetailMenuResiden',
    component: DetailMenuResiden
  },
  {
    path: '/dashboardpengurusakademik/konsulen/:idKonsulen',
    name: 'DetailMenuKonsulen',
    component: DetailMenuKonsulen
  },
  {
    path: '/dashboardpengurusakademik/modul/:idModul',
    name: 'DetailMenuModul',
    component: DetailMenuModul
  },
  {
    path: '/dashboardpengurusakademik/laporanpasien/:idLaporanPasien',
    name: 'DetailMenuLaporanPasien',
    component: DetailMenuLaporanPasien
  },
  {
    path: '/dashboardpengurusakademik/laporantugas/tugaspresentasi/:idLaporanTugas',
    name: 'DetailMenuTugasPresentasi',
    component: DetailMenuTugasPresentasi
  },
  {
    path: '/dashboardpengurusakademik/laporantugas/tugaspublikasi/:idLaporanTugas',
    name: 'DetailMenuTugasPublikasi',
    component: DetailMenuTugasPublikasi
  },
  {
    path: '/dashboardpengurusakademik/laporantugas/tugaskasussulit/:idLaporanTugas',
    name: 'DetailMenuTugasKasusSulit',
    component: DetailMenuTugasKasusSulit
  },
  {
    path: '/dashboardpengurusakademik/laporantugas/tugasakhir/:idLaporanTugas',
    name: 'DetailMenuTugasAkhir',
    component: DetailMenuTugasAkhir
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
