let heroi = "Superman";
let xp = 1000;

if (xp < 1000) {
    heroi = "Ferro";
} else if (xp >= 1001 && xp <= 2000) { 
    heroi = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
    heroi = "Prata";
} else if (xp >= 6001 && xp <= 7000) {
    heroi = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
    heroi = "Platina";
} else if (xp >= 9001 && xp <= 10000) {
    heroi = "Ascendente";
} else if (xp >= 10001 && xp <= 11000) {
    heroi = "Imortal";
} else if (xp >= 11001 && xp <= 12000) {
    heroi = "Radiante";
}console.log(`O Herói de nome ${heroi} está no nível de ${xp}`);