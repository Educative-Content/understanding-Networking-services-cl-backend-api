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
    title: 'Educative Bot with Lambda Function Fulfillment using AWS LEX',
    imageLink: 'https://www.educative.io/cdn-cgi/image/format=auto,width=950,quality=75/v2api/collection/10370001/6744845660717056/image/6171933378609152'
  },
  {
    id: 3,
    title: 'Getting Started with Amazon ECS',
    imageLink: 'https://www.educative.io/cdn-cgi/image/format=auto,width=950,quality=75/v2api/collection/10370001/6353463370579968/image/4767505526292480'
  },
    {
    id: 4,
    title: 'Attach an Application Load Balancer to EC2 Auto Scaling Group',
    imageLink: 'https://www.educative.io/cdn-cgi/image/format=auto,width=950,quality=75/v2api/collection/10370001/6724412594978816/image/6326025143975936'
  },
  {
    id: 5,
    title: 'Processing Amazon S3 Events Using AWS Lambda',
    imageLink: 'https://www.educative.io/cdn-cgi/image/format=auto,width=950,quality=75/v2api/collection/10370001/4823974122094592/image/5593867165106176'
  },
  {
    id: 6,
    title: 'Getting Started with Amazon Redshift',
    imageLink: 'https://www.educative.io/cdn-cgi/image/format=auto,width=950,quality=75/v2api/collection/10370001/4752686122270720/image/5370330944897024'
  }
];

// Route to get all books
app.get('/api/books', (req, res) => {
  res.json(courses);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
