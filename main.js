const todoContent = document.querySelector(".todoContent")
const btnDel = document.querySelector(".btnDel")
const item = document.querySelector(".item")
const form = document.forms.todoForm

function getData() {
    let todo = {};

    let fm = new  FormData(form)

    fm.forEach((item, key) => {
        todo[key] = item
    })

    return todo
}
let id = 0

form.onsubmit = (e) => {
    e.preventDefault()
    let arrTodos = JSON.parse(localStorage.getItem("todos") || "[]")


    let todo = getData()
    todo.id = id

    let box = document.createElement("div")
    let txt = document.createElement("p")
    let btn = document.createElement("button")

    box.classList.add("item")
    box.id = id

    btn.innerHTML = "delete"
    txt.innerHTML = todo.todo

    box.append(txt)
    box.append(btn)
    todoContent.append(box)

    arrTodos.push(todo)

    localStorage.setItem("todos", JSON.stringify(arrTodos))    
    id++

    btn.onclick = () => {
       box.style.display = "none"   
       
    }
}


function createTodo() {
        let arrTodos = JSON.parse(localStorage.getItem("todos") || "[]")
        
        for (let i = 0; i < arrTodos.length; i++) {
            const element = arrTodos[i];
            
            let box = document.createElement("div")
            let txt = document.createElement("p")
            let btn = document.createElement("button")
            
            box.classList.add("item")

            btn.innerHTML = "delete"
            txt.innerHTML = element.todo
            
            box.append(txt)
            box.append(btn)
            todoContent.append(box)
        }
        
        id = arrTodos.length
    }
    
    createTodo()