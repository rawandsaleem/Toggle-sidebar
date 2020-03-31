 
function side (){
	var getsideBar = document.getElementsByClassName("sideBar");
	
	if (getsideBar[0].style.height== "661px") {
		//opening the sideBar
		side2();

	}
	else{
		//closing the sideBar
		side1();
	}

	function side1() {
		
		var getsideBarElement = document.querySelectorAll(".sideBar ul li");
		
			for (var i = 0; i < getsideBarElement.length; i++) {
				getsideBarElement[i].style.opacity= 1;
				getsideBarElement[i].style.transition= " opacity 1s";
			}
			getsideBar[0].style.height= "661px";
			getsideBar[0].style.boxShadow= "0px 0px 10px #232931";
			
			getsideBar[0].style.backgroundColor= "#F1F1F1";
	
	}

	function side2() {	
		
		var getsideBarElement = document.querySelectorAll(".sideBar ul li");
		
			for (var i = 0; i < getsideBarElement.length; i++) {
				getsideBarElement[i].style.opacity= 0;
				getsideBarElement[i].style.transition= " opacity 0.2s";
			}
			console.log(getsideBarElement);
			getsideBar[0].style.height= "60px";
			getsideBar[0].style.boxShadow= "none";
			
			
	}
}
	