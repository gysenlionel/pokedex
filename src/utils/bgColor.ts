export const bgColor = (type: string | undefined ) => {
    let color: string = "";

    switch (type) {
      case "normal":
        color = "#75515BFF";
        break;
      case "fire":
        color = "#AA1F23";
        break;
      case "water":
        color = "#6890F0";
        break;
      case "grass":
        color = "#27CB4FFF";
        break;
      case "electric":
        color = "#F8D030FF";
        break;
      case "ice":
        color = "#98D8D8";
        break;
      case "fighting":
        color = "#C03028";
        break;
      case "poison":
        color = "#A040A0";
        break;
      case "ground":
        color = "#E0C068";
        break;
      case "flying":
        color = "#A890F0";
        break;
      case "psychic":
        color = "#F85888";
        break;
      case "bug":
        color = "#3B9950FF";
        break;
      case "rock":
        color = "#B8A038";
        break;
      case "ghost":
        color = "#705898";
        break;
      case "dark":
        color = "#5A5979FF";
        break;
      case "dragon":
        color = "#61CAD9FF";
        break;
      case "steel":
        color = "#42BD94";
        break;
      case "fairy":
        color = "#F0B6BC";
        break;
    }
    return `${color}`;
  };