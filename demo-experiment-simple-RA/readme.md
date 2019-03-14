---
layout: default
title:  Documentation for Simple Experiment
nav_order: 21
---
# Documentation for Simple Experiment

*This documentation is hosted in [GitHub](https://github.com/kschuler/experiment-library/tree/master/demo-experiment-simple-RA)

[ comment]: # (Visted this [Documentation](http://www.kathrynschuler.com/experiment-library/demo-experiment-simple-RA/readme.html))

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
eyJoaXN0b3J5IjpbNDExNDQyNzY2LC0xMjk4NjY4MDcxLDkxND
kwMjI4MiwxOTE3ODUwOTQ5LC03MDgzNjkyMDcsLTE3NTUxNjAx
MDYsOTk3MDgwODIyLDExODk5ODA3MzQsMTYwOTI5NzE1MCwtND
kxNjM1NDc5LC0xOTQwNjkyMTQwLC04NjQzMDMwNTEsLTczOTM2
NTE0MCwxNTgxNDYzOTg2LC0xMDU5NDM3NTczLDI5NjY1MjQ3My
wxNzg4Nzk1NDc1LC0xOTYwNzI0MzQ0LDE3ODYwNTg1NTNdfQ==

-->