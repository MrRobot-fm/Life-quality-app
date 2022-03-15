# Life-quality-app

Deploy : https://lifequalityapp.netlify.app/
Repository bundle: https://github.com/Federix87/Life-quality-app-bundle

Life quality app è un progetto che permette all'utente di visualizzare le informazioni sulla qualità della vita nella varie città, in paricolare potrà digitare nella searchbar il nome della città che desidera e trovare le info quali una descrizione generale e i punteggi nella varie categorie assegnate alla città es: costo della vita, economia, educazione, qualità ambientale e tante altre categorie.

Development: <br/>
Ho sviluppato il progetto usando html, css, javascript e webpack cercando di costruire una UI minimale e moderna.<br/>
- In particolare ho cercato di usare l'Html al minimo.<br/>
- Css per lo styling dei vari componente anche se il progetto NON è RESPONSIVE.<br/>
- Invece ho usato JAVASCRIPT per la maggior parte del progetto suddividendo il codice in moduli che poi ho raggruppato usando Webpack nelle sue diverse funzionalità quali plugin: css-loader e file loader. <br/>
Ho usato axios.js per effettuare chiamate esterne verso l'API di Teleport (anche se al momento da problemi sulle varie ricerche delle città). Sui dati che volevo estrarre dall'API di Teleport ho usato la gunzione _.get() di Lodash-es per rendere il codice più verboso e fare un controllo sui dati di ritorno. <br/>
Per quanto riguarda la creazione degli elementi ho usato proprietà come 'createElement', 'classList', 'add' e 'append' inserendo dinamicamente i dati restituiti dall'oggetto della chiamata all'API.<br/>
Ho implementato sempre con js delle propietà di transizione con 'tranform' e 'transition'. Per finire ho suddiviso le chimate con axios, la creazione degli elementi e le transizioni in funzioni diverse distribuite nei vari moduli che ho creato. <br/>

   <strong> Spero che il progetto vi piaccia, buona visione! <strong/>
