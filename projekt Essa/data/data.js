const lA = [
  { category: "Długość", id: "lA" },
  { name: "Metr", toBase: "iv", fromBase: "iv" },
  { name: "Kilometr", toBase: "iv * 1000", fromBase: "iv / 1000" },
  { name: "Centymetr", toBase: "iv * 0.01", fromBase: "iv / 0.01" },
  { name: "Milimetr", toBase: "iv * 0.001", fromBase: "iv / 0.001" },
  { name: "Mikrometr", toBase: "iv * 1e-6", fromBase: "iv / 1e-6" },
  { name: "Nanometr", toBase: "iv * 1e-9", fromBase: "iv / 1e-9" },
  { name: "Mila", toBase: "iv * 1609.35", fromBase: "iv / 1609.35" },
  { name: "Jard", toBase: "iv * 0.9144", fromBase: "iv / 0.9144" },
  { name: "Stopa", toBase: "iv * 0.3048", fromBase: "iv / 0.3048" },
  { name: "Cal", toBase: "iv * 0.0254", fromBase: "iv / 0.0254" },
  { name: "Rok świetlny", toBase: "iv * 9.46066e+15", fromBase: "iv / 9.46066e+15" }
];

const tA = [
  { category: "Temperatura", id: "tA" },
  { name: "Celsjusz", toBase: "iv", fromBase: "iv" },
  { name: "Kelwin", toBase: "iv - 273.15", fromBase: "iv + 273.15" },
  { name: "Fahrenheit", toBase: "(iv - 32) * 5 / 9", fromBase: "(iv * 9 / 5) + 32" }
];

const aA = [
  { category: "Powierzchnia", id: "aA" },
  { name: "Metr kwadratowy", toBase: "iv", fromBase: "iv" },
  { name: "Kilometr kwadratowy", toBase: "iv * 1e6", fromBase: "iv / 1e6" },
  { name: "Centymetr kwadratowy", toBase: "iv * 0.0001", fromBase: "iv / 0.0001" },
  { name: "Milimetr kwadratowy", toBase: "iv * 1e-6", fromBase: "iv / 1e-6" },
  { name: "Mikrometr kwadratowy", toBase: "iv * 1e-12", fromBase: "iv / 1e-12" },
  { name: "Hektar", toBase: "iv * 10000", fromBase: "iv / 10000" },
  { name: "Mila kwadratowa", toBase: "iv * 2589990", fromBase: "iv / 2589990" },
  { name: "Jard kwadratowy", toBase: "iv * 0.83612736", fromBase: "iv / 0.83612736" },
  { name: "Stopa kwadratowa", toBase: "iv * 0.09290304", fromBase: "iv / 0.09290304" },
  { name: "Cal kwadratowy", toBase: "iv * 0.00064516", fromBase: "iv / 0.00064516" },
  { name: "Akr", toBase: "iv * 4046.8564224", fromBase: "iv / 4046.8564224" }
];

const vA = [
  { category: "Objętość", id: "vA" },
  { name: "Metr sześcienny", toBase: "iv", fromBase: "iv" },
  { name: "Kilometr sześcienny", toBase: "iv * 1e9", fromBase: "iv / 1e9" },
  { name: "Centymetr sześcienny", toBase: "iv * 1e-6", fromBase: "iv / 1e-6" },
  { name: "Milimetr sześcienny", toBase: "iv * 1e-9", fromBase: "iv / 1e-9" },
  { name: "Litr", toBase: "iv * 0.001", fromBase: "iv / 0.001" },
  { name: "Mililitr", toBase: "iv * 1e-6", fromBase: "iv / 1e-6" },
  { name: "Galon amerykański", toBase: "iv * 0.00378541", fromBase: "iv / 0.00378541" },
  { name: "Kwarta amerykańska", toBase: "iv * 0.0009463525", fromBase: "iv / 0.0009463525" },
  { name: "Pinta amerykańska", toBase: "iv * 0.00047317625", fromBase: "iv / 0.00047317625" },
  { name: "Filiżanka amerykańska", toBase: "iv * 0.000236588125", fromBase: "iv / 0.000236588125" },
  { name: "Uncja płynna (USA)", toBase: "iv * 2.957e-5", fromBase: "iv / 2.957e-5" },
  { name: "Łyżka stołowa (USA)", toBase: "iv * 1.479e-5", fromBase: "iv / 1.479e-5" },
  { name: "Łyżeczka (USA)", toBase: "iv * 4.929e-6", fromBase: "iv / 4.929e-6" },
  { name: "Galon imperialny", toBase: "iv * 0.00454609", fromBase: "iv / 0.00454609" },
  { name: "Kwarta imperialna", toBase: "iv * 0.0011365225", fromBase: "iv / 0.0011365225" },
  { name: "Pinta imperialna", toBase: "iv * 0.00056826125", fromBase: "iv / 0.00056826125" },
  { name: "Uncja płynna (UK)", toBase: "iv * 2.841e-5", fromBase: "iv / 2.841e-5" },
  { name: "Łyżka stołowa (UK)", toBase: "iv * 1.776e-5", fromBase: "iv / 1.776e-5" },
  { name: "Łyżeczka (UK)", toBase: "iv * 5.919e-6", fromBase: "iv / 5.919e-6" },
  { name: "Mila sześcienna", toBase: "iv * 4.16818e9", fromBase: "iv / 4.16818e9" },
  { name: "Jard sześcienny", toBase: "iv * 0.764555", fromBase: "iv / 0.764555" },
  { name: "Stopa sześcienna", toBase: "iv * 0.0283168", fromBase: "iv / 0.0283168" },
  { name: "Cal sześcienny", toBase: "iv * 1.6387e-5", fromBase: "iv / 1.6387e-5" }
];

const wA = [
  { category: "Waga", id: "wA" },
  { name: "Kilogram", toBase: "iv", fromBase: "iv" },
  { name: "Gram", toBase: "iv * 0.001", fromBase: "iv / 0.001" },
  { name: "Miligram", toBase: "iv * 1e-6", fromBase: "iv / 1e-6" },
  { name: "Tona metryczna", toBase: "iv * 1000", fromBase: "iv / 1000" },
  { name: "Długa tona", toBase: "iv * 1016.04608", fromBase: "iv / 1016.04608" },
  { name: "Krótka tona", toBase: "iv * 907.184", fromBase: "iv / 907.184" },
  { name: "Funt", toBase: "iv * 0.453592", fromBase: "iv / 0.453592" },
  { name: "Uncja", toBase: "iv * 0.0283495", fromBase: "iv / 0.0283495" },
  { name: "Karat", toBase: "iv * 0.0002", fromBase: "iv / 0.0002" },
  { name: "Jednostka masy atomowej", toBase: "iv * 1.66054e-27", fromBase: "iv / 1.66054e-27" }
];

const mA = [
  { category: "Czas", id: "mA" },
  { name: "Sekunda", toBase: "iv", fromBase: "iv" },
  { name: "Milisekunda", toBase: "iv * 0.001", fromBase: "iv / 0.001" },
  { name: "Mikrosekunda", toBase: "iv * 1e-6", fromBase: "iv / 1e-6" },
  { name: "Nanosekunda", toBase: "iv * 1e-9", fromBase: "iv / 1e-9" },
  { name: "Pikosekunda", toBase: "iv * 1e-12", fromBase: "iv / 1e-12" },
  { name: "Minuta", toBase: "iv * 60", fromBase: "iv / 60" },
  { name: "Godzina", toBase: "iv * 3600", fromBase: "iv / 3600" },
  { name: "Dzień", toBase: "iv * 86400", fromBase: "iv / 86400" },
  { name: "Tydzień", toBase: "iv * 604800", fromBase: "iv / 604800" },
  { name: "Miesiąc", toBase: "iv * 2629800", fromBase: "iv / 2629800" },
  { name: "Rok", toBase: "iv * 31557600", fromBase: "iv / 31557600" }
];

const allA = [lA, tA, aA, vA, wA, mA];
