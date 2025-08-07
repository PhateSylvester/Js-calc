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
}