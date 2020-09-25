const readline = require("readline");
let status, num;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdin,
});
function statusCurrent(e){

  if(e =='p') status = 'PX';
  if(e =='r') status = 'REM';
}
function setValue (status, numCurrent){

  let num = numCurrent, result;
  if(status == 'REM'){
    let px = 16;
    result = (num * px) + 'px';
  }
  else if(status == 'PX'){
    let rem = 0.0625;
    result = (num * rem) + 'rem';
  }
  console.log(result);
}
function questionValor(){
  return rl.question(`Qual valor em ${status}: `, (e)=>{
    switch(e){
      case 'p':
      case 'r':
        statusCurrent(e)
        console.log(` Agora converta de ${status}.`)
        questionValor();
        break
      case e :
        num = e ;
        setValue(status, num)
        questionValor()
        break
      default:
        console.log('só numeros');
        questionTag();
    }  
  })
}
function questionTag(){
  rl.question('O que você quer converter? ', function(e){
    statusCurrent(e)
    questionValor()
  })
};
function questionInit (){
  console.log("Para converter de PX p/ REM informe: P")
  console.log("Para converter de REM p/ PX informe: R")
  questionTag()  
}
questionInit()

