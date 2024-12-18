function validateform()
{
    var password=document.form1.pass1.value;
    var firstpassword=document.form1.pass1.value;
    var secondpassword=document.form1.pass2.value;
    if(firstpassword!=secondpassword)
    {
        alert("password must be same!");
        return false;
    }
    else if(password.length<6)
    {
        alert("Password must be at least 6 characters long.");
        return false;
    }
    else
    {
        confirm("Are the informations correct?");
    }
}