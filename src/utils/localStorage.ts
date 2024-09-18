export class LocalStorage {
  static ids: string[] = [];

  static getArts() {
    const idsInStorage = localStorage.getItem('ids');
    if (idsInStorage) {
      this.ids = idsInStorage.split(',');
      console.log(this.ids);
      return this.ids;
    }
  }

  static insertArt(id: number) {
    const idStr = `${id}`;
    if (!this.ids.includes(idStr)) {
      this.ids.push(idStr);
      localStorage.setItem('ids', `${this.ids}`);
      console.log(this.ids);
    } else {
      this.ids.splice(this.ids.indexOf(idStr), 1);
      localStorage.setItem('ids', `${this.ids}`);
      console.log(this.ids);
    }
    return this.ids;
  }
}
