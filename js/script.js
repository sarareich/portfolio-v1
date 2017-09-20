$(document).ready(function() {
	var img_src;
	var slide;
	var caption;

	$(".lightbox_trigger").on("click", function() {
		slide = $(this).attr("id");
		openLightbox();
	});

	$(".close").on("click", function() {
		closeLightbox();
	});

	$(".next").on("click", function() {
		slide++;

		if($("#" + slide).attr("src")) {
			newSlide();
		} else{
			slide = 1;
			newSlide();
		}
	});

	$(".prev").on("click", function() {
		if (slide > 1) {
			slide--;
		} else if (slide == 1) {
			slide = $(".last").attr("id");
		}

		newSlide();
	});

	function openLightbox() {
		$("body").addClass("noScroll");

		img_src = $("#" + slide).attr("src");
		caption = $("#" + slide).attr("alt");

		if ($("#content").length > 0) {
			$("#content").html(
				'<img src="' + img_src + '" id="slides"/>' +
				'<div id="lightbox_caption">' + caption + '</div>'
				);
		} else {
			$(".lightbox").append(
				'<div id="content">' +
					'<img src="' + img_src + '" id="slides"/>' +
					'<div id="lightbox_caption">' + caption +
					'</div>' +
				'</div>'
			);
		}

		$(".lightbox").fadeToggle("fast", function() {
		});
	}

	function newSlide() {
		img_src = $("#" + slide).attr("src");
		caption = $("#" + slide).attr("alt");

		$("#slides").attr("src", img_src);
		$("#lightbox_caption").text(caption);
	}

	function closeLightbox() {
		$("#content").remove();

		$(".lightbox").fadeToggle("fast", function() {
		});
	}
});