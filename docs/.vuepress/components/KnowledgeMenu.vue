<template>
  <div class="knowledge-menu-box">
    <el-input
      placeholder="输入关键字进行过滤"
      v-model="filterText">
    </el-input>
    <el-tree
      ref="tree"
      :data="data"
      :props="defaultProps"
      :filter-node-method="filterNode"
      @node-click="handleNodeClick"
    >
    </el-tree>
  </div>
</template>

<script>
  import { data as menu } from './assets/KnowledgeMenu/data'
  export default {
    name: 'KnowledgeMenu',
    data() {
      return {
        filterText: '',
        handlerTabIndex: 0, // 选中tab的index
        leftData: {}
      }
    },
    props: {
      data: {
        type: Array,
        default: () => menu,
        remark: '地址数据源'
      },
      defaultProps: {
        type: Object,
        default: () => ({
          children: 'children',
          label: 'label'
        }),
      }
    },
    watch: {
      filterText(val) {
        this.$refs.tree.filter(val);
      }
    },
    methods: {
      handleNodeClick({ url = '' }) {
        if(url) {
          location.href = url
        }
      },
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      }
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
  background: linear-gradient(0deg,#f7f8fa,#f7f8fa);
}

.tab-container-content-list {
  margin: 0px 26px;
  overflow-y: hidden;
  overflow-x: auto;
}

.tab-container-content-box {
  margin: 60px 0px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  height: 320px;
}

.tab-container-content-item {
  width: 280px;
  height: 152px;
  background: #ffffff;
  border-radius: 2px;
  box-shadow: 0 2px 6px rgb(0 0 0 / 4%);
  padding-left: 48px;
  margin-right: 26px;
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
  display: flex;
  flex-direction: row;
  width: 236px;
  justify-content: space-between;
}

.tab-container-content-item-title:before {
  content: attr(title-index);
  position: absolute;
  /* z-index: 3;
  /* top: .3rem; */
  left: -1.5rem;
  /* font-size: 1.15em; */
  /* color: rgba(238, 255, 255, 0.8); */
  /* text-transform: uppercase; */
  /* font-weight: bold; */
  width: fit-content;
}

.tab-container-content-item-title-handler {
  font-size: 14px;
  color: rgba(0,0,0,.45);
}

.tab-container-content-item-sub {
  width: 236px;
  font-size: 14px;
  color: rgba(0,0,0,.45);
  line-height: 22px;
  padding-top: 16px;
}
</style>
