$(document).attr("title", "My Portfolio");
$('#banner').load("./banner.txt").hide().delay(2000).fadeIn(1500);
$('#lower_banner').load("./lower_banner.txt").hide().delay(5000).fadeIn(1000);
$('#uFooter').load("./uFooter.txt").hide().delay(7000).fadeIn(1000);
$('#lFooter').load('./lFooter.txt')
$('#menuHere').load("./navigation.html")
$('#cr').text('\u00A9  ' +  new Date().getFullYear() + ", Walt L. Williams " + ' \u2014 ' + " Longmont, Colorado");
