const width = 150;
const height = 600;

setDocDimensions(width, height);

const finalLines = [];

const t = new bt.Turtle();


t.jump([75, 550])
t.goTo([55,510])
t.goTo([42,515])
t.goTo([42,528])
t.goTo([75,550])
t.goTo([55,510])


t.goTo([55,350])
t.jump([75, 550])
t.goTo([95,510])
t.goTo([108,515])
t.goTo([108,528])
t.goTo([75,550])
t.jump([95,510])
t.goTo([95,350])
t.goTo([55,350])

t.jump([75, 535])
t.goTo([85,510])
t.jump([75, 535])
t.goTo([65,510])
t.goTo([85,510])



bt.join(finalLines, t.lines());

// draw it
drawLines(finalLines);