import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import HomeResiden from '../views/HomeResiden.vue'
import TugasPresentasiForm from '../views/TugasPresentasiForm.vue'
import KasusSulitForm from '../views/KasusSulitForm.vue'
import TugasPublikasiForm from '../views/TugasPublikasiForm.vue'
import TugasPenelitianAkhirForm from '../views/TugasPenelitianAkhirForm.vue'
import TugasPresentasiDetail from '../views/Details/TugasPresentasiDetail.vue'
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

const routes = [

  //ALL
  //AUTHOR: ALL


  //USE CASE 1
  //AUTHOR: NUR
  // --------------------------------------------
  {
    path: '/',
    name: 'Home',
    component: HomeResiden
  },
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
    path: '/dashboardmodul/:idResiden',
    name: 'DashboardModul',
    component: DashboardModul
  },
  {
    path: '/moduldetail/:idModulResiden',
    name: 'ModulDetail',
    component: ModulDetail
  },
  {
    path: '/dashboardjaga/:idResiden',
    name: 'DashboardJaga',
    component: DashboardJaga
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
    path: '/kasussulitform',
    name: 'KasusSulitForm',
    component: KasusSulitForm
  },
  {
    path: '/tugaspublikasiform',
    name: 'tugasPublikasiForm',
    component: TugasPublikasiForm
  },
  {
    path: '/tugaspenelitianakhirform',
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
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
