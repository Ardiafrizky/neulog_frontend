<template>
  <div class="col-xxl-4 col-xl-4 mb-4">
    <div class="card card-header-actions h-100">
      <div class="card-header">
        <b>{{ title }}</b>
      </div>
      <div class="card-body">
        <div class="timeline timeline-xs" v-for="(item, index) in getUpdateStatusList" v-bind:key="item.id">
          <!-- Timeline Item -->
          <div class="timeline-item" v-if="index % 2 == 0">
            <p>{{item}}</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p><b>{{ getUpdateStatusList[index+1] }}</b></p>
          </div>
          <!-- Timeline Item -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardTimeline",
  props: {
    title: String,
    updateStatus: String,
  },
  computed: {
    getUpdateStatusList(){
      return this.updateStatusList;
    }
  },
  data(){
    return{
      updateStatusList: null,
    }
  },
  created(){
    console.warn(this.updateStatus)
    this.updateStatusList = this.formatData(this.updateStatus);
  },
  methods:{
    formatData(str){
      var list = str.split(",");
      var i;
      for(i=0; i<list.length; i++){
        if(i%2 == 0){
          list[i] = list[i].substring(0,19) + " " + list[i].substring(24,28);
        }
      }
      console.warn(list);
      return list;
    }
  }
};
</script>

<style>
</style>