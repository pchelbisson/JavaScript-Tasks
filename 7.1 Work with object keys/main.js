function handleObject(obj, key, action) {
  if (action === "get") {
    return key;
  }
  if (action === "add") {
    obj[key] = "";
    return obj;
  }
  if (action === "delete") {
    delete obj[key];
    return obj;
  }
  return obj;
}

const student = {
  name: "Maxim",
  programmingLanguage: "JavaScript",
};

const result = handleObject(student, "programmingLanguage", "delet");
console.log("result", result);
