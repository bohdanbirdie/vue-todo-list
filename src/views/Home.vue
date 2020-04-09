<template>
  <div class="home">
    <a-row :gutter="20">
      <a-col :span="12"><AddTask /></a-col>
      <a-col :span="12"><TasksList /></a-col>
    </a-row>
  </div>
</template>

<script>
import TasksList from "@/components/TasksList.vue";
import AddTask from "@/components/AddTask.vue";

export default {
  name: "Home",
  components: {
    TasksList,
    AddTask
  }
};
</script>
