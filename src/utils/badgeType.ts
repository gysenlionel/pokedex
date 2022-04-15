export const badgeType = (type: string | undefined ) => {
    let badge: string = "";

    switch(type){
        case "normal":
            badge = "/images/normal.png";
            break;
          case "fire":
            badge = "/images/feu.png";
            break;
          case "water":
            badge = "/images/water.png";
            break;
          case "grass":
            badge = "/images/grass.png";
            break;
          case "electric":
            badge = "/images/electric.png";
            break;
          case "ice":
            badge = "/images/ice.png";
            break;
          case "fighting":
            badge = "/images/fighting.png";
            break;
          case "poison":
            badge = "/images/poison.png";
            break;
          case "ground":
            badge = "/images/ground.png";
            break;
          case "flying":
            badge = "/images/flying.png";
            break;
          case "psychic":
            badge = "/images/psychic.png";
            break;
          case "bug":
            badge = "/images/bug.png";
            break;
          case "rock":
            badge = "/images/rock.png";
            break;
          case "ghost":
            badge = "/images/ghost.png";
            break;
          case "dark":
            badge = "/images/dark.png";
            break;
          case "dragon":
            badge = "/images/dragon.png";
            break;
          case "steel":
            badge = "/images/steel.png";
            break;
          case "fairy":
            badge = "/images/fairy.png";
            break;
        }
        return `${badge}`;
    }
