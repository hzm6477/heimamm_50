<template>
  <div>
    <el-dialog :visible.sync="dialogVisible" width="600px" center>
      <div slot="title">{{ mode === "add" ? "新增学科" : "编辑学科" }}</div>
      <el-form :model="SubjectForm" ref="SubjectRef" label-width="80px" :rules="rules">
        <el-form-item label="学科编号" prop="rid">
          <el-input v-model="SubjectForm.rid"></el-input>
        </el-form-item>
        <el-form-item label="学科名称" prop="name">
          <el-input v-model="SubjectForm.name"></el-input>
        </el-form-item>
        <el-form-item label="学科简称" prop="short_name">
          <el-input v-model="SubjectForm.short_name"></el-input>
        </el-form-item>
        <el-form-item label="学科简介" prop="intro">
          <el-input v-model="SubjectForm.intro"></el-input>
        </el-form-item>
        <el-form-item label="学科备注" prop="remark">
          <el-input v-model="SubjectForm.remark"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false, // 控制对话框显示或是隐藏的属性
      mode: "", // 代表的操作类型 add: 新增  edit: 编辑
      SubjectForm: {
        rid: "", //学科编号
        name: "", //学科名称
        short_name: "", //学科简称
        intro: "", //学科简介
        remark: "" //备注
      },
      rules: {
        rid: [{ required: true, message: "学科编号不能为空", trigger: "blur" }],
        name: [
          { required: true, message: "学科名称不能为空", trigger: "blur" }
        ],
        short_name: [
          { required: true, message: "学科简称不能为空", trigger: "blur" }
        ],
        intro: [
          { required: true, message: "学科简介不能为空", trigger: "blur" }
        ],
        remark: [
          { required: true, message: "学科备注不能为空", trigger: "blur" }
        ]
      }
    };
  },
  //监听
  watch: {
    dialogVisible(newValue) {
      if (!newValue) {
        this.$refs.subjectFormRef.clearValidate();
      }
    }
  },
  methods: {
    submit() {
      //做最后的校验
      this.$refs.SubjectRef.validate(async valid => {
        if (!valid) return;
        let res = null;
        if (this.mode == "add") {
          res = await this.$axios.post("/subject/add", this.SubjectForm);
        } else {
          //   修改;
          res = await this.$axios.post("/subject/edit", this.SubjectForm);
        }
        if (res.data.code == 200) {
          this.$message({
            type: "success",
            message: this.mode === "add" ? "新增成功~" : "编辑成功~"
          });
          this.dialogVisible = false;
          this.$parent.search();
        }
      });
    }
  }
};
</script>

<style>
</style>