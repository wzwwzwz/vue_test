<template>
  <div class="hello">
    <el-form :rules="model.rules" :model="model" ref="form">
      <!-- 表布局 -->
      <el-table
        border
        :data="model.tableData"
        style="width: 100%;"
        :default-sort="{prop: 'date', order: 'descending'}"
      >
        <el-table-column label="名称">
          <template slot-scope="scope">
            <el-form-item :prop="'tableData.' + scope.$index + '.name'" :rules="model.rules.name">
              <el-input v-model="scope.row.name"></el-input>
            </el-form-item>
          </template>
        </el-table-column>

        <el-table-column label="范围值">
          <template slot-scope="scope" style="display: flex;">
            <el-form-item
              :prop="'tableData.' + scope.$index + '.itemValueMin'"
              :rules="model.rules.itemValueMin"
            >
              <el-input v-model.number="scope.row.itemValueMin" class="input" style="width:49%"></el-input>
            </el-form-item>
            <strong style="width:49%">~</strong>
            <el-form-item
              :prop="'tableData.' + scope.$index + '.itemValueMax'"
              :rules="model.rules.itemValueMax"
            >
              <el-input v-model.number="scope.row.itemValueMax" class="input" style="width:48%"></el-input>
            </el-form-item>
          </template>
        </el-table-column>

        <el-table-column label="等级">
          <template slot-scope="scope">
            <el-form-item :prop="'tableData.' + scope.$index + '.grade'" :rules="model.rules.grade">
              <el-select v-model="scope.row.grade" placeholder="请选择要求供应商">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </template>
        </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="small" @click="deleteData(scope.$index)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-button size="small" @click="save()">保存</el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data() {
    var rangeValue = (rule, value, callback) => {
      let index = rule.field.split('.')[1]
      if (
        value === '' ||
        parseInt(this.model.tableData[index].itemValueMin) >
          parseInt(this.model.tableData[index].itemValueMax)
      ) {
        callback(new Error('抱歉！！！'))
      } else {
        callback()
      }
    }
    return {
      msg: 'Welcome to Your Vue.js App',
      form: {
        supplier2: '',
        type: '',
        desc: '',
        input: ''
      },
      model: {
        rules: {
          name: {
            type: 'string',
            required: true,
            pattern: /[^ ]/, //不为空
            message: '必填字段',
            trigger: 'blur'
          },
          itemValueMin: [
            {
              required: true,
              message: '必填字段',
              trigger: ['blur', 'change']
            },
            {
              type: 'number',
              required: true,
              message: '为数字值',
              trigger: ['blur', 'change']
            },
            { validator: rangeValue, trigger: 'blur' }
          ],
          itemValueMax: [
            {
              required: true,
              message: '必填字段',
              trigger: ['blur', 'change']
            },
            {
              type: 'number',
              required: true,
              message: '为数字值',
              trigger: ['blur', 'change']
            },
            { validator: rangeValue, trigger: 'blur' }
          ],
          grade: {
            required: true,
            message: '必填字段',
            trigger: 'change'
          },
          'producedate.start': {
            type: 'string',
            required: true,
            message: '必填字段',
            trigger: 'change'
          },
          'expireddate.start': {
            type: 'string',
            required: true,
            message: '必填字段',
            trigger: 'change'
          }
        },
        tableData: [
          {
            name: '',
            itemValueMax: '',
            itemValueMin: '',
            goodstatus: '',
            producedate: {
              start: ''
            },
            expireddate: {
              start: ''
            }
          },
          {
            name: '',
            itemValueMax: '',
            itemValueMin: '',
            goodstatus: '',
            producedate: {
              start: ''
            },
            expireddate: {
              start: ''
            }
          }
        ]
      },
      options: [
        {
          value: '1',
          label: '一级'
        },
        {
          value: '2',
          label: '二级'
        },
        {
          value: '3',
          label: '三级'
        }
      ]
    }
  },
  methods: {
    add() {
      console.log(this.form)
    },
    save() {
      this.$refs['form'].validate((valid, model) => {
        // console.log(valid)
        // console.log(model)
        if (valid) {
          console.log('数据没问题')
          console.log(this.model.tableData)
        } else {
          console.log('有问题！！！！')
        }
      })
    },
    deleteData(index) {
      this.model.tableData.splice(index, 1)
    }
  }
}
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
.el-table .cell {
  display: flex;
}
</style>
