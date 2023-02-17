<template>
  <div class="shc-sort">
    <div class="shc-sort">
      <div class="shc-sort_header">
        <span class="shc-sort_header-title">排序</span>
     </div>
      <div class="shc-sort_body">
        <ul class="shc-sort-content">
          <li
            class="shc-sort-content-item"
            v-for="(sItem, sIndex) in hasSelectData"
            :key="'li-' + sIndex"
          >
            <span class="shc-sort-content-item_num">{{ sIndex + 1 }}</span>
            <Select class="shc-sort-content-item_select" v-model="sItem.key" style="width: 200px;" @on-change="changeData()">
              <Option
                v-for="data in selectData"
                :key="data.key"
                :value="data.key"
                :label="data.label"
                :disabled="hasSelectKey.includes(data.key) && hasSelectKey.findIndex(e => e === data.key) !== sIndex"
              />
            </Select>
            <RadioGroup class="shc-sort-content-item_radio-group" v-model="sItem.value" @on-change="changeData()">
              <Radio label="asc">
                <span>升序</span>
              </Radio>
              <Radio label="desc">
                <span>降序</span>
              </Radio>
            </RadioGroup>
            <Button type="text" icon="md-add" v-if="hasSelectData.length - 1 === sIndex" @click="addItem(), changeData()"/>
            <Button type="text" icon="md-remove" v-if="hasSelectData.length !== 1" @click="delItem(sIndex), changeData()"/>
          </li>
        </ul>
      </div>
      <div class="shc-sort_footer"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shc-sort',
  data() {
    return {
      selectData: [
        { key: '1', label: '订单号', description: '订单号' },
        { key: '2', label: '金额', description: '金额' },
        { key: '3', label: '订单状态', description: '订单状态' },
        { key: '4', label: '付款状态', description: '付款状态' },
        { key: '5', label: '退款状态', description: '退款状态' },
        { key: '6', label: '业务状态', description: '业务状态' },
        { key: '7', label: '支付方式', description: '支付方式' },
        { key: '8', label: '医保订单', description: '医保订单' },
        { key: '9', label: '创建时间', description: '创建时间' },
        { key: '10', label: '商品名称', description: '商品名称' },
        { key: '11', label: '业务流水号', description: '业务流水号' },
        { key: '12', label: '支付平台', description: '支付平台' },
        { key: '13', label: '支付渠道', description: '支付渠道' },
        { key: '14', label: '第三方用户名称', description: '第三方用户名称' },
        { key: '15', label: '第三方应用', description: '第三方应用' },
        { key: '16', label: '租户名称', description: '租户名称' },
      ], // 所有数据
      hasSelectData: [
        { key: '9', value: 'desc' },
        { key: '', value: 'asc' },
      ], // 已选框 选中的keys
    };
  },
  computed: {
    hasSelectKey() {
      return this.hasSelectData.map((item) => item.key);
    },
  },
  methods: {
    addItem() {
      this.hasSelectData.push({ key: '', value: 'asc' });
    },
    delItem(index) {
      this.hasSelectData.splice(index, 1);
    },
    changeData() {
      this.$emit('on-change', this.hasSelectData);
    },
  },
};
</script>

<style lang="less" scoped>
.shc-sort {
  display: flex;
  width: 450px;
  //height: 100%;
  .shc-sort {
    font-size: 14px;
    width: 100%;
    height: 100%;
    border-left: 1px solid #DDDDDD;
    display: flex;
    flex-direction: column;
    &_header {
      padding: 7px 16px;
      white-space: nowrap;
      list-style: none;
      width: 100%;
      display: flex;
      align-items: center;
      &-title {
        flex: 1;
        padding-left: 4px;
        margin-right: 4px;
      }
    }
    &_body {
      height: 100%;
      border-top: none;
      border-radius: 0 0 6px 6px;
      position: relative;
      overflow: hidden;
      .shc-sort-content {
        height: 100%;
        padding: 4px 0;
        overflow: auto;
        &-item {
          margin: 0;
          line-height: normal;
          padding: 7px 16px;
          font-size: 14px !important;
          white-space: nowrap;
          list-style: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          //&:hover {
          //  background-color: #f3f3f3;
          //}
          &_num, &_select {
            margin-right: 8px;
          }
          &_num {
            width: 20px;
            text-align: justify;
          }
        }
      }
    }
  }
  .shc-sort-operation {
    display: flex;
    flex-direction: column;
    //align-items: center;
    justify-content: center;
    margin: 0 16px;
    //vertical-align: middle;
    .shc-btn {
      //display: block;
      width: 100%;
      margin: 0;
      &:not(:nth-last-child(1)) {
        margin-bottom: 12px;
      }
      &-primary {
        color: #fff;
        background-color: #2F54EB;
      }
      &.reverse {
        /deep/.el-icon-download {
          transform: rotateX(180deg);
        }
      }
    }
  }
}
</style>
