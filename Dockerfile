FROM node:16.18.1-alpine

# 设置工作目录
WORKDIR /usr/app

# 复制 package.json
COPY ./package.json ./
COPY ./yarn.lock ./

# 安装依赖
RUN yarn install

# 复制所有文件
COPY ./ ./

# 暴露服务端口
EXPOSE 3000

# 启动服务
CMD ["yarn", "start"]
