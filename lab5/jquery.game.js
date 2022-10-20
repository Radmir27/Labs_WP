(function( $ ) {
 $.fn.game = function() {
	 $(document).ready(function(){
		let win = 0;
		let rows = 3;
		let p1 = 0;
		let p2 = 0;
		buildinfo();
		buildgame();
		buildset();
		let player = 1;
		function buildinfo(){
			$("<div id='players' style='width:"+(rows*70+((rows+1)*2))+";height:50;margin-top:20;margin-bottom: 10;background:#0000003d;'><p id='p1' style='float:left;margin:0'"+
			">Игрок 1: "+p1+"</p><p id='p2' style='float:right;margin:0'>Игрок 2: "+p2+"</p>"+
			"<p id='result' style='height:40;margin:4;text-align:center;'></p></div>").appendTo("div#game");
		}
		function buildgame(){
			$("<table id='GF' border='1 solid' style='border-collapse: collapse;'></table>").appendTo("div#game");
			for (let i = 0;i<rows;i++){
				$("<tr>").appendTo("div#game #GF");
				for (let j = 0;j<rows;j++){
					$("<td id = '"+i+j+"' style='cursor: default;color:white;width:70px;height:70px;font-size:39;text-align: center;'></td>").appendTo("div#game #GF tr:last");
				}
			}
		} 
		function buildset(){
			$("<input type='button' value='Новая игра' style='display: block;margin-top: 10;' id='newgame'>").appendTo("div#game");
			$("<label for='size'>Размер поля:</label><input placeholder='3 - 9' style='margin:10' id='size' type='number' step='1' max='9' min='3'>").appendTo("div#game"); 
			$("<input type='button' value='Сброс' id='button'>").appendTo("div#game");
		}
		$('div#game').on('click','#newgame',function(){
				$("td").text('');
				player=1;
			}
		);
		$('div#game').on('click','#button',function(){
				p1=0;
				p2=0;
				$("#p1").text("Игрок 1: 0");
				$("#p2").text("Игрок 2: 0");
			}
		);
		$('div#game').on('click','td',function(){
			if (win==0){
				if ($(this).text().length == 0){
					switch (player){
						case 1:$(this).text('X');player++;checkWin("X");break;
						case 2:$(this).text('O');player--;checkWin("O");break;
					}
				}
			}
		});
		$('div#game').on('change','#size',function(){
			if (parseInt($('#size').val())>2 && parseInt($('#size').val())<10){
				rows = parseInt($('#size').val());
				$("div#game").empty();
				buildinfo();
				buildgame();
				buildset();
			}
		});
		
		function checkWin(player){
			for (let i = 0;i<rows;i++){ // Горизонталь
				for (let j = 0;j<rows;j++){
					if ($("#"+i+j).text() != player){ break;}
					if (j == (rows-1)){win=1;addPoint(player);winVis(i,1);return 0;//win
					}
				}
			}
			for (let i = 0;i<rows;i++){ // Высота
				for (let j = 0;j<rows;j++){
					if ($("#"+j+i).text() != player){ break;}
					if (j == (rows-1)){win=1;addPoint(player);winVis(i,2);return 0;//win
					}
				}
			}
			for (let i = 0;i<rows;i++){ // Диагональ 1
				if ($("#"+i+i).text() != player){ break;}
				if (i == (rows-1)){win=1;addPoint(player);winVis(0,3);return 0;//win
				}
			}
			for (let i = 0;i<rows;i++){ // Диагональ 2
				if ($("#"+i+(rows-i-1)).text() != player){ break;}
				if (i == (rows-1)){win=1;addPoint(player);winVis(i,4);return 0;//win
				}
			}
			if ($("td").text().length == rows*rows){ // Ничья
				$("#result").text("Ничья");
				winVis(0,5);
			}
		}
		
		function winVis(i,variant){
			switch (variant){
				case 1: for(let j=0;j<rows;j++){$("#"+i+j)[0].style.background = '#000000d4';}break;
				case 2: for(let j=0;j<rows;j++){$("#"+j+i)[0].style.background = '#000000d4';}break;
				case 3: for(let j=0;j<rows;j++){$("#"+j+j)[0].style.background = '#000000d4';}break;
				case 4: for(let j=0;j<rows;j++){$("#"+j+(rows-j-1))[0].style.background = '#000000d4';}break;
			}
			setTimeout(function(){$("#result").text("");win=0;player=1;$("td").each(function(){this.style.background=''});$("td").text('');},2000);
		}
		
		function addPoint(player){
			switch(player){
				case 'X': p1++;$("#p1").text("Игрок 1: "+p1);$("#result").text("Победил Игрок 1"); break;
				case 'O': p2++;$("#p2").text("Игрок 2: "+p2);$("#result").text("Победил Игрок 2"); break;
			}
		}
		 
	 });
	 
	 
	 
	  };
})(jQuery); 