<!--<?php 
$file_path=file_get_contents("2016-05-29 12:59:58.494160.txt", true);
$file=fopen($file_path,"a+");
$inp=$_POST['text_large_paragraph_text'];
file_put_contents($file, $inp, FILE_APPEND);
?>
-->

<?php
if(isset($_COOKIE[webifiedusr])){
$file=fopen($_COOKIE[webifiedusr],"w");
$html= $_POST['file'];
$str1= substr("$html", 4008);
$str2= str_replace("tRuE", "false", "$str1");
$str=file_get_contents("saved.php", true);
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
$_COOKIE[webifiedusr]="denied.html";
echo "<meta http-equiv='refresh' content='0; url=$html'/>";}
else echo "<meta http-equiv='refresh' content='0; url=/'/>";
?>

