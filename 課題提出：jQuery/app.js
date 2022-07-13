$(function() {
	function omikuji() {
	 	const cont = Math.ceil(Math.random()*3);
	 	if(cont == 1){
		 	$(".radius money").html("大吉が出ました");
		 	$(".omikuji_text").html("大吉が出ました！おめでとうございます！テキストテキストテキストテキストテキストテキストテキストテキスト");
		 	$(".omikuji_img").attr("src","https://f.uploader.xzy.pw/eu-prd/upload/20191108160744_61514c415a.jpg");
 		}
		 	if(cont == 2){
		 	$(".radius money").html("中吉が出ました");
		 	$(".omikuji_text").html("中吉が出ました！やったね！テキストテキストテキストテキストテキストテキストテキストテキスト");
		 	$(".omikuji_img").attr("src","https://f.uploader.xzy.pw/eu-prd/upload/20191108160418_5165755153.jpg");
 		}
		 	if(cont == 3){
		 	$(".radius money").html("小吉が出ました");
		 	$(".omikuji_text").html("小吉が出ました！もうひとふんばり！テキストテキストテキストテキストテキストテキストテキストテキスト");
		 	$(".omikuji_img").attr("src","https://f.uploader.xzy.pw/eu-prd/upload/20191108160447_6f6d664c4f.jpg");
 		}
	}

	$(".start-button").on("click",function () {
		$('.result').show();
		// omikuji();
	});
});