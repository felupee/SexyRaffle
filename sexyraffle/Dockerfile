# Use a imagem oficial do Node.js como base
FROM node:14

# Define o diretório de trabalho para a aplicação
WORKDIR /app

# Copia o arquivo package.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências da aplicação
RUN npm install

# Copia todo o código para o diretório de trabalho
COPY . .

# Expõe a porta 3000 para o host
EXPOSE 3000

# Inicia a aplicação
CMD [ "npm", "start" ]
