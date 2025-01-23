# Weather App - ReactJS

This Weather App is built using React and Vite. It provides real-time weather information, including current conditions, hourly forecasts, and daily forecasts. The app uses the [WeatherAPI](https://www.weatherapi.com/) to fetch weather data and displays it in a user-friendly interface.

## Features

- **Current Weather**: Displays the current weather conditions, including temperature, humidity, wind speed, and more.
- **Hourly Forecast**: Provides hourly weather forecasts for the next 24 hours.
- **Daily Forecast**: Shows weather forecasts for the next 7 days.
- **Search City**: Allows users to search for weather information by city name.
- **Current Location**: Fetches and displays weather information for the user's current location.
- **Dark Mode**: Supports dark mode based on the time of day for the current location.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Installation

To install and run the Weather App locally, follow these steps:

1. **Clone the repository**:

   ```sh
   git clone https://github.com/YerrouHamza/weatherApp_ReactJS.git
   cd weatherApp_ReactJS
   ```

2. **Install dependencies**:

   ```sh
   npm install
   ```

3. **Set up WeatherAPI key**:

   - Open the **/api.ts** file located in the root directory.
   - Replace the **key** parameter in the **api.interceptors.request.use** method with your WeatherAPI key.

4. **Run the development server**:

   ```sh
   npm run dev
   ```

5. **Build for production**:

   ```sh
   npm run build
   ```

## Usage

- **Search for a city**: Use the search bar to enter the name of a city and get its weather information.
- **Use current location**: Click the **"Use current location"** button to fetch weather data for your current location.
