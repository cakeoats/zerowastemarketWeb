require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db'); // Import koneksi database

// Import semua model
const User = require('./models/User');
const Admin = require('./models/admin');
const Chat = require('./models/chat');
const Product = require('./models/product');
const Review = require('./models/review');
const Transaction = require('./models/transaction');

const app = express();

// Middleware
app.use(express.json()); // Parsing JSON requests
app.use(cors()); // Enable CORS

// Hubungkan ke database
connectDB();

// Rute dasar
app.get('/', (req, res) => {
  res.send('API Running...');
});

// Endpoint untuk menguji penyimpanan data ke MongoDB
app.get('/test-models', async (req, res) => {
  try {
    // Buat data dummy untuk masing-masing model
    const testUser = new User({
      username: "testuser",
      email: "test@example.com",
      password: "123456"
    });

    const testAdmin = new Admin({
      username: "admin1",
      email: "admin@example.com",
      password: "adminpass"
    });

    const testChat = new Chat({
      sender: "testuser",
      receiver: "admin1",
      message: "Hello, is this working?"
    });

    const testProduct = new Product({
      name: "Reusable Water Bottle",
      price: 50,
      stock: 100
    });

    const testReview = new Review({
      user: "testuser",
      product: "Reusable Water Bottle",
      rating: 5,
      comment: "Great quality!"
    });

    const testTransaction = new Transaction({
      user: "testuser",
      product: "Reusable Water Bottle",
      quantity: 2,
      total_price: 100
    });

    // Simpan ke database
    await testUser.save();
    await testAdmin.save();
    await testChat.save();
    await testProduct.save();
    await testReview.save();
    await testTransaction.save();

    res.json({
      message: "All test data saved successfully!",
      data: {
        testUser,
        testAdmin,
        testChat,
        testProduct,
        testReview,
        testTransaction
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Jalankan server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
