<?php 
if (empty($_POST['thename'])){ 
	echo "<script> alert('Type something -_-');</script><meta http-equiv=refresh content='0; url=start.html'/>";
	}
else{$name=$_POST['thename'];
	 if(!ctype_alnum( $name)){ 
	 	echo "<script> alert('Only Alphnumeric Entries Plzz ');</script><meta http-equiv=refresh content='0; url=start.html'/>" ;}
	else{$txt=$_POST['thename'].'.html';
		$yo = fopen("$txt", "a+");
		$cont=file_get_contents('index.html', true );
		fwrite($yo, $cont);
		fclose($yo);
		echo "<meta http-equiv='refresh' content='1; url=editor.html' />";
	}
}
?>



