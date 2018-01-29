Zepto(function(){
   

	   /*禁止默认拖动事件*/
	  document.ontouchmove = function(event){
		event.preventDefault();
	  };


      var yssa=document.getElementById("yssa");
	    
	   window.onload=function(){
	      // loaded();

		    var timer=setInterval(function(){
		         
		         if(Zepto(".six").text()!="9"){
					 if(Zepto(".nine").text()=="9"){
	                    Zepto(".nine").text("9")
	                    Zepto(".six").text(parseInt(Zepto(".six").html())+1);
			         }else{
			         	Zepto(".nine").text(parseInt(Zepto(".nine").html())+1);
			         }
		         }else{
		         	clearInterval(timer); 
		         	setTimeout(function(){
		         	  loaded();
		         	  loadedIscrollo ();
		         	  yssa.play();
		         	  Zepto(window).swipe(function(){
		         	  	yssa.play();
		         	  });
		         	},1000);
		         }
		        

		         

		    },55);



     


          var num=0;
	      Zepto(".ccbut").tap(function(){
	      	Zepto(".form_tc").show();
	      });

          Zepto("#tj").tap(function(){
	      	Zepto(".fx").show();
	      	Zepto(".xx").each(function(){
	      		if(Zepto(this).attr("flag")=="true"){
                    num=num+1;
	      		}
	      	});
	      	console.log(num);
	      });
  
	 

	     //   function plus(){
		    // Zepto("xx").each(function(){
	     //  		if(Zepto(this).attr("flag")=="true"){
      //               num=num+1;
	     //  		}
	     //  	});
	     //  	console.log(num);
	     //   }
          

          Zepto(".fx").tap(function(){
	      	Zepto(".fx").hide();
	      });

	      Zepto(".xx").tap(function(){
	      	if(Zepto(this).attr("flag")=="false"){
                Zepto(this).attr("src","img/xz.png");
                Zepto(this).attr("flag","true")
	      	}else{
	      		Zepto(this).attr("src","img/wx.png");
	      		Zepto(this).attr("flag","false")
	      	}
	      	
	      });



      var myScroll;
	  
	  function loadedIscrollo () {
	    myScroll = new iScroll('wrapper', {
	      hScroll:false,
	      vScroll:true,
	      checkDOMChanges:true,
	      topOffset:0,
	      x:0,
	      y:0,
          hScrollbar:false,
          vScrollbar:true,
          fadeScrollbar:false,
	      scrollbarClass:'',
	      zoom:false,
	      zoomMax:4,
	      zoomMax:1,
          bounce:true,
          momentum:true,
          hideScrollbar:false,
          onBeforeScrollMove:function(){
          
          }
	    });
	    // myScroll.scrollTo(0,-100,0);
	  }


                           






       
	   };  

  


});



function loaded(){
   Zepto('.loading').hide();
   Zepto('#wrap').eq(0).css('opacity',1);
}

