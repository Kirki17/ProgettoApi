export class Dog {
    barking: string = "";
    coat_length: string = "";
    drooling: string = "";
    energy: string = "";
    
    good_with_children: string = "";
    good_with_other_dogs: string = "";
    good_with_strangers: string = "";
    grooming: string = "";
    playfulness: string = "";
    protectiveness: string = "";
    shedding: string = "";
    trainability: string = "";

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

    constructor(barking: number, coat_length: number, drooling: number, energy: number, 
        good_with_children: number, good_with_other_dogs: number, good_with_strangers: number, 
        grooming: number, playfulness: number, protectiveness: number, shedding: number, trainability: number, 
        image_link: string, max_height_female: number, max_height_male: number, max_life_expectancy: number, 
        max_weight_female: number, max_weight_male: number, min_height_female: number, min_height_male: number, 
        min_life_expectancy: number, min_weight_female: number, min_weight_male: number, name: string) {

        for (let i = 0; i < 5; i++) {
            if (i < barking)
                this.barking += "★";
            else
                this.barking += "☆";

            if (i < coat_length)
                this.coat_length += "★";
            else
                this.coat_length += "☆";

            if (i < drooling)
                this.drooling += "★";
            else
                this.drooling += "☆";

            if (i < energy)
                this.energy += "★";
            else
                this.energy += "☆";

            if (i < good_with_children)
                this.good_with_children += "★";
            else
                this.good_with_children += "☆";

            if (i < good_with_other_dogs)
                this.good_with_other_dogs += "★";
            else
                this.good_with_other_dogs += "☆";

            if (i < good_with_strangers)
                this.good_with_strangers += "★";
            else
                this.good_with_strangers += "☆";

            if (i < grooming)
                this.grooming += "★";
            else
                this.grooming += "☆";

            if (i < playfulness)
                this.playfulness += "★";
            else
                this.playfulness += "☆";

            if (i < protectiveness)
                this.protectiveness += "★";
            else
                this.protectiveness += "☆";

            if (i < shedding)
                this.shedding += "★";
            else
                this.shedding += "☆";
                
            if (i < trainability)
                this.trainability += "★";
            else
                this.trainability += "☆";

        }
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
    }


}
