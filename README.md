# FOREVER.

Un progetto di e-commerce di abbigliamento, completamente responsive per essere visualizzato in maniera ottimale su tutti i dispositivi, sviluppato con lo stack MERN e ospitato su [Vercel](https://vercel.com).



## Demo Online
Accedi al sito: [Forever.](https://my-store-frontend-orpin.vercel.app/)

## Funzionalità principali
- **Vetrina iniziale:** Una selezione di prodotti in evidenza.
- **Collezione completa:** Pagina con tutti i prodotti, dotata di:
  - Filtri per categoria, prezzo, taglia, ecc.
  - Barra di ricerca per trovare prodotti tramite nome.
- **Pagina di dettaglio prodotto:** Informazioni dettagliate su ogni articolo.
- **Dashboard amministrativa:** 
  - Aggiungi nuovi prodotti.
  - Visualizza e modifica prodotti esistenti.
  - Gestisci gli ordini in arrivo.

## Tecnologie utilizzate
- **Frontend:** React.js con Vite.
- **Backend:** Node.js con Express.
- **Dashboard:** React.js con Vite.
- **Database:** MongoDB.
- **Hosting:** Vercel.

## Installazione locale
1. Clona il repository:
   ```bash
   git clone https://github.com/danielecapano/e-commerce.git
   cd tuo-repo
   ```
2. Installa le dipendenze per il frontend:
   ```bash
   cd frontend
   npm install
   
3. Installa le dipendenze per il backend:
   ```bash
   cd backend
   npm install
4. Installa le dipendenze per la dashboard:
   ```bash
   cd admin
   npm install

5. Configura le variabili d'ambiente:
- Crea un file `.env` nella cartella `backend` e aggiungi le seguenti variabili:
   ```env
  MONGODB_URI=tuo_mongo_uri
  CLOUDINARY_API_KEY=tue_api_key
  CLOUDINARY_SECRET_KEY=tua_secret_key
  CLOUDINARY_NAME=tuo_name
  JWT_SECRET=tuo_jwt_secret
  ADMIN_EMAIL=tua_email_admin
  ADMIN_PASSWORD=tua_password_admin

6. Avvia server, client e dashboard:
- **Server:**
     
   ```bash
   cd backend
   npm start
   ```

 - **Client:**
   ```bash
   cd frontend
   npm run dev
   ```

 - **Dashboard:**
   ```bash
   cd admin
   npm run dev
   ```
7. Visita il sito all'indirizzo `http://localhost:5173`

## Note
Il sito non è ancora completo in tutte le sue parti ma si può già vedere nella sua veste grafica e testare gran parte delle funzionalità
   
