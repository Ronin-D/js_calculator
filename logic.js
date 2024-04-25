function show(){
  const img1Src = "https://tamali.net/calculator/2d/parallelogram/angle/img/1.jpg"
  const img2Src = "https://tamali.net/calculator/2d/parallelogram/angle/img/3.jpg"
  const option = document.getElementsByName('selector')
  const p = document.getElementById("unknown")
  if (option[0].checked) {
    p.innerHTML= '<img src="'+img2Src+'">'
    p.innerHTML+="<br><label>a =<input type='number' id='a' min=1 max=200 onfocus='changeColor(this)'></label>"
  }
  else if (option[1].checked) {
    p.innerHTML= '<img src="'+img1Src+'">'
    p.innerHTML+="<br><label>h =<input type='number' id='h' min=1 max=200 onfocus='changeColor(this)'></label>"
  }
}

function calculate(){
  let res = 0
  let resultText =  ''
  const option = document.getElementsByName('selector')[0].checked
  if (validate(option)) {
    const tasks = document.querySelectorAll('input[type="checkbox"]:checked')
  const b = Number(document.getElementById('b').value)
  const angle = Number(document.getElementById('alpha').value)
  if(option){
    const a = Number(document.getElementById('a').value)
    for (let i = 0;i<tasks.length;i++) {
      let task = tasks[i]
      switch (task.id) {
        case 'task1':{
          res = a*b*Math.sin(angle)
          resultText+="площадь: "+res+"\n"
          break;
        }
        case 'task2':{
          res = Math.acos((a*a+b*b-2*a*b*Math.cos(angle))/(2*a*b))
          res=180*res/3.14
          resultText+="угол между диагоналями: "+res+"\n"
          break;
        }
        case 'task3':{
          res = 2*(a+b)
          resultText+="периметр: "+res+"\n"
          break;
        }
      }
    }
  }
  else{
    const h = Number(document.getElementById('h').value)
    for (let i = 0;i<tasks.length;i++) {
      let task = tasks[i]
      switch (task.id) {
        case 'task1':{
          res = b*h
          resultText+="площадь: "+res+"\n"
          break
        }
        case 'task2':{
          let a = h/Math.sign(angle)
          let d1 = a*a+b*b-2*a*b*Math.cos(angle)
          let d2 = a*a+b*b+2*a*b*Math.cos(angle)
          res = Math.cos((d1*d1+d2*d2-2*a*a)/(2*d1*d2))
          res=180*res/3.14
          resultText+="угол между диагоналями: "+res+"\n"
          break
        }
        case 'task3':{
          let a = h/Math.sign(angle)
          res = 2*(a+b)
          resultText+="периметр: "+res+"\n"
          break
        }
      }
      //resultText+="результат: "+res+"\n"
    }
  }
  document.getElementById('output').innerHTML=resultText  
  }
}

function validate(option){
  const option1 = document.getElementsByName('selector')[0]
  const option2 = document.getElementsByName('selector')[1]
  if (!option1.checked&&!option2.checked) {
    document.getElementById('show_btn').style="border: 2px solid red"
    return false
  }
  const tasks = document.querySelectorAll('input[type="checkbox"]:checked')
  // if (tasks.length==0) {
  //   alert("Необходимо выбрать, то что вы ищете")
  //   return false
  // }
  const b = document.getElementById('b')
  const angle = document.getElementById('alpha')
  if (angle>90) {
    alert("такого угла нет")
    return false
  }
  if (option) {
    const a = document.getElementById('a')
    if (a.value.length==0||b.value.length==0||angle.value.length==0) {
      if(a.value.length==0){
        a.style = "border: 2px solid red"
      }
      if(b.value.length==0){
        b.style = "border: 2px solid red"
      }
      if(angle.value.length==0){
        angle.style = "border: 2px solid red"
      }
      return false
    }
  }
  else{
    const h = document.getElementById('h')
    if (b.value.length==0||h.value.length==0||angle.value.length==0) {
      if(b.value.length==0){
        b.style = "border: 2px solid red"
      }
      if(h.value.length==0){
        h.style = "border: 2px solid red"
      }
      if(angle.value.length==0){
        angle.style = "border: 2px solid red"
      }
      return false
    }
  }
  return true
}

function changeColor(element){
  element.style = "border: 2px solid black"
}