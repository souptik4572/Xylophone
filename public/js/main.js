document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
});
const keysArray = ['a-key', 's-key', 'd-key', 'f-key', 'h-key', 'j-key', 'k-key', 'l-key'];
const notesArray = [
    new Howl({
        src: ["/sounds/note1_c.wav"]
    }),
    new Howl({
        src: ["/sounds/note2_d.wav"]
    }),
    new Howl({
        src: ["/sounds/note3_e.wav"]
    }),
    new Howl({
        src: ["/sounds/note4_f.wav"]
    }),
    new Howl({
        src: ["/sounds/note5_g.wav"]
    }),
    new Howl({
        src: ["/sounds/note6_a.wav"]
    }),
    new Howl({
        src: ["/sounds/note7_b.wav"]
    }),
    new Howl({
        src: ["/sounds/note8_c.wav"]
    })
]
const keysObj = {
    A: {
        element: document.getElementById('a-key'),
        sound: notesArray[0]
    },
    S: {
        element: document.getElementById('s-key'),
        sound: notesArray[1]
    },
    D: {
        element: document.getElementById('d-key'),
        sound: notesArray[2]
    },
    F: {
        element: document.getElementById('f-key'),
        sound: notesArray[3]
    },
    H: {
        element: document.getElementById('h-key'),
        sound: notesArray[4]
    },
    J: {
        element: document.getElementById('j-key'),
        sound: notesArray[5]
    },
    K: {
        element: document.getElementById('k-key'),
        sound: notesArray[6]
    },
    L: {
        element: document.getElementById('l-key'),
        sound: notesArray[7]
    }
};
for(let i=0; i < keysArray.length; i++){
    const e = keysArray[i];
    const event = document.getElementById(e);
    event.addEventListener('mousedown', () => {
        event.classList.add('selected');
        notesArray[i].play();
    });
    event.addEventListener('mouseup', () => {
        event.classList.remove('selected');
    });
}
document.addEventListener('keydown', event => {
    let letter = String.fromCharCode(event.keyCode);
    letter.toUpperCase();
    if(letter in keysObj){
        keysObj[letter].element.classList.add('selected');
        keysObj[letter].sound.play();
    }
});
document.addEventListener('keyup', event => {
    let letter = String.fromCharCode(event.keyCode);
    letter.toUpperCase();
    if(letter in keysObj){
        keysObj[letter].element.classList.remove('selected');
    }
});