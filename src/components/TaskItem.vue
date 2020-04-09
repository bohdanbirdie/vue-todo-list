<template>
  <a-spin tip="Loading..." :spinning="loading">
    <a-list-item-meta :description="task.description">
      <span slot="title">{{ task.title }}</span>
      <a-checkbox
        slot="avatar"
        @change="onCheckboxChange"
        :checked="checked"
      ></a-checkbox>
    </a-list-item-meta>
  </a-spin>
</template>

<script>
import { mapActions } from "vuex";

import Task from "../models/Task";
import { CHANGE_TODO_STATUS } from "../store/action-types";

export default {
  name: "TaskItem",
  props: {
    task: Task
  },
  computed: {
    checked() {
      return this.task.isComplete;
    }
  },
  data() {
    return {
      loading: false
    };
  },
  methods: {
    onCheckboxChange() {
      this.loading = true;
      setTimeout(() => {
        this.toggleStatus(this.task.id);
        this.loading = false;
      }, 200);
    },
    ...mapActions({
      toggleStatus: CHANGE_TODO_STATUS
    })
  }
};
</script>
