<!--
 * @Descripttion: unTitle
 * @Author: yizheng.yuan
 * @Date: 2021-07-07 16:24:33
 * @LastEditors: yizheng.yuan
 * @LastEditTime: 2021-08-19 15:50:44
-->
<template>
  <div class="data-show-container clearfix bgImg">
    <div class="w400 flexBox-c">
      <dv-border-box-12>
        <lineChart/>
      </dv-border-box-12>
      <dv-border-box-12>
        <linesChart class="flex1 over-auto"/>
      </dv-border-box-12>
      <dv-border-box-12>
        <barChart/>
      </dv-border-box-12>
    </div>
    <div class="middle-container flexBox-c">
      <dv-border-box-8 :reverse="true"  class="flex1">
        <chinaMap class="wh100 over-auto pd10"/>
      </dv-border-box-8>
      <dv-border-box-8 class="h400">
        <scrollTable class="wh100 pd10"/>
      </dv-border-box-8>
      
    </div>
    <div class="w400 flexBox-c">
      <dv-border-box-12>
        <pieChart class="h400"/>
      </dv-border-box-12>
      <dv-border-box-12>
        <barChart2 class="flex1 over-auto"/>
      </dv-border-box-12>
    </div>
  </div>
</template>
<script>
import LineChart from './components/lineChart'
import LinesChart from './components/linesChart'
import ChinaMap from './components/chinaMap'
import PieChart from './components/pieChart'
import scrollTable from './components/scrollTable.vue'
import BarChart from './components/barChart'
import BarChart2 from './components/barChart2'
export default {
  name: 'dataIndex',
  components: {
    LineChart,
    LinesChart,
    ChinaMap,
    PieChart,
    BarChart,
    BarChart2,
    scrollTable
  }
}
</script>
<style lang="scss" scoped>
.bgImg{
  background-image: url('./图片1.png');
  background-size: cover;
  background-position: center center;
}
.rwb{
  // background: #1d344d;
  border:1px transparent solid;
  border-image:linear-gradient(to right, red 0%, blue 30%, yellow 60%, green 90%) 5;
  border-radius: 5px;
  .el-header{
    text-align: left;
  }
}

.data-show-container{
  width: 100%;
  height: 100%;
  display: flex;
  .middle-container{
    // float: left;
    // width: calc(100vw - 1020px);
    flex: 1;
    margin-left: 30px;
    margin-right: 30px;
    .chinaMap{
      color: #ffffff;
    }
  }
}
.w400{width:400px;}
.h300{height:200px;}
.h400{height:400px;}
</style>

