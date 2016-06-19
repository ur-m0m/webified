<?php
for($i=5; $i>0;$i--){
if(("/".$_COOKIE["webifiedusr".$i])==$_POST['add']){
unlink($_COOKIE["webifiedusr".$i]);
setcookie("webifiedusr".$i, "",time()-1,"/");
echo "<meta http-equiv='refresh' content='0; url=/'/>";}
}
?>
<meta http-equiv='refresh' content='5; url=/denied.html'/>
