<template>
  <div>
    <Button @click="toHelloWord">返回</Button>
    <Button @click="openDetail">打开</Button>
    <Button @click="addObj">新增</Button>
    <Detail :op="op" ref="refDetail"></Detail>
    <ul>
      <li v-for="(key,value) in obj" :key="value">
        {{ value }}
      </li>
    </ul>
  </div>
</template>
<script>
import Detail from './Detail'
export default {
  components: {
    Detail
  },
  data () {
    return {
      obj: {
        i: 1,
        n: 2,
        m: 3
      },
      op: {
        show: false,
        data: {
        }
      }
    }
  },
  created () {
  },
  methods: {
    addObj () {
      // this.$set(this.obj, `j${Math.random() * 10}`, Math.random() * 10)
      this.obj[`j${Math.random() * 10}`] = Math.random() * 10
      // this.$forceUpdate()
    },
    toHelloWord () {
      this.$refs.refDetail.to()
    },
    openDetail () {
      // this.$nextTick(() => {
      // DOM 现在更新了
      // `this` 绑定到当前实例
      this.op.show = true
      this.op.data.arrayList = [{name: '1', age: 11}, {name: '2', age: 12}]
      // })
      // this.op.data = Object.assign({}, this.op.data)
    }
  },
  mounted () {
    this.$Bus.$on('toMsg', (obj) => {
      alert(`num---->${obj.num},deg---->${obj.deg}`)
    })
    console.log(this.$route.query.param)
  }
}
</script>
