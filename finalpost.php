<?php
if(isset($_COOKIE[webifiedusr])){
$file=fopen($_COOKIE[webifiedusr],"w");
$html= $_POST['file'];
$str1= substr("$html", 4820);
$str2= str_replace("tRuE", "false", "$str1");
$str3="<html>". $str2."</html>";
$str4=str_replace("move;", "auto;", "$str3");
$str5=str_replace("bodypre", "body", "$str4");
fwrite($file, $str5);
fclose($file);
$str1= "";
unset($str2);
$str2= "";
unset($str3);
$str3= "";
unset($html);
$html=$_COOKIE[webifiedusr];
setcookie("webifiedusr", "", time()-1, "/");
echo "<meta http-equiv='refresh' content='0; url=$html'/>";}
else echo "<meta http-equiv='refresh' content='0; url=/denied.html'/>";
?>



