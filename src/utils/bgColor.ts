export const bgColor = (type: string) => {
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
        color = "#78C850";
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
      case "psycho":
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
        color = "#7038F8";
        break;
      case "steel":
        color = "#B8B8D0";
        break;
      case "Fairy":
        color = "#F0B6BC";
        break;
    }
    return `bg-[${color}]`;
  };