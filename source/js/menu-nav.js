$("#article-nav-title").click(function(){
	var articleNav = $('#article-nav-title div');
	var menuNav=$("#article-nav").css("right");
	if (menuNav=='0px'){
		articleNav.text('←');
		$("#article-nav").animate({right: "-165px"}, 200);
	} else {
		articleNav.text('→');
		$("#article-nav").animate({right: "0px"}, 200);
	}
});