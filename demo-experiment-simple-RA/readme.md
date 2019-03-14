---
layout: default
title:  Documentation for Simple Experiment
nav_order: 21
---
# Documentation for Simple Experiment

*This documentation is hosted in [GitHub](https://github.com/kschuler/experiment-library/tree/master/demo-experiment-simple-RA)

*Visted this [Documentation](http://www.kathrynschuler.com/experiment-library/demo-experiment-simple-RA/readme.html)

### Read Me
This is a demo documentation for `simple experiment`. The **structure** of this `simple expemiment`:


1. HTML file: `demo-experiment-simple-RT/demo-experiment-simple-RT.html`
2. JavaScript file: `js/jspsych-6.0.5/jspsych.js` and  `js/yaml.js`, etc.
3. YAML file: `demo-experiment-simple-RT/params.yaml`provide parameters for HTML file.  It can be injected into HTML file through `yaml.js` .

Relation: The HTML file is the skeleton of the experiment. It mainly utilizes JavaScript library  [jsPysch](https://www.jspsych.org/) to implement the interactive experiment. YAML file is to provide parameters for the skeleton of the experiment of HTML file. 

### Welcome part
Provide welcom message on the landing page.
```
welcome:
     stimulus: "Welcome to the experiment. Press any key to begin!"
```

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE5MTY5NjYxMzAsLTEyOTg2NjgwNzEsOT
E0OTAyMjgyLDE5MTc4NTA5NDksLTcwODM2OTIwNywtMTc1NTE2
MDEwNiw5OTcwODA4MjIsMTE4OTk4MDczNCwxNjA5Mjk3MTUwLC
00OTE2MzU0NzksLTE5NDA2OTIxNDAsLTg2NDMwMzA1MSwtNzM5
MzY1MTQwLDE1ODE0NjM5ODYsLTEwNTk0Mzc1NzMsMjk2NjUyND
czLDE3ODg3OTU0NzUsLTE5NjA3MjQzNDQsMTc4NjA1ODU1M119

-->