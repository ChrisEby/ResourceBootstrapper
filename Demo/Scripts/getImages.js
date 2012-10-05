this.getImages = function () {
	// Adopted from http://docs.jquery.com/Ajax/jQuery.getJSON
	$(document).ready(function(){
		$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?tags=boxer+puppy&tagmode=any&format=json&jsoncallback=?",
			function(data){
				var imagesContainer = document.createElement("div");
				imagesContainer.setAttribute("id", "images");
				
				$.each(data.items, function(i,item){
					$("<img/>").attr("src", item.media.m).appendTo("body");

					if ( i == 3 )
						return false;
				});
			}
		);
	});
};

this.getImages();