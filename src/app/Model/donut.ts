

    export interface Donuts {
        count:   number;
        results: Result[];
    }
    
    export interface Result {
        id:                number;
        ref:               string;
        name:              string;
        photo:             string;
        photo_attribution: string;
    }
    
    export interface Donutsingle {
        id:                number;
        ref:               string;
        name:              string;
        calories:          number;
        extras:            string[];
        photo:             string;
        photo_attribution: string;
    }
    
