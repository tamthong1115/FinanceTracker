FROM eclipse-temurin:21-jdk-jammy AS builder

WORKDIR /app
COPY .mvn/ .mvn/
COPY mvnw pom.xml ./
COPY src ./src

# Build
RUN chmod +x mvnw && \
    ./mvnw clean package -DskipTests

# Use the same JDK version for runtime
FROM eclipse-temurin:21-jdk-jammy

WORKDIR /app

# Thay đổi tên file JAR này theo tên thực tế của bạn
COPY --from=builder /app/target/finance-tracker-api-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080

CMD ["java", "-jar", "app.jar"]
