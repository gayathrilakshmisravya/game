var randomNumber=Math.floor(Math.random()*100)+1;
  var attempts=0;
document.getElementById("guessbtn").addEventListener('click',function() {
	var guess=parseInt(document.getElementById("guessInput").value)
	attempts++;
	if(guess===randomNumber){
		displaymsg("congrulations! you guessed the number in " + attempts +"attempt")
		document getElementById("guessbtn").disabled=true;
}
else if(guess<randomNumber){
	displaymsg("To low try a high number ".);
}
else{
	displaymsg("To high! try a lower number".)
}
});
function displaymsg(K){

	document.getElementById("msg").textContent=K;
}