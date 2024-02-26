<script type="text/javascript">
(function($){ 
  var dialog;
  $("#chk").change(function(){
	$(this).prop("checked", true);
  });
  $("#cnct").bind("touchmove",function(e){
     var newval=$(this).val();
     $("body").get(0).style.setProperty("--CNCT", newval);
  });
  $("#volm").bind("touchmove",function(e){
     var newval=$(this).val();
     $("body").get(0).style.setProperty("--VOLM", newval);
  });
  $("#proxy").bind("touchmove",function(e){
     var newval=$(this).val();
     $("body").get(0).style.setProperty("--PROXY", newval);
  });
  $("#isol").bind("touchmove",function(e){
     var newval=$(this).val();
     $("body").get(0).style.setProperty("--ISOL", newval);
  });
  
  $("#cnct").mousemove(function(){
     var newval=$(this).val();
     $("body").get(0).style.setProperty("--CNCT", newval);
  });
  $("#volm").mousemove(function(){
     var newval=$(this).val();
     $("body").get(0).style.setProperty("--VOLM", newval);
  });
  $("#proxy").mousemove(function(){
     var newval=$(this).val();
     $("body").get(0).style.setProperty("--PROXY", newval);
  });
  $("#isol").mousemove(function(){
     var newval=$(this).val();
     $("body").get(0).style.setProperty("--ISOL", newval);
  });

  $("input[type='reset']").on('click', function(e)
  {
   		setTimeout(function() {
        $("body").get(0).style.setProperty("--CNCT", $("#cnct").val());
        $("body").get(0).style.setProperty("--VOLM", $("#volm").val());
        $("body").get(0).style.setProperty("--PROXY", $("#proxy").val());
        $("body").get(0).style.setProperty("--ISOL", $("#isol").val());
    },1);
  });
  function drawBoard(context)
  {
	var bw = 1200;
// Box height
	var bh = 1200;
	// Padding
	var p = 10;
    for (var x = 0; x <= bw; x += 40) {
        context.moveTo(0.5 + x + p, p);
        context.lineTo(0.5 + x + p, bh + p);
    }

    for (var x = 0; x <= bh; x += 40) {
        context.moveTo(p, 0.5 + x + p);
        context.lineTo(bw + p, 0.5 + x + p);
    }
    context.strokeStyle = "gray";
    context.stroke();
  }

  function DrawText()
  {
	var canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

  canvas.width = 1200;
  canvas.height = 1200;
  drawBoard	(ctx);

  ctx.fillStyle = "#333333";
  ctx.font = '1200px Affective System';
  ctx.textBaseline = 'middle';
  var textString = "X";
  textWidth = ctx.measureText(textString ).width;
  ctx.fillText(textString , (canvas.width/2) - (textWidth / 2), 600);
  }
   function SetTheme(tName)
  {
	var ttName="";
	var ttOutline="";
	if(tName=="light") {ttName="light";ttOutline="";}
	if(tName=="dark") {ttName="dark";ttOutline="";}
	if(tName=="lightoutline") {ttName="light";ttOutline="outline";}
	if(tName=="darkoutline") {ttName="dark";ttOutline="outline";}
	localStorage.setItem('theme',ttName);
	localStorage.setItem('outline',ttOutline);
	//document.documentElement.className=ttName;
	switch(tName)
	{
	  case "light":
        $("body").get(0).style.setProperty("--primary", "#000000");
        $("body").get(0).style.setProperty("--bg", "#EAEAEA");
        $("body").get(0).style.setProperty("--tertiary","#C5C5C5");
        $("body").get(0).style.setProperty("--stroke","#000000");
        $("body").get(0).style.setProperty("--primaryfont","#000000");
        $("body").get(0).style.setProperty("--outlinebg","#C5C5C5");
        $("body").get(0).style.setProperty("--outlinefg","#000000");
		break;
	  case "lightoutline":
        $("body").get(0).style.setProperty("--primary", "#000000");
        $("body").get(0).style.setProperty("--bg", "#EAEAEA");
        $("body").get(0).style.setProperty("--tertiary","#C5C5C5");
        $("body").get(0).style.setProperty("--stroke","#000000");
        $("body").get(0).style.setProperty("--primaryfont","#EAEAEA");
        $("body").get(0).style.setProperty("--outlinebg","#000000");
        $("body").get(0).style.setProperty("--outlinefg","#EAEAEA");
		break;
	  case "dark":
        $("body").get(0).style.setProperty("--primary", "#EAEAEA");
        $("body").get(0).style.setProperty("--bg", "#000000");
        $("body").get(0).style.setProperty("--tertiary","#252525");
        $("body").get(0).style.setProperty("--stroke","#EAEAEA");
        $("body").get(0).style.setProperty("--primaryfont","#EAEAEA");
        $("body").get(0).style.setProperty("--outlinebg","#EAEAEA");
        $("body").get(0).style.setProperty("--outlinefg","#000000");
		break;
	  case "darkoutline":
        $("body").get(0).style.setProperty("--primary", "#EAEAEA");
        $("body").get(0).style.setProperty("--bg", "#000000");
        $("body").get(0).style.setProperty("--tertiary","#252525");
        $("body").get(0).style.setProperty("--stroke","#EAEAEA");
        $("body").get(0).style.setProperty("--primaryfont","#000000");
        $("body").get(0).style.setProperty("--outlinebg","#252525");
        $("body").get(0).style.setProperty("--outlinefg","#EAEAEA");
		break;
	}
  }
  
  $("#theme").bind("click",function()
  {
	th="";
	themeName=localStorage.getItem('theme');
	outline=localStorage.getItem('outline');
	if(themeName==null) th="light"; else th=themeName;
	if(outline==null) outline="";
	
	if(themeName=="light") 
	  themeName="dark"+outline;
	else
	  themeName="light"+outline;
	SetTheme(themeName);
  });
    $("#outline").bind("click",function()
  {
	th="";
	themeName=localStorage.getItem('theme');
	outline=localStorage.getItem('outline');
	if(themeName==null) th="light"; else th=themeName;
	if(outline==null) outline="";
	
	if(outline=="") 
	  th=th+"outline";
	SetTheme(th);
  });
  
  function myInitFunction()
  {
	setTimeout(function() {
	  	var th="";
		themeName=localStorage.getItem('theme');
	    outline=localStorage.getItem('outline');
		if(themeName==null) th="light"; else th=themeName;
	  	if(outline==null)
			SetTheme(th);
	    else
		  SetTheme(th+outline);
	},1000);
  }
  function popup() 
  {
	//https://anmolgrao.com/affective-average
	$("#iframe").attr("src","https://anmolgrao.com/affective-average");
    dialog = document.getElementById('myFirstDialog');    
	dialog.showModal();   
  }
  $('#hide').bind("click",function(){
		$("#iframe").attr("src","");
        dialog.close();    
  });    
  
  $("#fntsubmit").submit(function(e) 
  {
		  //prevent Default functionality
		  e.preventDefault();
		  $.ajax({
				  type: 'post',
				  url: "font-post",
				  cache: false,
				  dataType : "text",
				  data: $(this).serialize(),
				  success: function(data) {
					  popup();
				  },
			error: function (xhr, ajaxOptions, thrownError) {
			 alert(thrownError);
				}		
		  });
  });

  window.addEventListener("load", myInitFunction);
})(jQuery);
</script>
