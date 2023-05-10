export class Dog {
    barking: number = 0;
    coat_length: number = 0;
    drooling: number = 0;
    energy: number = 0;
    good_with_children: number = 0;
    good_with_other_dogs: number = 0;
    good_with_strangers: number = 0;
    grooming: number = 0;
    image_link: string = "";
    max_height_female: number = 0;
    max_height_male: number = 0;
    max_life_expectancy: number = 0;
    max_weight_female: number = 0;
    max_weight_male: number = 0;
    min_height_female: number = 0;
    min_height_male: number = 0;
    min_life_expectancy: number = 0;
    min_weight_female: number = 0;
    min_weight_male: number = 0;
    name: string = "";
    playfulness: number = 0;
    protectiveness: number = 0;
    shedding: number = 0;
    trainability: number = 0;

   constructor(barking: number, coat_length: number, drooling: number, energy: number, good_with_children: number, good_with_other_dogs: number, 
        good_with_strangers: number, grooming: number, image_link: string, max_height_female: number, max_height_male: number, max_life_expectancy: number, 
        max_weight_female: number, max_weight_male: number, min_height_female: number, min_height_male: number, min_life_expectancy: number, 
        min_weight_female: number, min_weight_male: number, name: string, playfulness: number,  protectiveness: number, shedding: number,trainability: number){
        this.barking = barking; 
        this.coat_length = coat_length; 
        this. drooling = drooling; 
        this.energy = energy; 
        this.good_with_children = good_with_children; 
        this.good_with_other_dogs = good_with_other_dogs;
        this.good_with_strangers = good_with_strangers;
        this.grooming = grooming;
        this.image_link = image_link; 
        this.max_height_female = max_height_female; 
        this.max_height_male = max_height_male;
        this.max_life_expectancy = max_life_expectancy;
        this.max_weight_female = max_weight_female; 
        this.max_weight_male = max_weight_male; 
        this.min_height_female = min_height_female; 
        this.min_height_male = min_height_male; 
        this.min_life_expectancy = min_life_expectancy; 
        this.min_weight_female = min_weight_female; 
        this.min_weight_male = min_weight_male; 
        this.name = name; 
        this.playfulness = playfulness; 
        this.protectiveness= protectiveness; 
        this.shedding = shedding; 
        this.trainability = trainability; 
    }

    
}
 