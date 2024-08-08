
let emailId = prompt('Enter a valid email-id');

/*
 function validateEmail(emailId)	{
	 
if((((emailId.length)-(emailId.replace(/@/g,'').length))===1)
&& emailId.substring(0,1)!=='@'
&& emailId.substring(0,1)!==' '
&& (emailId.substring(emailId.lastIndexOf('.')+1).length>1) 
&& ((emailId.substring(emailId.lastIndexOf('@')+1).length)-(emailId.substring(emailId.lastIndexOf('@')+1).replace(/\./g,'').length)===1))
{
	alert('Valid email-id')
} else {
	alert('Invalid email-id')
}
 }	
*/

function validateAttherateInEmail(emailId)
{
if (((emailId.length)-(emailId.replace(/@/g,'').length))===1)
{
	return(emailId);
} else {
	return('Invalid email-id');
}	
}

function validateNotFirstCharacter(emailId){
if (emailId.substring(0,1)!=='@')
	{
	return(emailId);
} else {
	return('Invalid email-id');
}	
}

function validateEmptySpace(emailId){
if (emailId.substring(0,1)!==' ')
	{
	return(emailId)
} else {
	return('Invalid email-id')
}	
}


function validateCharactersAfterDot(emailId){
	if(emailId.substring(emailId.lastIndexOf('.')+1).length>1) 
		{
	return(emailId)
} else {
	return('Invalid email-id')
}	
}


function validateOnlyOneDot(emailId){
if(((emailId.substring(emailId.lastIndexOf('@')+1).length)-(emailId.substring(emailId.lastIndexOf('@')+1).replace(/\./g,'').length))===1)
	{
	return(emailId)
} else {
	return('Invalid email-id')
}	
}


alert (validateNotFirstCharacter(validateAttherateInEmail(emailId)))//(emailId).validateEmptySpace(emailId).validateCharactersAfterDot(emailId).validateOnlyOneDot(emailId))