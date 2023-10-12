const express = require('express');
const cors=require('cors');
const app = express();

  const corsOptions = {
  origin: '*', //to allow forntend and backend on same computer
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors())


// Sample data - a list of books
let courses = [
  {
    id: 1,
    title: 'Create an EKS Cluster and Deploy an Application',
    imageLink: 'https://www.educative.io/cdn-cgi/image/format=auto,width=950,quality=75/v2api/collection/10370001/5268241073831936/image/6466459398832128'
  },
  {
    id: 2,
    title: 'Course 2',
    imageLink: 'https://example.com/course2.jpg'
  },
  {
    id: 3,
    title: 'Course 3',
    imageLink: 'https://example.com/course3.jpg'
  }
];

// Route to get all books
app.get('/api/books', (req, res) => {
  res.json(books);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
