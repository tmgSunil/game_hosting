

import Phaser from 'phaser';

const config={
  type: Phaser.AUTO,
  height:600,
  width:800,
  physics:{
    default:'arcade',
    arcade:{
      
      gravity:{y:400},
      dubug: true,
    }
  },
  scene:{
    preload,
    create,
    update
  }
}

function preload(){

  this.load.image('land', 'assets/land.jpg');
  this.load.image('bird','assets/bird.png')
  
}

const VELOCITY=200;

let bird=null;
let flapVelocity=250;
let totalDelta=null;

function create(){

  this.add.image(config.width/2,config.height/2,'land')
  bird=this.physics.add.sprite(0,0,'bird').setOrigin(0)

  this.input.on('pointerdown', flap);
  this.input.keyboard.on('keydown-J', flap);
}

function update(time,delta){
    
}

function flap(){
  bird.body.velocity.y = -flapVelocity;
}

new Phaser.Game(config);