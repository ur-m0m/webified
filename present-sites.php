<!DOCTYPE html>
<html lang="en-US">
<head>

<link rel="stylesheet" href="style.css" type="text/css" />
<title>
Webified
</title>
<style>a:hover{background-color:#f2f2f2;
color:white;
box-shadow:0 0 5px;}</style>
<body>
<a id="t" href="index.html"><h1 title="Click for Home">Webified</h1></a>
<pre id="h4"> <h4 >    - The Simplified Web </h4></pre>
<br>
<div class="menu">
<a class="menu" href="about-us.html" target="_top"><div class=l>About Us</div></a>
<a class="menu" href="present-sites.php" id="p" target="_top"><div class=l>See Existing Sites</div></a>
<a class="menu" href="start.html" target="_top"><div class=l>Get Started>></div></a> 
</div>
<hr>
<p>
<?php 
$j=0;
foreach(glob("*.php")as $file){
if (($file!="editor1.php")&&($file!="create.php")&&($file!="finalpost.php")&&($file!="present-sites.php")&&($file!="del.php")){
$j++;
$files[$j]=$file;
}
}
$k= $j+1;
if($j==1)echo " We currently have 1 site..<br><br>";
else echo " We currently have $j sites..<br><br>";
$lines = file($myFile);
for($i=1; $i<$k; $i++){echo "<a href=$files[$i] target=_blank style='border-radius:9px;padding:1.5%; height:3%;width:60%; position:absolute; left:20%; display:inline-block;color:black;'>$files[$i]</a><br><br><br>";}
?></p>
</body>
</html>
