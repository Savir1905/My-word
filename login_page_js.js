document.getElementById("Form-Login").addEventListener("submit",function(event) {
	event.preventDefault();
	const username=document.getElementById("Username").value;
	const password=document.getElementById("password").value;
	const message=document.getElementById("Message");
	if(username.trim()===" " || password.trim()===" ")
		message.InnerHtml="Feilds cannot be Empty";
	else if(username.trim()==="Savir"&&password.trim()==="Sisir")
		message.textContent="Login succesful";
	else
		message.textContent="Login Failed";
});