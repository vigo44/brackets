module.exports = function check(str, bracketsConfig) {
  let arrStr = Array.from(str);
  let stack=[];
  let bracketOpen;
  let result= true;
  arrStr.forEach(item=>{
    for (let i=0; i<bracketsConfig.length; i++){
      if (item==bracketsConfig[i][1]){
        bracketOpen = stack.pop();
          if (bracketOpen !== bracketsConfig[i][0]) {
            if (item == bracketsConfig[i][0]) {
              if  (bracketOpen) {stack.push(bracketOpen)};
              
            }else {
              result=false;
            }
                       
          } else {
            return;
          }
  
        } 
       
    }

    for (let i=0; i<bracketsConfig.length; i++){
        if (item==bracketsConfig[i][0]){
          stack.push(item);
          
        } 
    } 
     
  })
  if (stack.length !==0){
      return false;
    }
    return result;

}
