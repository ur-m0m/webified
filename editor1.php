<!DOCTYPE html>
<html lang="en-us">

<head>
<?php 
if((("/".$_COOKIE["webifiedusr5"])!=$_SERVER['REQUEST_URI'])){if((("/".$_COOKIE["webifiedusr4"])!=$_SERVER['REQUEST_URI'])){if((("/".$_COOKIE["webifiedusr3"])!=$_SERVER['REQUEST_URI'])){if((("/".$_COOKIE["webifiedusr2"])!=$_SERVER['REQUEST_URI'])){if((("/".$_COOKIE["webifiedusr1"])!=$_SERVER['REQUEST_URI']))echo '<meta http-equiv=refresh content="0; url=denied.html" />';}}}}

 ?>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<link rel="stylesheet" href="style-editor.css" type="text/css"/>
<title> Editor for Your Site</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
<link rel="stylesheet" href="http://code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
<script src="http://code.jquery.com/jquery-1.10.2.js"></script>
<script src="http://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
<script type="text/javascript" src="editor-js.js"></script>
<script type="text/javascript" src="editor.js"></script>
<link rel="stylesheet" href="animate.css">
<link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
</head>


<body id="body">
<div id="modal" style="display:none; position:fixed; left:30%; top:35%; width:40%; height:30%;z-index:10000"></div>
<div class="container-fluid">

	<div class="row pagebar">
	<div class="col-lg-4 page_information" >PageEditor</div>
	<div class="col-lg-4 tools">Tools</div>
	<div class="col-lg-2" ><button type="button" onclick="preView()" class="btn btn-primary preview">Preview</button></div>
	
<form id="hidform" method="post" action="finalpost.php">
	<input type="hidden" name=file id=success value="">
	<?php echo "<input type='hidden' name=add id=address value='$_SERVER[REQUEST_URI]'>"?>
	</form>
	<button class="btn btn-success save" onclick="modalBox()">Save </button>
	<button type="button" class="btn btn-primary cancel" onclick="del()" style="background-color:#ff3333;">Cancel</button>
	<form id="hidform1" method="post" action="del.php">
	<?php echo "<input type='hidden' name=add id=address1 value='$_SERVER[REQUEST_URI]'>"?>
	</form>
	<button style="positon:absolute; margin-left: 50px;margin-bottom: 30px;background-color:#ff8000;border: 2px solid #ff8000;" onclick="info();" class="btn btn-success"> Info </button>
	</div>
	
	<div class="row header">
	<div class="col-lg-12 text_header">Header</div>
	</div>
	<div class="row page">
		<div class="row">
		
			
			<div class="col-lg-1 dropdown"style="z-index:10000;">
				<button class="dropbtn">ADD</button>
		    	<div class="dropdown-content">
<div class="background-option">
			    		<a href="#">Background</a>
			    			<div class="dropdown-content-subcontent-background">
			    				<div style="height:0px;overflow:hidden;"><input type="color" value="#FFFFFF" id="bg"></div><a href="#" class="bgcolor">Background Color</a>
			    				<div style="height:0px;overflow:hidden;"><input type="file" id="fileinput1"></div><a href="#" id="bgimage"><i class="fa fa-upload"></i>Upload and set an image</a>
			    				<a href="#" id="urlbgimage"><span class="fa fa-link"></span>Paste a URL</a>
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
			    			<div style="height:0px;overflow:hidden;"><input type="file" id="fileinput2" multiple="true"></div> 
			    				<a href="#" id="imgupload"><i class="fa fa-upload"></i>Upload an image</a>
			    				<a href="#" id="urlimage2submit"><span class="fa fa-link"></span>Enter URL</a>
			    			</div>
		    		</div>
		    		<div class="video-option">
			    		<a href="#">Video</a>
			    			<div class="dropdown-content-subcontent-video">
			    				<a href="#" id="youtube"><i class="fa fa-youtube-play" style="color:red;"></i>Youtube Video</span></a>
			    				<a href="#" id="fb-video"><i class="fa fa-facebook-f fa-2x"></i>acebook video</a>
			    			</div>
		    		</div>
		    		<div class="button-option">
			    		<a href="#">Buttons</a>
			    			<div class="dropdown-content-subcontent-button">
			    				<a href="#">Liiiiiink 2</a>
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
			    		<a href="#">Icons</a>
			    			<div class="dropdown-content-subcontent-strip">
			    				<a href="#" class="add_fa_for_social">Add an icon</a>
			    			</div>
		    		</div>
		    		<div class="box-option">
			    		<a href="#">Box</a>
			    			<div class="dropdown-content-subcontent-box">
			    				<a href="#" class="Rectangular-Box"> Rectangular Box</a>
			    				
			    			</div>
		    		</div>

		  		</div>

			</div>

			<div class="col-lg-11 text_page">Page
			</div>
		</div>

	</div>

	<div class="row footer">
	<div class="col-lg-12 text_footer">Footer</i></div>
	</div>
	<hr>
</div>



<!--Starts here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
<div class="modal-input-for-bg-sizes" title="Size the background image">
	<p>Type in x and y,for the size of background image would be x% of total width and y% of total height</p>
	<form>
	<fieldset>
		<label>X%</label>
		<input type="number" min="0" max="100" placeholder="ex: 50" class="x-input-for-bg-size" style="width:90%;">
		<br>
		<label>Y%</label>
		<input type="number" min="0" max="100" placeholder="ex: 50" class="y-input-for-bg-size" style="width:90%;">	
		<input type="submit" style="display:none">	
	</fieldset>
	</form>
</div>

<div class="modal-input-for-bg-pos" title="Position the background image">
	<p>Type in x and y,for the position of background-image would be x% from left and y% from top.</p>
	<form>
	<fieldset>
		<label>% from left</label>
		<input type="number" min="0" max="100" placeholder="ex: 50" class="x-input-for-bg-pos" style="width:90%;">
		<br>
		<label>% from top</label>
		<input type="number" min="0" max="100" placeholder="ex: 50" class="y-input-for-bg-pos" style="width:90%;">	
		<input type="submit" style="display:none">	
	</fieldset>
	</form>
</div>

<div class="modal-input-for-bgimage" title="URL of Background image">
	<form>
	<label>URL</label>
	<input type="url" class="url-input-for-bg-image" style="width:90%;">
	<input type="submit" style="display:none">
	</form>
</div>

<div class="modal-input-for-generalimage" title="Enter the URL of image">
	<form>
	<label>URL</label>
	<input type="url" class="url-input-for-general-image" style="width:90%;">
	<input type="submit" style="display:none;">
	</form>
</div>

<div class="modal-input-for-youtube" title="Enter the URL of video">
	<form>
	<label>URL</label>
	<input type="url" class="url-input-for-youtube" style="width:90%;">
	<input type="submit" style="display:none;">
	</form>
</div>

<div class="modal-input-for-fb" title="Enter the Embed code of video">
	<form>
	<label>Embed code</label>
	<input type="text" class="url-input-for-fb" style="width:90%;">
	<input type="submit" style="display:none;">
	</form>
</div>

<div class="modal_inputs_for_hyper" title="Set image as a hyperlink">
	<form>
	<label>URL</label><br>
	<input type="url" placeholder="type URL" class="url-for-hyperimage" style="width:90%;"><br><br><br><br>
	<label>Open in</label><br>
	<input type="radio" name="target" value="_blank" checked>New window<br>
	<input type="radio" name="target" value="_self">Same window
	<input type="submit" style="display:none;">
	</form>
</div>

<div class="modal_input_for_icon" title="Add an icon">
<form>
<input type="radio" value="fa" class="" name="type_of_icon" checked>Font Awesome<br>
<input type="text" class="text_for_fa" placeholder="ex:fa fa-car" style="width:90%;"><br>
<input type="radio" value="material" class="" name="type_of_icon">Google Material Icon<br>
<input type="text" class="text_for_mi" placeholder="ex:cloud" style="width:90%;display:none;"><br>
<input type="submit" style="display:none;">
</form>
</div>

<div class="modal_input_for_snc_icon" title="Size and Color of Icon">
<p>Initial size was 30px and color was black</p>
<form>
<label>Size in pixels</label><br><br>
<input type="number" min="0" style="width:90%;" placeholder="ex:30  Enter only the number" class="size_for_icon"><br><br>
<label>Color of the icon</label><br><br>
<input type="color" value="#000000" class="color_for_icon">
<input type="submit" style="display:none;">
</form>
</div>

<div class="modal_inputs_for_icon_hyper" title="Set icon as a hyperlink">
	<form>
	<label>URL</label><br>
	<input type="url" placeholder="type URL" class="url-for-hypericon" style="width:90%;"><br><br>
	<label>Open in</label><br>
	<input type="radio" name="target_icon" value="_blank" checked>New window<br>
	<input type="radio" name="target_icon" value="_self">Same window
	<input type="submit" style="display:none;">
	</form>
</div>
<bodypre></bodypre>
</body>

</html>


