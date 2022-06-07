var input, index;
input = document.querySelectorAll("input");

function stateHandle() {
    let button = document.getElementById('btnRegister');
    var inputList, indexList;
    inputList = document.querySelectorAll("input:not([type=file])");
    
    var normal_inputs = true;
	var	file_inputs = true;

    for (indexList = 0; indexList < inputList.length; ++indexList) {
      if(inputList[indexList].value == "") // cel putin unul dintre ele este gol || if(inputList[indexList].value == "" && inputList[indexList].files == null)
      {
        normal_inputs = false;
        break; // nu are rost sa mai verificam si restu ca unul dintre ele oricum e gol
      }
      //else if(inputList[indexList].files != null && inputList[indexList].files.length == 0)
      //{
      //  normal_inputs = false;
      //  break; // nu are rost sa mai verificam si restu ca unul dintre ele oricum e gol
      //}
      //console.log(normal_inputs);
    }
	
	
	var modelsFile, indexFile;
	modelsFile = document.querySelectorAll("input[type=file]");
	let inputs_file_complete = [];
	
	var front = 0;
	var back = 0;
	var faceid = 0;
	
	for (indexFile = 0; indexFile < modelsFile.length; indexFile++){
		if(modelsFile[indexFile].files != null && modelsFile[indexFile].files.length == 1){
			inputs_file_complete.push(modelsFile[indexFile]);
		}
	}
	
	var indexComplete;
	
	if (inputs_file_complete.length >= 3){
		for (indexComplete = 0; indexComplete < inputs_file_complete.length; indexComplete++ ){
			if ((inputs_file_complete[indexComplete].name).startsWith("front")){
				front++;
			}
			else if ((inputs_file_complete[indexComplete].name).startsWith("back"))
			{
				back++;
			}
			else if ((inputs_file_complete[indexComplete].name).startsWith("faceId"))
			{
				faceid++;
			}
		}
		
		if (front < 1 || back < 1 || faceid < 1)
		{
			file_inputs = false;
		}
		
	}
	else
	{
		file_inputs = false;
	}
	
	

    if(normal_inputs && file_inputs)
      button.disabled = false;
    else
      button.disabled = true;
}

for (index = 0; index < input.length; ++index) {
    input[index].addEventListener("change", stateHandle);
}