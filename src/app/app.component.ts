import {Component,OnInit,ViewEncapsulation} from '@angular/core';
import {TreeNode} from 'primeng/api';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [MessageService],
  styleUrls: [ './app.component.css' ],
   encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit   {
data1: TreeNode[];

    data2: TreeNode[];

    selectedNode: TreeNode;

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.data1 = [{
            label: 'IG',
            type: 'general-info',
            styleClass: 'general-info-node',
            expanded: true,
            data: {name:'Información General'},
            children: [
                {
                    label: 'T',
                    type: 'rate',
                    styleClass: 'rate-node',
                    expanded: true,
                    data: {name:'Tarifa', code: '10110'},
                    children:[{
                        label: 'N',
                        type: 'fund',
                        data: {name:'Fondo', code: 'AA1'},
                        styleClass: 'fund-node',
                        
                    },
                    {
                         label: 'N',
                        type: 'fund',
                        data: {name:'Fondo', code: 'A1'},
                        styleClass: 'fund-node'
                    }],
                },
                 {
                    label: 'T',
                    type: 'rate',
                    styleClass: 'rate-node',
                    expanded: true,
                    data: {name:'Tarifa', code: '10111'},
                    children:[{
                        label: 'N',
                        type: 'fund',
                        data: {name:'Fondo', code: 'AA10'},
                        styleClass: 'fund-node',
                        
                    },
                    {
                         label: 'N',
                        type: 'fund',
                        data: {name:'Fondo', code: 'A10'},
                        styleClass: 'fund-node'
                    }],
                }             
            ]
        }];

    }

    onNodeSelect(event) {
      /*  this.messageService.add({severity: 'success', summary: 'Node Selected', detail: event.node.label});*/
    }
}