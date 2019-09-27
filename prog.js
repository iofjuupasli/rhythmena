const notes = [
    `C`,
    `G`,
    `D`,
    `A`,
    `E`,
    `B`,
    `F#`,
    `Db`,
    `Ab`,
    `Eb`,
    `Bb`,
    `F`,
];

const progression = [1, 2, 3, 4, 5, 6, 7];

const chrodsCounts = [2,3,4];

const basicModes = [
    `Major (wwhwwwh)`,
    `Minor (whwwhww)`,
    `Melodic Minor (whwwwwh)`,
    `Harmonic minor (whwwhah)`,
    `Harmonic Major (wwhwhah)`,
];

const modes = [
    `Major (wwhwwwh)`,
    `Dorian (whwwwhw)`,
    `Phrygian (hwwwhww)`,
    `Lydian (wwwhwwh)`,
    `Mixolydian (wwhwwhw)`,
    `Minor (whwwhww)`,
    `Locrian (hwwhwww)`,
    `Super Locrian (hwhwwww)`,
    `Melodic Minor (whwwwwh)`,
    `Dorian b2 (hwwwwhw)`,
    `Lydian Augmented (wwwwhwh)`,
    `Lydian dominant (wwwhwhw)`,
    `Aeolian dominant (wwhwhww)`,
    `Half diminished (whwhwww)`,
    `Major Augmented (wwhahwh)`,
    `Dorian #4 (whahwhw)`,
    `Phrygian dominant (hahwhww)`,
    `Lydian #2 (ahwhwwh)`,
    `Altered dominant bb7 (hwhwwha)`,
    `Harmonic minor (whwwhah)`,
    `Locrian #6 (hwwhahw)`,
    `Harmonic Major (wwhwhah)`,
    `Dorian b5 (whwhahw)`,
    `Phrygian b4 (hwhahww)`,
    `Lydian b3 (whahwwh)`,
    `Mixolydian b2 (hahwwhw)`,
    `Lydian augmented #2 (ahwwhwh)`,
    `Locrian bb7 (hwwhwha)`,
    `Diminished (whwhwhwh)`,
    `Dominant diminished (hwhwhwhw)`,
    `Whole tone (wwwwww)`,
    `Augmented (ahahah)`,
    `Inverted Augmented (hahaha)`,
];

const getRandom = (array) => {
    return array[Math.floor(Math.random() * array.length)];
};

const getRandomTask = (isAdvanced) => {
    const note = getRandom(notes);
    let chordsCount = getRandom(chrodsCounts);
    const chords = [1];
    while(chordsCount--) chords.push(getRandom(progression));
    const mode = getRandom(isAdvanced ? modes : basicModes);
    return {
        note,
        mode,
        chords,
    };
};

const getRandomTaskHtml = (isAdvanced) => {
    const {note, mode, chords} = getRandomTask(isAdvanced);
    return [note, mode, ...chords].join(` `);
};

const main = (isAdvanced) => {
    const {note, mode, chords} = getRandomTask(isAdvanced);
    console.log([note, mode, ...chords].join(` `));
};

// main();
