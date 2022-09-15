const inputElem = document.querySelector(".form-todo input[type='text']");
const inputSubmit = document.querySelector(".form-todo input[type='submit']");
const todoList = document.querySelector(".todo-list");
inputSubmit.addEventListener("click", (e)=>{
    e.preventDefault();
    const val = inputElem.value;
    inputElem.value="";
    const li=document.createElement("li");
    li.innerHTML=`<span class="text">${val}</span>
    <div class="todo-buttons">
            <button class="todo-btn done">Check</button>
            <button class="todo-btn remove">Remove</button>
          </div>`;

    todoList.append(li);
});

todoList.addEventListener("click", (e)=>{
    if(e.target.classList.contains("done"))
    {
        const temp=e.target.parentNode.parentNode.firstElementChild;   
        if(e.target.innerText=="Check")     
            {
                temp.style.textDecoration="line-through";
                temp.style.color="red"; 
                e.target.innerText="Uncheck";
            }
        else if(e.target.innerText=="Uncheck")
        {
            temp.style.textDecoration="Solid";
                temp.style.color="greenyellow";
                e.target.innerText="Check";
        }
    }

    if(e.target.classList.contains("remove"))
    {
        if(confirm("Confirm Remove"))
        e.target.parentNode.parentNode.remove();
    }
})


