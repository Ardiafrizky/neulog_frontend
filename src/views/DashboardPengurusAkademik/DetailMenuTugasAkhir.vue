<template>
<LightHeader
    v-if="isMounted"
    title= "Detail Tugas Akhir"
    :subtitle = this.subtitle
    icon= "book-open">
</LightHeader>
<div class="container upper">
    <div class="row">
        <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
            <div class="card card-header-actions h-100">
                <div class="card-header">
                    <b>Data Tugas Penelitian Akhir</b>
                </div>
            <div class="card-body">
                <div class="container-fluid">
                <div class="row">
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            Tanggal
                        </p>
                    </div>
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            {{ tanggal }}
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            Judul
                        </p>
                    </div>
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            {{ judul }}
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            Stage
                        </p>
                    </div>
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            {{ stage }}
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            Link Tugas
                        </p>
                    </div>
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            {{ linkTugas }}
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            Konsulen
                        </p>
                    </div>
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            {{ konsulenName }}
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            Status
                        </p>
                    </div>
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            {{ status }}
                        </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div class="col-xxl-3 col-xl-3 mb-4 mt-4">
            <div class="card card-header-actions h-100">
                <div class="card-header">
                    <b>Update Status</b>
                </div>
            <div class="card-body">
                <div class="container-fluid">
                <div class="row">
                    <div class="col-xxl-12 col-xl-12 mb-4 mt-4" v-for="(item) in updateStatus"
                    v-bind:key="item.id">
                        <p class="card-text">
                            {{ item }}
                        </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div class="col-xxl-3 col-xl-3 mb-4 mt-4">
            <div class="card card-header-actions h-100">
                <div class="card-header">
                    <b>Feedback</b>
                </div>
            <div class="card-body">
                <div class="container-fluid">
                <div class="row">
                    <div class="col-xxl-12 col-xl-12 mb-4 mt-4">
                        <p class="card-text">
                            {{ feedback }}
                        </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";
import MainHeader from "@/components/MainHeader.vue";
import LightHeader from "@/components/LightHeader.vue";
import authHeader from "@/services/auth-header";

export default {
  name: "DetailMenuTugasAkhir",
  data() {
    return {
      subtitle: String,
      tanggal: String,
      judul: String,
      stage: String,
      linkTugas: String,
      konsulenName: String,
      status: String,
      updateStatus: Array,
      feedback: String,
      isMounted: false,
    };
  },
  components: {
    MainHeader,
    LightHeader
  },
  mounted() {
    axios
      .get("http://localhost:8000/api/dashboardPengurusAkademik/laporantugas/" + this.$route.params.idLaporanTugas, { headers: authHeader() }) // nanti diganti ini angka 1 nya
      .then((resp) => {
        console.warn(resp.data);
        this.laporanPasien = resp.data.laporanPasien;
        this.tanggal = resp.data.laporanTugas.tanggalDibuat
        this.judul = resp.data.laporanTugas.tugasPenelitianAkhirModel.judulProposal
        this.stage = resp.data.laporanTugas.tugasPenelitianAkhirModel.stage
        this.linkTugas = resp.data.laporanTugas.linkTugas
        this.konsulenName = resp.data.laporanTugas.konsulenModel.pengguna.name
        this.status = resp.data.laporanTugas.status
        this.updateStatus = resp.data.updateStatus
        this.feedback = resp.data.laporanTugas.feedback
        this.isMounted = true;
        this.subtitle = ""
      });
  },
};
</script>