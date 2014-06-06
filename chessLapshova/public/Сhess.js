
      var socket = io.connect('http://localhost:8080');
   
socket.on('start',function (A) {
if (A==='white'){isMyTurn=true;}
if (A==='black'){isMyTurn=false;}

}); 
   
   
socket.on('step',function (a,b,c,d) {
//console.log("position1");
	validMove = false;
	var t = changeBoard(a,b,c,d);
	
	if (matrix[a][b].type === "Pawn"){
		if (pawnMove(t.newPrevX,t.newPrevY,t.newNextX,t.newNextY)) {
			validMove = true;
		} 
	}
	
	
	
	
	if (validMove) {
	//1. ход правильный 
	//2. меняем внутреннее представление
	
	matrix[t.newNextX][t.newNextY] = matrix[t.newPrevX][t.newPrevY];
	matrix[t.newPrevX][t.newPrevY] = null;
	
	//3.меняем внешнее представление
	var coordinata1 = t.newPrevX*8+t.newPrevY+1;
	var coordinata2 = t.newNextX*8+t.newNextY+1;
	
	$("div:eq(" + coordinata1 + ")").empty().removeClass('highlight').attr('figureColor', 'No');
	$("div:eq(" + coordinata2 + ")").attr('figureColor', 'white').wrapInner('<img src="./Chess_piece/Pawn_white.jpg" width="50" height="50" alt="">'); //делаем ход фигурой --перемещаем фигуру на указанную клетку
			
	
	
		isMyTurn = true;
	}	
	
});

	
	

	
	
	
	
	
	
	
    