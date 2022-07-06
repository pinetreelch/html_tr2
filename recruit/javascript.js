function add_row(){
	
	var objRow;
	objRow= document.all["tblshow"].insertRow();
	
	//기간
	var objCell_Id = objRow.insertCell();
	objCell_Id.innerHTML= "<input type='month' id='row_id' name='row_id' value=''>"+'~'+"<input type='month' id='row_id' name='row_id' value=''>";
	
	//출신학교
	var objCell_Nm=objRow.insertCell();
	objCell_Nm.innerHTML= "<input type='text' id='row_id' name='row_id' value=''>";
	
	//구분
	var objCell_Tel=objRow.insertCell();
	objCell_Tel.innerHTML="<input type='text' id='row_id' name='row_id' value=''>";
	
	//학과
	var objCell_class=objRow.insertCell();
	objCell_class.innerHTML="<input type='text' id='row_id' name='row_id' value=''>";
	
	//소재지
	var objCell_loca=objRow.insertCell();
	objCell_loca.innerHTML="<input type='text' id='row_id' name='row_id' value=''>";
}

function delete_row(){
   var my_tbody = document.getElementById('tblshow');
   if (my_tbody.rows.length < 1) return;
   // my_tbody.deleteRow(0); // 상단부터 삭제
   my_tbody.deleteRow( my_tbody.rows.length-1 ); // 하단부터 삭제
}
