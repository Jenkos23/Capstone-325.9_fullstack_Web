# Fashion Website - Full Stack React Application

## Overview
This is a full-stack web application developed using React. The application is designed for a fashion website that fetches user data from a MongoDB cluster. The website serves information such as fashion news, weather updates, and fashion articles from a backend. Additionally, the application displays designer photos and bios and uses an external API (OpenWeather) to provide weather information based on the user's city, helping users select appropriate clothing for different seasons.

## Features
- **User Data Fetching**: Retrieves user data from the MongoDB cluster for the `m_flix` database.
- **Fashion News**: Fetches fashion-related news articles from the backend.
- **Weather API Integration**: Integrates OpenWeather API to display weather information based on city input.
- **Fashion Articles**: Displays articles and information about fashion trends and designers.
- **Designers' Photo & Bio**: Displays photos and bios of fashion designers on the PhotoJokene page.
- **Seasonal Clothing Suggestions**: Suggests clothing based on the weather information fetched from OpenWeather API.

## Project Structure
The project contains several directories and files organized as follows:

### 1. **`src` Directory**
   - **`components`**: Contains reusable components used throughout the app.
     - `Article.jsx`: Displays individual fashion articles.
     - `ArticleList.jsx`: Lists multiple fashion articles.
     - `DateTimeDisplay.jsx`: Displays the current date and time.
     - `FashionNews.jsx`: Displays fashion news fetched from the backend.
     - `FashionWeather.jsx`: Displays the weather information fetched from the OpenWeather API.
     - `Footer.jsx`: Displays the footer of the website.
     - `HeaderLine.jsx`: Displays a header banner.
     - `LoginForm.jsx`: A form for user login.
     - `Navbar.jsx`: The main navigation bar with links to different pages.

   - **`pages`**: Contains the main page components for different sections of the website.
     - `AboutPage.jsx`: Provides information about the Fashion Jokene brand.
     - `FashionPage.jsx`: Displays fashion articles and trends.
     - `PhotoJokenePage.jsx`: Displays photos and bios of fashion designers.
   
   - **`styles`**: Contains different CSS files for styling individual components and pages.

### 2. **`App.jsx`**
   - This is the entry point of the application. It handles routing between the different pages and displays the components accordingly.

### 3. **Routing & Navigation**
   The app uses React Router for navigation. The `Navbar` component includes the following links:
   - **Fashion**: Navigates to the Fashion Page where users can explore fashion articles and trends.
   - **Fashion News**: Fetches fashion news from the backend and displays it in the `FashionNews` component.
   - **About Page**: Displays information about the fashion brand and the team behind it.
   - **PhotoJokene**: Displays photos and bios of fashion designers.
   - **Fashion Weather**: Fetches weather information from OpenWeather API and displays clothing suggestions based on weather conditions.

### 4. **Backend API Integration**
   - **Fashion News API**: The application fetches fashion news articles from a backend API.
   - **OpenWeather API**: The app integrates with the OpenWeather API to fetch weather data based on the city entered by the user.

## Setup & Installation
To run the application locally, follow the steps below:

### 1. Clone the repository:
```bash
git clone <repository-url>
cd <repository-name>
```

### 2. Install dependencies:
```bash
npm install
```

### 3. Setup MongoDB:
- Ensure your MongoDB cluster is running, and the connection string is properly configured in the backend.
- Create a `config.js` file in the backend and add the MongoDB connection string for `m_flix` database.

### 4. Run the development server:
```bash
npm start
```
The app will be available at `http://localhost:3000`.

## Technologies Used
- **React**: For building the frontend user interface.
- **Node.js & Express**: For the backend API that serves the fashion news and handles MongoDB integration.
- **MongoDB**: For storing user and fashion-related data.
- **OpenWeather API**: For weather-related data and suggestions on seasonal clothing.
- **React Router**: For managing navigation between pages.
- **CSS**: For styling the components and pages.

## Directory Structure
```
src/
├── components/
│   ├── Article.jsx
│   ├── ArticleList.jsx
│   ├── DateTimeDisplay.jsx
│   ├── FashionNews.jsx
│   ├── FashionWeather.jsx
│   ├── Footer.jsx
│   ├── HeaderLine.jsx
│   ├── LoginForm.jsx
│   └── Navbar.jsx
├── pages/
│   ├── AboutPage.jsx
│   ├── FashionPage.jsx
│   └── PhotoJokenePage.jsx
├── styles/
│   ├── Article.css
│   ├── ArticleList.css
│   ├── FashionNews.css
│   ├── FashionWeather.css
│   ├── Footer.css
│   ├── HeaderLine.css
│   ├── LoginForm.css
│   ├── Navbar.css
│   └── AboutPage.css
├── App.jsx
```

## Contributing
If you would like to contribute to the project, feel free to open an issue or submit a pull request. Please make sure to follow the coding style and include appropriate tests for your changes.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Enjoy building and customizing your fashion website! Feel free to reach out for any questions or improvements.