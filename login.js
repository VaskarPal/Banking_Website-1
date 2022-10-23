function validation(){
  var user=document.getElementById('user').value;
  if(user == "")
  {
    document.getElementById('username').innerHTML="please fill the username";
    return false;
  }
  var user=document.getElementById('user').value;
  if(user == "")
  {
    document.getElementById('username').innerHTML="please fill the email id";
    return false;
  }
  var user=document.getElementById('user').value;
  if(user == "")
  {
    document.getElementById('username').innerHTML="please fill the accountno";
    return false;
  }
  var user=document.getElementById('user').value;
  if(user == "")
  {
    document.getElementById('username').innerHTML="password";
    return false;
  }
}