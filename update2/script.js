document.addEventListener("DOMContentLoaded", function () {
    const tl = document.getElementById("task-list");
    loadTasks();
    //download saved tasks 

    //add task if click button
    document.getElementById("add-task-btn").addEventListener("click", function () {

        var ti = document.getElementById("task-input");
        var cas = document.getElementById("category");
        var tt = ti.value.trim();//text the task inputed
        var ca = cas.value;
        if (tt) {
            addTask(tt, ca);// add a new task
            saveTasks();// save the Tasks
            ti.value = "";


        }
        else {
            alert("من فضلك أدخل مهمة أولاً")
        }


    });
    
    //function to task input in the minue
    function addTask(tt, ca) {

        var nt = document.createElement("div");
        nt.classList.add("task", ca);// add category 
        var check = document.createElement("input");
        check.type = "checkbox";
        check.classList.add("task-check");
        check.addEventListener("change", function () {
            if (check.checked) {
                nt.classList.add("completed");
            }
            else {
                nt.classList.remove("completed");
            }
            saveTasks();
        });
        var tala = document.createElement("span");
        tala.textContent = tt;

        nt.appendChild(check);
        nt.appendChild(tala);
        nt.textContent = tt;
        var debu = document.createElement("button");
        debu.textContent = "X";
        debu.addEventListener("click", function () {
            tl.removeChild(nt);
            saveTasks();
        });
        nt.appendChild(check);
        nt.appendChild(debu);
        tl.appendChild(nt);


    }
    //saved in localstorage function
    function saveTasks() {

        var tasks = [];
        document.querySelectorAll(".task").forEach(function (task) {
            var tt = task.textContent.replace("X", "").trim();

            var ca = task.classList[1];//category for task

            tasks.push({ text: tt, catgory: ca });//save text only 
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));//saved in localstorage

    }
    //function download tasks from localStorage
    function loadTasks() {
        var tasks = JSON.parse(localStorage.getItem("tasks"));
        if (tasks) {
            tasks.forEach(function (task) {
                addTask(task.text, task.catgory);
            });
        }

    }
    document.getElementById("search").addEventListener("input", function(){
        var st = this.value.toLowerCase();
        var tasks = document.querySelectorAll(".task");

        tasks.forEach(function(task) {
            var tt = task.textContent.toLowerCase();
            if (tt.includes(st)) {
                task.style.display = "block";
            } else {
                task.style.display = "none";
            }
        });
    });
    // جلب العناصر
    const mainBtn = document.getElementById('mainBtn');
    const menu = document.getElementById('menu');

    // عند الضغط على الزر العائم
    mainBtn.addEventListener('click', () => {
        menu.classList.toggle('show'); // تبديل العرض
    });

    // إغلاق القائمة عند النقر خارجها
    document.addEventListener('click', (event) => {
        if (!mainBtn.contains(event.target) && !menu.contains(event.target)) {
            menu.classList.remove('show');
        }
    });
});
// 
// ti.value = "";
//
//
// 
