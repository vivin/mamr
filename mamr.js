/**
 * MAMR: Madeon Adventure Machine Recorder 
 * Author: Vivin Paliath (http://vivin.net)
 *
 * This is a simple script that lets you record button-press sequences on Madeon Adventure Machine.
 * Currently you can only share a static combination of effects, and not a sequence. This script 
 * lets you record a "session" of button presses that you can later play back.
 *
 * This program has no explicit warranty etc. etc. It's not guaranteed to work and will probably 
 * break if the Madeon Adventure Machine changes significantly.
 */

var recorder = (function() {

    var lastTime;
    var buttonSequence;
    var recording = false;
    
    jQuery("madeon-button div").click(function() {
        if(recording) {
            var eventTime = new Date().getTime();
            var interval = 0;
            if(lastTime < 0) {
                lastTime = eventTime;
            } else {
                interval = eventTime - lastTime;
                lastTime = eventTime;
            }

            buttonSequence.push({
                interval: interval, 
                path: getPath(this)
            });
        }
    });

    function startRecording() {
        lastTime = -1;
        buttonSequence = [];
        recording = true;
    }

    function stopRecording() {
        recording = false;
        console.log(JSON.stringify(buttonSequence));
    }

    function playRecording(buttonSequence) {
        jQuery(buttonSequence[0].path).click();

        (function play(i) {
            if(i < buttonSequence.length) {
                var button = buttonSequence[i];
                var path = button.path;
                var timeout = button.interval;

                setTimeout(function() {
                    jQuery(path).click();
                    play(++i);
                }, timeout);
            }
        })(1);
    }

    //From: http://stackoverflow.com/questions/2068272/getting-a-jquery-selector-for-an-element
    //I needed a way to uniquely identify an element.
    function getPath(node) {
        if (node.length != 1) throw 'Requires one element.';

        var path;
        while (node.length) {
            var realNode = node[0], name = realNode.localName;
            if (!name) break;
            name = name.toLowerCase();

            var parent = node.parent();

            var siblings = parent.children(name);
            if (siblings.length > 1) { 
                name += ':eq(' + siblings.index(realNode) + ')';
            }

            path = name + (path ? '>' + path : '');
            node = parent;
        }

        return path;
    }

    return {
        startRecording: startRecording,
        stopRecording: stopRecording,
        playRecording: playRecording
    };
})();
