window.onload = loginLoad;

const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);
const Nick = urlParams.get ("username");
const Nack = urlParams.get ("password");

console.log(Nick);
console.log(Nack);
function loginLoad(){
	const loginForm = document.getElementById("myLogin");
loginForm.onsubmit = checkLogin;
	
}

function checkLogin(){
	var A = document.getElementById ("username").value;
	var B = document.getElementById ("password").value;

	console.log(A);
	console.log(B);

	if (A==Nick&&B==Nack){
	alert("login success");
	}
	else if(A!=Nick||B!=Nack){
		alert("wrong username or password");
	return false;
	}
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
}

			