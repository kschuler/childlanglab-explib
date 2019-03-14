---
layout: default
title:  Documentation for Simple Experiment
nav_order: 21
---
# Documentation for Simple Experiment

[comment] This documentation is hosted in Github: https://github.com/kschuler/experiment-library/tree/master/demo-experiment-simple-RA
[comment] Visted this documentation: http://www.kathrynschuler.com/experiment-library/demo-experiment-simple-RA/readme.html


### Read Me
This is a demo documentation for **simple** experiment. The structure of this **simple** expemiment:


1. HTML file: `demo-experiment-simple-RT/demo-experiment-simple-RT.html`
2. JavaScript file: `js/jspsych-6.0.5/jspsych.js` and  `js/yaml.js`, etc.
3. YAML file: `demo-experiment-simple-RT/params.yaml`provide parameters for HTML file.  It can be injected into HTML file through `yaml.js`

Relation: The HTML file is the skeleton of the experiment. It utilizes JavaScript library  [jsPysch](https://www.jspsych.org/) to implement the interactive experiment. YAML file is to provide parameters for the skeleton of the experiment of HTML file.
```
welcome:
     stimulus: "Welcome to the experiment. Press any key to begin."
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTA3ODk5NTk4Miw5MTQ5MDIyODIsMTkxNz
g1MDk0OSwtNzA4MzY5MjA3LC0xNzU1MTYwMTA2LDk5NzA4MDgy
MiwxMTg5OTgwNzM0LDE2MDkyOTcxNTAsLTQ5MTYzNTQ3OSwtMT
k0MDY5MjE0MCwtODY0MzAzMDUxLC03MzkzNjUxNDAsMTU4MTQ2
Mzk4NiwtMTA1OTQzNzU3MywyOTY2NTI0NzMsMTc4ODc5NTQ3NS
wtMTk2MDcyNDM0NCwxNzg2MDU4NTUzXX0=
-->