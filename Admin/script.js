var myCookie = Cookies.get('Verifide');
if(myCookie==='admin'){
    function sus() {
  Cookies.set('Verifide', 'admin', { expires: 0.01 })  
      };
}
else{
  Cookies.set('Verifide', 'close', { expires: 0.2});
  var a = document.getElementById("a");
  a.style.display = "none";
 this.close(); 
}

window.addEventListener("beforeunload", function(event) {
  Cookies.set('Verifide', 'close', { expires: 0.2});
}); 
let URL;
  function sus(URL){
    window.location.href = URL;
  }
