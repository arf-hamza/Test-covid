
const nom = 'Arfaoui'
const prenom = ' Hamza '
const dateNaissance = new Date(1991, 6, 22)
const sitParticuliere = 'non'
const sexe = 'H'

const consoHommeParJour = 3
const consoHommeParSemaine = 15
const consoFemmeParJour = 2
const consoFemmeParSemaine = 10

const joursAnalyse = parseInt(prompt("sur combien de jours voulez-vous faire l'analyse?"))

alert("vous allez faire l'analyse sur " + joursAnalyse + 'jour(s)')

let compteurJour = 1
const historiqueConsommation = []

let totalConso = 0
let consommationJour

do {
  consommationJour = parseInt(prompt("Vous avez consommer combien d'alcool LE JOUR " + compteurJour))
  compteurJour++
  historiqueConsommation.push(consommationJour)
  totalConso += consommationJour
} while (compteurJour <= joursAnalyse)

let maxAlcoolJour
let maxAlcoolSemaine

if (sitParticuliere === 'oui') {
  maxAlcoolJour = 0
  maxAlcoolSemaine = 0
} else if (sexe === 'H') {
  maxAlcoolSemaine = consoHommeParSemaine
  maxAlcoolJour = consoHommeParJour
} else if (sexe === 'F') {
  maxAlcoolSemaine = consoFemmeParSemaine
  maxAlcoolJour = consoFemmeParJour
}

const maximumEnUneJournee = Math.floor(Math.max(...historiqueConsommation))

let MoyenneParJour = totalConso / joursAnalyse
MoyenneParJour = MoyenneParJour.toFixed(2)
let compteurJourExedant = 0

for (let i = 0; i < historiqueConsommation.length; i++) {
  if (historiqueConsommation[i] > maxAlcoolJour) {
    compteurJourExedant++
  }
}

const jourExedant = compteurJourExedant / joursAnalyse

let compteurJourSansAlcool = 0

for (let i = 0; i < historiqueConsommation.length; i++) {
  if (historiqueConsommation[i] === 0) {
    compteurJourSansAlcool++
  }
}

const jourSansAlcool = compteurJourSansAlcool / joursAnalyse

let RatioJournéesExcédants = Math.floor(jourExedant * 100)
RatioJournéesExcédants = RatioJournéesExcédants.toFixed(2)

let RatioJournéesSansAlcool = Math.floor(jourSansAlcool * 100)
RatioJournéesSansAlcool = RatioJournéesSansAlcool.toFixed(2)

const d = new Date()
const date = 'Le ' + d.toLocaleDateString() + ' à ' + d.toLocaleTimeString()
document.write(date + '<br>')
document.write(nom + ',' + prenom + 'a fait un test Covid' + '<br>')
document.write('Àge : ' + (d.getFullYear() - dateNaissance.getFullYear()) + ' ans <br>')
document.write('Sexe : ' + sexe + '<br>')
document.write('Situation Particuliére : ' + sitParticuliere + '<br>' + 'Resultat:' + '<br>')
document.write('Moyenne par jour : ' + MoyenneParJour + '<br>')
document.write('Consommation sur une semaine : ' + (totalConso) + ' recommandation : ' + maxAlcoolSemaine + '<br>')
document.write('Maximum en une journée : ' + maximumEnUneJournee + ' recommandation : ' + maxAlcoolJour + '<br>')
document.write('Ratio de journées excédants : ' + RatioJournéesExcédants + ' %' + '<br>')
document.write('Ratio de journées sans alcool : ' + RatioJournéesSansAlcool + ' %' + '<br>')

if (maximumEnUneJournee <= maxAlcoolJour && totalConso <= maxAlcoolSemaine) {
  document.write("<span style='color: green'>Vous respectez bien les recommandations</span>" + '<br>')
} else {
  document.write("<span style='color: red'>Vous ne respectez pas les recommandations</span>" + '<br>')
}
