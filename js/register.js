
var number;

var name = '';



function registerfirstvalid()
{
  name = $('#name').val();
email = $('#email').val();
password1 = $('#password').val();
 password2 = $('#confirm').val();
  number = $('#phonenumber').val();
  dob=$('#dob').val();
  age=$('#age').val();
  address=$('#address').val();

  console.log("hello");
 

  console.log(name,email,password1,number);


  $.getJSON('users.json', function(data) {

    console.log("entered user");
    var addData = {
      [name]: {
        "name": name,
        "email": email,
        "pwd": password1,
        "number":number,
        "dob":dob,
        "age":age,
        "address":address,
      }
    };
    $.extend(true, data, addData);

    console.log('GET COMPLETE', addData, data);

    var newData = JSON.stringify(data);
  
    jQuery.post('php/signup.php', {
        newData: newData
   });
    console.log('SAVE COMPLETE');
  });
   

  dataBaseins();
}


function dataBaseins()
{
  console.log("datavase");
console.log(password1);
  var dataString='&name=' +name+ '&email=' +email+ '&password='+password1+ '&age='+age+ '&dob=' +dob+ '&address='+address+ '&phonenumber='+number;
      $.ajax({
         
          type:'POST',
          url:'php/register1.php',
          data:dataString,
          cache:false,
          success:function(result){
            console.log("successssss");
            window.location="login.html";

          }
      

      });
  
}

function SubmitForm()
{
  name = '';
  $("form[name='registratio']").validate({
    rules: {
      name: "required",
      
      phonenumber: {
        required: true,
        minlength: 10,
        maxlength: 10
      },
      email: {
        required: true,
        email: true
      },
      pwd1:{
        minlength: 5,
        required :true
      },
      pwd2: {
        minlength: 5,
        required: true,
        equalTo:pwd1
      },
      
    },

    messages: {
      name1: "Please enter Name",

      phonenumber: {
        required: "Please provide a number",
        minlength: "Mobile Number Should be 10-digit",
        maxlength:"Mobile Number Should not exceed 10-digit"
      },
        email: {
            required : "Enter Mail",
            required: "Enter Complete address"
        },
        pwd1: {
          minlength: "Passwords must be atleast 5 characters long",
          required: "Password is Required"
        },
        pwd2:{
            required: "Password is Required",
           equalTo: "Passwords doesn't match",
           minlength: "Passwords must be atleast 5 characters long"
        }
     },
    submitHandler: function(form) {
          registerfirstvalid();
        }});
      return false;
}


function loginValid() {

  console.log("login valid");

  var email = $('#InputEmail1').val();
  var pass = $('#InputPassword1').val();
  var flag = 0;

  $('#loginerror').html(" ");
  $.getJSON('users.JSON', function(data) {

      try{
            $.each( data, function( index, details)
            {
              if(data[index].email == email && data[index].pwd == pass)
              {
                console.log("Success");
                flag = 1;
              }
            });

            if(flag == 1)
            {
              console.log("Sucess");
              window.location="mainpage.html"
           
            }

            if(flag == 0){
              alert("login error");
              $('#loginerror').html("Invalid Username/Password");
              console.log("failure");
            }
            
           
      }
      catch (e){

      }
  });
  

}


function find()
{
  var email = $('#InputEmail1').val();
  return email;

}

