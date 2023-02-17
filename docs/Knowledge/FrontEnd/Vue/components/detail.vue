<template>
    <Form ref="formValidate" :model="goodsForm" :rules="goodsFormRule" :label-width="140" class="mgt10">
      <div class="modal-form_content mgt10">
        <FormItem class="mgb5" label="订单号:">
          <span>{{ goodsForm.p1 }}</span>
        </FormItem>
        <FormItem class="mgb5" label="订单金额:">
          <span>{{ goodsForm.p2 }}</span>
        </FormItem>
        <FormItem class="mgb5" label="订单状态:">
          <span>{{ goodsForm.p3 }}</span>
        </FormItem>
        <FormItem class="mgb5" :label="`${ isPay ? '付款' : '退费' }流水号:`">
          <span>{{ goodsForm.p4 }}</span>
        </FormItem>
        <FormItem class="mgb5" :label="`第三方${ isPay ? '交易' : '退费' }流水号:`">
          <span>{{ goodsForm.p5 }}</span>
        </FormItem>
        <FormItem class="mgb5" :label="`${ isPay ? '付款' : '退款' }状态:`">
          <span>{{ goodsForm.p6 }}</span>
        </FormItem>
        <FormItem class="mgb5" :label="`${ isPay ? '付款' : '退费' }金额:`">
          <span>{{ goodsForm.p7 }}</span>
        </FormItem>
        <FormItem class="mgb5" :label="`${ isPay ? '付款' : '退费' }时间:`">
          <span>{{ goodsForm.p8 }}</span>
        </FormItem>

        <FormItem class="mgb5" :label="`退费原因:`">
          <Input v-if="isEdit" v-model="goodsForm.p15" placeholder="请输入退费原因"/>
          <span v-else>{{ goodsForm.p15 }}</span>
        </FormItem>
        <FormItem class="mgb5" :label="`退费操作人:`">
          <span>{{ goodsForm.p16 }}</span>
        </FormItem>
        <FormItem class="mgb5" :label="`操作人手机号码:`">
          <span>{{ goodsForm.p17 }}</span>
        </FormItem>

        <FormItem class="mgb5" label="支付平台:">
          <span>{{ goodsForm.p9 }}</span>
        </FormItem>
        <FormItem class="mgb5" label="支付渠道:">
          <span>{{ goodsForm.p10 }}</span>
        </FormItem>
        <FormItem class="mgb5" label="支付方式:">
          <span>{{ goodsForm.p11 }}</span>
        </FormItem>
        <FormItem class="mgb5" label="支付场景:">
          <span>{{ goodsForm.p12 }}</span>
        </FormItem>
        <FormItem class="mgb5" label="医院:">
          <span>{{ goodsForm.p13 }}</span>
        </FormItem>
        <FormItem class="mgb5" label="商家账户:">
          <span>{{ goodsForm.p14 }}</span>
        </FormItem>
      </div>
      <div class="modal-form_footer">
        <template v-if="isEdit">
          <Button @click="handleCancel" class="mgr20">返回</Button>
          <Button type="primary" @click="handleSubmit">确定</Button>
        </template>
        <template v-else>
          <Button v-if="canRefund" type="error" @click="handleRefund">退款</Button>
        </template>
      </div>
    </Form>
</template>

<script>
export default {
  name: 'orderDetailModal',
  props: {
    isPay: {
      type: Boolean,
      default: true,
    },
    canRefund: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isEdit: false,
      goodsForm: {
        id: '1',
        p1: 'w000022022042900003',
        p2: '450.35',
        p3: '交易完成',
        p4: 't135393487',
        p5: '843778783533',
        p6: '完成付款',
        p7: '450.35',
        p8: '2022-04-27 23:20:52.0',
        p9: '微信',
        p10: '公众号',
        p11: '微信支付',
        p12: 'JSAPI支付',
        p13: '广州市附属第一医院',
        p14: '广州市附属第一医院诊间业务收款账号',
        p15: '用户主动取消',
        p16: '赵连滨',
        p17: '13676898653',
      },
      copyGoodsForm: null,
      goodsFormRule: {
        name: [
          { required: true, message: '商品名称不能为空', trigger: 'change' },
        ],
      },
    };
  },
  methods: {
    handleRefund() {
      this.isEdit = true;
    },
    handleCancel() {
      // this.goodsForm.p15 = '';
      this.isEdit = false;
    },
    handleSubmit() {
      this.$message.success('操作成功');
      this.isEdit = false;
      this.$emit('handle-close');
    },
    // closeModal() {
    //   this.isEdit = false;
    //   this.$emit('handle-close');
    // },
  },
};
</script>

<style lang="less" scoped>
.mgb5 {
  margin-bottom: 5px!important;
}
.modal-form_footer {
  justify-content: center!important;
}
</style>
