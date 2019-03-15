---
layout: default
title:  Simple Experiment
nav_order: 21
---
# Documentation for Simple Experiment

*This documentation is hosted in [GitHub](https://github.com/kschuler/experiment-library/tree/master/demo-experiment-simple-RA)

*Visted this [Documentation](http://www.kathrynschuler.com/experiment-library/demo-experiment-simple-RA/readme.html)
### Goal for this Simple Experiments
This simple experiment is a demo from jsPsych
The task is to press one key for a blue colored circle and another key for an orange colored circle

### The Structure of  the Simple Experiment
This is a demo documentation for `simple experiment`. The **structure** of this `simple expemiment`:


1. HTML file: `demo-experiment-simple-RT/demo-experiment-simple-RT.html`
2. JavaScript file: `js/jspsych-6.0.5/jspsych.js` and  `js/yaml.js`, etc.
3. YAML file: `demo-experiment-simple-RT/params.yaml`provide parameters for HTML file.  It can be injected into HTML file through `yaml.js` .

Relation: The HTML file is the skeleton of the behavioral experiment. It mainly utilizes JavaScript library  [jsPysch](https://www.jspsych.org/) to implement the interactive experiment. YAML file is to provide parameters for the skeleton of the experiment of HTML file. 

## How to use YAML file
We prove an example on how to implements the yaml file, that is, how to provide parameter for the skeleton for the experiments.

### Welcome and Instruction 
Provide welcom message on the landing page.
```
welcome:
     stimulus: "Welcome to the experiment. Press any key to begin!"
```
### Give Instructions to users 
Tip: use `>` to render content in one line. 
```
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
* Set up the path for images and tag name for 
```
test_stimuli: 
    tag: 'test' # set the path 
    blue:
        path: "img/blue.png" # set the path 
        key: 'f' # set the correct response
    orange:
        path: "img/orange.png"
        key: 'j'

fixation:
    stimulus: '<div style="font-size:60px;">+</div>'
    durations_possibilities: [250, 500, 750, 1000, 1250, 1500, 1750, 2000]
    tag: 'fixation'

```
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTQzMDMyMjM1NCwxNTM3NTExNjU0LC0xMT
I5OTcyMDIzLC01NDYyNDM1NTUsLTEyOTg2NjgwNzEsOTE0OTAy
MjgyLDE5MTc4NTA5NDksLTcwODM2OTIwNywtMTc1NTE2MDEwNi
w5OTcwODA4MjIsMTE4OTk4MDczNCwxNjA5Mjk3MTUwLC00OTE2
MzU0NzksLTE5NDA2OTIxNDAsLTg2NDMwMzA1MSwtNzM5MzY1MT
QwLDE1ODE0NjM5ODYsLTEwNTk0Mzc1NzMsMjk2NjUyNDczLDE3
ODg3OTU0NzVdfQ==
-->