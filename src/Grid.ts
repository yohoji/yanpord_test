/**
 * Représente une grille rectangulaire.
 */
export class Grid {
  private sizeX: number;
  private sizeY: number;

  /**
   * Crée une nouvelle instance de grille.
   * @param {number} sizeX - Le nombre de carrés le long de l'axe des x.
   * @param {number} sizeY - Le nombre de carrés le long de l'axe des y.
   */
  constructor(sizeX: number, sizeY: number) {
    this.sizeX = sizeX;
    this.sizeY = sizeY;
  }

  /**
   * Vérifie si une position donnée se trouve dans les limites de la grille.
   * @param {number} x - La coordonnée x de la position à vérifier.
   * @param {number} y - La coordonnée y de la position à vérifier.
   * @returns {boolean} Vrai si la position se trouve dans les limites de la grille, faux sinon.
   */
  public isPositionValid(x: number, y: number): boolean {
    return x >= 0 && x <= this.sizeX && y >= 0 && y <= this.sizeY;
  }
}
