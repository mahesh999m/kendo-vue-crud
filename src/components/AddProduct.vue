<template>
    <div>
        <ul>
            <li>
                <label>Product Name</label>
                <input type="text" class="k-textbox" placeholder="Enter product name" v-model="newproduct.ProductName" />
            </li>
            <li>
                <label>Unit Price</label>
                <input type="number" class="k-textbox" placeholder="Enter Unit price" min="1" v-model="newproduct.UnitPrice" />
            </li>
            <li>
                <label>Units In Stock</label>
                <input type="number" class="k-textbox" placeholder="Enter Unit price" min="0" v-model="newproduct.UnitsInStock" />
            </li>
            <li>
                <button class="k-button" @click="onAdd">Add</button>
                <button class="k-button" @click="onCancel">Cancel</button>
            </li>
        </ul>
    </div>
</template>

<script>

import dataProvider from "../../dist/api/data-provider.js"


export default {
  name: "add-product",
  data () {
        return {
          newproduct: {
            ProductID: '',
            UnitPrice: '',
            UnitsInStock: ''
          }
        }
    },
     methods: {
        onAdd () {
            dataProvider.localDataSource.unshift(this.newproduct);
            this.$router.push('/');
        },
        onCancel () {
          this.$router.push('/');
        }
      }
};
</script>


<style scoped>
li {
      list-style-type: none;
      margin-top: 20px;
    }
    label {
      font-weight: bold;
    }

</style>
