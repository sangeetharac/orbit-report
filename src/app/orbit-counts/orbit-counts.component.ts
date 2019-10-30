//import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite'

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  types : string[] = ["Space Debris","Communication","Probe","Positioning","Space Station","Telescope"];
  constructor() { }
  @Input() satellites: Satellite[];

  ngOnInit() {
  }
  

  countNo(column: string) :number {
   let count : number = 0;
   let a :number = 0
   for (let i = 0; i < this.satellites.length; i++ ){
     if (this.satellites[i].type === column) {
       a++;
     }
   }
   return a;
  };

}
