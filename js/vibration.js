AFRAME.registerComponent('vibration', {
      schema: {
        duration: {type: 'int', default: 200},
        value: {type: 'number', default: 0.5}
      },

      init: function() {
        this.onClick = this.onClick.bind(this);
        this.el.addEventListener('click', this.onClick);
        this.el.setAttribute('class', 'collidable');
      },

      onClick: function(e) {
        navigator.vibrate(this.data.duration); // スマホ用振動
        // oculus touch等のコントローラー振動
        /*
        var gamepads = navigator.getGamepads && navigator.getGamepads();
        for (var i = 0; gamepads.length; i++) {
        var gamepad = gamepads[i];
        gamepad.hapticActuators[0].pulse(this.data.value, this.data.duration);
        }
        */
      }
});