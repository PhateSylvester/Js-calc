function Vidafa() {
    var digit1 = parseInt(document.getElementById('digit1').value);
    var digit2 = parseInt(document.getElementById('digit2').value);
    var vidafa = document.getElementById('symbols').value;


    if (vidafa === 'add') 
    {
        document.getElementById('outcome').value = digit1+digit2; 
    }

    if (vidafa === 'subtract') 
    {
        document.getElementById('outcome').value = digit1-digit2; 
    }

    if (vidafa === 'multiply') 
    {
        document.getElementById('outcome').value = digit1*digit2; 
    }

    if (vidafa === 'divide') 
    {
        document.getElementById('outcome').value = digit1/digit2;
    }

    if (vidafa === 'modulus') 
    {
        document.getElementById('outcome').value = digit1%digit2; 
    }
    // Check if the inputs are valid numbers
  if (isNaN(digit1) || isNaN(digit2)) {
    outcome.value = "Please enter valid numbers";
    return;
  }

  // Check if the second digit is zero for division and modulus operations
  if ((vidafa === "divide" || vidafa === "modulus") && digit2 === 0) {
    outcome.value = "Cannot divide/modulus by 0";
    return;
  }

  // switch (vidafa) {
  //   case "add":
  //     outcome.value = digit1 + digit2;
  //     break;
  //   case "subtract":
  //     outcome.value = digit1 - digit2;
  //     break;
  //   case "multiply":
  //     outcome.value = digit1 * digit2;
  //   case "divide":
  //     outcome.value = digit1 / digit2;
  //     break;
  //   case "modulus":
  //     outcome.value = digit1 % digit2;
  //     break;
  //   default:
  //     outcome.value = "Invalid operation";
  // }
}
