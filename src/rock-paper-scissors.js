class RockPaperScissors {
    constructor(containerElement) {
        /* ... costruisco i vari componenti che
           devono interagire */
        this.mainElement = document.createElement('div');
        const title = document.createElement('h2');
        title.textContent = "Your Game";
        const button = document.createElement('button');
        button.textContent = "Play!";
        this.mainElement.append(title);
        this.labels = [ "Rock", "Paper", "Scissors" ];
        for (let i = 0; i < 3; i++) {
            const radioButton = document.createElement('input');
            radioButton.setAttribute('type', 'radio');
            radioButton.setAttribute('name', 'choice');
            radioButton.setAttribute('value', this.labels[i]);
            const label = document.createElement('label');
            label.textContent = this.labels[i];
            this.mainElement.append(radioButton);
            this.mainElement.append(label);
            this.mainElement.append(document.createElement('br'));
        }
        this.mainElement.append(button);
        button.addEventListener('click', this.buttonPressed.bind(this));
        this.result = document.createElement('div');
        this.mainElement.append(this.result);
        containerElement.append(this.mainElement);
    }
    randomDraw() {
        const v = Math.floor(3 * Math.random());
        this.opponentChoice = this.labels[v];
    }
    buttonPressed(event) {
        this.randomDraw();
        this.result.textContent = this.opponentChoice;
        const myChoice = this.mainElement.querySelector('input[name="choice"]:checked');
        if (!myChoice)
            window.alert("You must choose one option");
        else
            window.alert(myChoice.value);
    }
}

export default RockPaperScissors;