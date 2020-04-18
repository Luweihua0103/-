(function ($, root) {
    //play pause getAudio
    function AudioManager() {
        //创建一个audio对象
        this.audio = new Audio();
        //默认音频状态
        this.status = 'pause';
    }
    //将一些方法扩展到原型上
    AudioManager.prototype = {
        play: function () {
            this.audio.play();
            this.status = 'play';
        },
        pause: function () {
            this.audio.pause();
            this.status = 'pause';
        },
        getAudio: function (src) {
            this.audio.src = src;
            this.audio.load();
        }
    }
    //暴露出去
    root.audioManager = new AudioManager();

})(window.Zepto, window.player || (window.player = {}));