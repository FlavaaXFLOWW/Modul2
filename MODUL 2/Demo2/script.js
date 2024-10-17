const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Masukkan tugas terlebih dahulu!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.addEventListener("click", () => editTask(li));

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Hapus";
  deleteBtn.addEventListener("click", () => removeTask(li));

  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);

  taskInput.value = "";
}

function editTask(li) {
  const newTask = prompt(
    "Edit tugas:",
    li.textContent.replace("EditHapus", "").trim()
  );
  if (newTask !== null && newTask.trim() !== "") {
    li.firstChild.textContent = newTask;
  }
}

function removeTask(li) {
  taskList.removeChild(li);
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
