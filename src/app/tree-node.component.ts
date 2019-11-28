import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-productStructureNode',
  template: `<div class="node-element">
              <div class="node-header {{node?.styleClass}}">{{node?.label}}</div>
              <div class="node-content">     
                <div><b>{{node?.data?.name}}</b></div>
                <div>{{node?.data?.code}}</div>
              </div>
             </div>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class TreeNodeComponent implements OnInit {
  @Input() node: any;

  ngOnInit() {
   console.log(this.node)
  }
}
