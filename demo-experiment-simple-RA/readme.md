---
layout: default
title:  Simple Experiment
nav_order: 21
---
# Documentation for Simple Experiment

* This documentation is hosted in [GitHub](https://github.com/kschuler/experiment-library/tree/master/demo-experiment-simple-RA)

* Visted this [Documentation](http://www.kathrynschuler.com/experiment-library/demo-experiment-simple-RA/readme.html)
### Goal for this Simple Experiments
This simple experiment is from [jsPsych Tutorial](https://www.jspsych.org/tutorials/rt-task/). The task is to press one key for a blue colored circle and another key for an orange colored circle.

### The Structure of  the Simple Experiment
This is a demo documentation for `simple experiment`. The **structure** of this `simple expemiment`:


1. HTML file: `demo-experiment-simple-RT/demo-experiment-simple-RT.html`
2. JavaScript file: `js/jspsych-6.0.5/jspsych.js` and  `js/yaml.js`, etc.
3. YAML file: `demo-experiment-simple-RT/params.yaml`provide parameters for HTML file.  It can be injected into HTML file through `yaml.js` .

The HTML file is the skeleton of the behavioral experiment. It mainly utilizes JavaScript library  [jsPysch](https://www.jspsych.org/) to implement the interactive experiment. YAML file is to provide parameters for the skeleton of the experiment of HTML file. 

## How to Modify YAML file
We prove an example on how to implements the yaml file, that is, how to provide parameter for the skeleton for the experiments.

### Welcome and Instruction 
Provide welcom message on the landing page.
```yaml
welcome:
     stimulus: "Welcome to the experiment. Press any key to begin!"
```
### Give Instructions to users 
Tip: use `>` to render content in one line. 
```yaml
instructions:
    stimulus: >
        <p>In this experiment, a circle will appear in the center
        of the screen.</p><p>If the circle is <strong>blue</strong>,
        press the letter F on the keyboard as fast as you can.</p>
        <p>If the circle is <strong>orange</strong>, press the letter J
        as fast as you can.</p>
        <div style='width: 700px;'>
        <div style='float: left;'><img src='img/blue.png'></img>
        <p class='small'><strong>Press the F key</strong></p></div>
        <div class='float: right;'><img src='img/orange.png'></img>
        <p class='small'><strong>Press the J key</strong></p></div>
        </div>
        <p>Press any key to begin.</p>
```
### Set Up Test Trial
* Define the tag for the experiments, it make your life easier when you want to calculate the test results.
* Set up the path for images and tags and other details.
```yaml
test_stimuli: 
	# set the path 
    tag: 'test' 
    blue:
	    # set the path 
        path: "img/blue.png"   
        # set the correct response
        key: 'f' 
    orange:
        path: "img/orange.png"
        key: 'j'

fixation:
    stimulus: '<div style="font-size:60px;">+</div>'
    durations_possibilities: 
    # the options for random time interval between tests.
    [250, 500, 750, 1000, 1250, 1500, 1750, 2000]
    # set the tag for fixation.
    tag: 'fixation'
    

```
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE0NTExMDEwMzMsMTA3MDU3OTYwLDE1Mz
c1MTE2NTQsLTExMjk5NzIwMjMsLTU0NjI0MzU1NSwtMTI5ODY2
ODA3MSw5MTQ5MDIyODIsMTkxNzg1MDk0OSwtNzA4MzY5MjA3LC
0xNzU1MTYwMTA2LDk5NzA4MDgyMiwxMTg5OTgwNzM0LDE2MDky
OTcxNTAsLTQ5MTYzNTQ3OSwtMTk0MDY5MjE0MCwtODY0MzAzMD
UxLC03MzkzNjUxNDAsMTU4MTQ2Mzk4NiwtMTA1OTQzNzU3Mywy
OTY2NTI0NzNdfQ==
-->