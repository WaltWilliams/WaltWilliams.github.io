$(document).attr("title", "My Portfolio");
$('#banner').load("./banner.txt").hide().delay(3000).fadeIn(1500);
$('#lower_banner').load("./lower_banner.txt").hide().delay(6000).fadeIn(1000);
$('#uFooter').load("./uFooter.txt").hide().delay(9000).fadeIn(1000);
$('#lFooter').load('./lFooter.txt')
$('#menuHere').load("./navigation.html")
$('#cr').text('\u00A9  ' +  new Date().getFullYear() + ", Walt L. Williams");
