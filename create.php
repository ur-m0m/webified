<?php 
if(isset($_COOKIE["webifiedusr1"])){echo "<body style='background-color:rgba(0,0,0,.8);'></body><div style='text-align:center;background-color:white;width:40%;position:absolute; left:30%; height:auto; border-radius:3px;box-shadow:0 0 10px; z-index:99;><p class='modal-content'><span class='modal-title'>Webified</span><br><span class='modal-heading'>No more Editings Allowed</span><br>You already have five pages more to finish editing. Please finish any one of them and try again..<br><br><br><br><br><span id=ok onclick=func() style='border:1px solid grey;border-radius:2px;width:30%;position:absolute; bottom:5%;padding:1px; margin:10px;left:35%; height: 15%; background-color:#5d5d5d; color:white;display:block;'>OK<br></p></div>" ;}
else{
for($i=5; $i>0; $i--){
if(!isset($_COOKIE["webifiedusr".$i])){
$name=$_POST['thename'];
	 if(!ctype_alnum( $name)){ 
	 	echo "<body style='background-color:rgba(0,0,0,.8);'></body><div style='text-align:center;background-color:white;width:40%;position:absolute; left:30%; height:auto; border-radius:3px;box-shadow:0 0 10px; z-index:99;><p class='modal-content'><span class='modal-title'>Webified</span><br><span class='modal-heading'>Name not Allowed</span><br>We prefer alphanumeric names with no spaces..<br><br><br><br><br><span id=ok onclick=func() style='border:1px solid grey;border-radius:2px;width:30%;position:absolute; bottom:5%;padding:1px; margin:10px;left:35%; height: 15%; background-color:#5d5d5d; color:white;display:block;'>OK<br></p></div>" ;}
	else{$txt=$_POST['thename'].'.php';
		if($txt=="del.php"||$txt=="finalpost.php"||$txt=="editor1.php"||$txt=="create.php"){echo "<body style='background-color:rgba(0,0,0,.8);'></body><div style='text-align:center;background-color:white;width:40%;position:absolute; left:30%; height:auto; border-radius:3px;box-shadow:0 0 10px; z-index:99;><p class='modal-content'><span class='modal-title'>Webified</span><br><span class='modal-heading'>Name not Allowed</span><br><br>We have reserved a few names for our system files.<br><br><br><br><br><span id=ok onclick=func() style='border:1px solid grey;border-radius:2px;width:30%;position:absolute; bottom:5%;padding:1px; margin:10px;left:35%; height: 15%; background-color:#5d5d5d; color:white;display:block;'>OK<br></p></div>"; }
		else{if(file_exists($txt)){echo "<body style='background-color:rgba(0,0,0,.8);'></body><div style='text-align:center;background-color:white;width:40%;position:absolute; left:30%; height:auto; border-radius:3px;box-shadow:0 0 10px; z-index:99;><p class='modal-content'><span class='modal-title'>Webified</span><br><span class='modal-heading'>Name not Allowed</span><br><br>This name is already taken. Please choose another name.<br><br><br><br><br><span onclick=func() id=ok style='border:1px solid grey;border-radius:2px;width:30%;position:absolute; bottom:5%;padding:1px; margin:10px;left:35%; height: 15%; background-color:#5d5d5d; color:white;display:block;'>OK<br></p></div>";}
			else{ $file=fopen($txt,"w");
			$cont=file_get_contents("editor1.php", true);
			fwrite($file, $cont);
			fclose($file);
			setcookie("webifiedusr".$i, $txt,time()+86400,"/");
			$_COOKIE["webifiedusr".$i]=$txt;
			echo "<meta http-equiv='refresh' content='0; url=$txt'/>";
			break;
			if(!(isset($_COOKIE[webifiedusr.$i]))){echo "<body style='background-color:rgba(0,0,0,.8);'></body><div style='text-align:center;background-color:white;width:40%;position:absolute; left:30%; height:auto; border-radius:3px;box-shadow:0 0 10px; z-index:99;><p class='modal-content'><span class='modal-title'>Webified</span><br><span class='modal-heading'>Please enable Cookies</span><br><br>Cookies are for your better experience and safety.<br><br><br><br><br><span onclick=func() id=ok style='border:1px solid grey;border-radius:2px;width:30%;position:absolute; bottom:5%;padding:1px; margin:10px;left:35%; height: 15%; background-color:#5d5d5d; color:white;display:block;'>OK<br></p></div>";}
			}
			}
	}
	}}}
?>

<script> function func(){location.href="/start.html";}</script>

<link rel="stylesheet" href="style.css">

