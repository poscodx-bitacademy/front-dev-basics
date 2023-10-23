imageViewer = {
	init: function(){
		$(function() {
			$("#btn-change").click(this._changeImage.bind(this));
			$("#btn-slideshow").click(this._slideShow.bind(this));
			$(".image-viewer img").dblclick(this._consoleLog);
			
			// 첫 번째 이미지 선택
			this._changeImage();
		}.bind(this));
	},
	_consoleLog: function(){
		var name = $(this).attr("alt");
		console.log(name);
	},
	_slideShow: function(){
		if(this._intervalId){
			/* 슬라이드쇼가 진행 상태 */
			
			// 1. 타이머 중지
			clearInterval(this._intervalId);
			this._intervalId = null;
			
			// 2. 버튼텍스트 => 슬라이드쇼 시작
			$("#btn-slideshow").text("슬라이드쇼 시작");
		} else {
			/* 슬라이드쇼가 중지 상태 */
			
			// 1. 타이머 시작
			this._intervalId = setInterval(function(){
				this._changeImage();
			}.bind(this), 1000);
			
			
			// 2. 버튼텍스트 => 슬라이드쇼 중지 
			$("#btn-slideshow").text("슬라이드쇼 중지");
		}
	},
	_changeImage: function(){
		do {
			var index = Math.floor(Math.random() * this._images.length);
			var info = this._images[index];
			console.log($(".image-viewer img").attr("alt"), info.name);
		} while($(".image-viewer img").attr("alt") === info.name);
		
		$(".image-viewer img").attr({
			src: "images/" + info.file,
			alt: info.name,
			title: info.name
		});		
	},
	_intervalId: null,
	_images: [{ 
			name: "국화",
			file: "Chrysanthemum.jpg"
		}, { 
			name: "사막",
			file: "Desert.jpg"
		}, {
			name: "수국",
			file: "Hydrangeas.jpg"
		}, {
			name: "해파리",
			file: "Jellyfish.jpg"
		}, { 
			name: "코알라",
			file: "Koala.jpg"
		}, { 
			name: "등대",
			file: "Lighthouse.jpg"
		}, {
			name: "펭귄",
			file: "Penguins.jpg" 
		}, {
			name: "툴립",
			file: "Tulips.jpg"
		}]	
}