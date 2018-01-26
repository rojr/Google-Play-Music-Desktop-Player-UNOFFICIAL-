/* eslint-disable */
//Greyson Flippo
//Ac130veterans@gmail.com
//6-6-2016

var showMenu = 0;

var site="";
var uiDis=0;
var uiColor="#FF5722";

var multiplier = 10;
var autoMultiplier = 0;

var barWidth=15;
var barAmnt=0;
var vizReady=0;
var barSpacing = 2;


var vizInit = 0;
var vizShow = 0;

var tempWid = window.innerHeight;
let i, end;

let AudioValues = function () {
  let ctx, audio, source, analyser, freqData, buff, data;
  return this;
}

function Visualizer() {
  return {
    fftUni:8192,
    canvas:null,
    ctx:null,
    audioData:[],
    initialise:function() {
      this.canvas = document.createElement('canvas');
      this.canvas.style.position = 'absolute';
      this.canvas.style.top = 0;
      this.canvas.style.left = 0;
      this.canvas.style.right = 0;
      this.canvas.style.bottom = 0;
      this.canvas.style.width = "100%";
      this.canvas.style.height = "100%";
      this.canvas.style.pointerEvents = 'none';

      let sources = document.querySelectorAll('audio');

      for (i = 0, end = sources.length; i < end; i++) {
        sources[i].id = 'audioSource' + i;
        let audioInfo = new AudioValues();
        audioInfo.ctx = new AudioContext();
        audioInfo.analyser = audioInfo.ctx.createAnalyser();
        audioInfo.analyser.smoothingTimeConstant = .8;
        audioInfo.audio = sources[i];
        audioInfo.source = audioInfo.ctx.createMediaElementSource(sources[i]);
        audioInfo.source.connect(audioInfo.analyser);
        audioInfo.analyser.connect(audioInfo.ctx.destination);
        audioInfo.analyser.fftSize = this.fftUni;
        audioInfo.freqData = new Uint8Array(audioInfo.analyser.frequencyBinCount);
        audioInfo.buff = audioInfo.analyser.frequencyBinCount;
        audioInfo.data = new Uint8Array(audioInfo.buff);

        this.audioData.push(audioInfo);
      }

      document.querySelector('body').appendChild(this.canvas);
      window.addEventListener('resize', function() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
      }.bind(this), false);
      this.ctx = this.canvas.getContext('2d');
    },
    getCurrentPlayingData:function() {
      return this.audioData[1];
    },
    visualize:function() {
      var ctx = this.ctx;
      var frequencyData = this.getCurrentPlayingData().data;
      var analyser = this.getCurrentPlayingData().analyser;

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

        //getByteTimeDomainData
        analyser.getByteFrequencyData(frequencyData);

        ctx.strokeStyle = '#ffffff';
        var first = null;
        ctx.beginPath();
        for (var i = 0; i < this.fftUni / 4; i++) {
            if (first == null) {
                first = frequencyData[i];
            }
            ctx.save();
            ctx.translate(window.innerWidth / 2, window.innerHeight / 2);
            ctx.rotate((360 * i / this.fftUni * 4) * (Math.PI/90));
            ctx.lineTo(frequencyData[i * 4] * 2, 0);
            if (i == this.fftUni - 1) {
                ctx.lineTo(first, 0);
            }
            ctx.translate(window.innerWidth / 2, window.innerHeight / 2);
            ctx.restore();
        }
      ctx.stroke();
    }
  };
};

setTimeout(function() {
  let viz = new Visualizer();
  viz.initialise();

  setInterval(function() {
    viz.visualize();
  }, 5);
}, 100);
