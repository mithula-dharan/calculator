var displayValue=(num)=>result.value+=num
// function displayValue(num){
//     result.value+=num
//     // let res=document.querySelector("#result")
//     // res.value+=num
//}

var clearBox=()=>result.value=""
// function clearBox(){
//     //document.querySelector("#result").value=""
//     result.value=""
// }


var evaluateExpression=()=>result.value=eval(result.value)
// function evaluateExpression(){
// //    let res= document.querySelector("#result")
// //     let cur_val=res.value
// //     let result=eval(cur_val)
// //     res.value=result
//     result.value=eval(result.value)
// }



function backSpace(){
    let res=document.querySelector("#result")
    let cur_val=res.value
    res.value=cur_val.slice(0,-1)
}