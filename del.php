<?php
if(isset($_COOKIE[webifiedusr])){
unlink($_COOKIE[webifiedusr]);
setcookie("webifiedusr", "",time()-1,"/");
echo "<meta http-equiv='refresh' content='0; url=/'/>";}
else echo "<meta http-equiv='refresh' content='0; url=/denied.html'/>";
?>

