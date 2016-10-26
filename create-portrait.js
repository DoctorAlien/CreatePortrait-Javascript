function createPortrait(id,username,width,height,fontSize){
	wordLocate=getRandomNum(0,username.length-1);
	firstWord=username.charAt(wordLocate).toUpperCase();
	style="background-color:"+createColor()+";";
	style+="color:#ffffff;";
	style+="width:"+width+"px;";
	style+="height:"+height+"px;";
	style+="line-height:"+height+"px;";
	style+="text-align:center;";
	style+="font-size:"+fontSize+"px;";
	style+="border-radius:100px";;
	var obj=document.getElementById(id);
	obj.innerHTML=firstWord;
	obj.setAttribute("style",style);
	return firstWord; 
}
function getRandomNum(min,max){
	range=max-min;
	rand=Math.random();
	return Math.round(rand*range);
}
function createColor(){
	color="#";
	colorArray=new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f");
	for(i=0;i<6;i++){
		color+=colorArray[getRandomNum(0,15)];
	}
	return color;
}