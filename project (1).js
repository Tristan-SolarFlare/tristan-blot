const boosterHeight = 250; //default is set to 250. this can be changed

const width = 150;
const height = boosterHeight + 350;

setDocDimensions(width, height);


const finalLines = [];

const t = new bt.Turtle();

//draw head
t.jump([75, height-50])
t.goTo([55,height-90])
t.goTo([42,height-85])
t.goTo([42,height-72])
t.goTo([75,height-50])
t.goTo([55,height-90])

//draw top fins and top stage outline
t.goTo([55,height-250])
t.jump([75, height-50])
t.goTo([95,height-90])
t.goTo([108,height-85])
t.goTo([108,height-72])
t.goTo([75,height-50])
t.jump([95,height-90])
t.goTo([95,height-250])
t.goTo([55,height-250])

//draw triangle cockpit outline
t.jump([75, height-65])
t.goTo([85,height-90])
t.jump([75, height-65])
t.goTo([65,height-90])
t.goTo([85,height-90])

//draw right wing
t.jump([95,height-250])
t.goTo([125,height-240])
t.goTo([123,height-220])
t.goTo([95,height-185])

//draw left wing
t.jump([55,height-250])
t.goTo([25,height-240])
t.goTo([27,height-220])
t.goTo([55,height-185])

//draw lower stage outline
t.jump([55,height-250])
t.goTo([55,height-250-boosterHeight])
t.goTo([95,height-250-boosterHeight])
t.goTo([95,height-250])

//draw lower fin right side
t.jump([95,height-250-boosterHeight])
t.goTo([110,height-256-boosterHeight])
t.goTo([110,height-230-boosterHeight])
t.goTo([95,height-220-boosterHeight])


//draw lower fin right side
t.jump([95,height-250-boosterHeight])
t.goTo([110,height-256-boosterHeight])
t.goTo([110,height-230-boosterHeight])
t.goTo([95,height-220-boosterHeight])


//draw lower fin left side
t.jump([55,height-250-boosterHeight])
t.goTo([40,height-256-boosterHeight])
t.goTo([40,height-230-boosterHeight])
t.goTo([55,height-220-boosterHeight])


bt.join(finalLines, t.lines());

// draw it
drawLines(finalLines);