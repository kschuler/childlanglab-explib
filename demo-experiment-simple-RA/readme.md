---
layout: default
title:  Documentation for Simple Experiment
nav_order: 21
---
# Documentation for Simple Experiment

*This documentation is hosted in [GitHub]https://github.com/kschuler/experiment-library/tree/master/demo-experiment-simple-RA)
*Visted this [Documentation](http://www.kathrynschuler.com/experiment-library/demo-experiment-simple-RA/readme.html
)

### Read Me
This is a demo documentation for **simple** experiment. The structure of this **simple** expemiment:


1. HTML file: `demo-experiment-simple-RT/demo-experiment-simple-RT.html`
2. JavaScript file: `js/jspsych-6.0.5/jspsych.js` and  `js/yaml.js`, etc.
3. YAML file: `demo-experiment-simple-RT/params.yaml`provide parameters for HTML file.  It can be injected into HTML file through `yaml.js` .

Relation: The HTML file is the skeleton of the experiment. It utilizes JavaScript library  [jsPysch](https://www.jspsych.org/) to implement the interactive experiment. YAML file is to provide parameters for the skeleton of the experiment of HTML file. 

### Welcome part
Provide welcom message on the landing page.
```
welcome:
     stimulus: "Welcome to the experiment. Press any key to begin."
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTA0ODE4OTU3OSwtMTI5ODY2ODA3MSw5MT
Q5MDIyODIsMTkxNzg1MDk0OSwtNzA4MzY5MjA3LC0xNzU1MTYw
MTA2LDk5NzA4MDgyMiwxMTg5OTgwNzM0LDE2MDkyOTcxNTAsLT
Q5MTYzNTQ3OSwtMTk0MDY5MjE0MCwtODY0MzAzMDUxLC03Mzkz
NjUxNDAsMTU4MTQ2Mzk4NiwtMTA1OTQzNzU3MywyOTY2NTI0Nz
MsMTc4ODc5NTQ3NSwtMTk2MDcyNDM0NCwxNzg2MDU4NTUzXX0=

-->