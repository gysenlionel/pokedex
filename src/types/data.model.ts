export interface Pokemon {
    name: string;
    id:number;
    height: number;
    weight:number;
    base_experience:number;
    sprites:{
        front_default: string;
        other:{
            dream_world:{
                front_default:string;
            }
        },
        versions:{
            'generation-v':{
                'black-white':{
                    animated:{
                        front_default:string;
                    }
                }
            }
        }
    };
    types: [
        {
        type:{
            name:string
        }
    },
        {
        type?:{
            name:string
        }
    },
]
}

export interface Pokemons {
    name: string;
    url: string;
  }

