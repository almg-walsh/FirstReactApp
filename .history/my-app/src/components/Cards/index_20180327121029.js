import React, { Component } from "react";
import Card from "./components/Card/index";


var labels = ["record",
    "heat",
    "experience",
    "roomy",
    "jumbled",
    "legal",
    "phobic",
    "weary",
    "whine",
    "furry"]

    var i;

    for (i > 1; i < labels.length; i++){
        <Card label={labels[i]}/>
    }
