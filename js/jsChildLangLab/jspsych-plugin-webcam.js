var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);



//var bodyHTML = PARAMS.setup.bodyHTML;

jsPsych.plugins["webcam"] = (function() {

  var plugin = {};
  plugin.info = {
    name: "webcam",
    parameters: {
      idx: {
        type: jsPsych.plugins.parameterType.INT,
        default: 0
      },
      stimulus: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        default: '<div>Instruction goes here...</div>',
        description: 'The HTML string to be added'
      },
      trial_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Trial duration',
        default: 3000,
        description: 'How long to show trial before it ends.'
      },
      button_html: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'Button HTML',
        //default: '<button class="jspsych-btn">%Continue%</button>',
        default: '<button class = "jspsych-btn">Continue</button>',
        array: true,
        description: 'Custom button. Can make your own style.'
      },
      video_html:{
        type: jsPsych.plugins.parameterType.HTML_STRING,
        default: '<div>video html</div>',
        description: 'The HTML string to be added'
      }

    }
  }


  plugin.trial = function(display_element, trial) {
        // function to end trial when it is time

        var end_trial = function() {

          // kill any remaining setTimeout handlers
          jsPsych.pluginAPI.clearAllTimeouts();

          // kill keyboard listeners
          if (typeof keyboardListener !== 'undefined') {
            jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
          }

          // store response
            var response = {
              rt: null,
              button: null
            };
          // gather the data to store for the trial
          var trial_data = {
            "rt": response.rt,
            "stimulus": trial.stimulus,
            "key_press": response.key
          };


        function stopWebCam(){
            video.pause();
            localMediaStream.stop();
            $('video').fadeOut(500);
            $("#ghostCanvas").hide();
        }


          // clear the display
          display_element.innerHTML = '';

          // move on to the next trial
          jsPsych.finishTrial(trial_data);

        };


        var css = '<style>    html, body {        margin: 0!important;        padding: 0!important;    }</style>';


        console.log('webcam plugin!');

        $("head").append(css);
        $(".jspsych-content").append(trial.video_html);
        $(".jspsych-content").append(trial.stimulus);
        $(".jspsych-content").append(trial.button_html);
        $(".jspsych-btn").click( end_trial );

        
        if (trial.trial_duration !== null) {
          jsPsych.pluginAPI.setTimeout(function() {
            end_trial();
          }, trial.trial_duration);
        }

  };


  return plugin;
})();
