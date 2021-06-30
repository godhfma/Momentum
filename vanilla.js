function plus(a, b){
    console.log(a - b);
}

function divide(c, d){
    console.log(c/d);
}

plus(30, 5);
plus(450, 5);
divide(50, 5);

// function sayHello();

const player={
    name: 'JH',
    sayHello : function(name){
        console.log("Hello! this is " + name);
    },
};

console.log(player.name);
player.sayHello('Lynn');
player.sayHello('Nico');
player.sayHello('Rose');

