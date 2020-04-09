import { v4 as uuidv4 } from "uuid";

const TaskStatus = Object.freeze({
  TODO: "TODO",
  COMPLETE: "COMPLETE"
});

export default class Task {
  id;
  title = "";
  description = "";
  status = TaskStatus.TODO;

  constructor({ title, description }) {
    this.id = uuidv4();
    this.title = title;
    this.description = description ?? "";
  }

  toggleStatus() {
    if (this.status === TaskStatus.TODO) {
      this.status = TaskStatus.COMPLETE;
    } else {
      this.status = TaskStatus.TODO;
    }
  }

  get isComplete() {
    return this.status === TaskStatus.COMPLETE;
  }
}
