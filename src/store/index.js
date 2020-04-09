import Vue from "vue";
import Vuex from "vuex";

import { ADD_TODO, REMOVE_TODO, CHANGE_TODO_STATUS } from "./action-types";
import Task from "../models/Task";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todoList: []
  },
  mutations: {
    [ADD_TODO](state, todoPayload) {
      state.todoList.push(new Task(todoPayload));
    },
    [CHANGE_TODO_STATUS](state, id) {
      const foundTask = state.todoList.find(task => task.id === id);

      if (foundTask) {
        foundTask.toggleStatus();
      }
    },
    [REMOVE_TODO](state, id) {
      state.todoList = [...state.todoList.filter(task => task.id !== id)];
    }
  },
  actions: {
    [ADD_TODO]({ commit }, todoPayload) {
      commit(ADD_TODO, todoPayload);
    },
    [CHANGE_TODO_STATUS]({ commit }, id) {
      commit(CHANGE_TODO_STATUS, id);
    },
    [REMOVE_TODO]({ commit }, id) {
      commit(REMOVE_TODO, id);
    }
  },
  getters: {}
});

export default store;
