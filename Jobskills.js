function CheckInput(form){
    var message;
    var i=0;
    if (form.checkValidity()){
        message="You are hired we need a website overhaul.Have it done by Saturday midnight.We are going live on Sunday.";}
        else
        {message="Sorry we can't hire you!.You are deficient in the following areas:";jobskillsCBS=form.elements["jobskills"]
        while(i<jobskillsCBS.length){
            if(!jobskillsCBS[i].checkValidity()){
                message+="<br>" + jobskillsCBS[i].value;
            }
            i++;
        }
    }
    document.getElementById("message").innerHTML=message;
}