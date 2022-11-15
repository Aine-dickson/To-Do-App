$("document").ready(() => {
    $("#push").click(() => {
        let task_template = document.createElement("div")
        task_template.setAttribute("class", "task")
        task_template.innerHTML = `
        <span class="task-title">Aine</span>
        <div class="task-actions">
            <span class="delete">D</span>
            <span class="edit">E</span>
        </div>
        </div>`
        $(".task-display").prepend(task_template)
    })
    $(".title-text").click(() => {
        $("#title").focus()
        $("#title").focus(() => {
            if($(".title-text").val() != " "){
                $(".title-text").css({"text-decoration":"underline wavy green 0.05rem"})
                console.log("red")
            } else {
                $(".title-text").css("color", "black")
                console.log("black")
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