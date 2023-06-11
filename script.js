let squares = new Array(196);

let minutes=0;
let seconds=0;

let ratio=0.15;
let isFirst=1;

let size=14;
let scale=500/size+"px";

function clock(){
  seconds++;
  if(seconds>=60){
    seconds=0;
    minutes++;
  }
  
  if(minutes<10 && seconds<10){
    document.getElementById("time").innerHTML="0"+minutes+":"+"0"+seconds;
  }else if(minutes<10){
    document.getElementById("time").innerHTML="0"+minutes+":"+seconds;
  }else if(seconds<10){
  document.getElementById("time").innerHTML= minutes+":"+"0"+seconds;
  }else{
    document.getElementById("time").innerHTML= minutes+":"+seconds;
  }
  
  setTimeout(clock, 1000);
}

function showBombs(size){
  for(let i=0; i<(size*size); i++){
    if(squares[i]=="bomb"){
      document.getElementById("s"+i).classList.add('empty');
      document.getElementById("s"+i).innerHTML = '<img src="bomb.png" alt="bomb" style="width: 25px"/>';
    }
  }
}

function revelSquare(s,size){
  let max=size-1;

  console.log(s);
  if(squares[s]=="bomb"){
  	showBombs(size);
  }else{
    squares[s]="clear";
    
    document.getElementById("s"+s).classList.add('empty');
     
    let howManyBombs=0;
    let row=Math.floor(s/size);
    let column=s%size;

    if((row==0 && column==max)                ||
       (row==max && column==max)              ||
       ((row==max)&&(column>0 && column<max)) ||
       ((column==max)&&(row>0 && row<max))    ||
       ((row>0 && row<max) && 
        (column>0 && column<max))){
      if(squares[s-size-1]=="bomb"){
        howManyBombs++;
      }
    }
    if((row==max && column==0)               ||
       (row==max && column==max)              ||
       ((row==max)&&(column>0 && column<max)) ||
       ((row==0)&&(column>0 && column<max))  ||
       ((column==0)&&(row>0 && row<max))     ||
       ((column==max)&&(row>0 && row<max))    ||
       ((row>0 && row<max) && 
        (column>0 && column<max))){
      if(squares[s-size]=="bomb"){
        howManyBombs++;
      }
    }
    if((row==max && column==0)               ||
       ((row==max)&&(column>0 && column<max))  ||
       ((column==0)&&(row>0 && row<max))      ||
       ((row>0 && row<max) && 
        (column>0 && column<max))){
      if(squares[s-size+1]=="bomb"){
        howManyBombs++;
      }
    }
    if((row==0 && column==0)                ||
       (row==max && column==0)               ||
       ((row==0)&&(column>0 && column<max))  ||
       ((row==max)&&(column>0 && column<max)) ||
       ((column==0)&&(row>0 && row<max))     ||
       ((row>0 && row<max) && 
        (column>0 && column<max))){
      if(squares[s+1]=="bomb"){
        howManyBombs++;
      }
    }
    if((row==0 && column==0)                ||
       ((row==0)&&(column>0 && column<max))  ||
       ((column==0)&&(row>0 && row<max))     ||
       ((row>0 && row<max) && 
       (column>0 && column<13))){
      if(squares[s+size+1]=="bomb"){
        howManyBombs++;
      }
    }
    if((row==0 && column==0)                ||
       (row==0 && column==max)               ||
       ((row==0)&&(column>0 && column<max))  ||
       ((column==0)&&(row>0 && row<max))     ||
       ((column==max)&&(row>0 && row<max))    ||
       ((row>0 && row<max) && 
       (column>0 && column<max))){
      if(squares[s+size]=="bomb"){
        howManyBombs++;
      }
    }
    if((row==0 && column==max)               ||
       ((row==0)&&(column>0 && column<max))  ||
       ((column==max)&&(row>0 && row<max))    ||
       ((row>0 && row<max) && 
       (column>0 && column<max))){
      if(squares[s+size-1]=="bomb"){
        howManyBombs++;
      }
    }
    if((row==0 && column==max)               ||
       (row==max && column==max)              ||
       ((row==0)&&(column>0 && column<max))  ||
       ((row==max)&&(column>0 && column<max)) ||
       ((column==max)&&(row>0 && row<max))    ||
       ((row>0 && row<max) && 
        (column>0 && column<max))){
      if(squares[s-1]=="bomb"){
        howManyBombs++;
      }
    }

    
     
    if(howManyBombs>0){
      document.getElementById("s"+s).innerHTML=
        '<div class="informationAboutBombs" style="line-Height: '+scale+'">'+howManyBombs+'</div>'
    }else{
      if((row==0 && column==max)            ||
      (row==max && column==max)              ||
      ((row==max)&&(column>0 && column<max)) ||
      ((column==max)&&(row>0 && row<max))    ||
      ((row>0 && row<max) && 
      (column>0 && column<max))){
        if(squares[s-size-1]=="undefined"){
          revelSquare(s-size-1, size);
        }
      }
      if((row==max && column==0)                ||
         (row==max && column==max)              ||
         ((row==max)&&(column>0 && column<max)) ||
         ((row==0)&&(column>0 && column<max))   ||
         ((column==0)&&(row>0 && row<max))      ||
         ((column==max)&&(row>0 && row<max))    ||
         ((row>0 && row<max) && 
         (column>0 && column<max))){
        if(squares[s-size]=="undefined"){
          revelSquare(s-size, size);
        }
      }
      if((row==max && column==0)               ||
        ((row==max)&&(column>0 && column<max))  ||
        ((column==0)&&(row>0 && row<max))      ||
         ((row>0 && row<max) && 
         (column>0 && column<max))){
        if(squares[s-size+1]=="undefined"){
          revelSquare(s-size+1, size);
        }
      }
      if((row==0 && column==0)                ||
         (row==max && column==0)               ||
         ((row==0)&&(column>0 && column<max))  ||
         ((row==max)&&(column>0 && column<max)) ||
         ((column==0)&&(row>0 && row<max))     ||
         ((row>0 && row<max) && 
         (column>0 && column<max))){
        if(squares[s+1]=="undefined"){
          revelSquare(s+1, size);
        }
      }
      if((row==0 && column==0)                ||
         ((row==0)&&(column>0 && column<max))  ||
         ((column==0)&&(row>0 && row<max))     ||
         ((row>0 && row<max) && 
         (column>0 && column<max))){
        if(squares[s+size+1]=="undefined"){
          revelSquare(s+size+1, size);
        }
      }
      if((row==0 && column==0)                ||
         (row==0 && column==max)               ||
         ((row==0)&&(column>0 && column<max))  ||
         ((column==0)&&(row>0 && row<max))     ||
         ((column==max)&&(row>0 && row<max))    ||
         ((row>0 && row<max) && 
         (column>0 && column<max))){
        if(squares[s+size]=="undefined"){
          revelSquare(s+size, size);
        }
      }
      if((row==0 && column==max)               ||
         ((row==0)&&(column>0 && column<max))  ||
         ((column==max)&&(row>0 && row<max))    ||
         ((row>0 && row<max) && 
         (column>0 && column<max))){
        if(squares[s+size-1]=="undefined"){
          revelSquare(s+size-1,size);
        }
      }
      if((row==0 && column==max)               ||
         (row==max && column==max)              ||
         ((row==0)&&(column>0 && column<max))  ||
         ((row==max)&&(column>0 && column<max)) ||
         ((column==max)&&(row>0 && row<max))    ||
         ((row>0 && row<max) && 
          (column>0 && column<max))){
        if(squares[s-1]=="undefined"){
          revelSquare(s-1, size);
        }
      }
    }
  }
}

function choose(){

}

function randomizer(s,size){
  for(let i=0; i<Math.floor((size*size)*ratio); i++){
    let r=Math.floor(Math.random()*(size*size));
    if(r==s){
      i--;
    }else{
      squares[r]="bomb";
    }
  }
}

function check(s,size){
  switch(isFirst){
      case 0:
        revelSquare(s,size);
      break;
      case 1:
        isFirst=0;
        clock();
        randomizer(s,size);
        revelSquare(s,size); 
      break;
  }
}

function generate(){
  document.getElementById("board").innerHTML="";
  console.log(scale);

  scale=500/size+"px";

  document.getElementById("bombs").innerHTML="";

  document.getElementById("bombs").innerHTML=Math.floor((size*size)*ratio);
  

  for(let i=0; i<size; i++){
    for(let j=0; j<size; j++){
      let x=i*size+j;
      squares[x]="undefined";
      if(i%2==0){
        if(j%2==0){
          document.getElementById("board").innerHTML+=
          '<div class="oddBomb" id="s'+x+'" onclick="check('+x+','+size+')"></div>';
        }else{
          document.getElementById("board").innerHTML+=
          '<div class="evenBomb" id="s'+x+'" onclick="check('+x+','+size+')"></div>';
        }
      }else{
        if(j%2==0){
          document.getElementById("board").innerHTML+=
          '<div class="evenBomb" id="s'+x+'" onclick="check('+x+','+size+')"></div>';
        }else{
          document.getElementById("board").innerHTML+=
          '<div class="oddBomb" id="s'+x+'" onclick="check('+x+','+size+')"></div>';
        }
      }
      document.getElementById("s"+x).style.width = scale; 
      document.getElementById("s"+x).style.height = scale;
    }
    document.getElementById("board").innerHTML+=
      '<div style="clear: both;"></div>';
  }
}

var slider = document.getElementById("sizeRange");
var output = document.getElementById("demo");
let sliderValue = slider.value;
output.innerHTML = slider.value;
generate(slider.value);

slider.oninput = function() {
  output.innerHTML = this.value;
  sliderValue=this.value;
  size=sliderValue;
}

document.getElementById("submitButton").addEventListener('click', function(){generate(); isFirst=1;},false);