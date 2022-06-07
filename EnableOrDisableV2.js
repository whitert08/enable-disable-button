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
	
    var inputCount = 3;

    for(var indexTest = 0; indexTest < inputCount; ++indexTest)
    {
        var browseElement = $("#browse" + indexTest)[0];
        var cameraElement = $("#camera" + indexTest)[0];
        
        if(browseElement.files.length == 0 && cameraElement.files.length == 0) // Daca intr-o sectiune ambele sunt goale
        {
            file_inputs = false;
            break;
        }
    }

    if(normal_inputs && file_inputs)
      button.disabled = false;
    else
      button.disabled = true;
}

for (index = 0; index < input.length; ++index) {
    input[index].addEventListener("change", stateHandle);
}