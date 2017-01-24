firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    $(".login-cover").hide();
     
     var dialog = document.querySelector('#loginDialog');
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    dialog.close();
  } else {
    // No user is signed in.

    $(".login-cover").show();

    var dialog = document.querySelector('#loginDialog');
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    dialog.showModal();
  }
});


/*LOGIN PROCESS*/

$("#loginBtn").click(
    function(){

        var email = $("#loginEmail").val();
        var password = $("#loginPassword").val();

    if(email != "" && password != ""){

        
        $("#loginBtn").hide();
        $("#signUpBtn").hide();
        $("#loginProgress").show();
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error){

          $("#loginError").show().text(error.message);
             
             $("#loginBtn").show();
             $("#signUpBtn").show();
            $("#loginProgress").hide();

        });
        


      }

    }
);

/*SIGNUP PROCESS*/

$("#signUpBtn").click(
    function(){

        var email = $("#loginEmail").val();
        var password = $("#loginPassword").val();

    if(email != "" && password != ""){

        $("#loginBtn").hide();
        $("#signUpBtn").hide();
        $("#loginProgress").show();
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error){

          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;

          $("#loginError").show().text(error.message);
             
             $("#loginBtn").show();
             $("#signUpBtn").show();
            $("#loginProgress").hide();

        });
        


      }

    }
);



/*LOGOUT PROCESS*/

$("#signOutBtn").click(
    function() {
        

        firebase.auth().signOut().then(function() {
        // Sign-out successful.
            $("#loginBtn").show();
            $("#signUpBtn").show();
            $("#loginProgress").hide();
            $("#loginError").hide();

          }, function(error) {
        // An error happened.
        alert(error.message);

        });



    }
);

/*Lost password*/

$("#lostPwd").click(
    function(){

         var emailAddress = $("#loginEmail").val();
         var auth = firebase.auth();

           auth.sendPasswordResetEmail(emailAddress).then(function() {
               // Email sent.
               $("#loginBtn").show();
               $("#signUpBtn").hide();
               $("#lostPwd").hide();
               alert('Email Sent Sucessfully.');
              }, function(error) {
             // An error happened.
              alert(error.message);
               $("#loginProgress").hide();
            });
    }
);



/*Content End*/