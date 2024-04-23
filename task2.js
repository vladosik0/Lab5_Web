let mediumBoldButton = document.getElementsByClassName('buttonClass')[0];
let italicsButton = document.getElementsByClassName('buttonClass')[1];
let underlinedButton = document.getElementsByClassName('buttonClass')[2];
let letterCaseButton = document.getElementsByClassName('buttonClass')[3];
let textArea = document.querySelector('textarea');
let colorInput = document.querySelector('input');
mediumBoldButton.addEventListener('click',function(){
    if(textArea.style.fontWeight=="600") {
        textArea.style.fontWeight = ""; 
    }
    else {
        textArea.style.fontWeight = "600";
    }
});
italicsButton.addEventListener('click',function(){
    if(textArea.style.fontStyle=="italic") {
        textArea.style.fontStyle = ""; 
    }
    else {
        textArea.style.fontStyle = "italic";
    }
});
underlinedButton.addEventListener('click',function(){
    if(textArea.style.textDecoration=="underline") {
        textArea.style.textDecoration = ""; 
    }
    else {
        textArea.style.textDecoration = "underline";
    }
});
colorInput.addEventListener('change',function(){
    textArea.style.color = this.value;
});
letterCaseButton.addEventListener('click',function(){
    if(textArea.value == textArea.value.toLowerCase()) {
        textArea.value = textArea.value.toUpperCase();
    }
    else {
        textArea.value = textArea.value.toLowerCase();
    }
});