<template>
  <div class="page-product">
    <el-row class="m-crumbs">
      <crumbs/>
    </el-row>
    <el-row>
      <el-col :span="19">
        <el-row>
          <categroy/>
        </el-row>
        <el-row>
          <list />
        </el-row>
      </el-col>
      <el-col :span="5">
        <el-row>
          <img src="//p1.meituan.net/joymerchant/f536361e330ea3fdcd462a1eb9843321-909775235.jpg@237w_132h_1e_1c" alt="地图">
        </el-row>
        <el-row>
          <items />
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import crumbs from '@/components/product/crumbs.vue'
  import Categroy from '@/components/product/categroy.vue'
  import list from '@/components/product/list.vue'
  import Items from '@/components/product/items.vue'

  export default {
    components: {
      crumbs,
      Categroy,
      list,
      Items
    }
  }
</script>

<style lang="scss">
  @import '@/assets/css/products/index.scss'
</style>
