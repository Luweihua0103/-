<template>
  <div style="margin:10px">
    <div style="background-color:#fff;padding:10px" >
     <p style="font-size:16px;padding:5px" >猜你喜欢</p>
      <ul style="list-style:none">
        <li v-for="(item,index) in list" :key="item.type">
          <img src="http://qcloud.dpfile.com/pc/VlUNJpjgCDFtU2rDFIBnMkR-GQHbguip__oEAUaTFJ4Dnw8jcyW4sc-iLuwOCZlKZSUjBikR5Ecy-DoGYkMhlg.jpg'" alt="" style="width:100%;height:100px;border-radius:5px">
          <p>
            <span style="margin:5px">{{item.title}}</span>
          </p>
            <span>
              <el-rate v-model="item.score" disabled text-color="#ff9900" score-template="{value}" style="margin-top:2px"></el-rate>
            </span>
            <span style="margin:5px">{{item.commentNum}}人评价</span>
          <p>
            <span v-for="(v,i) in item.address" :key="v" style="margin:5px">{{v + (i < item.address.length-1 ? '/' : '')}}</span>
          </p>
          <h3 style="color:#f40;margin:5px">￥{{item.price}}起</h3>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        list: [
          {
            image: 'http://qcloud.dpfile.com/pc/VlUNJpjgCDFtU2rDFIBnMkR-GQHbguip__oEAUaTFJ4Dnw8jcyW4sc-iLuwOCZlKZSUjBikR5Ecy-DoGYkMhlg.jpg',
            title: '青水瓦台洗浴韩式汗蒸养生馆',
            type: 'huiguan',
            commentNum: 860,
            score: 4.1,
            address: ['千龙户', '绿化街'],
            price: 22.0
          }
        ]
      }
    }
  }
</script>

<style>

</style>
