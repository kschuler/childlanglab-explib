---
layout: default
title:  Documentation for Simple Experiment
nav_order: 21
---
# Documentation for Simple Experiment

*This documentation is hosted in [GitHub](https://github.com/kschuler/experiment-library/tree/master/demo-experiment-simple-RA)

*Visted this [Documentation](http://www.kathrynschuler.com/experiment-library/demo-experiment-simple-RA/readme.html)

### The Structure of  the Behavioral experiment - Simple experiment
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
Give instructions for .
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
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE3ODA0NTc3NTEsLTU0NjI0MzU1NSwtMT
I5ODY2ODA3MSw5MTQ5MDIyODIsMTkxNzg1MDk0OSwtNzA4MzY5
MjA3LC0xNzU1MTYwMTA2LDk5NzA4MDgyMiwxMTg5OTgwNzM0LD
E2MDkyOTcxNTAsLTQ5MTYzNTQ3OSwtMTk0MDY5MjE0MCwtODY0
MzAzMDUxLC03MzkzNjUxNDAsMTU4MTQ2Mzk4NiwtMTA1OTQzNz
U3MywyOTY2NTI0NzMsMTc4ODc5NTQ3NSwtMTk2MDcyNDM0NCwx
Nzg2MDU4NTUzXX0=
-->