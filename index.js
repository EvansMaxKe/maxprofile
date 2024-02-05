function validate(){
    //to validate empty inputs
    if(document.getElementById("name").value==""){
        alert("Please Enter Your Name!");
        document.getElementById("name").focus();
        return false;
    }
    if(document.getElementById("tel").value==""){
        alert("Please Enter Your Phone Number!");
        document.getElementById("tel").focus();
        return false;
    }
    if(document.getElementById("email").value==""){
        alert("Please Enter Your Email!");
        document.getElementById("email").focus();
        return false;
    }
    if(document.getElementById("message").value==""){
        alert("Please Enter Your Text Message!");
        document.getElementById("message").focus();
        return false;
    }
    else{
        //for email format validation
        var emailId=document.getElementById("email").value;
        atpos=emailId.indexOf("@");
        dotpos=emailId.lastIndexOf(".");
        if(atpos<1 || (dotpos-atpos<2)){
            alert("please enter email with format e.g username@gmail.com");
            document.getElementById("email").focus();
            return false;
        }
        alert("Dear"+" "+document.getElementById("name").value+" "+"Thenks For Your Feedback"+" :::::: >"+"Message Received on: "+" "+new Date);
        return(true);
    }
}

 /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });