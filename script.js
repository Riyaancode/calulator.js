
screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');

ScreenValue = "";

for (item of buttons) {
    item.addEventListener('click', (e) => {
        var value = ScreenValue;
        buttontext = e.target.value
        console.log(buttontext);
        if (buttontext == 'X') {
            buttontext = "*";
            ScreenValue += buttontext
            screen.value = ScreenValue
        } else if (buttontext == 'C') {
            ScreenValue = "";
            screen.value = ScreenValue;
            document.getElementById('value').innerText = ScreenValue;
        } else if (buttontext == '=') {
            screen.value = eval(ScreenValue);
            document.getElementById('value').innerText = value
        } else {
            ScreenValue += buttontext
            screen.value = ScreenValue
        }
    })
}

function darkmode(){
    var darkmode = document.body;
    darkmode.classList.toggle('dark')
  }