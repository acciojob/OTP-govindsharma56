//your JS code here. If required.
let inputs=document.querySelectorAll('.code');
for(let i=0;i<inputs.length;i++){
	   inputs[i].addEventListener('input',()=>{
		    if(inputs[i].value.length==1 && i<inputs.length-1){
				  inputs[i+1].focus();
			}
	   })
}

for(let i=0;i<inputs.length;i++){
	   inputs[i].addEventListener('keydown',(e)=>{
		   if(e.key==='Backspace'){
			     e.preventDefault();
   if (index === 0) {
            input.value = "";
            input.focus();
            return;
        }

        // Baaki inputs
        input.value = "";
        inputs[index - 1].focus();
	   })
}

