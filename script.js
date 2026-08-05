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
               if (i === 0) {
                inputs[i].value = "";
                inputs[i].focus();
                return;
            }

            // Current field me value hai
            if (inputs[i].value !== "") {
                inputs[i].value = "";
                return;
            }

            // Current field empty hai -> previous par jao
            inputs[i - 1].focus();
            }

            // warna previous field par jao
            inputs[i - 1].focus();
            

	   })
}

