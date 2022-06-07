FROM cypress/included:6.8.0

RUN mkdir /paques-web-automation
WORKDIR /paques-web-automation

COPY ./package.json .
COPY ./package-lock.json .
COPY ./cypress.json .
COPY ./cypress .

RUN npm install
ENTRYPOINT [ "npm", "run" ]