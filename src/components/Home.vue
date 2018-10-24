<template>

    <div id="vueapp">
        <div>
            <router-link to="add-product">Add Product</router-link>
        </div>
        <br>

        <kendo-datasource :data="localData" ref="local" :schema-model-fields="schema">
        </kendo-datasource>
        <button type="button" class="k-button" @click="editAll">Save</button>
        <br>
        <br>
        <kendo-grid :id="'grid'" :data-source-ref="'local'" :batch='true' :editable="true" ref="grid">

            <kendo-grid-column :field="'ProductName'"></kendo-grid-column>
            <kendo-grid-column :field="'UnitPrice'" :title="'Unit Price'" :width="120" :format="'{0:c}'"></kendo-grid-column>
            <kendo-grid-column :field="'UnitsInStock'" :title="'Units In Stock'" :width="120"></kendo-grid-column>
            <kendo-grid-column :id="'editRow'" :command="[{name: 'Delete', iconClass: 'k-icon k-i-delete', click: deleteFnc}]" :title="'&nbsp;'" :width="250"></kendo-grid-column>
        </kendo-grid>

    </div>
</template>

<script>
import Vue from "vue";
import "@progress/kendo-ui";
import "@progress/kendo-theme-default/dist/all.css";
import $ from "jquery";
import {
  DataSource,
  HierarchicalDataSource,
  GanttDataSource,
  GanttDependencyDataSource,
  PivotDataSource,
  SchedulerDataSource,
  TreeListDataSource,
  DataSourceInstaller
} from "@progress/kendo-datasource-vue-wrapper";
import dataProvider from "../../dist/api/data-provider.js";

import { Grid, GridInstaller } from "@progress/kendo-grid-vue-wrapper";
Vue.use(GridInstaller);
Vue.use(DataSourceInstaller);

export default {
  name: "Home",
  data() {
    return {
      product: {},
      ProductName: "",
      localData: dataProvider.localDataSource,
      schema: {
        model: {
          id: "ProductID",
          fields: {
            ProductName: { 
              type: "string"
             },
            UnitPrice: {
              type: "number"
            },
            UnitsInStock: {
              type: "number"
            }
          }
        }
      }
    };
  },

  methods: {
    editAll: (localData) => {
      let theGrid = $("#grid").data("kendoGrid");
      $("#grid tbody")
        .find("tr")
        .each(function() {
          let model = theGrid.dataItem(this);
          if (model.dirty === true) {
            alert("Record updated");
          }
          kendo.bind(this, model);
        });
      $("#grid").focus();
    },
    deleteFnc: (ev) => {
      let list = $('[data-role="grid"]').data("kendoGrid");
      let tr = ev.target.closest("tr");
      tr.remove();
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
