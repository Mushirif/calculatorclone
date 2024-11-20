// step 1.function to display content
function displayContent(content){
    display.value += content
}
// step 2.clear input
function inputClear(){
    display.value = ""
}
// step 3.to delete one number
function inputDel(){
    display.value = display.value.slice(0,-1)
}
// step 4.result
function inputResult(){
    display.value = eval(display.value)
}