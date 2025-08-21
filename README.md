```markdown
URL Shortener API  
A simple URL Shortener built using Node.js, Express.js, and MongoDB. This API lets you:
- Shorten long URLs
- Redirect users from the short URL to the original URL
- Track analytics such as the number of clicks and visit history
- Web interface for URL shortening and analytics viewing


Project Structure  
```
├── controllers/
│ └── urlController.js # Business logic for URL creation, redirection, and analytics
├── models/
│ └── url.js # Mongoose URL schema
├── routes/
│ ├── urlRouter.js # API routes
│ └── staticRouter.js # Frontend routes
├── views/
│ ├── home.ejs # Homepage with URL shortening form
│ └── analytics.ejs # Analytics dashboard
├── connection.js # MongoDB connection helper
├── index.js # Main entry point
└── README.md
```

---

Tech Stack  
- Node.js – Runtime environment  
- Express.js – Web framework  
- MongoDB – Database  
- Mongoose – ODM for MongoDB  
- shortid – Library to generate short IDs
- ejs - For server side rendering


Installation

1. Clone the repository  
```
git clone https://github.com/your-username/url-shortener.git  
cd url-shortener  
```

2. Install dependencies  
```
npm install mongoose express ejs
```

3. Set up MongoDB  
Make sure MongoDB is running locally.  
Default connection URL in server.js:  
```
'mongodb://127.0.0.1:27017/short-url'
```  
You can change it in:  
```
connectMongoDb('mongodb://127.0.0.1:27017/short-url')
```

4. Run the server  
```
npm start
```  
Server will start at [http://localhost:8000](http://localhost:8000/)

---

API Endpoints

1. Create a Short URL  
POST `/static/createUrl`   
```
Frontend to take url as input and renders a page with the short URL as well as hyperlink to the generated url
```

2. Redirect to Original URL  
GET `api//:shortId`  
Example:  
```
GET http://localhost:8000/api/d9WqcKvI_
```

3. Gets analytics of all URLs
GET `api/analytics`  
Example:  
```
GET http://localhost:8000/api/analytics
```

4. Get URL Analytics  
GET `api//url/analytics/:shortId`  
Example:  
```
GET http://localhost:8000/api/url/analytics/shortID123
```  
Response:  
```
{ 
  "totalClicks": 5,  
  "analytics": [  
    { "timestamp": "2025-08-15T11:45:32.000Z" },  
    { "timestamp": "2025-08-15T12:10:05.000Z" }  
  ] 
}
```


Quick cURL Examples

1. Creating a short URL  (using custom post request)
```
curl -X POST http://localhost:8000/api/url \
-H "Content-Type: application/json" \
-d '{"url": "https://example.com"}'
```

2. Redirect to original URL  
```
curl -L http://localhost:8000/api/d9WqcKvI_
```

3. Get analytics of a short URL  
```
curl http://localhost:8000/url/analytics/d9WqcKvI_
```

4. Get analytics of all URLs
```
curl http://localhost:8000/url/analytics
```

Future Improvements  
- Add user authentication for URL management  
- Set link expiration time  
- Add custom alias support  
- Provide a frontend UI  


Developed by Nishanth Prakasan  
A simple and extensible URL shortener API.
```
