class ZeewError extends Error {
  /**
   * @param {string} error Error en la función
   * @private
   */
  constructor(error: string) {
    super();

    this.name = "Zeew.API-Error";
    /**
     * Error recibido por el punto final
     * @type {string}
     */
    this.message = error;
  }
}

export { ZeewError };
