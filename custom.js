document.addEventListener("DOMContentLoaded", function (e) {

	$(".show-nav").click(function (e) {
		e.preventDefault();
		var t = $(this);
		var nav = t.parents(".container-fluid");
		$("#main-info").animate({opacity: 0}, "fast", function () {
			$.get( t[0].href, function (data) {
				$("#main-info").html(data);
				nav.after($("#main-info"));
				$("#main-info").animate({opacity: 1},"fast");
			});	
		});
	});

	$(".show-nav").eq(0).click();
	
})