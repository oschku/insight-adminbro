# get the base node image
FROM node:17.4.0-alpine

# set the working dir for container
WORKDIR /src

# copy the json file first
COPY ./package.json /src
COPY package-lock.json ./

# install npm dependencies
RUN npm install

# copy other project files
COPY . .

EXPOSE 3030

# build the folder
CMD [ "npm", "start" ]