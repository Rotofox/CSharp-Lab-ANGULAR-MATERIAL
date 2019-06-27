
import { Component, OnInit, ViewChild } from '@angular/core';
import { RootService } from 'src/app/services/root.service';


@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {
 
  public expenses: any = null;
  public displayedColumns: string[] =
   ['description', 'sum','location','numberOfComments'];


  constructor(private rootService: RootService) {
     this.getAllExpenses(0);
    }

  ngOnInit() {
  }

  getAllExpenses(x: number) {
      this.rootService.getAllExpenses(x).subscribe(t => {
        this.expenses = t;
        console.log(t);
      });

  }

  public handlePage(e: any) {
    this.getAllExpenses(e.pageIndex);
  }

 
}
