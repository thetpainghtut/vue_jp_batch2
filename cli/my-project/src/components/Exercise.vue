<template>
  <div class="exercise">
    <h1 class="text-danger mt-3">This All Tags!</h1>

    <div class="row">
      <div class="col-md-3 my-3" v-for="(tag,index) in tags" :key="index">
        <b-card :header="tag.tag_name" class="text-left" >
        <b-card-text>{{tag.tag_description.substring(0,50)+"..."}}</b-card-text>
      </b-card>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import MyService from '@/services/MyService.js'

  export default{
    data(){
      return{
        tags:[]
      }
    },
    mounted(){
      this.getAllTags();
    },
    methods:{
      getAllTags(){
        MyService.getTags()
                .then(res => {
                  this.tags = res.data.tags
                })
                .catch(err=>{
                  console.error(err)
                })
      }
    }
  }
</script>

<style type="text/css">
  
</style>