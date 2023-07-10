let input = document.getElementById("textBox");
// var x=1;
let doneCount = 0;
let completeTaskCount = 0;

input.addEventListener("keyup", function(event) {

if (event.key === "Enter") {
  data=`
  <div id='taskBar' class='row' style='background-color:lightgrey;border:1px solid black;width:75%;margin-left:13%;margin-bottom:3%;border-radius:5px;'>
    <div class='col-2'>
      <input type='checkbox'  id='checkBox' onclick='checkedTask(this,this.parentElement.parentElement)'/>
    </div>
    <div class='col-8'>
      <div id='taskText'>
      
      </div>
    </div>
    <div class='col-2' id='trashIcon'>
      <i id='trash' class='fa fa-trash-o' onclick='clearTask(this)'></i>
    </div>
  </div>`;
  document.getElementById("pendingTask").insertAdjacentHTML("afterbegin",data);
  let task = document.getElementById("taskText");
  task.innerHTML=input.value;
  task.style.textAlign="left";

  // console.log(`x is ${x}`);
  // c=x;
  // c=document.querySelectorAll('#taskBar').length - completeTaskCount;
  // document.getElementById("countTask").innerHTML = c;
  // x = x + 1;

  countTaskDisplay();
  input.value='';
  
  // console.log(x);
  // taskArray.push('task'+String(count));
  // alert("hi");
}
});

// function trashIn()
// {
//   document.getElementById("trashIcon").innerHTML="";
// }

function checkedTask(t,y)
{
  // alert("hi");
  // let checkedBox = document.getElementById("checkBox");
  z=y.querySelector('.col-8');
  y=z.querySelector('#taskText');
  if(t.checked==true)
  {
    // y=y.childNodes;
    // console.log(y);
    // console.log(y[3]);
    y.style.textDecoration="line-through";
    // console.log(c);
    // c = c-1;
    // doneCount = doneCount+1;
    // document.getElementById("countTask").innerHTML=c;

    z.innerHTML+=`<div class='completeTask'></div>`
    // console.log(c);

  }
  else{
    y.style.textDecoration="none";
    // c = c+1;
    // doneCount = doneCount-1;
    // document.getElementById("countTask").innerHTML=c;
    z.childNodes[3].remove();

  }

  countTaskDisplay();
  // completeTaskCount=document.getElementById("pendingTask").getElementsByClassName("completeTask").length;
  // console.log(completeTaskCount);
  // c = document.querySelectorAll('#taskBar').length - completeTaskCount;
  // document.getElementById("countTask").innerHTML=c;


  // document.getElementById("countTask").innerHTML=x;

}
function clearTask(t)
{
  // console.log(document.getElementById(t).parentElement);
  // console.log(t);
  t.parentElement.parentElement.remove();
  // x = x-1;

  // c=c-1;
  // x=c+1;
  // console.log(x);
  // console.log(c);

  // t=t.parentElement.parentElement;
  // console.log(t);
  // t=t.querySelector('.col-8').querySelector('#taskText');

  // let shownSubs = $('#pendingTask').filter((_,e) => e.style.display == 'block');
  // console.log(document.getElementById("pendingTask").getElementsByClassName("col-8"));


  // c = document.querySelectorAll('#taskBar').length - completeTaskCount;
  // document.getElementById("countTask").innerHTML=c;

  countTaskDisplay();
}

function clearAllTask()
{
  // alert("hi");
  document.getElementById("pendingTask").innerHTML='';
  document.getElementById("countTask").innerHTML='no';
  // x=1;
}

function countTaskDisplay()
{
  completeTaskCount = document.getElementById("pendingTask").getElementsByClassName("completeTask").length;
  console.log(completeTaskCount);
  c = document.querySelectorAll('#taskBar').length - completeTaskCount;
  document.getElementById("countTask").innerHTML = c;
}

// function SetNewSize(textarea) {
//     textarea.style.height = "0px";
//     textarea.style.height = textarea.scrollHeight + "px";
// }
