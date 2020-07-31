var $ = x => document.getElementById(x)
var menu = $("menu-icon")
menu.addEventListener("click", openClose, false);
menuLine = menu.innerHTML
function openClose() {
  if (menu.innerHTML == menuLine) {
    $("content").style.display = "flex";
    menu.innerHTML = "<i class='fa fa-close' style='font-size:30px;color:var(--blue)'></span>"
  }
  else {
    $("content").style.display = "none";
    menu.innerHTML = menuLine;
  }
}

var preList = ["Experienced In Saving You Money.",
	"Helping You Get More For Your Real Estate.",
	"Your Dream Home Awaits.",
	"Where would you rather live?",
	"Going Above and Beyond To Find Your Next Home.",
	"Your Concern Is Our Priority",
	"We’ll Find Your Ideal Home.",
	"Dedicated to results.",
	"Creating real value in property and places.",
	"Coming soon to a closing near you!",
	"Don’t buy from us unless you are ready for success"
	]
window.addEventListener("load", start, false);
function start() {
	imgg()
    curr = 0
	$('pre').innerHTML = "<span>" + preList[curr] +"</span";
	window.setInterval(function() {
	  opaque = 1
	  idd = setInterval(function() {
	    if (opaque < 0.2) {
	      curr = (curr + 1)%9
	      clearInterval(idd);
	      $('pre').innerText = preList[curr];
	      iddd = setInterval(function() {
	        if (opaque > 0.9) {
    	      clearInterval(iddd)
	        }
	        else {
	          opaque += 0.05;
	          $('pre').style.opacity = String(opaque);
	        }
	      },200)
	    }
	    else {
	      opaque -= 0.05;
	      $('pre').style.opacity = String(opaque);
	    }
	  },200)
	}, 7000)
}
function imgg() {
  imagess = ["f1.jpg", "f2.jpg", "f3.jpg","f4.jpg", "f5.jpg","f6.jpg","f7.jpg","f8.jpg"]
  imgSlide = document.getElementById("imgSlide")
  dot = document.getElementsByClassName("dot")
  for (i = 0; i < 8; i++) {
    dot[i].id = "";
  } 
  imgSlide.setAttribute("src", imagess[indexx]);
  dot[indexx].id = "active";
}
var indexx = 0
	function plus(x){
		if (indexx + x < 0){
			indexx = 7
			}
		else if (indexx + x > 7){
			indexx = 0
			}
		else{
			indexx += x
		}
		imgg()
		}
	function currentSlide(x){
		indexx = x
		imgg()
		}
	imgId = setInterval(plus, 5000, 1);

markup = ""
locations = [
				"Sangotedo",
				"Abijo GRA",
				"Eleko",
				"Ode Omi Ibeju-Lekki GRA",
				"Oju Agbe Village, Ibeju-Lekki Town",
				"Owerri",
				"Amaoji Nkwubor Nike",
				"Epe",
				"Ota",
				"Moniya Ibadan",
				"Asaba",
				"Umuwuagu Village, via Azagba, Delta",
				"36B Freedom Way Lekki Phase One, Lagos",
				"",
				"",
				"Atan-Ota",
				"Abijo-GRA",
				"Ikorodu",
				"Osisioma, Aba, Abia State",
				"Onosa town, Ibeju Lekki",
				"23A Sura Mogaji Street off Coker Road",
				"Oronedu Town, Ibeju-Lekki",
				"",
				"",
				"Okun Ilado town, Ibeju town",
				"Ibeju Agbe town, Ibeju-Lekki",
				"Ibeju Agbe town, Ibeju-Lekki",
				""
			]
for (var i=0; i<=35; ++i) {
  markup += "<div><img src='" + i + ".jpg'>" +
  				"<div class='texts'>"+
  				"<p><i class='fa fa-map-marker'></i> " + (locations[i]?locations[i]:"") + " <p>" +
  				"</div>" +
  			"</div>"
}
$('promo').innerHTML = markup;
