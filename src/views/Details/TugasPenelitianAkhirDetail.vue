<template>
  <LightHeader
    v-if="getReady"
    title="Detail Tugas Penelitian Akhir"
    :subtitle="this.subtitle"
    icon="file-text"
  />
  <div class="container" v-if="getReady">
    <div class="row mr-2 mb-4 justify-content-end upper">
      <!-- BUTTON UNTUK MENAMPILKAN MODAL -->
      <div v-if="isResiden">
      <button
        id="completeButton"
        class="btn btn-danger mr-4"
        type="button"
        data-toggle="modal"
        data-target="#exampleModal"
        v-if="this.data.laporanTugas.status == 'DITOLAK'"
      >
        Hapus
      </button>
      <router-link
        :to="'/tugaspenelitianakhirform/' + this.data.laporanTugas.idLaporanTugas"
      >
        <button
          class="btn btn-warning"
          v-if="this.data.laporanTugas.status != 'DITERIMA'"
        >
          Edit
        </button>
      </router-link>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-xxl-4 col-xl-4 mb-4">
        <div class="card card-header-actions h-100">
          <div class="card-header">Data Tugas Penelitian Akhir</div>
          <div class="card-body">
            <table cellpadding="5">
              <tbody>
                <tr>
                  <th>Tanggal&nbsp;&nbsp;&nbsp;&nbsp;</th>
                  <th>
                    <b>{{ data.laporanTugas.tanggalDibuat }}</b>
                  </th>
                </tr>
                <tr>
                  <th>Judul Proposal&nbsp;&nbsp;&nbsp;&nbsp;</th>
                  <th>
                    <b>{{
                      data.laporanTugas.tugasPenelitianAkhirModel.judulProposal
                    }}</b>
                  </th>
                </tr>
                <tr>
                  <th>Stage&nbsp;&nbsp;&nbsp;&nbsp;</th>
                  <th>
                    <b>{{
                      data.laporanTugas.tugasPenelitianAkhirModel.stage
                    }}</b>
                  </th>
                </tr>
                <tr>
                  <th>Konsulen&nbsp;&nbsp;&nbsp;&nbsp;</th>
                  <th>
                    <b>{{ data.laporanTugas.konsulenModel.pengguna.name }}</b>
                  </th>
                </tr>
                <tr>
                  <th>Link&nbsp;&nbsp;&nbsp;&nbsp;</th>
                  <th>
                    <b>{{ data.laporanTugas.linkTugas }}</b>
                  </th>
                </tr>
                <tr>
                  <th>Status&nbsp;&nbsp;&nbsp;&nbsp;</th>
                  <th>
                    <div class="badge badge-primary badge-pill">
                      {{ data.laporanTugas.status }}
                    </div>
                  </th>
                </tr>
                <tr>
                  <th>&nbsp;&nbsp;&nbsp;&nbsp;</th>
                  <th><b></b></th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- CARD 2 -->
      <CardTimeline
        title="Update Status"
        :updateStatus="this.data.laporanTugas.updateStatus"
        v-if="isMounted"
      ></CardTimeline>
      <!-- CARD 3 -->
      <CardTimelineEnter
        title="Feedback"
        v-if="this.data.laporanTugas.feedback != null"
        :updateStatus="this.data.laporanTugas.feedback"
      ></CardTimelineEnter>
    </div>
  </div>
  <!-- START MODAL -->
  <!-- ------------------------------------------------ -->

  <!-- DIV BESAR MODAL -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <!-- HEADER MODAL -->
        <div class="modal-header">
          <h5 v-if="status == 0" class="modal-title" id="exampleModalLabel">
            Apakah anda yakin untuk menghapus laporan tugas?
          </h5>
          <h5 v-if="status == 1" class="modal-title" id="exampleModalLabel">
            Loading...
          </h5>
          <h5 v-if="status == 2" class="modal-title" id="exampleModalLabel">
            Laporan Tugas Berhasil Dihapus!
          </h5>
          <h5 v-if="status == 3" class="modal-title" id="exampleModalLabel">
            Laporan Tugas Gagal Dihapus!
          </h5>
          <button
            class="close"
            type="button"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&#xD7;</span>
          </button>
        </div>
        <!-- BODY MODAL -->
        <div class="modal-body">
          <h5 v-if="status == 0" class="modal-title" id="exampleModalLabel">
            Laporan tugas akan dihapus dari sistem Neulog. Anda tidak dapat
            mengakses laporan tugas ini kembali
          </h5>
          <h5 v-if="status == 1" class="modal-title" id="exampleModalLabel">
            Harap tunggu sebentar
          </h5>
          <h5 v-if="status == 2" class="modal-title" id="exampleModalLabel">
            Laporan tugas Anda sudah dihapus dari sistem Neulog
          </h5>
          <h5 v-if="status == 3" class="modal-title" id="exampleModalLabel">
            Terjadi kesalahan pada sistem.
          </h5>
        </div>
        <!-- FOOTER MODAL -->
        <div class="modal-footer">
          <div v-if="status == 0">
            <button class="btn btn-primary mr-4" @click="deleteLaporanTugas">
              Ya
            </button>

            <button class="btn btn-danger" type="button" data-dismiss="modal">
              Tidak
            </button>
          </div>
          <div v-if="status == 1"></div>
          <div v-if="status == 2">
            <router-link to="/"
              ><button class="btn btn-primary" data-dismiss="modal">
                Ok
              </button></router-link
            >
          </div>
          <div v-if="status == 3">
            <button
              class="btn btn-primary"
              id="buttonFailed"
              type="button"
              data-dismiss="modal"
            >
              Ya
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END MODAL -->
  <!-- ------------------------------------------------ -->
</template>
<script>
import axios from "axios";
import VueAxios from "vue-axios";
import LightHeader from "@/components/LightHeader";
import CardTimeline from "@/components/CardTimeline";
import CardTimelineEnter from "@/components/CardTimelineEnter";
import authHeader from "@/services/auth-header"

export default {
  name: "TugasPenelitianAkhirDetail",
  components: { LightHeader, CardTimelineEnter, CardTimeline },
  data() {
    return {
      data: null,
      feedback: String,
      subtitle: String,
      residen: null,
      delete: { idLaporanTugas: this.$route.params.idLaporanTugas },
      status: 0,
      ready: false,
    };
  },
  computed: {
    getReady() {
      return this.ready;
    },
    isResiden(){
      return JSON.parse(localStorage.getItem('user')).roles.includes('ROLE_RESIDEN')
    }
  },
  mounted() {
    this.delete.idLaporanTugas = this.$route.params.idLaporanTugas;
    axios
      .get(
        "http://localhost:8000/api/dashboardPengurusAkademik/laporantugas/" +
          this.$route.params.idLaporanTugas, { headers : authHeader()}
      ) // nanti diganti ini angka 1 nya
      .then((resp) => {
        console.warn(resp.data);
        this.data = resp.data;
        console.warn(this.data);
      });
    axios
      .get(
        "http://localhost:8000/api/dashboardPengurusAkademik/getResiden/" +
          this.$route.params.idLaporanTugas
      ) // nanti diganti ini angka 1 nya
      .then((resp) => {
        console.warn(resp.data);
        this.residen = resp.data;
        this.subtitle = this.residen.pengguna.name + " - " + this.residen.npm;
        this.isMounted = true;
        this.ready = true;
      });
  },
  methods: {
    deleteLaporanTugas(e) {
      this.status = 1;
      console.warn(this.posts);
      axios
        .post(
          "http://localhost:8000/laporantugas/deletetugaspenelitianakhir/",
          this.delete
        )
        .then((result) => {
          if (result.data == "Success") {
            this.status = 2;
          } else {
            this.status = 3;
          }
          console.warn(result.data);
        });
      e.preventDefault();
    },
  },
};
</script>