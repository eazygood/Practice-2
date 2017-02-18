$(function() {
	$(".toggle_menu").click(function()	{
		$(this).toggleClass("on");
		$(".top_menu").slideToggle();
		return false;
	});

	$(".toggle_menu").click(function() {
		$(this).toggleClass("is-active");
		$(".bottom_menu").slideToggle();
	})

	$(".main_footer .toggle_menu").click(function() {
		$("html, body").animate({ scrollTop: $(document).height() }, "slow");
		return false;
	});





	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
