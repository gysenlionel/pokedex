export interface Pokemon {
    name: string;
    id:number;
    height: number;
    weight:number;
    base_experience:number;
    species:{
        name: string;
        url:string;
    },
    stats:[{
        base_stat:number;
        stat:{
            name:string;
        }
    }],
    held_items:[{
        item:{
        name:string;
    }
}],
    abilities: [{
        ability:{
            name: string;
        },
    }],
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

  export interface Species {
    flavor_text_entries :[{
        flavor_text:string;
    }],
    egg_groups:[{
        name:string;
    }],
    habitat:{
        name:string;
    },
    evolution_chain:{
        url:string;
    }
  }
  
interface evolution_details{
    min_level?:number;
                trigger:{
                    name:string;
                },
                evolves_to?:[evolution_details]
}

interface species{
    name:string;
}
export interface Evolution_chain {
        evolves_to?:[{
            species?:species;
            evolution_details?:[evolution_details],
            evolves_to?:[{
                evolution_details?:[evolution_details],
                species?: species;
            }]
        }],
        species:species;
}

  