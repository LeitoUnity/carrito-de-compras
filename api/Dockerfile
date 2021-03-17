FROM node:latest AS backend
WORKDIR /usr/src/app
COPY . ./api/
WORKDIR /usr/src/app/api 
RUN npm install && npm run build
CMD ["node", "./dist/src/index.js"]
EXPOSE 8000