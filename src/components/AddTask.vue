<template>
  <a-spin tip="Loading..." :spinning="loading">
    <a-card style="width:100%" title="Add task form">
      <a-form :form="form" @submit.prevent="handleSubmit">
        <a-form-item>
          <a-input
            v-decorator="[
              'title',
              {
                rules: [{ required: true, message: 'Title is required' }]
              }
            ]"
            placeholder="Title"
          />
        </a-form-item>

        <a-form-item>
          <a-textarea
            autoSize
            v-decorator="['description']"
            placeholder="Description"
          />
        </a-form-item>

        <a-form-item>
          <a-button type="primary" html-type="submit">
            Submit
          </a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </a-spin>
</template>

<script>
import { mapActions } from "vuex";
import { ADD_TODO } from "../store/action-types";

export default {
  name: "AddTask",
  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "coordinated" }),
      loading: false
    };
  },
  methods: {
    handleSubmit() {
      this.form.validateFields((err, values) => {
        if (!err) {
          this.loading = true;
          setTimeout(() => {
            this.addTodo(values);
            this.loading = false;
            this.form.resetFields();
          }, 250);
        }
      });
    },
    ...mapActions({
      addTodo: ADD_TODO
    })
  }
};
</script>
