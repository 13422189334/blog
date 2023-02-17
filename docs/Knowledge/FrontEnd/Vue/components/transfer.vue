<template>
  <div class="shc-transfer">
    <div class="shc-transfer-list">
      <div class="shc-transfer-list_header">
        <Checkbox :value="waitAllSelect" @input="selectAllItem('add')"> </Checkbox>
        <span class="shc-transfer-list_header-title" @click="selectAllItem('add')">{{ transferTitles[0] }}</span>
        <span class="shc-transfer-list_header-count">{{ waitSelectKeys.length ? `${waitSelectKeys.length} / ${waitData.length}` : waitData.length }}</span>
      </div>
      <div class="shc-transfer-list_body">
        <ul class="shc-transfer-list-content">
          <li
            class="shc-transfer-list-content-item"
            v-for="wItem in waitData"
            :key="'wait' + wItem.key"
          >
            <Checkbox :value="waitSelectKeys.includes(wItem.key)" @input="selectItem('add', wItem)"> {{ wItem.label }}</Checkbox>
          </li>
        </ul>
      </div>
      <div class="shc-transfer-list_footer"></div>
    </div>
    <div class="shc-transfer-operation">
      <el-button
        v-for="(bItem, bIndex) in handleButtons"
        :key="bIndex"
        :size="bItem.size"
        :class="['shc-btn', bItem.className]"
        :disabled="bItem.disabled"
        :icon="bItem.icon"
        @click="bItem.onClick()"
      />
    </div>
    <div class="shc-transfer-list">
      <div class="shc-transfer-list_header">
        <Checkbox :value="hasAllSelect" @input="selectAllItem('del')"></Checkbox>
        <span class="shc-transfer-list_header-title" @click="selectAllItem('del')">{{ transferTitles[1] }}</span>
        <span class="shc-transfer-list_header-count">{{ hasSelectKeys.length ? `${hasSelectKeys.length} / ${hasData.length}` : hasData.length }}</span>
      </div>
      <div class="shc-transfer-list_body">
        <ul class="shc-transfer-list-content">
          <li
            class="shc-transfer-list-content-item"
            v-for="wItem in hasData"
            :key="'has' + wItem.key"
          >
            <Checkbox :value="hasSelectKeys.includes(wItem.key)" @input="selectItem('del', wItem)"> {{ wItem.label }}</Checkbox>
          </li>
        </ul>
      </div>
      <div class="shc-transfer-list_footer"></div>
    </div>
    <div class="shc-transfer-operation">
      <el-button
        v-for="(bItem, bIndex) in sortButtons"
        :key="bIndex"
        :size="bItem.size"
        :class="['shc-btn', bItem.className]"
        :disabled="bItem.disabled"
        :icon="bItem.icon"
        @click="bItem.onClick()"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'shc-transfer',
  data() {
    return {
      transferTitles: ['所有列', '显示列'],
      transferData: [
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
      transferRightKeys: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], // 默认选上的keys
      waitSelectKeys: [], // 待选框 选中的keys
      hasSelectKeys: [], // 已选框 选中的keys
    };
  },
  computed: {
    handleButtons() {
      const {
        hasAllSelect,
        hasSelectKeys,
        waitSelectKeys,
        waitAllSelect,
      } = this;
      return [
        {
          icon: 'el-icon-d-arrow-left',
          disabled: !hasAllSelect,
          className: hasAllSelect ? 'shc-btn-primary' : '',
          size: 'small',
          onClick: () => this.handleItems('del'),
        },
        {
          icon: 'el-icon-arrow-left',
          disabled: hasSelectKeys.length === 0,
          className: hasSelectKeys.length !== 0 ? 'shc-btn-primary' : '',
          size: 'small',
          onClick: () => this.handleItems('del'),
        },
        {
          icon: 'el-icon-arrow-right',
          disabled: waitSelectKeys.length === 0,
          className: waitSelectKeys.length !== 0 ? 'shc-btn-primary' : '',
          size: 'small',
          onClick: () => this.handleItems('add'),
        },
        {
          icon: 'el-icon-d-arrow-right',
          disabled: !waitAllSelect,
          className: waitAllSelect ? 'shc-btn-primary' : '',
          size: 'small',
          onClick: () => this.handleItems('add'),
        },
      ];
    },
    sortButtons() {
      const { transferRightKeys, hasSelectKeys } = this;
      // 获取单一选择项的角标
      let index = -1;
      if (hasSelectKeys.length === 1) {
        index = transferRightKeys.findIndex((e) => e === hasSelectKeys[0]);
      }
      return [
        {
          icon: 'el-icon-download',
          disabled: !(hasSelectKeys.length === 1 && index !== 0),
          className: hasSelectKeys.length === 1 && index !== 0 ? 'shc-btn-primary reverse' : 'reverse',
          size: 'small',
          onClick: () => this.handleSort(0),
        },
        {
          icon: 'el-icon-top',
          disabled: !(hasSelectKeys.length === 1 && index !== 0),
          className: hasSelectKeys.length === 1 && index !== 0 ? 'shc-btn-primary' : '',
          size: 'small',
          onClick: () => this.handleSort(index - 1),
        },
        {
          icon: 'el-icon-bottom',
          disabled: !(hasSelectKeys.length === 1 && index !== transferRightKeys.length - 1),
          className: hasSelectKeys.length === 1 && index !== transferRightKeys.length - 1 ? 'shc-btn-primary' : '',
          size: 'small',
          onClick: () => this.handleSort(index + 1),
        },
        {
          icon: 'el-icon-download',
          disabled: !(hasSelectKeys.length === 1 && index !== transferRightKeys.length - 1),
          className: hasSelectKeys.length === 1 && index !== transferRightKeys.length - 1 ? 'shc-btn-primary' : '',
          size: 'small',
          onClick: () => this.handleSort(transferRightKeys.length - 1),
        },
      ];
    },
    defaultOptions() {
      const {
        waitData, waitSelectKeys, waitSelectData,
        hasData, hasSelectKeys, hasSelectData,
      } = this;
      return {
        add: {
          allData: waitData,
          selectKeys: waitSelectKeys,
          selectData: waitSelectData,
        },
        del: {
          allData: hasData,
          selectKeys: hasSelectKeys,
          selectData: hasSelectData,
        },
      };
    },
    waitData() {
      const { transferData, transferRightKeys } = this;
      return transferData.filter((item) => !transferRightKeys.includes(item.key));
    },
    waitSelectData() {
      const { waitData, waitSelectKeys } = this;
      return waitData.filter((item) => waitSelectKeys.includes(item.key));
    },
    waitAllSelect() {
      const { waitData, waitSelectData } = this;
      return waitSelectData.length !== 0 && waitData.length === waitSelectData.length;
    },
    hasData() {
      const { transferData, transferRightKeys } = this;
      // return transferData.filter((item) => transferRightKeys.includes(item.key));
      return transferRightKeys.map((item) => transferData.find((e) => e.key === item));
    },
    hasSelectData() {
      const { hasData, hasSelectKeys } = this;
      return hasData.filter((item) => hasSelectKeys.includes(item.key));
    },
    hasAllSelect() {
      const { hasData, hasSelectData } = this;
      return hasSelectData.length !== 0 && hasData.length === hasSelectData.length;
    },
  },
  methods: {
    /**
     * 全选
     * @param type
     */
    selectAllItem(type) {
      const { allData } = this.defaultOptions[type];
      if (type === 'add') {
        if (this.waitAllSelect) {
          this.$set(this, 'waitSelectKeys', []);
        } else {
          this.$set(this, 'waitSelectKeys', allData.map((item) => item.key));
        }
      } else if (type === 'del') {
        if (this.hasAllSelect) {
          this.$set(this, 'hasSelectKeys', []);
        } else {
          this.$set(this, 'hasSelectKeys', allData.map((item) => item.key));
        }
      }
    },
    /**
     * 单选
     * @param type
     * @param item
     */
    selectItem(type, item) {
      const { selectData, selectKeys, allData } = this.defaultOptions[type];
      const index = selectKeys.findIndex((el) => item.key === el);
      if (index === -1) {
        selectKeys.push(item.key);
      } else {
        selectKeys.splice(index, 1);
      }
    },
    /**
     * 添加 / 删除
     * @param type
     */
    handleItems(type) {
      if (type === 'add') {
        this.$nextTick(() => {
          this.$set(this, 'transferRightKeys', [...this.transferRightKeys, ...this.waitSelectKeys]);
          this.$set(this, 'waitSelectKeys', []);
        });
      } else if (type === 'del') {
        this.$nextTick(() => {
          this.$set(this, 'transferRightKeys', this.transferRightKeys.filter((e) => !this.hasSelectKeys.includes(e)));
          this.$set(this, 'hasSelectKeys', []);
        });
      }
    },
    /**
     * 排序
     * @param newIndex
     */
    handleSort(newIndex) {
      const { transferRightKeys, hasSelectKeys } = this;
      const oldIndex = transferRightKeys.findIndex((e) => e === hasSelectKeys[0]);
      // const before = transferRightKeys.slice(0, oldIndex + 1);
      // console.log(before);
      // const after = transferRightKeys.slice(oldIndex, transferRightKeys - 1);
      // console.log(after);
      // const item = transferRightKeys.splice(oldIndex, 1);
      const sortData = [];
      transferRightKeys.forEach((key, index) => {
        if (index !== newIndex && index !== oldIndex) {
          sortData.push(key);
        } else if (index === newIndex) {
          if (newIndex > oldIndex) {
            sortData.push(key);
            sortData.push(hasSelectKeys[0]);
          } else {
            sortData.push(hasSelectKeys[0]);
            sortData.push(key);
          }
        }
      });
      this.$set(this, 'transferRightKeys', sortData);
    },
  },
};
</script>

<style lang="less" scoped>
.shc-transfer {
  display: flex;
  height: 750px;
  .shc-transfer-list {
    display: inline-block;
    font-size: 14px;
    vertical-align: middle;
    position: relative;
    //padding-top: 35px;
    width: 250px;
    height: 100%;
    //border: 1px solid #f5f5f5;
    //background-color: rosybrown;
    &_header {
      padding: 7px 16px;
      background: #f9fafc;
      border: 1px solid #DDDDDD;
      border-bottom: 1px solid #eeeeee;
      border-radius: 6px 6px 0 0;
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
      &-count {
        padding-left: 4px;
        margin: 0 !important;
        float: right;
      }
    }
    &_body {
      height: 100%;
      border: 1px solid #DDDDDD;
      border-top: none;
      border-radius: 0 0 6px 6px;
      position: relative;
      overflow: hidden;
      .shc-transfer-list-content {
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
          &:hover {
            background-color: #f3f3f3;
          }
          /deep/.ivu-checkbox {
            margin-right: 8px;
          }
        }
      }
    }
  }
  .shc-transfer-operation {
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
