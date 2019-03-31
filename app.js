function openNav() {
    document.getElementById("myNav").style.width = "100%";
    
  }
  
  function closeNavAbt() {
    document.getElementById("myNav").style.width = "0%";
    window.setTimeout(function(){
      window.location.href ="about.html";
    }, 500)
  }
  function closeNavWrk() {
    document.getElementById("myNav").style.width = "0%";
    window.setTimeout(function(){
      window.location.href ="work.html";
    }, 500)
  }
  function closeNavCnt() {
    document.getElementById("myNav").style.width = "0%";
    window.setTimeout(function(){
      window.location.href ="contact.html";
    }, 500)
  }

