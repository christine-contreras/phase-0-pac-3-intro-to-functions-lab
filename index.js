function shout(string) {
    return string.toUpperCase();
}


function whisper(string) {
    return string.toLowerCase();
}


function logShout(string) {
    let stringUpper = string.toUpperCase();
    console.log(stringUpper);
}


function logWhisper(string) {
    let stringLower = string.toLowerCase();
    console.log(stringLower);
}


function sayHiToGrandma(string) {
    if(string === string.toLowerCase()) {
        return 'I can\'t hear you!';

    } else if (string === string.toUpperCase()) {
        return 'YES INDEED!';

    } else {
        return 'I love you, too.';
    }
}