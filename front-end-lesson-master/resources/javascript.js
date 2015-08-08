function replaceName()
{
	var defaultName = "Rinu Varghese";
	var myNewName = window.prompt('Pick a new name');
	if (myNewName != null)
    {
	document.getElementById('user-name').innerHTML = myNewName;
    }
    else
    {
      document.getElementById('user-name').innerHTML = defaultName;
    }

}


function changeBackGround()
{

 if (colorToHex(document.body.style.backgroundColor).toUpperCase() == '#99CCFF'|| document.body.style.backgroundColor== "")
 {
  document.body.style.backgroundColor='#66FFCC';


 }
  
 else if (colorToHex(document.body.style.backgroundColor).toUpperCase() == '#66FFCC')

  {

  	 document.body.style.backgroundColor='#99CCFF';
  }

}

function colorToHex(color) {
    if (color.substr(0, 1) === '#' || color.length == 0) {
        return color;
    }
    var digits = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(color);

    var red = parseInt(digits[2]);
    var green = parseInt(digits[3]);
    var blue = parseInt(digits[4]);

    var rgb = blue | (green << 8) | (red << 16);
    return digits[1] + '#' + rgb.toString(16);
};
