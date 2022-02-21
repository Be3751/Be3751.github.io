# nodeイメージを継承
FROM node:14.18.1

# working directoryを指定
WORKDIR /mypage
COPY . .

# vue cliをインストール
RUN npm install
CMD ["npm", "run", "serve"]