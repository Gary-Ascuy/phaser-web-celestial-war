import { log } from './logger'

const game = new Phaser.Game(800, 680, Phaser.AUTO, 'Web Celestial War', {preload, create})

function preload() {
  log('Staring Web Celestial War')

  game.load.crossOrigin='Anonymous'
  game.load.bitmapFont('font',
    'https://dl.dropboxusercontent.com/s/z4riz6hymsiimam/font.png?dl=0',
    'https://dl.dropboxusercontent.com/s/7caqsovjw5xelp0/font.xml?dl=0'
  )
  game.load.image('hex', 'https://dl.dropboxusercontent.com/s/rhwagtrs8o2v0cz/hexsmall.png?dl=0')
}

function create() {
  game.stage.backgroundColor = '#fff'
  const infoTxt = game.add.text(10, 30, 'Hello World')
  game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
  game.input.holdRate = 500
}
