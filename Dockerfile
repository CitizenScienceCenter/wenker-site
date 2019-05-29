FROM node:9.11-alpine AS build

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
RUN ls dist

FROM nginx:stable
COPY config/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/ /usr/share/nginx/html
# COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]
