
function changeTextToBold(){
    //alert("B");
    //var myTextArea = document.getEelementById("myTextArea");
    //myTextArea.innerHTML("aaaa");
    //document.getElementById("myTextArea").innerHTML = "Hello World";
    var myTextErea = document.getElementById("myTextArea");
    //myTextErea.innerHTML ="text changed by javaScript";
   // myTextErea.classList.add("css/style.css/bold");
   
    //console.log("btn B Clicked");
    if (!myTextErea.classList.contains('bold')){
        myTextErea.classList.add('bold');
        console.log("Class Added");
    }else{
        myTextErea.classList.remove('bold');
        console.log("Class Removed");
    }
    
}

//_______________________________
function changeStyle(action){
  console.log(action);
    var myTextErea = document.getElementById("myTextArea");
    switch (action){
        case 'b': 
                if (!myTextErea.classList.contains('bold')){
                    myTextErea.classList.add('bold');
                    console.log("Class bold Added");
                }else{
                    myTextErea.classList.remove('bold');
                    console.log("Class bold Removed");
                }
                break;
        case 'i':
                if (!myTextErea.classList.contains('italic')){
                    myTextErea.classList.add('italic');
                    console.log("Class italic Added");
                }else{
                    myTextErea.classList.remove('italic');
                    console.log("Class italic Removed");
                }
                break;
        case 'u': 
                if (!myTextErea.classList.contains('underlined')){
                    myTextErea.classList.add('underlined');
                    console.log("Class underlined Added");
                }else{
                    myTextErea.classList.remove('underlined');
                    console.log("Class underlined Removed");
                }
                break;
            }//end switch

   
    
}//end function

function changeFontSize(){
    console.log('changeFontSize');
    var x;

    var selected_options = document.querySelector("#selectFontSize").selectedOptions;

            for(var i=0; i<selected_options.length; i++) {
                // echoes the text of the option
                console.log('text  : '+selected_options[i].text);
                
                // echoes the value of the option
                console.log('value : '+selected_options[i].value);
                x = selected_options[i].value;
            }
            
    var myTextArea = document.getElementById('myTextArea');
    //myTextArea.style.fontSize = "60px";
    myTextArea.style.fontSize = x;
   // myTextArea.text = x ;
}//end Fuction changeFontSize

//________________________________________________________________________________
function chargeFontFamily(){
    console.info('chargeFontFamily');
    var myTextArea = document.getElementById('myTextArea');

    var fontFamilybySelectTag;

    var selected_options = document.querySelector("#selectFontFamily").selectedOptions;

            for(var i=0; i<selected_options.length; i++) {
                // echoes the text of the option
                console.log('text  : '+selected_options[i].text);
                
                // echoes the value of the option
                console.log('value : '+selected_options[i].value);
                fontFamilybySelectTag = selected_options[i].value;
            }
    myTextArea.style.fontFamily = fontFamilybySelectTag;
 //myTextArea.text = fontFamilybySelectTag;

}// end function chargeFontFamilly