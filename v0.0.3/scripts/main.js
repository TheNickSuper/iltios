var a = document.getElementById("text"); //Берем тот <p> в переменную а
var b, c, d, e, screenData, colorText, colorBackground;//Делаем переменную b, c, d, e, screenData, colorText и colorBackground без  значения
    screenData = null;
    colorText = "green";
    colorBackground = "black";
var body = document.getElementsByTagName("body")[0];
    var chat, jl, jhg, jlg, jgh = false;
setTimeout(launchA, 4000); // Дадим прогрузиться за 6 секунд, а после запускаем launchA
function launchA(){ //Вот сам launchA
a.innerHTML = " "; //Указываем пустоту в переменную a
a.innerHTML = "iltiOS v0.0.3"; //Указываем iltiOS v0.0.3 в переменной a
jfg()
setTimeout(launchB, 2000); // Запускаем функцию launchB через 3 секунды
} 
function launchB(){ //Функция launchB
a.innerHTML = screenData + "<br>10MB operating memory"; // Указываем a и <br>1KB operating memory в переменной a
  jfg()
setTimeout(launchC, 2000); //Запускаем функцию launchC через 3 секунды
} //Короче, я устал писать комментарии, поздравляю, вы нашли единственную пасхалку
function launchC(){
a.innerHTML = screenData + "<br>100MB memory";
  jfg()
setTimeout(launchD, 2000);
}
function launchD(){
a.innerHTML = screenData + "<br>Letter and number test";
  jfg()
setTimeout(launchE, 2000);
}
function launchE(){
a.innerHTML = screenData + "<br>\! \@ \# \$ \% \^ \& \* \( \) \+ \" \№ \; \: \? \, \/ \- \{ \} \| \. \< \>";
  jfg()
setTimeout(launchJ, 3000);
}
function launchJ(){
a.innerHTML = screenData + "<br>1 2 3 4 5 6 7 8 9 0<br>Letter and number test finished";
  jfg()
setTimeout(launchK, 2000);
}
function launchK(){
a.innerHTML = screenData + "<br>Boot...";
  jfg()
setTimeout(bootA, 4000);
}
function bootA(){
a.innerHTML = screenData + "<br>clear screen";
  jfg()
setTimeout(bootB, 50);
}
function bootB(){
screenData = "";
a.innerHTML = "";
setTimeout(workA, 900);
}
function workA(){
  jlg = "<p></p>"
  e = "Комманда:<textarea id=\"txtcmnd\"></textarea><button id=\"run\" onclick=\"workC()\">Ввести</button>";
  a.innerHTML = e + jlg
  colorBackground = "black";
  colorText = "green";
b = document.getElementById("txtcmnd")
c = document.getElementById("run")
b.style.background = colorBackground;
b.style.color = colorText;
c.style.background = colorBackground;
c.style.color = colorText;
  body.style.background = colorBackground;
body.style.color = colorText;
d = b.value;
updateCommandValue();
}
function updateCommandValue(){
d = b.value;
}
function workB(){
updateCommandValue();
if(d == "help"){
  e = "Комманда:<textarea id=\"txtcmnd\"></textarea><button id=\"run\" onclick=\"workC()\">Ввести</button>";
a.innerHTML = screenData + "<br>off - выключение компьютера, cs - очистка экрана, ver - посмотреть версию, help - посмотреть все команды, fm - посмотреть все файлы, color (цвет) - поменять цвет и color help для помощи для color, regInfo - как зарегистрироваться.<br>" + e + jlg;
b = document.getElementById("txtcmnd")
c = document.getElementById("run")
b.style.background = colorBackground;
b.style.color = colorText;
c.style.background = colorBackground;
c.style.color = colorText;
  body.style.background = colorBackground;
body.style.color = colorText;
screenData = screenData + "<br>off - выключение компьютера, cs - очистка экрана, ver - посмотреть версию, help - посмотреть все команды, fm - посмотреть все файлы, color (цвет) - поменять цвет и color help для помощи для color, regInfo - как зарегистрироваться.<br>";
}
else if(d == "off"){
b, c, d, e, screenData = " ";
a.innerHTML = "Перезагрузите страницу для включения компьютера";
a = " ";
}
else if(d == "cs"){
cs()
}
else if(d == "ver"){
  e = "Комманда:<textarea id=\"txtcmnd\"></textarea><button id=\"run\" onclick=\"workC()\">Ввести</button>";
a.innerHTML = screenData + "<br>0.0.3<br>" + e + jlg;
  b = document.getElementById("txtcmnd")
c = document.getElementById("run")
b.style.background = colorBackground;
b.style.color = colorText;
c.style.background = colorBackground;
c.style.color = colorText;
  body.style.background = colorBackground;
body.style.color = colorText;
  screenData = screenData + "<br>0.0.3<br>";
}
else if(d == "color help"){
e = "Комманда:<textarea id=\"txtcmnd\"></textarea><button id=\"run\" onclick=\"workC()\">Ввести</button>";
a.innerHTML = screenData + "<br>default - как обычно, 0 - зеленый, 1 - черный, 2 - белый, 3 - лаймовый. Укажите color (цвет фона)(цвет текста), например color 10 для зеленого текста на черном фоне<br>" + e + jlg;
  b = document.getElementById("txtcmnd")
c = document.getElementById("run")
b.style.background = colorBackground;
b.style.color = colorText;
c.style.background = colorBackground;
c.style.color = colorText;
  body.style.background = colorBackground;
body.style.color = colorText;
  screenData = screenData + "<br>default - как обычно, 0 - зеленый, 1 - черный, 2 - белый, 3 - лаймовый. Укажите color (цвет фона)(цвет текста), например color 10 для зеленого текста на черном фоне<br>";
}
else if(d == "color default"){
  colorText = "green";
  colorBackground = "black";
  cs()
}
else if(d == "color 00"){
colorText = "green";
  colorBackground = "green";
  cs()
}
  else if(d == "color 01"){
 colorText = "black";
    colorBackground = "green";
    cs()
  }
else if(d == "color 02"){
  colorText = "white";
  colorBackground = "green";
  cs()
}
else if(d == "color 03"){
  colorText = "lime";
  colorBackground = "green";
  cs()
}
else if(d == "color 10"){
  colorText = "green";
  colorBackground = "black";
  cs()
}
else if(d == "color 11"){
  colorText = "black";
  colorBackground = "black";
  cs()
}
  else if(d == "color 12"){
  colorText = "white";
  colorBackground = "black";
  cs()
}
  else if(d == "color 13"){
  colorText = "lime";
  colorBackground = "black";
  cs()
}
  else if(d == "color 20"){
  colorText = "green";
  colorBackground = "white";
  cs()
}
else if(d == "color 21"){
  colorText = "black";
  colorBackground = "white";
  cs()
}
  else if(d == "color 22"){
  colorText = "white";
  colorBackground = "white";
  cs()
}
  else if(d == "color 23"){
  colorText = "lime";
  colorBackground = "white";
  cs()
}
  else if(d == "color 30"){
  colorText = "green";
  colorBackground = "lime";
  cs()
}
  else if(d == "color 31"){
  colorText = "black";
  colorBackground = "lime";
  cs()
}
  else if(d == "color 32"){
  colorText = "green";
  colorBackground = "lime";
  cs()
}
  else if(d == "color 33"){
  colorText = "lime";
  colorBackground = "lime";
  cs()
}
  else if(d == "regInfo"){
      jlgOpen()
  }
else {
  e = "Комманда:<textarea id=\"txtcmnd\"></textarea><button id=\"run\" onclick=\"workC()\">Ввести</button>";
a.innerHTML = screenData + "<br>Извините, была указана неверная команда или неверный атрибут<br>" + e + jlg;
  b = document.getElementById("txtcmnd")
c = document.getElementById("run")
b.style.background = colorBackground;
b.style.color = colorText;
c.style.background = colorBackground;
c.style.color = colorText;
body.style.background = colorBackground;
body.style.color = colorText;
  screenData = screenData + "<br>Извините, была указана неверная команда или неверный атрибут<br>";
}
updateCommandValue();
}
function workC(){
setTimeout(workB, 5000);
}
function jfg(){
screenData = a.innerHTML;
}
    function cs(){
      screenData = " ";
  e = "Комманда:<textarea id=\"txtcmnd\"></textarea><button id=\"run\" onclick=\"workC()\">Ввести</button>";
a.innerHTML = e + jlg;
  b = document.getElementById("txtcmnd")
c = document.getElementById("run")
b.style.background = colorBackground;
b.style.color = colorText;
c.style.background = colorBackground;
c.style.color = colorText;
  body.style.background = colorBackground;
body.style.color = colorText;
    }
    function jlgOpen(){
      if(jgh == false){
        jlg.innerHTML = "Чтобы зарегистироваться напишите в вк HTTPS://vk.com/nairuigames письмо с \"Логин: (ваш логин) Пароль: (ваш пароль)\" для регистрации";
        jgh = true;
      }
      if(jgh == true){
        jlg.innerHTML = "";
        jgh = false;
      }
    }
