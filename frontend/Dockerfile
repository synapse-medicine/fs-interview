FROM node:22-alpine as build
COPY . /src
WORKDIR /src
RUN npm ci && npm run build

FROM nginx:latest
COPY --from=build /src/build /usr/share/nginx/html
