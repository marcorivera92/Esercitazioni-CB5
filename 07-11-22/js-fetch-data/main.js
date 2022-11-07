fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) =>
    users.map((detail) =>
      console.log(
        detail.name,
        "- Address: " + Object.values(detail.address),
        "- City: " + detail.address.city
      )
    )
  )
  .catch((error) => console.log(error + "Something went wrong!"))
  .finally(() => console.log("////// DONE //////"));

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((todos) =>
    todos.map((detail) =>
      console.log("ID: " + detail.id, "\n", "Title: " + detail.title)
    )
  )
  .catch((error) => console.log(error + "Something went wrong!"))
  .finally(() => console.log("////// DONE //////"));
