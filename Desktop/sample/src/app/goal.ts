export class Goal {
  showInfo: boolean;
  constructor(public id: number=0,public name: string='',public description: string='',public completeDate: Date=(new Date)){
    this.showInfo=false;
  }


}
