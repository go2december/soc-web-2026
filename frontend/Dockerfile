FROM node:24.16.0-alpine

WORKDIR /app

COPY package.json ./

# Install dependencies
RUN npm install

COPY . .

# Build Next.js app
RUN npm run build

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["npm", "run", "start"]
