<?php 
if (empty($_POST['thename'])){ 
	echo "<script> alert('Type something -_-');</script><meta http-equiv=refresh content='0; url=start.html'/>";
	}
else{$name=$_POST['thename'];
	 if(!ctype_alnum( $name)){ 
	 	echo "<script> alert('Only Alphnumeric Entries wihout Spaces Plzz ');</script><meta http-equiv=refresh content='0; url=start.html'/>" ;}
	else{$txt=$_POST['thename'].'.php';
		$file=fopen($txt,"w");
		$cont=file_get_contents("editor1.php", true);
		fwrite($file, $cont);
		fclose($file);
		setcookie("webifiedusr", $txt,time()+86400,"/");
		$_COOKIE[webifiedusr]=$txt;
		echo "<meta http-equiv='refresh' content='0; url=$txt'/>";
	}
}
?>
	
