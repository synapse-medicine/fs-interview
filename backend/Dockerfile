FROM maven:3.9.8-eclipse-temurin-21 AS build
ADD . /src
WORKDIR /src
ENV HOME=/src
RUN --mount=type=cache,target=/root/.m2 mvn package

FROM openjdk:21
COPY --from=build /src/target/itw-*-SNAPSHOT.jar /app/itw.jar
WORKDIR /app
CMD ["java", "-jar", "itw.jar"]
