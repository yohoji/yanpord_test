import { Grid } from "./Grid";

/**
 * Représente un aspirateur qui peut se déplacer sur une grille et exécuter des commandes.
 *
 * Exemple d'utilisation :
 * ```
 * const grid = new Grid(10, 10);
 * const vacuum = new Vacuum(5, 5, 'N', grid);
 *
 * vacuum.executeCommands('DADADADAA');
 *
 * console.log(vacuum.getX()); // 5
 * console.log(vacuum.getY()); // 6
 * console.log(vacuum.getOrientation()); // N
 * ```
 */
export class Vacuum {
  private x: number;
  private y: number;
  private orientation: string;
  private grid: Grid;

  /**
   * Exemple d'utilisation :
   * @param {number} x - La position initiale en x de l'aspirateur.
   * @param {number} y - La position initiale en y de l'aspirateur.
   * @param {string} orientation - L'orientation initiale de l'aspirateur.
   * @param {Grid} grid - La grille sur laquelle l'aspirateur se déplace.
   */
  constructor(x: number, y: number, orientation: string, grid: Grid) {
    this.x = x;
    this.y = y;
    this.orientation = orientation;
    this.grid = grid;
  }

  /**
   * Retourne l'orientation actuelle de l'aspirateur.
   * @returns {string} L'orientation actuelle de l'aspirateur.
   */
  public getOrientation(): string {
    return this.orientation;
  }

  /**
   * Retourne la position actuelle en x de l'aspirateur.
   * @returns {number} La position actuelle en x de l'aspirateur.
   */
  public getX(): number {
    return this.x;
  }

  /**
   * Returns the current y position of the vacuum cleaner.
   * @returns {number} The current y position of the vacuum cleaner.
   */
  public getY(): number {
    return this.y;
  }

  /**
   * Exécute une série d'instructions sur l'aspirateur.
   * @param {string} instructions - Les instructions à exécuter.
   */
  public executeInstructions(instructions: string) {
    for (const command of instructions) {
      this.executeCommand(command);
    }
  }

  /**
   * Exécute une commande sur l'aspirateur.
   * @param {string} command - La commande à exécuter.
   */
  public executeCommand(command: string) {
    if (command === "D") {
      this.rotateRight();
    } else if (command === "G") {
      this.rotateLeft();
    } else if (command === "A") {
      this.moveForward();
    }
  }

  /**
   * Tourne l'aspirateur de 90 degrés vers la droite.
   */
  public rotateRight() {
    if (this.orientation === "N") {
      this.orientation = "E";
    } else if (this.orientation === "E") {
      this.orientation = "S";
    } else if (this.orientation === "S") {
      this.orientation = "W";
    } else if (this.orientation === "W") {
      this.orientation = "N";
    }
  }

  /**
   * Tourne l'aspirateur de 90 degrés vers la gauche.
   */
  public rotateLeft() {
    if (this.orientation === "N") {
      this.orientation = "W";
    } else if (this.orientation === "W") {
      this.orientation = "S";
    } else if (this.orientation === "S") {
      this.orientation = "E";
    } else if (this.orientation === "E") {
      this.orientation = "N";
    }
  }

  /**
   * Déplace l'aspirateur d'une case vers l'avant dans la direction dans laquelle il est orienté.
   */
  public moveForward() {
    if (this.orientation === "N") {
      this.grid.isPositionValid(this.x, this.y + 1) && this.y++;
    } else if (this.orientation === "E") {
      this.grid.isPositionValid(this.x + 1, this.y) && this.x++;
    } else if (this.orientation === "S") {
      this.grid.isPositionValid(this.x, this.y - 1) && this.y--;
    } else if (this.orientation === "W") {
      this.grid.isPositionValid(this.x - 1, this.y) && this.x--;
    }
  }
}
