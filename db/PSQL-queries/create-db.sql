DROP DATABASE IF EXISTS silly_startups;
CREATE DATABASE silly_startups;

\c silly_startups;

CREATE TABLE startups(
    startup_id serial PRIMARY KEY, 
    startup_name VARCHAR(50) UNIQUE NOT NULL, 
    tagline TEXT NOT NULL,
    imgURL TEXT NOT NULL
);

INSERT INTO startups(startup_name, tagline, imgURL)
VALUES('Cspr', 'Uber for Fish!', 'https://images.unsplash.com/photo-1513568655455-59ca5a91774a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd66903b6ce8a111bfa8d2e4aa8964b0&auto=format&fit=crop&w=800&q=60');