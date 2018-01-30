function gradesyst(finalgrade) {
  var mult5 = finalgrade
  for (i = 0; i < 5; i++) {
    if (mult5 % 5 == 0) {
      break;
    }
    else {
      mult5++
    }
  }
  if (finalgrade < 38) {
    return finalgrade
  }
  else if ((mult5 - finalgrade) < 3) {
    finalgrade = mult5
    return finalgrade
  }
}

document.write(gradesyst(83))