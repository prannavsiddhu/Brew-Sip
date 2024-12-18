function validation()
{
    var user=document.form.email.value;
    var pass=document.form.password.value;
    if(user=="")
        {
            alert("Username can't be blank!");
            return false;
        }
    else  if(pass==""){
        alert("Password can't be blank!")
        return false;
    }
    else{
    confirm("confirm login?")
    }
}