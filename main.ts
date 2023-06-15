import * as readline from 'readline';
import { Grid } from './src/Grid';
import { Vacuum } from './src/Vacuum';

async function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const gridDimensions = await new Promise<string>((resolve) => {
        rl.question('Dimension de la grille (x y): ', resolve);
    });

    const [gridSizeX, gridSizeY] = gridDimensions.split(' ').map(Number);
    
    if (gridSizeX <= 0 || gridSizeY <= 0) {
        throw new Error('Les dimensions de la grille doivent être des nombres positifs.');
    }

    const initialVacuumPosition = await new Promise<string>((resolve) => {
        rl.question('Position initiale de l’aspirateur (x y orientation): ', resolve);
    });

    const [vacuumPositionX, vacuumPositionY, vacuumOrientation] = initialVacuumPosition.split(' ');

    const instructions = await new Promise<string>((resolve) => {
        rl.question('Instructions :', resolve);
    });

    rl.close();

    const grid = new Grid(gridSizeX, gridSizeY);

    if (!grid.isPositionValid(+vacuumPositionX, +vacuumPositionY)) {
        throw new Error('Initial position must be within the bounds of the grid');
    }

    const vacuum = new Vacuum(+vacuumPositionX, +vacuumPositionY, vacuumOrientation, grid);

    vacuum.executeInstructions(instructions);

    console.log(`Position finale x=${vacuum.getX()} y=${vacuum.getY()} orientation=${vacuum.getOrientation()}`);
}

main();

