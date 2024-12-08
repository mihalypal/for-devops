FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

# Install PM2 globally
RUN npm install -g pm2

COPY . .

EXPOSE 3000

CMD ["pm2-runtime", "start", "npm", "--", "start"]