require('dotenv').config();
const bcrypt = require('bcryptjs');
const connectDB = require('./config/db');
const User = require('./models/User');

const createAdmin = async () => {
  try {
    await connectDB();

    const existingAdmin = await User.findOne({ email: 'admin@portfolio.com' });

    if (existingAdmin) {
      console.log('Admin already exists:', existingAdmin.email);
      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash('Admin@1234', 10);

    await User.create({
      name: 'Admin',
      email: 'admin@portfolio.com',
      passwordHash: hashedPassword
    });

    console.log('Admin user created successfully!');
    console.log('Login Credentials:');
    console.log('Email: admin@portfolio.com');
    console.log('Password: Admin@1234');

    process.exit(0);

  } catch (error) {
    console.error('Error creating admin user:', error);
    process.exit(1);
  }
};

createAdmin();
