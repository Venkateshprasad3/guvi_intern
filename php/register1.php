<?php
$connection=mysqli_connect("localhost","root","")
mysqli_select_db($connection,'guvi');
$name=$_POST['name'];
$password=$_POST['password'];
$email=$_POST['email'];
$age=$_POST['age'];
$dob=$_POST['dob'];
$address=$_POST['address'];
$phonenumber=$_POST['phonenumber'];

console.log(age);

$s="INSERT INTO  guvi_register(name1,email,password1,dob,age,phonenumber,address1) values($name,$email,$password,$dob,$age,$address,$phonenumber)";

//$s="INSERT INTO  guvi_register(name1,email,password1,dob,age,phonenumber,address1) values("venkatesh","venkateshprasad310@gmail.com","raghav","1999/03/03",20,999999999,"jkaskjahks")";
$result=mysqli_query($connection,$s);

mysqli_close($connection);
?>