<template>
<div>
  <Select v-model="searchKey"
          :filterable="true"
          :clearable="true"
          @on-clear="cleanList"
          @clearSingleSelect="cleanList"
          @on-query-change="queryChange"
          style="width:200px">
    <Option v-for="item in list"
            :value="item.password"
            :key="item.password">{{ item.username }}</Option>
  </Select>
  <router-link :to="{path:'/Test',query: { param: 'zzz' }}"> to Test</router-link>
</div>

</template>
<script>
// <tree-table  :children="children"></tree-table>
// import TreeTable from './table-expand.vue';
import { _debounce } from '@/debounce.js'
// eslint-disable-next-line no-unused-vars
export default {
  name: 'HelloWorld',
  // components: { TreeTable },
  data () {
    return {
      list: [],
      searchKey: ''
      //   children:
      //     [{"id":10000,"name":"一级菜单1","_pageList":[{"id":2001,"age":12,"aaa":[{
      //       "title": "Name",
      //       "key": "name"
      //     },
      //     {
      //       "title": "Age",
      //       "key": "age"
      //     }],"level":2}],"level":1},{"id":20000,"name":"一级菜单2","age":"11","level":1}]
      //   ,
    }
  },
  created () {
  },
  methods: {
    queryChange: _debounce(function (query) {
      let vm = this
      vm.$http.userApiServer.getUser({username: query}).then(res => {
        vm.list = res.data
      })
    }, 300),
    cleanList () {
      this.list = []
    }
  },
  mounted () {

  }
}
</script>
<style scoped>
</style>
