import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
     if(!value) return null;

     

     // κόβω την προταση σε λέξεις βασει του κενού χαρακτηρα, και τις βαζω σε εναν πινακα
     let words = value.split(' ');

     for(var i = 0; i < words.length; i++) {
       let word = words[i] // απλοποιηση μεταβλητών
        if(i > 0 && this.isPrep(word))
          words[i] = word.toLowerCase();
        else {
          words[i] = this.toTitleCase(word);
        }
     }

     return words.join(' ');
  }

  private toTitleCase(word: string) : string {
    // το 1ο γραμμα κεφαλαιο, τα υπολοιπα μικρα.
   return  word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
  }

  private isPrep(word: string): boolean {
    // πίνακας που κρατάει τις προθέσεις που θέλω να εντοπίσω
    let preps = [
     'of',
     'the'
    ];

    // επιστρεφει τις προθεσεις που περιεχονται στον πινακα, με μικρα γραμματα
    return preps.includes(word.toLowerCase());
  }
}
