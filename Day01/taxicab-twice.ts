import * as fs from 'fs';

export default shortestPath;


/*
 North
 ^ (1,0)
 |
 |
 |       (0,1)
 +-------->  East
 (0,0)

 */

type Direction = { dx: number, dy: number };
type Location = { x: number, y: number };

const North = {dx: 0, dy: 1};

function shortestPath(instructions: string): number {
    let location: Location = {x: 0, y: 0};
    let direction: Direction = North;

    instructions
        .split(', ')
        .map((instruction) => ({
            turn: instruction[0],
            blocks: parseInt(instruction.slice(1))
        }))
        .forEach((instruction) => {
            turn(instruction.turn);
            move(instruction.blocks);
        });

    return Math.abs(location.x) + Math.abs(location.y);

    function turn(c: string) {
        const {dx, dy} = direction;
        if (c === 'L') {
            direction = {dx: -dy, dy: dx};
        } else if (c === 'R') {
            direction = {dx: dy, dy: -dx};
        } else {
            throw new Error(`Unknown turn ${c}`);
        }
    }

    function move(steps: number) {
        location.x += steps * direction.dx;
        location.y += steps * direction.dy;
    }

}

if (require.main === module) {
    const easterBunnyRecruitingDocument: string = fs.readFileSync('Day01/taxicab.txt', 'utf8');
    console.log(shortestPath(easterBunnyRecruitingDocument));
}

