# Coding Event Setup Guide

Welcome to the coding event by Womxn@Monta x Girls in IT! To get you up and running smoothly, we've prepared a
step-by-step guide on how to set up your programming environment. If you're new to programming or the tools we'll be
using, don't worry! Just follow the instructions below, and you'll be set up in no time.

## Cloning the Workshop Repository

First, we need to get the event materials onto your computer by cloning this code repository.

### What you need:

- A terminal application, which allows you to type and execute text-based commands.
- Git installed (if you don't have it, download it [here](https://git-scm.com/downloads)).

### Steps:

1. **Open Your Terminal:**
    - **Windows**: Search for "Command Prompt" or "PowerShell" and open it.
    - **Mac**: Search for "Terminal" in Spotlight (Cmd + Space) and open it.
    - **Linux**: Search for "Terminal" or press "Ctrl + Alt + T" to open it.
2. **Create a New Folder and Navigate There:**
    - Decide on a location where you want to store your workshop materials. For example, you can create a new folder in
      your "Documents" directory.
    - Type `cd` followed by the path to your chosen location, then press Enter.
        - Example: `cd /Users/yourusername/Documents/coding`
3. **Clone the Repository:**
    - In your terminal, paste the following command:
        - `git clone https://github.com/marleenksr/coding-event.git`
    - After the cloning is complete, you will find a new folder called "coding-event" with all the code inside.

## Installing Node.js

1. Go to the [Node.js website](https://nodejs.org/en/) and download the installer for your operating system.
2. Run the installer and follow the instructions to install Node.js on your computer.

## Backend Setup

1. In a terminal window, navigate to the backend directory using `cd backend` if you're already in the root directory of
   the repository or `cd /Users/yourusername/Documents/coding/coding-event/backend/` if you're not.
2. Run `npm install` to install dependencies.
3. Start the backend with `node app.js`.

## Frontend Setup

1. Open a new terminal window - we need two terminal windows open to run the backend and frontend simultaneously.
2. Navigate to the frontend directory with `cd frontend` if you're already in the root directory of the repository or
   `cd /Users/yourusername/Documents/coding/coding-event/frontend/` if you're not.
3. Run `npm install` to install dependencies.
4. Start the React app with `npm start`.
5. Open a web browser and go to `http://localhost:3000` to view the frontend interface.

## Ready to Start!

Now you are all set up with the following:

- WebSocket communication between the frontend and backend that simulates charging station data and sends updates every
  few seconds.
- The backend simulates a fixed number of charging stations sending random status updates (e.g., charging, idle, error).
- A simple real-time charging station dashboard is in place, with color-coded status indicators.

### Tasks

Here are some tasks you can work on during the coding event. Feel free to choose one or more tasks to complete or come
up with your own ideas!

1. **Frontend Task:** Improve the Dashboard UI using a React component library, f.ex. Material UI
    * Replace the existing basic styling of the charging station cards with Material UI components.
    * Use Material UI’s grid, cards, and badges to create a more professional and responsive dashboard.
2. **Backend Task:** Modify the Number of Charging Stations
    * Currently, the backend generates a fixed number of charging stations with random status updates. Modify this logic
      to allow dynamic control over how many charging stations are generated (e.g., via a configuration file,
      environment variable, or UI input).
3. **Frontend Task:** Add a Filter or Sort Option
    * Add a feature that lets users filter or sort the charging stations
      by status (e.g., showing only stations in _charging_ state).

#### A few hints

1. Changes to the backend and how the charging data is created can be made in `backend/app.js`.
2. When you make changes and save the file `frontend/src/App.js`, you should see the updates reflected on the frontend
   interface.
