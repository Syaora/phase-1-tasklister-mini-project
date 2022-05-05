document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("form")
  const tasks = document.querySelector("#tasks")

  form.addEventListener("submit", (e) => {
    e.preventDefault()
    const inputValue = e.target.task.value
    addElement(inputValue)
  })

  function addElement(element){
    let p = document.createElement("p")
    p.textContent = ` ${element} `
    let button = document.createElement("button")
    button.textContent = "x"
    button.addEventListener("click", (e) => e.target.parentNode.remove())
    p.appendChild(button)
    tasks.appendChild(p)
  }

});
