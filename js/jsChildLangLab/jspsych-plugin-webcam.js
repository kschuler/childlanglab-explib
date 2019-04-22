var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
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
        
        //var button = trail.button_html;
        var videoHTML = '<video id="myVideo" class="video-js vjs-default-skin"></video><!-- Load video.js -->        <script src="videoplayer-js/video.min.js"></script>        <!-- Load RecordRTC core and adapter to provide cross brower support-->        <script src="record-rtc/RecordRTC.js"></script>        <script src="record-rtc/adapter.js"></script><!-- Load VideoJS Record Extension -->        <script src="video-js/videojs.record.js"></script><script>var videoMaxLengthInSeconds=120,player=videojs("myVideo",{controls:!0,width:720,height:480,fluid:!1,plugins:{record:{audio:!0,video:!0,maxLength:videoMaxLengthInSeconds,debug:!0,videoMimeType:"video/webm;codecs=H264"}}},function(){videojs.log("Using video.js",videojs.VERSION,"with videojs-record",videojs.getPluginVersion("record"),"and recordrtc",RecordRTC.version)});player.on("deviceError",function(){console.log("device error:",player.deviceErrorCode)}),player.on("error",function(e){console.log("error:",e)}),player.on("startRecord",function(){console.log("started recording! Do whatever you need to")}),player.on("finishRecord",function(){console.log("finished recording: ",player.recordedData);var e,o,r,d,n=new FormData;n.append("video",player.recordedData.video),e="./upload-video.php",o=n,r=function(e){console.log("Video succesfully uploaded !")},(d=new XMLHttpRequest).onreadystatechange=function(){4==d.readyState&&200==d.status&&r(location.href+d.responseText)},d.open("POST",e),d.send(o)});</script>';
      
        var css = '<link href=videoplayer-js/video-js.min.css rel=stylesheet><link href=video-js/videojs.record.css rel=stylesheet>';
      
        console.log('webcam plugin!');
      
        $("head").append(css); 
        $(".jspsych-content").append(videoHTML); 
        $(".jspsych-content").append(trial.stimulus);
        $(".jspsych-content").append(trial.button_html);
        $(".jspsych-btn").click( end_trial);
        
        
        if (trial.trial_duration !== null) {
          jsPsych.pluginAPI.setTimeout(function() {
            end_trial();
          }, trial.trial_duration);
        }

  };
    

  return plugin;
})();
