var input, index;
input = document.querySelectorAll("input");

function stateHandle() {
    let button = document.getElementById('btnRegister');
    var inputList, indexList;
    inputList = document.querySelectorAll("input:not([type=file])");
    
    var normal_inputs = true;
	var	file_inputs = true;

    for (indexList = 0; indexList < inputList.length; ++indexList) {
      if(inputList[indexList].value == "") 
      {
        normal_inputs = false;
        break; 
      }
    }

    //Thanks to my brother Tiger for the below idea
    var inputCount = 3;

    for(var indexTest = 0; indexTest < inputCount; ++indexTest)
    {
        var browseElement = $("#browse" + indexTest)[0];
        var cameraElement = $("#camera" + indexTest)[0];
        
        if(browseElement.files.length == 0 && cameraElement.files.length == 0)
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
