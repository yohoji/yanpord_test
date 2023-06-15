import { Grid } from "./Grid"
import { Vacuum } from "./Vacuum"

describe('Vacuum', () => {
    it('should rotate 90 degrees to the right when it receives the command "D"', () => {
        const vacuum = new Vacuum(0, 0, 'N', new Grid(1, 1))
        vacuum.executeCommand('D')
        expect(vacuum.getOrientation()).toEqual('E')
    })

    it('should rotate 90 degrees to the left when it receives the command "G"', () => {
        const vacuum = new Vacuum(0, 0, 'N', new Grid(1, 1))
        vacuum.executeCommand('G')
        expect(vacuum.getOrientation()).toEqual('W')
    })

    it('should move forward when it receives the command "A"', () => {
        const vacuum = new Vacuum(0, 0, 'N', new Grid(1, 1))
        vacuum.executeCommand('A')
        expect(vacuum.getY()).toBe(1)
    })

    it('should be able to execute a command', () => {
        const vacuum = new Vacuum(0, 0, 'N', new Grid(1, 1))
        vacuum.executeCommand('A')
        expect(vacuum.getY()).toBe(1)
    })

    it('should be able to execute a series of commands', () => {
        const vacuum = new Vacuum(0, 0, 'N', new Grid(1, 1))
        vacuum.executeInstructions('AAG')
        expect(vacuum.getX()).toBe(0)
        expect(vacuum.getY()).toBe(1)
        expect(vacuum.getOrientation()).toBe('W')
    });

    it("shouldn't move outside of the grid", () => {
        const vacuum = new Vacuum(0, 0, 'N', new Grid(1, 1))
        vacuum.executeCommand('A')
        expect(vacuum.getY()).toBe(1)
        vacuum.executeCommand('A')
        expect(vacuum.getY()).toBe(1)
    })

})