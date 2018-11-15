import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements  OnInit{
  @Input() public obj: any;

  public propList: string[] = [];
  constructor() {
  }

  public ngOnInit(): void {

  }

  public  isType (type : string) : boolean{
    console.log('trololol', type);,
    console.log('trololol2', this.obj.constructor.name );,
    return this.obj.constructor.name == type;
  }



}
