
function openNav(){
  document.getElementById("mySidenav").style.width="250px";
  document.getElementById("main").style.marginLeft="250px";
}
function closeNav(){
  document.getElementById("mySidenav").style.width="0";
  document.getElementById("main").style.marginLeft="0";
}
function openBasic(){
  document.getElementById("basic").style.display="block";
  document.getElementById("setting").style.display="none";
  document.getElementById("adview").style.display="none";
  document.getElementById("recharge").style.display="none";
}

function openSetting(){
  document.getElementById("basic").style.display="none";
  document.getElementById("setting").style.display="block";
  document.getElementById("adview").style.display="none";
  document.getElementById("recharge").style.display="none";
}


function openAdview(){
  document.getElementById("basic").style.display="none";
  document.getElementById("setting").style.display="none";
  document.getElementById("adview").style.display="block";
  document.getElementById("recharge").style.display="none";
}


function openRecharge(){
  document.getElementById("basic").style.display="none";
  document.getElementById("setting").style.display="none";
  document.getElementById("adview").style.display="none";
  document.getElementById("recharge").style.display="block";
}
