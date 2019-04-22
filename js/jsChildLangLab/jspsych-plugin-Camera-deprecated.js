/*
 * Example plugin template
 */

jsPsych.plugins["show"] = (function() {

  var plugin = {};
  plugin.info = {
    name: "show",
    parameters: {
      idx: {
        type: jsPsych.plugins.parameterType.INT, 
        default: 0
      }
    }
  }
  
  plugin.trial = function(display_element, trial) {

    const holes = document.querySelectorAll('.hole');
    const moles = document.querySelectorAll('.mole');
    const bonkSound = document.querySelector('audio');
    const scoreBoard = document.querySelector('.score');
    var i = trial.idx; 
    //console.log( "i = " + i);
    let hole = holes[i];
      
    hole.classList.add('up');
      
    function bonk(e) {
      console.log("bonk!");
      hole = holes[i];
      hole.classList.remove('up');
      bonkSound.play();
      //scoreBoard.classList.remove('add');
      //scoreBoard.classList.add('add');
      //console.log("score = "+score);
      //score++;
      afterResponse();    
    }
      
    moles.forEach( mole => {
        mole.addEventListener('click', bonk);
    } );
      
    // start timing
    var start_time = performance.now();
      
    // store response
    var response = {
      rt: null,
      button: null  
    };
      
    // function to handle responses by the subject
    function afterResponse() {
      console.log(" After_response!");
      hole.classList.remove('up');
        
      moles.forEach( mole => {
        mole.removeEventListener('click', bonk);
      } );    
      // measure rt
      var end_time = performance.now();
      var rt = end_time - start_time;
      response.rt = rt;
      end_trial();
        
    };   
        
    // function to end trial when` it is time
    function end_trial() {
        hole.classList.remove('up');
        console.log("end_trial !!!!!!!!");    
        jsPsych.pluginAPI.clearAllTimeouts();

      // gather the data to store for the trial
      var trial_data = {
        "rt": response.rt
      };

      // clear the display
      display_element.innerHTML = '';
          
      // move on to the next trial
      jsPsych.finishTrial(trial_data);
    };// end_trial
  }// end plugin.trial
  return plugin;
})();
