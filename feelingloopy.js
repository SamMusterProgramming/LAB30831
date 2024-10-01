
//Part 3: Feeling Loopy , yes I am feeling loopy but I like it 
// who loves honey, will never complain about being stung by bees lol 

const CVSFILE = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
const title = true;
let text= "";
let fileLength = CVSFILE.length-1;
let count =0;
for(let c of CVSFILE ){
      //we run the text to line break \n
        if( c !== "\n" && count < fileLength){
            text = text + c;
        } else {
       // now we have out text , we need to strip off the comas 
       //, from the text  and add space instead 
          if(count == fileLength)  {text = text +c}
          let rawText= "|";  
          let word = "";
          for(let ch of text){
               if(ch == ",") {
                // here we need to remove the coma and add a little trick 
                //to align column equally
                for(let j = 1;j < 25-word.length;j++){
                    rawText= rawText + ` `
                }
                rawText = rawText + "|"
                word = "";
               }else {
                rawText = rawText + ch
                word = word + ch;
               }     
          }
          console.log('--------------------------------------------------------------------------------')
          console.log(rawText + `|`) 
          //we initialize the text to empty string "" for another iteration
          text= "";
        }
    count ++;
}
