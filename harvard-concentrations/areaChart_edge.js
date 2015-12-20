/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'amcsstat',
            type:'image',
            tag:'img',
            rect:['0px','0px','627px','456px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"amcsstat.png",'0px','0px']
         },
         {
            id:'Rectangle',
            type:'rect',
            rect:['43px','238px','576px','191px','auto','auto'],
            fill:["rgba(0,0,0,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'RectangleCopy',
            type:'rect',
            rect:['542px','138px','72px','118px','auto','auto'],
            fill:["rgba(0,0,0,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'RectangleCopy2',
            type:'rect',
            rect:['412px','191px','207px','118px','auto','auto'],
            fill:["rgba(0,0,0,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'_2000',
            type:'text',
            rect:['1px','463px','611px','64px','auto','auto'],
            text:"2000: The dot-com bubble reaches its peak and bursts<br>",
            align:"left",
            font:['Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'_2003',
            type:'text',
            rect:['1px','463px','611px','64px','auto','auto'],
            text:"2003: NASDAQ reaches its lowest point",
            align:"left",
            font:['Arial, Helvetica, sans-serif',24,"rgba(255,255,255,0.00)","normal","none","normal"]
         },
         {
            id:'_2006',
            type:'text',
            rect:['1px','463px','611px','64px','auto','auto'],
            text:"2006: Computer Science reaches its lowest number of concentrators",
            align:"left",
            font:['Arial, Helvetica, sans-serif',24,"rgba(255,255,255,0.00)","normal","none","normal"]
         },
         {
            id:'_2007',
            type:'text',
            rect:['1px','463px','611px','64px','auto','auto'],
            text:"2007: SEAS is created as a separate school",
            align:"left",
            font:['Arial, Helvetica, sans-serif',24,"rgba(255,255,255,0.00)","normal","none","normal"]
         },
         {
            id:'_2008',
            type:'text',
            rect:['1px','463px','611px','64px','auto','auto'],
            text:"2008: The Financial Crisis",
            align:"left",
            font:['Arial, Helvetica, sans-serif',24,"rgba(255,255,255,0.00)","normal","none","normal"]
         },
         {
            id:'_2012',
            type:'text',
            rect:['1px','463px','611px','64px','auto','auto'],
            text:"2012: Decreased confidence in the financial industry, better resources, and the recent startup trend contribute to an all-time high number of concentrators.",
            align:"left",
            font:['Arial, Helvetica, sans-serif',24,"rgba(255,255,255,0.00)","normal","none","normal"]
         },
         {
            id:'Text',
            type:'text',
            rect:['54px','256px','524px','131px','auto','auto'],
            text:"Click to start",
            align:"left",
            font:['Arial, Helvetica, sans-serif',75,"rgba(255,255,255,1)","normal","none","normal"]
         },
         {
            id:'Text2',
            type:'text',
            rect:['54px','83px','320px','118px','auto','auto'],
            text:"Click to replay",
            align:"left",
            font:['Arial, Helvetica, sans-serif',75,"rgba(255,255,255,0)","normal","none","normal"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${__2007}": [
            ["color", "color", 'rgba(255,255,255,0)'],
            ["style", "top", '463px'],
            ["style", "left", '1px'],
            ["style", "width", '726px']
         ],
         "${__2006}": [
            ["color", "color", 'rgba(255,255,255,0)'],
            ["style", "top", '463px'],
            ["style", "left", '1px'],
            ["style", "width", '643px']
         ],
         "${__2000}": [
            ["style", "top", '463px'],
            ["style", "left", '1px'],
            ["color", "color", 'rgba(255,255,255,0.00)']
         ],
         "${__2012}": [
            ["style", "top", '463px'],
            ["color", "color", 'rgba(255,255,255,0)'],
            ["style", "width", '643px'],
            ["style", "left", '1px'],
            ["style", "font-size", '20px']
         ],
         "${_Text2}": [
            ["style", "top", '83px'],
            ["style", "height", '118px'],
            ["style", "width", '320px'],
            ["style", "bottom", 'auto'],
            ["color", "color", 'rgba(255,255,255,0)'],
            ["style", "right", 'auto'],
            ["style", "left", '54px'],
            ["style", "font-size", '75px']
         ],
         "${_RectangleCopy}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '118px'],
            ["style", "top", '138px'],
            ["style", "left", '542px'],
            ["style", "width", '72px']
         ],
         "${_Text}": [
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "top", '256px'],
            ["style", "left", '102px'],
            ["style", "font-size", '75px']
         ],
         "${_RectangleCopy2}": [
            ["color", "background-color", 'rgba(0,0,0,1)'],
            ["style", "height", '118px'],
            ["style", "top", '191px'],
            ["style", "left", '412px'],
            ["style", "width", '207px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '527px'],
            ["style", "width", '644px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '191px'],
            ["style", "top", '238px'],
            ["style", "left", '27px'],
            ["style", "width", '592px']
         ],
         "${__2003}": [
            ["style", "top", '463px'],
            ["style", "left", '1px'],
            ["color", "color", 'rgba(255,255,255,0.00)']
         ],
         "${__2008}": [
            ["color", "color", 'rgba(255,255,255,0)'],
            ["style", "top", '463px'],
            ["style", "left", '1px'],
            ["style", "width", '726px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 23884,
         autoPlay: false,
         timeline: [
            { id: "eid107", tween: [ "style", "${_RectangleCopy2}", "width", '0px', { fromValue: '207px'}], position: 16500, duration: 2380 },
            { id: "eid87", tween: [ "color", "${__2007}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0)'}], position: 8903, duration: 1362 },
            { id: "eid88", tween: [ "color", "${__2007}", "color", 'rgba(255,255,255,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 11523, duration: 384 },
            { id: "eid155", tween: [ "color", "${_Text2}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0)'}], position: 22000, duration: 0 },
            { id: "eid162", tween: [ "color", "${_Text2}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 23500, duration: 0 },
            { id: "eid135", tween: [ "style", "${__2012}", "font-size", '20px', { fromValue: '20px'}], position: 15620, duration: 0 },
            { id: "eid136", tween: [ "style", "${__2012}", "font-size", '20px', { fromValue: '20px'}], position: 19326, duration: 0 },
            { id: "eid105", tween: [ "style", "${__2012}", "font-size", '20px', { fromValue: '20px'}], position: 19862, duration: 0 },
            { id: "eid110", tween: [ "style", "${_RectangleCopy}", "left", '586px', { fromValue: '542px'}], position: 18000, duration: 500 },
            { id: "eid112", tween: [ "style", "${_RectangleCopy}", "left", '612px', { fromValue: '586px'}], position: 18500, duration: 380 },
            { id: "eid94", tween: [ "color", "${__2008}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0)'}], position: 13000, duration: 1362 },
            { id: "eid95", tween: [ "color", "${__2008}", "color", 'rgba(255,255,255,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 15620, duration: 384 },
            { id: "eid48", tween: [ "style", "${_Rectangle}", "left", '45px', { fromValue: '27px'}], position: 0, duration: 1000 },
            { id: "eid52", tween: [ "style", "${_Rectangle}", "left", '169px', { fromValue: '45px'}], position: 1500, duration: 1250 },
            { id: "eid78", tween: [ "style", "${_Rectangle}", "left", '314px', { fromValue: '169px'}], position: 4634, duration: 862 },
            { id: "eid85", tween: [ "style", "${_Rectangle}", "left", '364px', { fromValue: '314px'}], position: 8500, duration: 500 },
            { id: "eid92", tween: [ "style", "${_Rectangle}", "left", '412px', { fromValue: '364px'}], position: 12250, duration: 1250 },
            { id: "eid99", tween: [ "style", "${_Rectangle}", "left", '619px', { fromValue: '412px'}], position: 16500, duration: 2380 },
            { id: "eid139", tween: [ "color", "${_Text}", "color", 'rgba(255,255,255,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 500 },
            { id: "eid138", tween: [ "style", "${_Text}", "left", '102px', { fromValue: '102px'}], position: 0, duration: 0 },
            { id: "eid111", tween: [ "style", "${_RectangleCopy}", "width", '28px', { fromValue: '72px'}], position: 18000, duration: 500 },
            { id: "eid113", tween: [ "style", "${_RectangleCopy}", "width", '2px', { fromValue: '28px'}], position: 18500, duration: 380 },
            { id: "eid159", tween: [ "style", "${_Text2}", "font-size", '35px', { fromValue: '75px'}], position: 0, duration: 22000 },
            { id: "eid164", tween: [ "style", "${_Text2}", "font-size", '35px', { fromValue: '35px'}], position: 22000, duration: 0 },
            { id: "eid160", tween: [ "style", "${_Text2}", "font-size", '35px', { fromValue: '35px'}], position: 23500, duration: 0 },
            { id: "eid157", tween: [ "style", "${_Text2}", "top", '138px', { fromValue: '83px'}], position: 22000, duration: 0 },
            { id: "eid161", tween: [ "style", "${_Text2}", "top", '138px', { fromValue: '138px'}], position: 23500, duration: 0 },
            { id: "eid165", tween: [ "style", "${__2006}", "width", '643px', { fromValue: '643px'}], position: 0, duration: 0 },
            { id: "eid166", tween: [ "style", "${__2006}", "width", '643px', { fromValue: '643px'}], position: 5496, duration: 0 },
            { id: "eid167", tween: [ "style", "${__2006}", "width", '643px', { fromValue: '643px'}], position: 6322, duration: 0 },
            { id: "eid168", tween: [ "style", "${__2006}", "width", '643px', { fromValue: '643px'}], position: 6858, duration: 0 },
            { id: "eid66", tween: [ "color", "${__2000}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0)'}], position: 0, duration: 1000 },
            { id: "eid68", tween: [ "color", "${__2000}", "color", 'rgba(255,255,255,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 1500, duration: 500 },
            { id: "eid69", tween: [ "color", "${__2003}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0)'}], position: 2250, duration: 1362 },
            { id: "eid72", tween: [ "color", "${__2003}", "color", 'rgba(255,255,255,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 4250, duration: 384 },
            { id: "eid158", tween: [ "style", "${_Text2}", "left", '66px', { fromValue: '54px'}], position: 22000, duration: 0 },
            { id: "eid163", tween: [ "style", "${_Text2}", "left", '66px', { fromValue: '66px'}], position: 23500, duration: 0 },
            { id: "eid89", tween: [ "style", "${__2007}", "width", '726px', { fromValue: '726px'}], position: 9729, duration: 0 },
            { id: "eid96", tween: [ "style", "${__2008}", "width", '726px', { fromValue: '726px'}], position: 13826, duration: 0 },
            { id: "eid140", tween: [ "style", "${_Stage}", "width", '644px', { fromValue: '644px'}], position: 0, duration: 0 },
            { id: "eid106", tween: [ "style", "${_RectangleCopy2}", "left", '619px', { fromValue: '412px'}], position: 16500, duration: 2380 },
            { id: "eid49", tween: [ "style", "${_Rectangle}", "width", '574px', { fromValue: '592px'}], position: 0, duration: 1000 },
            { id: "eid53", tween: [ "style", "${_Rectangle}", "width", '450px', { fromValue: '574px'}], position: 1500, duration: 1250 },
            { id: "eid79", tween: [ "style", "${_Rectangle}", "width", '305px', { fromValue: '450px'}], position: 4634, duration: 862 },
            { id: "eid86", tween: [ "style", "${_Rectangle}", "width", '255px', { fromValue: '305px'}], position: 8500, duration: 500 },
            { id: "eid93", tween: [ "style", "${_Rectangle}", "width", '207px', { fromValue: '255px'}], position: 12250, duration: 1250 },
            { id: "eid100", tween: [ "style", "${_Rectangle}", "width", '0px', { fromValue: '207px'}], position: 16500, duration: 2380 },
            { id: "eid169", tween: [ "style", "${__2012}", "width", '643px', { fromValue: '643px'}], position: 0, duration: 0 },
            { id: "eid170", tween: [ "style", "${__2012}", "width", '643px', { fromValue: '643px'}], position: 19326, duration: 0 },
            { id: "eid171", tween: [ "style", "${__2012}", "width", '643px', { fromValue: '643px'}], position: 19862, duration: 0 },
            { id: "eid73", tween: [ "color", "${__2006}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0)'}], position: 5496, duration: 1362 },
            { id: "eid74", tween: [ "color", "${__2006}", "color", 'rgba(255,255,255,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 8116, duration: 384 },
            { id: "eid101", tween: [ "color", "${__2012}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0)'}], position: 18500, duration: 1362 },
            { id: "eid102", tween: [ "color", "${__2012}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 23500, duration: 384 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-1408421314");
