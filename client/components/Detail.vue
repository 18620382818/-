<template>
  <div v-show="op.show" class="testDetail">
    <Button @click="close">关闭</Button>
    <Button @click="add">增加</Button>
    <div class="addDom" v-for="item in op.data.arrayList" :key="item.age">
      <span>{{item.name}}</span>
    </div>
  </div>
</template>
<script>
import Detail from './Detail'
export default {
  props: {
    op: {
      type: Object
    }
  },
  components: {
    Detail
  },
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
    to () {
      this.$router.push({name: 'HelloWorld'})
    },
    close () {
      this.op.show = false
    },
    add () {
      // this.$set(this.op.data.arrayList, 2, {
      //   name: `zzz${Math.random() * 10}`,
      //   age: Math.random() * 10
      // })
      this.op.data.arrayList.push({
        name: `zzz${Math.random() * 10}`,
        age: Math.random() * 10
      })
      // this.$forceUpdate()
      this.$Bus.$emit('toMsg', {
        num: 1,
        deg: '1'
      })
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
.testDetail{
  position: fixed;
  height: 100%;
  top: 0;
  right: 0;
  width: 35%;
  background: #ddd
}
.addDom{
  widows: 100%;
  height: 35px;
  line-height: 35px;

}
.addDom:nth-child(odd){
  background: cornflowerblue
}
.addDom:nth-child(even){
  background: forestgreen
}
</style>
