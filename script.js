let isThai = true;

// สลับภาษา ไทย / อังกฤษ
function toggleLanguage() {
    isThai = !isThai;

    document.getElementById("title").innerText =
        isThai ? "รายการที่ต้องทำ" : "To-Do List";

    document.getElementById("todoInput").placeholder =
        isThai ? "พิมพ์งานที่ต้องทำ..." : "Enter a task...";

    document.getElementById("addBtn").innerText =
        isThai ? "เพิ่มงาน" : "Add Task";
}

// เพิ่มรายการงาน
function addTodo() {
    const input = document.getElementById("todoInput");
    const text = input.value.trim();

    // ไม่อนุญาตให้เพิ่มค่าว่าง
    if (text === "") {
        alert(isThai ? "กรุณากรอกงานก่อนเพิ่ม" : "Please enter a task");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.innerText = text;

    const actions = document.createElement("div");
    actions.className = "actions";

    // ปุ่มทำเครื่องหมายว่างานเสร็จ
    const doneBtn = document.createElement("button");
    doneBtn.innerText = "✔";
    doneBtn.className = "done";
    doneBtn.onclick = function () {
        li.classList.toggle("completed");
    };

    // ปุ่มลบงาน
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "✖";
    deleteBtn.onclick = function () {
        li.remove();
    };

    actions.appendChild(doneBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(actions);

    document.getElementById("todoList").appendChild(li);
    input.value = "";
}
