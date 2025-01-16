const taskForm = document.getElementById("task-form")
const taskInput = document.getElementById("task-input")
const taskList = document.getElementById("task-list")

// validando input, somente letras
taskInput.addEventListener("input", function () {
  const hasCharecterRegex = /\d+/g
  taskInput.value = taskInput.value.replace(hasCharecterRegex, "")
  console.log(taskInput.value)
})

taskForm.addEventListener("submit", (event) => {
  event.preventDefault()

  // valor do input
  const taskText = taskInput.value.trim()
  if (taskText === "") return

  // cria um novo item de lista
  const li = document.createElement("li")

  // criando botao checkbox
  const checkbox = document.createElement("input")

  checkbox.type = "checkbox"

  // criando o texto da tarefa
  const taskSpan = document.createElement("span")
  taskSpan.textContent = taskText

  // criando o botão de exclusão
  const deleteBtn = document.createElement("button")
  const deleteIcon = document.createElement("img")
  deleteIcon.src = "./assets/icons/trash.svg"
  deleteBtn.appendChild(deleteIcon)
  deleteBtn.classList.add("delete-btn")

  checkbox.addEventListener("change", (event) => {
    if (checkbox.checked) {
      li.classList.add("Completed")
    } else {
      li.classList.remove("Completed")
    }
  })

  deleteBtn.addEventListener("click", () => {
    li.remove()
    showNotification()
  })

  // Selecionando todos os checkboxes

  li.appendChild(checkbox)
  li.appendChild(taskSpan)
  li.appendChild(deleteBtn)

  taskList.appendChild(li)

  // limpando o input
  taskInput.value = ""
})

function showNotification() {
  const notification = document.getElementById("notification")
  notification.classList.remove("hidden")

  setTimeout(() => {
    closeNotification()
  }, 3000)
}

function closeNotification() {
  const notification = document.getElementById("notification")
  notification.classList.add("hidden")
}
