import { EventHandler } from "sst/node/event-bus";
import { Todo } from "@friendly-tax-site/core/todo";

export const handler = EventHandler(Todo.Events.Created, async (evt) => {
  console.log("Todo created", evt);
});
