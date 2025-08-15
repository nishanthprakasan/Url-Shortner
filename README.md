URL Shortener API
A simple URL Shortener built using Node.js, Express.js, and MongoDB.
This API lets you:
•	Shorten long URLs
•	Redirect users from the short URL to the original URL
•	Track analytics such as the number of clicks and visit history

Project Structure
text
├── controllers/
│   └── urlController.js     # Business logic for URL creation, redirection, and analytics
├── models/
│   └── url.js               # Mongoose URL schema
├── routes/
│   └── urlRouter.js         # API routes
├── connection.js            # MongoDB connection helper
├── server.js                # Main entry point
└── README.md


🛠 Tech Stack
•	Node.js – Runtime environment
•	Express.js – Web framework
•	MongoDB – Database
•	Mongoose – ODM for MongoDB
•	shortid – Library to generate short IDs


Installation
1.	Clone the repository
git clone https://github.com/your-username/url-shortener.git
cd url-shortener
2.	Install dependencies
npm install mongoose express
3.	Set up MongoDB
Make sure MongoDB is running locally.
Default connection URL in server.js:
'mongodb://127.0.0.1:27017/short-url'
You can change it in: connectMongoDb('mongodb://127.0.0.1:27017/short-url')
4.	Run the server
npm start
Server will start at http://localhost:8000


API Endpoints
1.Create a Short URL
POST /url
Request Body:
json
{
  "url": "https://example.com"
}
Response:
json
{
  "id": "d9WqcKvI_" #id given for sample
}

2️.Redirect to Original URL
GET /:shortId
Example:
GET http://localhost:8000/d9WqcKvI_
Redirects to the original URL.

3️. Get URL Analytics
GET /url/analytics/:shortId
Example:
GET http://localhost:8000/url/analytics/shortID123
Response:
json
{
  "totalClicks": 5,
  "analytics": [
    { "timestamp": "2025-08-15T11:45:32.000Z" },
    { "timestamp": "2025-08-15T12:10:05.000Z" }
  ]
}

Quick cURL Examples
1.Creating a short URL
curl -X POST http://localhost:8000/url \
-H "Content-Type: application/json" \
-d '{"url": "https://example.com"}'

2.Redirect to original URL
text
curl -L http://localhost:8000/d9WqcKvI_

3.Get analytics of a short URL
curl http://localhost:8000/url/analytics/d9WqcKvI_

Future Improvements
•	Add user authentication for URL management
•	Set link expiration time
•	Add custom alias support
•	Provide a frontend UI

Developed by [Nishanth Prakasan]
A simple and extensible URL shortener API.

