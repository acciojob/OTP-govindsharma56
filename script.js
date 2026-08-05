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
   if (inputs[i].value !== "") {
                inputs[i].value = "";
                return;
            }

            // Current field is empty
            if (i > 0) {
                inputs[i - 1].value = "";
                inputs[i - 1].focus();
            } 
            else {
                // First field
                inputs[i].focus();
            }
	   })
}

