var canvas; // キャンバス
var ctx;    // コンテキスト
 
var canvas_magnification = 25;    // 表示倍率  
var canvas_width  = 72;           // キャンバス横幅   
var canvas_height = 50;           // キャンバス縦幅 
var canvas_mousedown_flg = false; // マウスダウンフラグ

///// イベント
    
window.onload = function (){
  // キャンバス
  canvas = document.getElementById("MyCanvas");
     
  canvas.width  = canvas_width * canvas_magnification;
  canvas.height = canvas_height * canvas_magnification;    
  
  ctx = canvas.getContext("2d");
  
  canvas.addEventListener('mousedown', OnMousedown);
  canvas.addEventListener('mousemove', OnMousemove);
  canvas.addEventListener('mouseup', OnMouseup);
  window.addEventListener('mouseup', OnMouseup);
  
  init_canvas();              
}
 
///// 内部関数
 
function init_canvas(){
  canvas_mousedown_flg = false;
  
  ctx.fillStyle = "rgb(255, 255, 255)";  
  ctx.fillRect(0,0,canvas.width,canvas.height);
                 
  drawRule();  
}
   
// 座標からブロック名を取得する   
function Point2BlockName(x,y){  
  var col = 'C' + (Math.floor(x / canvas_magnification)+1);
  var row = 'R' + (Math.floor(y / canvas_magnification)+1);
  
  document.getElementById('msg3').innerHTML = 'セル番号　' +row + ' x ' + col;
}
 
// キャンバスに罫線を描画する
function drawRule(){
 
  // 線の色
  ctx.strokeStyle = "#1e90ff";
 
  // 線の太さ
  ctx.lineWidth = 2;
  
  // 破線
  if (ctx.setLineDash){
    ctx.setLineDash([1, 2]);
  }
  
  ctx.beginPath();

  for (var i = 0; i < canvas_width+1; i++) {
    ctx.moveTo((i*canvas_magnification),0);
    ctx.lineTo((i*canvas_magnification),canvas.height);
  }
  for (var i = 0; i < canvas_height+1; i++) {
    ctx.moveTo(0,(i*canvas_magnification));
    ctx.lineTo(canvas.width,(i*canvas_magnification));
  }
 
  ctx.stroke();  
}
 
function OnMousedown(e) {
  var rect = e.target.getBoundingClientRect();
  mouseX = e.clientX - rect.left;
  mouseY = e.clientY - rect.top; 
        
  // 塗りつぶし
  var col = Math.floor(mouseX / canvas_magnification);
  var row = Math.floor(mouseY / canvas_magnification);

  let elements = document.getElementsByName("color");
  let checkColor;
  for ( let checked="", i=elements.length; i--; ) {
    if ( elements[i].checked ) {
      checkColor = elements[i].value ;
      break ;
    }
  }

  let color;
  switch (checkColor) {
    case "red":
      color =  "rgb(255, 0, 0)";
      break;
    case "green":
      color =  "rgb(0, 255, 0)";
      break;
    case "blue":
      color =  "rgb(0, 0, 255)";
      break;
    case "yellow":
      color =  "rgb(255, 255, 0)";
      break;
    case "light_blue":
      color =  "rgb(0, 255, 255)";
      break;
    case "pink":
      color =  "rgb(255, 0, 255)";
      break;
    case "black":
      color =  "rgb(0, 0, 0)";
      break;
    case "white":
      color =  "rgb(255, 255, 255)";
      break;
  }
  ctx.fillStyle = color;
  ctx.fillRect(col * canvas_magnification, row * canvas_magnification,
               canvas_magnification, canvas_magnification);
  
  // 罫線の描画
  drawRule();
  
  document.getElementById('msg2').innerHTML = 'マウスダウン　X:' +mouseX + ' Y' +mouseY;
  
  canvas_mousedown_flg = true;
}
 
function OnMousemove(e) {
  var rect = e.target.getBoundingClientRect();
  mouseX = e.clientX - rect.left;
  mouseY = e.clientY - rect.top; 
        
  if (canvas_mousedown_flg){
      // 塗りつぶし
      var col = Math.floor(mouseX / canvas_magnification);
      var row = Math.floor(mouseY / canvas_magnification);

      let elements = document.getElementsByName("color");
      let checkColor;
      for ( let checked="", i=elements.length; i--; ) {
        if ( elements[i].checked ) {
          checkColor = elements[i].value ;
          break ;
        }
      }
      let color;
      switch (checkColor) {
        case "red":
          color =  "rgb(255, 0, 0)";
          break;
        case "green":
          color =  "rgb(0, 255, 0)";
          break;
        case "blue":
          color =  "rgb(0, 0, 255)";
          break;
        case "yellow":
          color =  "rgb(255, 255, 0)";
          break;
        case "light_blue":
          color =  "rgb(0, 255, 255)";
          break;
        case "pink":
          color =  "rgb(255, 0, 255)";
          break;
        case "black":
          color =  "rgb(0, 0, 0)";
          break;
        case "white":
          color =  "rgb(255, 255, 255)";
          break;
      }
      ctx.fillStyle = color;
      ctx.fillRect(col * canvas_magnification, row * canvas_magnification, 
                   canvas_magnification, canvas_magnification);
      
      drawRule();
  }  
 
  document.getElementById('msg1').innerHTML = '現在座標　X:' +mouseX + ' Y' +mouseY;
  Point2BlockName(mouseX,mouseY);
}
 
function OnMouseup(e) {
  canvas_mousedown_flg = false; 
}

function fillCanvas() {
  let elements = document.getElementsByName("color");
  let checkColor;
  for ( let checked="", i=elements.length; i--; ) {
    if ( elements[i].checked ) {
      checkColor = elements[i].value ;
      break ;
    }
  }
  let color;
  switch (checkColor) {
    case "red":
      color =  "rgb(255, 0, 0)";
      break;
    case "green":
      color =  "rgb(0, 255, 0)";
      break;
    case "blue":
      color =  "rgb(0, 0, 255)";
      break;
    case "yellow":
      color =  "rgb(255, 255, 0)";
      break;
    case "light_blue":
      color =  "rgb(0, 255, 255)";
      break;
    case "pink":
      color =  "rgb(255, 0, 255)";
      break;
    case "black":
      color =  "rgb(0, 0, 0)";
      break;
    case "white":
      color =  "rgb(255, 255, 255)";
      break;
  }
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  drawRule();
}

function outputArray() {
  // 1ピクセルの中心の座標を取得
  let w = 0;
  let h = 0;
  let arr = [];
  for (let i=0; i<canvas_height; i++) {
    h += 12;
    for (let j=0; j<canvas_width; j++) {
      w += 12;
      arr.push(ctx.getImageData(w, h, 1, 1).data);
      w += 13;
    }
    w = 0;
    h += 13;
  }
  let text = "{\n"
  let result = createStringArray(arr);
  for (let i=0; i<result.length; i++) {
    text += parseInt(result[i], 2) + ",";
    text += (i+1)%36==0?"\n":"";
  }
  text += "};"
  document.getElementById("output").value = text;
}

function createStringArray(arr) {
  let red = false;
  let green = false;
  let blue = false;
  let a = "";
  let b = 1;
  let result = [];
  for (let i=0; i<arr.length; i++) {
    red = arr[i][0]!=0?true:false;
    green = arr[i][1]!=0?true:false;
    blue = arr[i][2]!=0?true:false;
    a += red?"1":"0";
    a += green?"1":"0";
    a += blue?"1":"0";

    b++;
    if (b === 3) {
      a += "00"
      result.push(a);
      a = "";
      b = 1;
    }
  }
  return result;
}

function drawArray() {
  let text = document.getElementById("draw").value;
  text = text.replace("{", "[");
  text = text.replace(/,\n};|};/, "]");

  let arr = JSON.parse(text);
  let color;
  let w = 0;
  let h = 0;
  for (i=0;i<arr.length;i++) {
    if (w > 35) {
      w = 0;
      h++;
    }
    let str = arr[i].toString(2);
    let zero = "";
    if (str.length < 8) {
      for (let i=0;i<8-str.length;i++){
        zero += "0"
      }
      str = zero + str;
    }
    
    let bit = str.match(/.{3}/g)
    console.log(bit);
    console.log(str);
    
    color_f = bitColorCheck(bit[0]);
    color_b = bitColorCheck(bit[1]);
    // front
    ctx.fillStyle = color_f;
    ctx.fillRect(canvas_magnification*w*2, canvas_magnification*h, canvas_magnification, canvas_magnification);
    // back
    ctx.fillStyle = color_b;
    ctx.fillRect(25+(canvas_magnification*w*2), canvas_magnification*h, canvas_magnification, canvas_magnification);
    w++;
  };
  drawRule();
}

function bitColorCheck(bit) {
  let color;
  switch(bit) {
    case "100":
      color = "rgb(255, 0, 0)";
      break;
    case "010":
      color = "rgb(0, 255, 0)";
      break;
    case "001":
      color = "rgb(0, 0, 255)";
      break;
    case "110":
      color = "rgb(255, 255, 0)";
      break;
    case "011":
      color = "rgb(0, 255, 255)";
      break;
    case "101":
      color = "rgb(255, 0, 255)";
      break;
    case "111":
      color = "rgb(255, 255, 255)";
      break;
    case "000":
      color = "rgb(0, 0, 0)";
      break;
  }
  return color;
}