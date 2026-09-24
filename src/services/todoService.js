import Parse from "parse";

const TodoItem = Parse.Object.extend();
const newItem = new TodoItem();

newItem.set("text", "Eat the pudding");
newItem.set("done", false);

newItem.save().then(onSuccessfulSave).catch(onError);

function onSuccessfulSave(savedItem) {
  alert("saved a todo with id: " + savedItem.id);
}

function onError(error) {
  alert(error.message);
}
