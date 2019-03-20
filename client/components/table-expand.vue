<template>
  <div>
    <Table
      :show-header="showHeader"
      :columns="columns"
      :data="children"
    ></Table>
  </div>
</template>
<script>
import Treetable from "./table-expand.vue";
export default {
  name: "Treetable",
  components: {
    Treetable
  },
  props: {
    children: Array,
    showHeader: true
  },
  data() {
    return {
      columns: [
        {
          type: 'selection',
          width:100
        },
        {
          type: "expand",
          width:"100",
          render: (h, params) => {
            if (params.row._pageList && params.row._pageList.length) {
              return h(Treetable, {
                props: {
                  children: params.row._pageList,
                  showHeader: false,
                  columns:params.row._pageList[0].aaa
                }
              });
            }
          }
        },
        {
          title: "Name",
          key: "name"
        },
        {
          title: "Age",
          key: "age"
        }
      ]
    };
  },

  methods: {
  },
  mounted() {
  },
};
</script>

