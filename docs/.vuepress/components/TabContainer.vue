<template>
  <div class="tab-container-box">
    <div class="tab-container top-bar">
      <div
        :class="{
          'tab-container-item': true,
          btn: true,
          active: index === handlerTabIndex
        }"
        v-for="(item, index) in data"
        :key="index"
        @click="handlerTabIndex = index"
      >
        <img src="https://docs.deepin.org/static/index/con2-1.svg"/>
        <span>{{ item.typeTitle }}</span>
      </div>
    </div>
    
    <div class="tab-container-content">
      <div class="tab-container-content-list">
        <div id="tab-container-content-box" class="tab-container-content-box">
          <div
            class="tab-container-content-item btn"
            v-for="(arrData, aIndex) in rightData"
            :key="aIndex"
          >
            <div class="tab-container-content-item-title">{{ arrData.title }}</div>
            <div class="tab-container-content-item-sub">{{ arrData.subTitle }}</div>
            <div>
              <a v-for="i in arrData.arr" :key="i.url" :href="i.url"> {{ i.name }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
  export default {
    name: 'TabContainer',
    data() {
      return {
        handlerTabIndex: 0, // 选中tab的index
        leftData: {}
      }
    },
    props: {
      data: {
        type: Array,
        default: () => ([]),
        remark: '地址数据源'
      }
    },
    computed: {
      // leftData() {
      //   const { data, handlerTabIndex } = this
      //   const arrData = data[handlerTabIndex].arrData
      //   // 排序 找到arr长度最大的那个显示在左边
      //   const sortArr = arrData.sort((a, b) => a.arr.length === b.arr.length ? 0 : b.arr.length - a.arr.length)
      //   return  sortArr[0]
      // },
      rightData() {
        const { data, handlerTabIndex, leftData } = this
        const arrData = data[handlerTabIndex].arrData
        // data 移除左边的 就是右边的
        const set = new Set(arrData)
        set.delete(leftData)
        return Array.from(set)
      }
    },
    watch: {
    },
    methods: {
    },
    mounted() {
    },
    beforeDestroy() {

    }
  }
</script>
<style>
/* div的鼠标悬浮手势 */
.btn {
  cursor: pointer;
  transition: all .1s;
}

.tab-container-box {
  margin-bottom: 1rem;
}


/* 分类项 ----------------------------  开始 */
.tab-container.top-bar {
  display: flex;
  justify-content: space-around;
}

.tab-container-item {
  /* width: 240px; */
  color: #1e1e1e;
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  align-items: center;
  justify-content: center;
}

.tab-container-item.active {
  color: #003296;
  border-bottom: 2px solid #003296;
}

.tab-container-item img {
  width: 100px;
  height: 100px;
  margin-bottom: 30px;
}

.tab-container-item span {
  font-size: 22px;
  text-align: center;
  line-height: 30px;
  padding-bottom: 18px;
}
/* 分类项 ----------------------------  结束 */

.tab-container-content {
  /* height: 440px; */
  background: linear-gradient(0deg,#f7f8fa,#f7f8fa);
}

.tab-container-content-list {
  /* padding: 60px 26px; */
  /* margin: 0 auto; */
  /* display: inline-flexbox; */
  overflow-y: hidden;
  overflow-x: auto;
}

.tab-container-content-box {
  margin: 60px 26px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  /* margin-right: 26px; */
  /* padding: 0 26px; */
  height: 320px;
  /* border: 1px red solid; */
  /* margin-top: -16px; */
}

.tab-container-content-item {
  width: 300px;
  height: 152px;
  background: #ffffff;
  border-radius: 2px;
  box-shadow: 0 2px 6px rgb(0 0 0 / 4%);
  padding-left: 48px;
  margin: 0 24px 0 2px;
}

.tab-container-content-item:hover {
  box-shadow: 0 6px 12px rgb(0 0 0 / 7%);
}

.tab-container-content-item-title {
  font-size: 16px;
  color: #1e1e1e;
  line-height: 24px;
  padding-top: 24px;
  position: relative;
}

.tab-container-content-item-sub {
  width: 236px;
  font-size: 14px;
  color: rgba(0,0,0,.45);
  line-height: 22px;
  padding-top: 16px;
}
</style>