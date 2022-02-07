export class Goals {
  //SETTING SHOWING OF A DESCRIPTION AS FALSE
  showDescription: boolean;
  constructor(public id: number, public name: string, public description: string, public completeDate: Date) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.showDescription = false;
  }

  functionName(){

  }

  //can we do constructor overloading //no
}
