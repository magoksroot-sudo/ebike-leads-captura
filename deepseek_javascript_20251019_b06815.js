const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// ✅ HABILITAR CORS para Google Apps Script
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// 📄 SERVIR EL HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 🚀 INICIAR SERVIDOR
app.listen(PORT, () => {
  console.log(`🎉 Servidor funcionando en: http://localhost:${PORT}`);
  console.log(`🌐 También puedes usar: http://192.168.1.X:${PORT} (tu IP local)`);
});