import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Minhaj Sordar',
    email: 'minhaj@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Sordar Minhaj',
    email: 'sordar@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
