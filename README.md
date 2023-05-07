# MotoGP Race Day Web App

This is a simple web application built using React and Vite that displays information about the next MotoGP race. The app fetches the data from a "mock" MotoGP API to display the Race Date, Country, and Track.

More features to come!


### Installation

Assuming you already have git installed, clone the GitHub repository to your local machine.

    git clone https://github.com/thefishchris/motogp.git
    
    cd motogp/motogp
    
Install the necessary dependencies.

    npm install

Once the dependencies are installed, start the development server by running:

    npm run dev


## Docker

Clone the repo

    git clone

CD to the main directory

    cd motogp/motogp

Build the image
    
    sudo docker build -t motogp .

Run the image
    
    sudo docker run -p 5173:5173 motogp

