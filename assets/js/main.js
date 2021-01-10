function Calc() {
  this.display = document.querySelector('.display');

  this.characterToDisplay = (character) => {
    this.display.value += character;
  };

  this.clearDisplay = () => {
    this.display.value = '';
  };

  this.deleteOneCharacter = () => {
    this.display.value = this.display.value.slice(0, -1);
  };

  this.realizeCalc = () => {
    let displayValue = this.display.value;
    try {
      displayValue = window.eval(displayValue);
      if (!displayValue) {
        return alert('this is not a valid calc');
      }
      return (this.display.value = String(displayValue));
    } catch (err) {
      return alert('this is not a valid calc');
    }
  };
  this.resolveNumpadTarget = (keytarget) => {
    if (keytarget.includes('Add')) {
      const simbol = '+';
      this.characterToDisplay(simbol);
    } else if (keytarget.includes('Subtract')) {
      const simbol = '-';
      this.characterToDisplay(simbol);
    } else if (keytarget.includes('Multiply')) {
      const simbol = '*';
      this.characterToDisplay(simbol);
    } else if (keytarget.includes('Divide')) {
      const simbol = '/';
      this.characterToDisplay(simbol);
    } else if (keytarget.includes('Decimal')) {
      const simbol = '.';
      this.characterToDisplay(simbol);
    } else if (keytarget.includes('Enter')) {
      this.realizeCalc();
    } else {
      const character = keytarget.replace('Numpad', '');
      this.characterToDisplay(character);
    }
  };

  this.keyClicked = (event) => {
    const eventKeyTarget = event.code;
    if (eventKeyTarget === 'Enter' || eventKeyTarget === 'NumpadEnter') {
      this.realizeCalc();
    }
    if (eventKeyTarget === 'Delete') this.deleteOneCharacter();
    if (eventKeyTarget.includes('Digit')) {
      const text = eventKeyTarget.replace('Digit', '');
      this.characterToDisplay(text);
    }
    if (eventKeyTarget.includes('Numpad')) {
      this.resolveNumpadTarget(eventKeyTarget);
    }
  };

  this.mouseClicked = (event) => {
    const targetClass = event.target.classList;

    if (targetClass.contains('btn-number')) {
      this.characterToDisplay(event.target.innerText);
    }
    if (targetClass.contains('btn-clear')) this.clearDisplay();
    if (targetClass.contains('btn-delete')) this.deleteOneCharacter();
    if (targetClass.contains('btn-equal')) this.realizeCalc();
  };

  this.start = () => {
    document.addEventListener('keypress', (event) => {
      this.keyClicked(event);
    });
    document.addEventListener('mousedown', (event) => {
      this.mouseClicked(event);
    });
  };
}

const calc = new Calc();
calc.start();
