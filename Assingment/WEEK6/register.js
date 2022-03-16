window.onload = pageLoad;
function pageLoad(){
	const registForm = document.getElementById("myForm");
  registForm.onsubmit = validateForm;
}

function validateForm() {
    if(document.getElementById("Surinda18").value==document.getElementById("Surinda.18").value)
    {
     document.getElementById("errormsg").innerHTML="password correct";
    }
    else{
        document.getElementById("errormsg").innerHTML="password incorrect";
        return false;
    }
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
}