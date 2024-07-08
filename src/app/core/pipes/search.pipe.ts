import { Pipe, PipeTransform } from '@angular/core';
import { Doctors } from '../interfaces/doctors';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(doctors:Doctors[],term:string):Doctors[] {
    return doctors.filter((items)=>{
      let a = items.firstName+' '+items.lastName
      return a.toLowerCase().includes(term.toLowerCase())
    });
  }

}
