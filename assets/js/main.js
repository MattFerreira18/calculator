function createCalculator() {
  return {

    display: document.querySelector('.display'),

    start() {
      this.mouseClick();
      this.keyClick();
    },

    clearDisplay() { this.display.value = '' },

    deleteOneNumber() { this.display.value = this.display.value.slice(0, -1) },

    keyClick() {
      document.addEventListener('keypress', (event) => {
        const eventKeyTarget = event.code;

        if (eventKeyTarget === 'Enter' || eventKeyTarget === 'NumpadEnter') this.realizeCalc();
        if (eventKeyTarget === 'Delete') this.deleteOneNumber();
        if (eventKeyTarget.includes('Digit')) {
          const text = eventKeyTarget.replace('Digit', '');
          this.numberToDisplay(text);
        };
        if (eventKeyTarget.includes('Numpad')) {

          if (eventKeyTarget.includes('Add')) {
            const text = '+';
            this.numberToDisplay(text);
          } else if (eventKeyTarget.includes('Subtract')) {
            const text = '-';
            this.numberToDisplay(text);
          } else if (eventKeyTarget.includes('Multiply')) {
            const text = '*';
            this.numberToDisplay(text);
          } else if (eventKeyTarget.includes('Divide')) {
            const text = '/';
            this.numberToDisplay(text);
          } else if (eventKeyTarget.includes('Decimal')) {
            const text = '.';
            this.numberToDisplay(text);
          } else if (eventKeyTarget.includes('Enter')) {
            this.realizeCalc();
          } else {
            const text = eventKeyTarget.replace('Numpad', '');
            this.numberToDisplay(text);
          };


        };
      });
    },

    mouseClick() {
      document.addEventListener('mousedown', (event) => {
        const eventTarget = event.target;
        const eventTargetWithClass = eventTarget.classList;
        if (eventTargetWithClass.contains('btn-number')) this.numberToDisplay(eventTarget.innerText);
        if (eventTargetWithClass.contains('btn-clear')) this.clearDisplay();
        if (eventTargetWithClass.contains('btn-delete')) this.deleteOneNumber();
        if (eventTargetWithClass.contains('btn-equal')) this.realizeCalc();

        //arrow function do not change this
        //in anonimous function, colocate function(){}.bind to alterate this, this => calculator and not #document
      });
    },

    numberToDisplay(text) { this.display.value += text },

    realizeCalc() {
      let displayValue = this.display.value;
      try {
        displayValue = eval(displayValue);
        if (!displayValue) return alert('this not a valid calc');

        return this.display.value = String(displayValue);

      } catch (err) { return alert('this not a valid calc') }

    },

  };
};

const calculator = createCalculator();
calculator.start();
