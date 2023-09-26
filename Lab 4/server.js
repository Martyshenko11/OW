const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
  console.log('A user connected');

  // Привітальне повідомлення для нового користувача
  socket.emit('chat message', `Новий чат успішно створено!`);

  // Обробка повідомлень від користувача
  socket.on('chat message', (message) => {
    io.emit('chat message', message);
  });
});

http.listen(port, () => {
  console.log(`Server is running on *:${port}`);
});
