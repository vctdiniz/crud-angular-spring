import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    switch (value.toLocaleLowerCase()) {
      case 'frontend': return 'javascript';
      case 'backend': return 'local_cafe';
      case 'cloud': return 'cloud';
      default: return 'check_box_outline_blank';
    }
  }

}
