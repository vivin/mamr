MAMR
====

Lets you record button-press sequences on [Madeon Adventure Machine](http://www.madeon.fr/adventuremachine/?). Normally, the site only lets you share a static combination of buttons. This script lets you record a sequence of button-presses that you can later play back. Obviously this script isn't all that user-friendly and I'm not sure if I've caught all bugs. I just whipped it up quickly. I've only tested it on Chrome, and I may turn this into a Chrome extension at some point. Here's how you use it: 

 - Copy `mamr.js` into your clipboard.
 - Open up the browser console once you're on the Adventure Machine website (for Chrome, just press Ctrl+Shift+J; I think it's the same for Firefox. I have no clue what it is for IE).
 - Paste the contents of `mamr.js` into the console and hit enter. Then, to start recording, type `recorder.startRecording()` and hit enter. Now your button-presses will be recorded.
 - Once you are satisfied with your creation, open up the console and type `recorder.stopRecording()`. The console will now spit out something that looks like this (but all in one line):

```javascript
[
   {
      "interval":0,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(24)>div"
   },
   {
      "interval":8544,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(2)>div"
   },
   {
      "interval":8835,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(27)>div"
   },
   {
      "interval":595,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(21)>div"
   },
   {
      "interval":549,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(22)>div"
   },
   {
      "interval":4964,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(13)>div"
   },
   {
      "interval":554,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(7)>div"
   },
   {
      "interval":497,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(8)>div"
   },
   {
      "interval":3850,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(20)>div"
   },
   {
      "interval":475,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(14)>div"
   },
   {
      "interval":515,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(15)>div"
   },
   {
      "interval":4284,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(6)>div"
   },
   {
      "interval":308,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(0)>div"
   },
   {
      "interval":293,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(1)>div"
   },
   {
      "interval":2304,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(20)>div"
   },
   {
      "interval":683,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(14)>div"
   },
   {
      "interval":448,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(15)>div"
   },
   {
      "interval":2905,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(13)>div"
   },
   {
      "interval":465,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(7)>div"
   },
   {
      "interval":528,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(8)>div"
   },
   {
      "interval":4261,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(6)>div"
   },
   {
      "interval":539,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(0)>div"
   },
   {
      "interval":528,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(1)>div"
   },
   {
      "interval":2325,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(27)>div"
   },
   {
      "interval":493,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(21)>div"
   },
   {
      "interval":432,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(22)>div"
   },
   {
      "interval":2925,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(7)>div"
   },
   {
      "interval":868,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(14)>div"
   },
   {
      "interval":1172,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(21)>div"
   },
   {
      "interval":4967,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(21)>div"
   },
   {
      "interval":2641,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(6)>div"
   },
   {
      "interval":1035,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(1)>div"
   },
   {
      "interval":3975,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(6)>div"
   },
   {
      "interval":1900,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(6)>div"
   },
   {
      "interval":3924,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(6)>div"
   },
   {
      "interval":2686,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(6)>div"
   },
   {
      "interval":3994,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(6)>div"
   },
   {
      "interval":1723,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(6)>div"
   },
   {
      "interval":3057,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(6)>div"
   },
   {
      "interval":2017,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(6)>div"
   },
   {
      "interval":8978,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(21)>div"
   },
   {
      "interval":2173,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(1)>div"
   },
   {
      "interval":2031,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(6)>div"
   },
   {
      "interval":4426,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(2)>div"
   },
   {
      "interval":7076,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(24)>div"
   }
]
```

 - Copy that and save it somewhere. This is your recording. To play it back, call `recorder.playRecording` and pass in that entire thing as an argument, and press enter. So you'd basically do this:

```javascript
recorder.playRecording([
   {
      "interval":0,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(24)>div"
   },
   {
      "interval":8544,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(2)>div"
   },
   {
      "interval":8835,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(27)>div"
   },
   {
      "interval":595,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(21)>div"
   },
   {
      "interval":549,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(22)>div"
   },
   {
      "interval":4964,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(13)>div"
   },
   {
      "interval":554,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(7)>div"
   },
   {
      "interval":497,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(8)>div"
   },
   {
      "interval":3850,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(20)>div"
   },
   {
      "interval":475,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(14)>div"
   },
   {
      "interval":515,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(15)>div"
   },
   {
      "interval":4284,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(6)>div"
   },
   {
      "interval":308,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(0)>div"
   },
   {
      "interval":293,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(1)>div"
   },
   {
      "interval":2304,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(20)>div"
   },
   {
      "interval":683,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(14)>div"
   },
   {
      "interval":448,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(15)>div"
   },
   {
      "interval":2905,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(13)>div"
   },
   {
      "interval":465,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(7)>div"
   },
   {
      "interval":528,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(8)>div"
   },
   {
      "interval":4261,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(6)>div"
   },
   {
      "interval":539,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(0)>div"
   },
   {
      "interval":528,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(1)>div"
   },
   {
      "interval":2325,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(27)>div"
   },
   {
      "interval":493,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(21)>div"
   },
   {
      "interval":432,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(22)>div"
   },
   {
      "interval":2925,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(7)>div"
   },
   {
      "interval":868,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(14)>div"
   },
   {
      "interval":1172,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(21)>div"
   },
   {
      "interval":4967,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(21)>div"
   },
   {
      "interval":2641,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(6)>div"
   },
   {
      "interval":1035,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(1)>div"
   },
   {
      "interval":3975,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(6)>div"
   },
   {
      "interval":1900,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(6)>div"
   },
   {
      "interval":3924,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(6)>div"
   },
   {
      "interval":2686,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(6)>div"
   },
   {
      "interval":3994,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(6)>div"
   },
   {
      "interval":1723,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(6)>div"
   },
   {
      "interval":3057,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(6)>div"
   },
   {
      "interval":2017,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(6)>div"
   },
   {
      "interval":8978,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(21)>div"
   },
   {
      "interval":2173,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(1)>div"
   },
   {
      "interval":2031,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(6)>div"
   },
   {
      "interval":4426,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(2)>div"
   },
   {
      "interval":7076,
      "path":"html>body>epic-lols>album-art>div:eq(3)>madeon-button:eq(24)>div"
   }
]);
```

**Note:** If you haven't pasted `mamr.js` into the console, you **won't** be able to play back your recording! So make sure you paste that in first, **before** you attempt to play your recording.
