export type Location = [number, number];

export type Bearing = 'North' | 'East' | 'South' | 'West';

export type Route = {
    path: Array<Location>,
    bearing: Bearing
}

export type Instruction = {
    turn: 'L' | 'R',
    blocks: number
}

export function followInstructions(route: Route, instructions: Array<Instruction>): Route {
    return instructions.reduce((route: Route, instruction: Instruction) => {
        const turned = turn(route, instruction.turn);
        const walked = walk(route, instruction.blocks);
        return walked;
    }, route);
}

const left = {
    'North': 'West',
    'East': 'North',
    'South': 'East',
    'West': 'South'
};

const right = {
    'North': 'East',
    'East': 'South',
    'South': 'West',
    'West': 'North'
};

function turn(route: Route, turn: 'L' | 'R') {
    const bearing = (turn === 'L') ? left[route.bearing] : right[route.bearing];

    return {
        ...route,
        bearing
    };
}

const step = {
    'North': (location) => ({x: location.x, y: location.y + 1}),
    'East': (location) => ({x: location.x + 1, y: location.y}),
    'South': (location) => ({x: location.x, y: location.y - 1}),
    'West': (location) => ({x: location.x - 1, y: location.y}),
};

function walk(route: Route, blocks: number) {
    const oneStep = step[route.bearing];

    const path = route.path.slice();
    let currentLocation = path.slice(-1)[0];

    for (let i = 0; i < blocks; i++) {
        currentLocation = oneStep(currentLocation);
        path.push(currentLocation);
    }

    return {
        ...route,
        path
    }
}

