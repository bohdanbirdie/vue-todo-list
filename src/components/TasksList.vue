<template>
  <div>
    <a-card
      style="width:100%"
      title="Todo List"
      :tabList="tabList"
      :activeTabKey="activeTab"
      @tabChange="onTabChange"
    >
      <span slot="customRender" slot-scope="item">
        <a-icon type="home" />{{ item.key }}
      </span>

      <a-list itemLayout="horizontal" :dataSource="tasks">
        <a-list-item slot="renderItem" slot-scope="task">
          <TaskItem :task="task"></TaskItem>
        </a-list-item>
      </a-list>
    </a-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TaskItem from "./TaskItem.vue";

export default {
  name: "TasksList",
  components: { TaskItem },
  computed: {
    tasks() {
      if (this.activeTab === "todo") {
        return this.todoList.filter(task => !task.isComplete);
      }

      if (this.activeTab === "done") {
        return this.todoList.filter(task => task.isComplete);
      }

      return this.todoList;
    },
    ...mapState({
      todoList: state => {
        return state.todoList;
      }
    })
  },
  data() {
    return {
      tabList: [
        {
          key: "all",
          tab: "All"
        },
        {
          key: "todo",
          tab: "To do"
        },
        {
          key: "done",
          tab: "Done"
        }
      ],
      activeTab: "all"
    };
  },
  methods: {
    onTabChange(key) {
      this.activeTab = key;
    }
  }
};
</script>
