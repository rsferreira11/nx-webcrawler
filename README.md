# NX Microservices Webcrawler 🕷️

This is a demo project that is meant to pull (webcrawl) data from different real state websites in Estonia and display all in one unified frontend.

This project uses [Nx monorepo](https://nx.dev) and it is meant to use microservices archtecture.

- Microservice 1: Web-puller

  - It should pull the raw html from a given URL
  - It should add the content of the URL into a Kafka Topic

- Microservice 2: html-cleaner

  - It should accept as input a mapping from fields -> how to retrieve fields
  - It should read data from the kafka topic
  - It should save this formated data into either Kafka topic OR into mongodb database

- Microservice 3: rest API

  - It should retrive formatted data from the database send to whom requested it

- frontend 1: Next.js application

  - It will retrieve and display data from the rest API
  - Add pagination OR infinite scrolling

- frontend 2: Vue.js application (To be decided)

  - It will retrieve and display data from the rest API
  - Add pagination OR infinite scrolling

- frontend 3: Angular.js application (To be decided)
  - It will retrieve and display data from the rest API
  - Add pagination OR infinite scrolling

## Stack

Backend:

- Nx
- Node.js
- Jest.js (unity and integration testing)
- Apache Kafka
- Typescript

E2E testing:

- Cypress

Frontend - React:

- React.js with Next.js
- Typescript
- Storybook (To be decided)

Other:

- Docker
- Kubernetes (to be decided)
- Github actions (to be decided)

## How to Run the Project

// TODO

## TODO list

| Task description                                    | Status |
| --------------------------------------------------- | ------ |
| Confirm whether at least 2 end points are reachable | Done   |
| Setup Repo                                          | Done   |
| Dockerize Application                               |        |
| Try Kubernetes for development with Skaffold        |        |
| Connect to Apache Kafka                             |        |
| Send raw html into Apache Kafka                     |        |
| Read raw files from Apache Kafka                    |        |
| Clean the data using .json as input                 |        |
| Decide data format in the database                  |        |
| Send data into the Database                         |        |
| Create Rest API                                     |        |
| Read from the Database                              |        |
| Design frontend                                     |        |
| Read data from the Rest API                         |        |
