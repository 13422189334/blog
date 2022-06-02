<template>
  <div id="vssue"></div>
</template>

<script>
  export default {
    name: 'Vssue',
    data() {
      return {
        vssue: ''
      }
    },
    mounted() {
      import('@vssue/vuepress-plugin-vssue').then(res => {
        this.vssue = res.default
      })
    },
    beforeDestroy() {

    }
  }
</script>
<style scoped>

</style>
