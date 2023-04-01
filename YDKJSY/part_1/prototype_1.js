/*
Определите в программе модель «однорукого бандита» с тремя колесами, которые могут вращаться по
отдельности вызовом spin(), а затем выводит текущие
значения всех колес вызовом display().
Базовое поведение одного колеса определяется приведенным ниже объектом reel. Однако игровому
автомату потребуются отдельные объекты reel, которые делегируют обращения reel, и каждый из этих
объектов должен иметь свойство position.
Объект reel умеет только выводить свой текущий
символ на колесе вызовом display(), но «однорукие
бандиты» обычно выводят по три символа на колесо:
текущую позицию (position), позицию выше (position - 1) и позицию ниже (position + 1). Таким образом, при выводе «однорукого бандита» должна
выводиться сетка символов 3 x 3.
function randMax(max) {
 return Math.trunc(1E9 * Math.random()) % max;
}
var reel = {
 symbols: [
 "X", "Y", "Z", "W", "$", "*", "<", "@"
 ],
 spin() {
 if (this.position == null) {
 this.position = randMax(
 this.symbols.length - 1
 );
 }
 this.position = (
 this.position + 100 + randMax(100)
 ) % this.symbols.length;
 },
 display() {
 if (this.position == null) {
 this.position = randMax(
 this.symbols.length - 1
 );
 }
 return this.symbols[this.position];
 }
};
var slotMachine = {
 reels: [
 // потребуются 3 отдельных объекта reel
 // подсказка: Object.create(..)
 ],
 spin() {
 this.reels.forEach(function spinReel(reel){
 reel.spin();
 });
 },
 display() {
 // TODO
 }
};
slotMachine.spin();
slotMachine.display();
// < | @ | *
// @ | X | <
// X | Y | @
slotMachine.spin();
slotMachine.display();
// Z | X | W
// W | Y | $
// $ | Z | *

 */

function randMax(max) {
    return Math.trunc(1E9 * Math.random()) % max;
}

var reel = {
    symbols: [
        "X", "Y", "Z", "W", "$", "*", "<", "@"
    ],
    spin() {
        if (this.position == null) {
            this.position = randMax(
                this.symbols.length - 1
            );
        }
        this.position = (
            this.position + 100 + randMax(100)
        ) % this.symbols.length;
    },
    display() {
        if (this.position == null) {
            this.position = randMax(
                this.symbols.length - 1
            );
        }
        return this.symbols[this.position];
    }
};

var slotMachine = {
    reels: [
        Object.create(reel),
        Object.create(reel),
        Object.create(reel)
    ],
    spin() {
        this.reels.forEach(function spinReel(reel){
            reel.spin();
        });
    },
    display() {
        var lines = [];
        // display all 3 lines on the slot machine
        for (
            let linePos = -1; linePos <= 1; linePos++
        ) {
            let line = this.reels.map(
                function getSlot(reel){
                    var slot = Object.create(reel);
                    slot.position = (
                        reel.symbols.length +
                        reel.position +
                        linePos
                    ) % reel.symbols.length;
                    return reel.display.call(slot);
                }
            );
            lines.push(line.join(" | "));
        }
        return lines.join("\n");
    }
};

slotMachine.spin();
slotMachine.display();
slotMachine.spin();
slotMachine.display();
