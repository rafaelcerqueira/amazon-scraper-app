# Amazon Scraper Project

## Description
This project is an application that allows users to search for products on Amazon using a keyword. It returns a list of products displayed on the first page, including details such as the title, rating, number of reviews, and image URL.

---

## Technologies Used

### Backend:
- **[Bun](https://bun.sh/):** A lightning-fast JavaScript runtime used to set up and run the server.
- **Express:** A web framework for creating endpoints in a simple and efficient way.
- **Axios:** A library for making HTTP requests and fetching data from Amazon's page.
- **JSDOM:** Used to parse the HTML content of Amazon's page and extract relevant information.

### Frontend:
- **HTML, CSS, and Vanilla JavaScript:** For building a simple and functional interface.
- **[Vite](https://vitejs.dev/):** A lightweight and efficient frontend development tool.

---

## Requirements

Ensure you have the following tools installed:
- **Node.js** (for Vite)
- **Bun** (for the backend)
- An updated browser to access the interface.

---

## Setup and Execution

### Step 1: Clone the Repository
Clone this repository locally:
```bash
    git clone https://github.com/your-username/amazon-scraper-project.git
    cd amazon-scraper-project 

```
### Setp 2: Setup the Backend

1. Navigate to the backend directory:
```bash
    cd backend

```
2. Install Bun
```bash
    curl -fsSL https://bun.sh/install | bash

```

3. Install dependencies:
```bash
    bun install
    bun init
    bun add express axios jsdom

```

4. Start the server:
```bash
    bun run index.js
```

### step 3: Setup the Frontend
1. Navigate to the frontend directory:
```bash
    cd ../frontend

```
2. Install the project dependencies:
```bash
   npm install
   npm create vite@latest
   bun add cors

```
3. Run frontend:
```bash
   npm run dev 

```

### Usage

1. In the frontend interface, enter a keyword in the input field.

2. Click the "Search" button.

3. The search results will be displayed on the screen.

- backund must run at http://localhost:3000
- Open your browser and access the provided link: http://localhost:5173 

### Future Improvements

- Pagination to support searches across multiple pages.

- Advanced interface with animations and filtering options.

- Enhanced error handling for improved stability.

- Error and security.

- Advanced style with CSS and animations.

- Feedback to the user.

- Debugging.

### License

This project is for educational purposes only. Follow the guidelines and policies of third-party websites (such as Amazon).