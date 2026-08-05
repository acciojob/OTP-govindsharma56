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

            // Agar current input me value hai to usko clear karo
            if (inputs[i].value !== "") {
                inputs[i].value = "";
                return;
            }
                 let j = i - 1;

            while (j >= 0 && inputs[j].value === "") {
                j--;
            }
			    if (j >= 0) {
                inputs[j].value = "";
                inputs[j].focus();
            }
	   })
}

