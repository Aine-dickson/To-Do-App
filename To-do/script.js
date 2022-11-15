let taskTitle;
let taskContent;

$("document").ready(() => {
    $("#add").click(() => {
        $(".edits").removeClass("hidden")
    })
// Functionality of adding an edited task to the display window
    $("#push").click(() => {
        $(".edits").addClass("hidden")
        taskTitle = $(".title-text").text()
        taskContent = $(".task-body").text()
        let task_template = document.createElement("div")
        task_template.setAttribute("class", "task")
        task_template.innerHTML = `
        <span class="task-title">${taskTitle}</span>
        <div class="task-actions">
            <span class="delete"><i class="fas fa-delete"></i></span>
            <span class="edit"><i class="fas fa-pencil"></i></span>
        </div>
        </div>`
        $(".task-display").prepend(task_template)
        $(".title-text").text("")
        $(".task-body").text("")
    })
// Provision for writing text ability
    $(".title-text").click(() => {
        $("#title").focus()
        $("#title").focus(() => {
            if($(".title-text").val() != " "){
                $(".title-text").css({"text-decoration":"underline wavy green 0.05rem"})
            } else {
                $(".title-text").css("color", "black")
            }
        })
        keyEntry("title")
    })

    $("#title").focusout(() => {
        $("#title").val("")
    })

    $(".task-body").click(() => {
        $("#task-body").focus()
        $("#task-body").focus(() => {
            console.log("Body focused!")
        })
        keyEntry("body")
    })

    $("#task-body").focusout(() => {
        $("#task-body").val("")
    })
})

function keyEntry(det){
    if(det == "title"){
        $("#title").keyup(() => {
            let statement = $("#title").val()
            $(".title-text").text(statement)
        })
    } else {
        $("#task-body").keyup(() => {
            let statement = $("#task-body").val()
            $(".task-body").text(statement)
        })
    }
}