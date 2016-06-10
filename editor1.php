<!DOCTYPE html>
<html lang="en-us">

<head>
<?php 

if("/".$_COOKIE[webifiedusr]!=$_SERVER['REQUEST_URI']) echo '<meta http-equiv=refresh content="0; url=denied.html" />';

 ?>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<link rel="stylesheet" href="style-editor.css" type="text/css"/>
<title> Editor for Your Site</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>


<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>

<script type="text/javascript"
    src=" http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
<link rel="stylesheet" type="text/css"
    href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.1/themes/base/jquery-ui.css"/>

<script src="editor-js.js"></script>


</head>

<!--
<div class=add>
	<div class="dropdwn"><div class=dropdwn>ADD</div><br>
		<div class="dropdwn-content">
			<div class="dropdwn"><div class=dropdwn><button class=opt> TEXT</button></div>
				<div class="dropdwn-content">
					<button class=opt> IMAGES</button>
					<button class=opt> VIDEOS</button>
				</div>
			</div>
			<button class=opt> IMAGES</button>
			<button class=opt> VIDEOS</button>
		</div>
	</div>

	
</div>
<body>

</body>

</html>
-->
<body id="body">
<div class="container-fluid">

	<div class="row pagebar">
	<div class="col-lg-4 page_information" >Page</div>
	<div class="col-lg-4 tools">Tools</div>
	<div class="col-lg-2 "><button type="button" class="btn btn-primary">Preview</button></div>
	<form id="hidform" method="post" action="post.php">
	<input type="hidden" name=file id=success value="">
	
	<button class="btn btn-success" onclick="myFunction()">Save </button>
	</form>
	</div>
	<div class="row header">
	<div class="col-lg-12 text_header">Header</div>
	</div>
	<div class="row page">
		<div class="row">
		
			
			<div class="col-lg-1 dropdown">
				<button class="dropbtn">ADD</button>
		    	<div class="dropdown-content" style="z-index: 1;">

		    		<div class="background-option">
			    		<a href="#">Background</a>
			    			<div class="dropdown-content-subcontent-background">
			    				<div style="height:0px;overflow:hidden;"><input type="color" value="#FFFFFF" id="bg"></div><a href="#" class="bgcolor">Background Color</a>
			    				<div style="height:0px;overflow:hidden;"><input type="file" id="fileinput1"></div><a href="#" id="bgimage">Set an image</a>
			    			</div>
		    		</div>

		    		<div class="text-option">
			    		<a href="#">Text</a>
			    			<div class="dropdown-content-subcontent-text">
			    				<a href="#" class="text-large-heading">Large Heading</a>
			    				<a href="#" class="text-small-heading">Small Heading</a>
			    				<a href="#" class="text-large-paragraph">Large Paragraph</a>
			    				<a href="#" class="text-small-paragraph">Small Paragraph</a>
			    			</div>
		    		</div>
		    		<div class="image-option">
			    		<a href="#">Image</a>
			    			<div class="dropdown-content-subcontent-image">
			    			<div style="height:0px;overflow:hidden;"><input type="file" id="fileinput2"></div> 
			    				<a href="#" id="imgupload">Upload an image</a>
			    				<a href="#" id="urlimage2submit">Enter URL</a>
			    			</div>
		    		</div>
		    		<div class="video-option">
			    		<a href="#">Video</a>
			    			<div class="dropdown-content-subcontent-video">
			    				<a href="#" id="youtube">Youtube video</a>
			    				<a href="#" id="fb-video">Facebook video</a>
			    			</div>
		    		</div>
		    		<div class="button-option">
			    		<a href="#">Buttons</a>
			    			<div class="dropdown-content-subcontent-button">
			    				<a href="#">Liiiiiink 2</a>
			    				<a href="#">Link 3</a>
			    			</div>
		    		</div>
		    		<div class="menu-option">
			    		<a href="#">Menu</a>
			    			<div class="dropdown-content-subcontent-menu">
			    				<a href="#">Li6nk 2</a>
			    				<a href="#">Link 3</a>
			    			</div>
		    		</div>
		    		<div class="list-option">
			    		<a href="#">List</a>
			    			<div class="dropdown-content-subcontent-list">
			    				<a href="#" class="Bullet">Bullet List</a>
			    				<a href="#" class="Numbered">Numbered List</a>
			    				<a href="#" class="Disc">Disc List</a>
			    				<a href="#" class="Roman">Roman List</a>
			    				<a href="#" class="Unordered">Unordered List</a>
			    			</div>
		    		</div>
		    		
		    		<div class="strip-option">
			    		<a href="#">Strip</a>
			    			<div class="dropdown-content-subcontent-strip">
			    				<a href="#">Li9nk 2</a>
			    				<a href="#">Link 3</a>
			    			</div>
		    		</div>
		    		<div class="box-option">
			    		<a href="#">Box</a>
			    			<div class="dropdown-content-subcontent-box">
			    				<a href="#" class="Rectangular-Box">Rectangular Box</a>
			    				<a href="#">Link 3</a>
			    			</div>
		    		</div>

		  		</div>

			</div>

			<div class="col-lg-11 text_page">Page
			</div>
		</div>

	</div>

	<div class="row footer">
	<div class="col-lg-12 text_footer">Footer</div>
	</div>
</div>
<bodypre></bodypre>
</body>

</html>


