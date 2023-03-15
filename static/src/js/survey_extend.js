odoo.define('idle_timer.custom_time', function (require) {
   var publicWidget = require('web.public.widget');
   var rpc = require('web.rpc');
   publicWidget.registry.custom_time = publicWidget.Widget.extend({
   selector: '.o_survey_form',
   start : function() {
   this._rpc({
       model: 'ir.config_parameter',
       method: 'get_param',
       args: ['res.config.settings.time'],
   }).then(function(result){
       time = result
   });
   let timer, currSeconds = 0;
   window.onload = resetTimer;
   window.onmousemove = resetTimer;
   window.onmousedown = resetTimer;
   window.ontouchstart = resetTimer;
   window.onclick = resetTimer;
   window.onkeypress = resetTimer;
   function resetTimer() {
      clearTimeout(timer);
      currSeconds=time;
      timer = setInterval(startIdleTimer, 1000);
   }
   function startIdleTimer() {
       currSeconds--;
       this.$('.idle_timer_left').empty();
       this.$('.idle_timer_left').append(currSeconds);
       if (currSeconds == 0){
            $('.btn-primary').click();
            this.$('.idle_timer_left').empty();
            resetTimer();
             }
          }
   }
   });
});