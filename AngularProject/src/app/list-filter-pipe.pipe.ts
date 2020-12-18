import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listFilterPipe'
})
export class ListFilterPipePipe implements PipeTransform {

  transform(value: any,args?:any):any {
        
    if(!value)return null;
    if(!args)return value;
    args=args.toLowerCase();
    return value.filter(function(item:any){
      console.log("inside pipe");
      
        return JSON.stringify(item.quizname).toLowerCase().includes(args);
    });

  }
}
