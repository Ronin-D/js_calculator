"use strict";

function show() {
  var img1Src = "https://tamali.net/calculator/2d/parallelogram/angle/img/1.jpg";
  var img2Src = "https://tamali.net/calculator/2d/parallelogram/angle/img/3.jpg";
  var option = document.getElementsByName('selector');
  var p = document.getElementById("unknown");

  if (option[0].checked) {
    p.innerHTML = '<img src="' + img2Src + '">';
    p.innerHTML += "<br><label>a =<input type='number' id='a' min=1 max=200 onfocus='changeColor(this)'></label>";
  } else if (option[1].checked) {
    p.innerHTML = '<img src="' + img1Src + '">';
    p.innerHTML += "<br><label>h =<input type='number' id='h' min=1 max=200 onfocus='changeColor(this)'></label>";
  }
}

function calculate() {
  var res = 0;
  var resultText = '';
  var option = document.getElementsByName('selector')[0].checked;

  if (validate(option)) {
    var tasks = document.querySelectorAll('input[type="checkbox"]:checked');
    var b = Number(document.getElementById('b').value);
    var angle = Number(document.getElementById('alpha').value);

    if (option) {
      var a = Number(document.getElementById('a').value);

      for (var i = 0; i < tasks.length; i++) {
        var task = tasks[i];

        switch (task.id) {
          case 'task1':
            {
              res = a * b * Math.sin(angle);
              resultText += "площадь: " + res + "\n";
              break;
            }

          case 'task2':
            {
              res = Math.acos((a * a + b * b - 2 * a * b * Math.cos(angle)) / (2 * a * b));
              res = 180 * res / 3.14;
              resultText += "угол между диагоналями: " + res + "\n";
              break;
            }

          case 'task3':
            {
              res = 2 * (a + b);
              resultText += "периметр: " + res + "\n";
              break;
            }
        }
      }
    } else {
      var h = Number(document.getElementById('h').value);

      for (var _i = 0; _i < tasks.length; _i++) {
        var _task = tasks[_i];

        switch (_task.id) {
          case 'task1':
            {
              res = b * h;
              resultText += "площадь: " + res + "\n";
              break;
            }

          case 'task2':
            {
              var _a = h / Math.sign(angle);

              var d1 = _a * _a + b * b - 2 * _a * b * Math.cos(angle);
              var d2 = _a * _a + b * b + 2 * _a * b * Math.cos(angle);
              res = Math.cos((d1 * d1 + d2 * d2 - 2 * _a * _a) / (2 * d1 * d2));
              res = 180 * res / 3.14;
              resultText += "угол между диагоналями: " + res + "\n";
              break;
            }

          case 'task3':
            {
              var _a2 = h / Math.sign(angle);

              res = 2 * (_a2 + b);
              resultText += "периметр: " + res + "\n";
              break;
            }
        } //resultText+="результат: "+res+"\n"

      }
    }

    document.getElementById('output').innerHTML = resultText;
  }
}

function validate(option) {
  var option1 = document.getElementsByName('selector')[0];
  var option2 = document.getElementsByName('selector')[1];

  if (!option1.checked && !option2.checked) {
    document.getElementById('show_btn').style = "border: 2px solid red";
    return false;
  }

  var tasks = document.querySelectorAll('input[type="checkbox"]:checked'); // if (tasks.length==0) {
  //   alert("Необходимо выбрать, то что вы ищете")
  //   return false
  // }

  var b = document.getElementById('b');
  var angle = document.getElementById('alpha');

  if (angle > 90) {
    alert("такого угла нет");
    return false;
  }

  if (option) {
    var a = document.getElementById('a');

    if (a.value.length == 0 || b.value.length == 0 || angle.value.length == 0) {
      if (a.value.length == 0) {
        a.style = "border: 2px solid red";
      }

      if (b.value.length == 0) {
        b.style = "border: 2px solid red";
      }

      if (angle.value.length == 0) {
        angle.style = "border: 2px solid red";
      }

      return false;
    }
  } else {
    var h = document.getElementById('h');

    if (b.value.length == 0 || h.value.length == 0 || angle.value.length == 0) {
      if (b.value.length == 0) {
        b.style = "border: 2px solid red";
      }

      if (h.value.length == 0) {
        h.style = "border: 2px solid red";
      }

      if (angle.value.length == 0) {
        angle.style = "border: 2px solid red";
      }

      return false;
    }
  }

  return true;
}

function changeColor(element) {
  element.style = "border: 2px solid black";
}