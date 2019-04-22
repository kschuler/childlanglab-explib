var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


//var bodyHTML = PARAMS.setup.bodyHTML;

jsPsych.plugins["audio"] = (function() {

  var plugin = {};
  plugin.info = {
    name: "audio",
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
      audio_html:{
          type: jsPsych.plugins.parameterType.HTML_STRING,
          default: '<div>Audio HTML</div>',
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
        //var audioHTML = "<button id=\"btn-start-recording\">Start Recording</button><button id=\"btn-stop-recording\" disabled>Stop Recording</button><button id=\"btn-release-microphone\" disabled>Release Microphone</button><button id=\"btn-download-recording\" disabled>Download</button> <div><audio controls autoplay playsinline></audio></div><script src=\"https://cdn.webrtc-experiment.com/RecordRTC.js\"></script><script src=\"https://webrtc.github.io/adapter/adapter-latest.js\"></script><script> var audio = document.querySelector('audio'); var isEdge=navigator.userAgent.indexOf('Edge')!==-1&&(!!navigator.msSaveOrOpenBlob||!!navigator.msSaveBlob);var isSafari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);var recorder;var microphone;var btnStartRecording=document.getElementById('btn-start-recording');var btnStopRecording=document.getElementById('btn-stop-recording');var btnReleaseMicrophone=document.querySelector('#btn-release-microphone');var btnDownloadRecording=document.getElementById('btn-download-recording');btnStartRecording.onclick=function(){this.disabled=!0;this.style.border='';this.style.fontSize='';if(!microphone){captureMicrophone(function(mic){microphone=mic;if(isSafari){replaceAudio();audio.muted=!0;audio.srcObject=microphone;btnStartRecording.disabled=!1;btnStartRecording.style.border='1px solid red';btnStartRecording.style.fontSize='150%';alert('Please click startRecording button again. First time we tried to access your microphone. Now we will record it.');return}click(btnStartRecording)});return}replaceAudio();audio.muted=!0;audio.srcObject=microphone;var options={type:'audio',numberOfAudioChannels:isEdge?1:2,checkForInactiveTracks:!0,bufferSize:16384};if(isSafari||isEdge){options.recorderType=StereoAudioRecorder}if(navigator.platform&&navigator.platform.toString().toLowerCase().indexOf('win')===-1){options.sampleRate=48000}if(isSafari){options.sampleRate=44100;options.bufferSize=4096;options.numberOfAudioChannels=2}if(recorder){recorder.destroy();recorder=null}recorder=RecordRTC(microphone,options);recorder.startRecording();btnStopRecording.disabled=!1;btnDownloadRecording.disabled=!0};btnStopRecording.onclick=function(){this.disabled=!0;recorder.stopRecording(stopRecordingCallback)};btnReleaseMicrophone.onclick=function(){this.disabled=!0;btnStartRecording.disabled=!1;if(microphone){microphone.stop();microphone=null}if(recorder){}};btnDownloadRecording.onclick=function(){this.disabled=!0;if(!recorder||!recorder.getBlob())return;if(isSafari){recorder.getDataURL(function(dataURL){SaveToDisk(dataURL,getFileName('mp3'))});return}var blob=recorder.getBlob();var file=new File([blob],getFileName('mp3'),{type:'audio/mp3'});invokeSaveAsDialog(file)}  </script>";

        var audioHTML = trail.audio_html;

        console.log('audio plugin!');

        $("head").append(css);
        $(".jspsych-content").append(trial.audio_html);
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
