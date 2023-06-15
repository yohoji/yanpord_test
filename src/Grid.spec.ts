import { Grid } from "./Grid"

describe("Grid", () => {
    it("should be able to tell if a position is valid", () => {
        const grid = new Grid(5, 5)
        expect(grid.isPositionValid(0, 0)).toBe(true)
    })

    it("should be able to tell if a position is invalid", () => {
        const grid = new Grid(5, 5)
        expect(grid.isPositionValid(6, 0)).toBe(false)
    })
})