Serverless Guestbook on AWS
This is a full-stack, serverless web application that functions as a public guestbook. Users can view all entries and submit their own messages, which are dynamically added to the list without a page refresh.

The project is built entirely on Amazon Web Services (AWS) and demonstrates a modern, event-driven, and highly scalable serverless architecture. It was built as a hands-on project to showcase foundational skills in cloud computing.

The application follows a classic serverless pattern, ensuring low cost, automatic scaling, and minimal operational overhead.

Frontend (Client): A static single-page application (SPA) built with HTML, CSS, and vanilla JavaScript is hosted in an AWS S3 bucket configured for static website hosting.

API Layer: API Gateway provides a public HTTP API endpoint that the frontend can communicate with. It is responsible for routing requests to the backend logic.

Backend Logic (Compute): An AWS Lambda function, written in Python, contains all the business logic for handling GET (fetch all entries) and POST (add a new entry) requests.

Database: Amazon DynamoDB, a fully managed NoSQL database, is used to store the guestbook entries.

Permissions: An AWS IAM Role is attached to the Lambda function, granting it the specific permissions needed to write logs to CloudWatch and to read/write data from the DynamoDB table.

Technologies Used
Backend
AWS Lambda: Serverless compute for running backend logic.

Amazon API Gateway: Creating and managing the public HTTP endpoint.

Amazon DynamoDB: NoSQL database for data persistence.

Amazon S3: Static website hosting for the frontend application.

AWS IAM: Securely managing permissions and access between services.

Amazon CloudWatch: Logging and monitoring for debugging

Of course. Here is a complete README.md file description for your project. You can copy and paste this text into a file named README.md in your GitHub repository for this project.

Serverless Guestbook on AWS
This is a full-stack, serverless web application that functions as a public guestbook. Users can view all entries and submit their own messages, which are dynamically added to the list without a page refresh.

The project is built entirely on Amazon Web Services (AWS) and demonstrates a modern, event-driven, and highly scalable serverless architecture. It was built as a hands-on project to showcase foundational skills in cloud computing.

Live Demo
Link to Your Live Application

(Replace the placeholder URL above with the actual link to your S3 website)

Architecture
The application follows a classic serverless pattern, ensuring low cost, automatic scaling, and minimal operational overhead.

Frontend (Client): A static single-page application (SPA) built with HTML, CSS, and vanilla JavaScript is hosted in an AWS S3 bucket configured for static website hosting.

API Layer: API Gateway provides a public HTTP API endpoint that the frontend can communicate with. It is responsible for routing requests to the backend logic.

Backend Logic (Compute): An AWS Lambda function, written in Python, contains all the business logic for handling GET (fetch all entries) and POST (add a new entry) requests.

Database: Amazon DynamoDB, a fully managed NoSQL database, is used to store the guestbook entries.

Permissions: An AWS IAM Role is attached to the Lambda function, granting it the specific permissions needed to write logs to CloudWatch and to read/write data from the DynamoDB table.

Key Features

View all guestbook entries upon page load.

Submit a new message with a name and a message.

Dynamically updates the entry list in real-time after a new submission.

Fully serverless backend – no servers to manage or provision.

Secure and scalable cloud infrastructure.

Technologies Used

Backend

      AWS Lambda: Serverless compute for running backend logic.

      Amazon API Gateway: Creating and managing the public HTTP endpoint.

      Amazon DynamoDB: NoSQL database for data persistence.

      Amazon S3: Static website hosting for the frontend application.

      AWS IAM: Securely managing permissions and access between services.

      Amazon CloudWatch: Logging and monitoring for debugging.

Frontend
       HTML5

       CSS3

       Vanilla JavaScript (ES6+) with fetch API for asynchronous requests.
