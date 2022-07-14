<template>
  <div class="container-box">
    <div class="container-title">
      {{ title }} {{ subTitle ? `  -  ${subTitle}` : '' }}
    </div>
    <template v-if="arrData.length">
      <el-row :gutter="20">
          <el-col
            :lg="8"
            :sm="24"
            style="line-height: 2rem;"
            v-for="(arr, arrIndex) in arrData"
            :key="arr.url"
            >
            <a target="_blank" :href="arr.url">{{ arrIndex + 1 }} - {{ arr.name }}</a>
      </el-col>
      </el-row>
    </template>
    <template v-else>
      <slot></slot>
    </template>
    
  </div>
</template>

<script>
  export default {
    name: 'Container',
    props: {
      title: {
        type: String,
        default: ''
      },
      subTitle: {
        type: String,
        default: ''
      },
      arrData: {
        type: Array,
        default: () => ([]),
        remark: '地址数据源'
      }
    },
    computed: {
    },
    data() {
      return {
      }
    },
    mounted() {
    
    },
    beforeDestroy() {

    }
  }
</script>
<style>
.container-box {
  margin-bottom: 1rem;;
}

.container-title {
  line-height: 2rem;
  padding: .3rem 1rem;
  border-left: 6px #42b983 solid;
}

.container__badge {
  margin-top: 10px;
  margin-right: 40px;
}
</style>