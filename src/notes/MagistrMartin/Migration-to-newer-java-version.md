# Java and Spring Boot Upgrade Guide (from Java 11)

This guide outlines the general steps to upgrade your backend project from Java 11 to a newer Long-Term Support (LTS) version like Java 17 or Java 21. This often involves upgrading your Spring Boot version as well, particularly to Spring Boot 3.x which requires Java 17+.

**Choose your target Java version:** Java 17 is the first LTS version to include features like Records. Java 21 is the latest LTS and includes even more recent features. Upgrading to Spring Boot 3.x is highly recommended if you're moving to Java 17 or 21.

---

## Step 1: Install the New JDK

Download and install your desired JDK version (Java 17 or 21).

*   **Recommended Sources for OpenJDK:**
    *   Adoptium (Temurin)
    *   Azul Zulu
    *   Amazon Corretto
    *   Oracle OpenJDK builds (Note Oracle's own distribution licensing changes post Java 8, OpenJDK builds are generally safe).

Make sure the new JDK is accessible on your system.

---

## Step 2: Update Your Build Tool Configuration

Configure your build tool (Maven or Gradle) to use the newly installed JDK for compiling and running tests.

### Maven (`pom.xml`)

Update your `pom.xml` to specify the target Java version. Using the `<release>` tag is the modern way (Java 9+) and is preferred over separate `<source>` and `<target>` tags.

```xml
<properties>
    <!-- Set the target Java version -->
    <java.version>17</java.version> <!-- Or 21 -->
    <!-- You don't typically need source/target with <release> -->
    <!-- <maven.compiler.source>17</maven.compiler.source> -->
    <!-- <maven.compiler.target>17</maven.compiler.target> -->
</properties>

<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-compiler-plugin</artifactId>
            <version>3.11.0</version> <!-- Use a recent compatible version -->
            <configuration>
                <!-- Use <release> for Java 9+ -->
                <release>${java.version}</release>
            </configuration>
        </plugin>
        <!-- It's also good practice to update Surefire (unit tests) -->
        <!-- and Failsafe (integration tests) plugins to recent versions -->
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-surefire-plugin</artifactId>
            <version>3.1.2</version> <!-- Use a recent compatible version -->
        </plugin>
        <plugin>
             <groupId>org.apache.maven.plugins</groupId>
             <artifactId>maven-failsafe-plugin</artifactId>
             <version>3.1.2</version> <!-- Use a recent compatible version -->
         </plugin>
    </plugins>
</build>
```

Ensure your Maven environment (`JAVA_HOME` or IDE settings) points to the new JDK.

### Gradle (`build.gradle` or `build.gradle.kts`)

Use Java Toolchains to specify the JDK version.

```gradle
// build.gradle
plugins {
    id 'java' // or 'java-library', 'application'
    id 'org.springframework.boot' version '3.2.4' // <-- Will update this in Step 3
    id 'io.spring.dependency-management' version '1.1.4' // Use a recent version
}

// ... other configurations

java {
    // Configure Java toolchains for JDK 17 or 21
    toolchain {
        languageVersion = JavaLanguageVersion.of(17) // Or 21
    }
    // You might still see sourceCompatibility/targetCompatibility,
    // but toolchains are preferred with recent Gradle.
    // sourceCompatibility = '17' // Or '21'
    // targetCompatibility = '17' // Or '21'
}

// Optional: Configure test task to explicitly use the toolchain launcher
// test {
//     useJUnitPlatform()
//     javaLauncher = javaToolchains.launcherFor {
//         languageVersion = JavaLanguageVersion.of(17) // Or 21
//     }
// }
```

```kotlin
// build.gradle.kts
import org.gradle.jvm.toolchain.JavaLanguageVersion

plugins {
    java // or java-library, application
    id("org.springframework.boot") version "3.2.4" // <-- Will update this in Step 3
    id("io.spring.dependency-management") version "1.1.4" // Use a recent version
}

// ... other configurations

java {
    // Configure Java toolchains for JDK 17 or 21
    toolchain {
        languageVersion = JavaLanguageVersion.of(17) // Or 21
    }
    // sourceCompatibility = JavaVersion.VERSION_17 // Or 21
    // targetCompatibility = JavaVersion.VERSION_17 // Or 21
}

// Optional: Configure test task
// tasks.test {
//    useJUnitPlatform()
//    javaLauncher = javaToolchains.launcherFor {
//         languageVersion = JavaLanguageVersion.of(17) // Or 21
//     }
// }
```

Ensure your Gradle environment or IDE settings point to the new JDK or configure Gradle to automatically download it via toolchains.

---

## Step 3: Update Spring Boot Version

Spring Boot 3.x requires Java 17 or later and is the recommended path for Java 17/21 upgrades. This step involves migrating from Java EE to Jakarta EE namespaces.

*   **Maven (`pom.xml`)**

    Update the version of the Spring Boot parent POM:

    ```xml
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.2.4</version> <!-- Use the latest stable 3.x version -->
        <relativePath/> <!-- lookup parent from repository -->
    </parent>

    <!-- Also ensure <java.version> in properties is 17 or 21 -->
    ```

*   **Gradle (`build.gradle` or `build.gradle.kts`)**

    Update the version of the Spring Boot plugin:

    ```gradle
    // build.gradle
    plugins {
        id 'java'
        id 'org.springframework.boot' version '3.2.4' // Use the latest stable 3.x version
        id 'io.spring.dependency-management' version '1.1.4' // Use a recent version
    }
    // ...
    ```

    ```kotlin
    // build.gradle.kts
    plugins {
        java
        id("org.springframework.boot") version "3.2.4" // Use the latest stable 3.x version
        id("io.spring.dependency-management") version "1.1.4" // Use a recent version
    }
    // ...
    ```

---

## Step 4 & 5: Update Other Dependencies, Compile, and Test

This is where you identify and fix compatibility issues.

1.  **Clean Build:** Run a clean build (`mvn clean install` or `gradle clean build`).
2.  **Address Compilation Errors:**
    *   **Jakarta EE Namespace:** The most common error when moving to Spring Boot 3 is `javax` vs `jakarta` package names. Imports like `javax.persistence.*` need to change to `jakarta.persistence.*`. Your IDE often has automated refactoring tools to help with this.
    *   **Deprecated APIs:** Newer JDK or library versions might have removed or changed APIs you were using.
3.  **Update Other Dependencies:** Ensure other major libraries (database drivers, testing frameworks, other Spring projects like Spring Cloud, etc.) are compatible with your new Java and Spring Boot versions. Update their versions in your build file.
4.  **Run Tests:** Execute all your unit and integration tests. This is critical for finding behavioral changes or issues not caught by compilation.
5.  **Manual Testing:** Thoroughly test your application's key functionalities, especially API endpoints, data persistence, and integrations.
6.  **Check Logs:** Monitor application startup and runtime logs for warnings or errors related to the new environment.

---

## Handling the Jakarta EE Migration (Spring Boot 3.x Specific)

This is the most significant potential hurdle. Spring Boot 3.x switched from Java EE APIs to Jakarta EE APIs.

*   **Primary Change:** Package names change from `javax.*` to `jakarta.*` (e.g., `javax.validation.constraints` becomes `jakarta.validation.constraints`).
*   **Tools to Help:**
    *   **Spring Boot 3.0 Migration Guide:** Consult the official guide for detailed steps and considerations: [https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-3.0-Migration-Guide](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-3.0-Migration-Guide)
    *   **OpenRewrite:** This is a powerful automated refactoring tool that can perform many migration steps (like changing package names, updating dependencies) automatically. It's highly recommended for larger projects. Learn more: [https://docs.openrewrite.org/recipes/java/spring/boot3/upgradespringboot_3](https://docs.openrewrite.org/recipes/java/spring/boot3/upgradespringboot_3)

---

## Conclusion

Upgrading your Java and Spring Boot versions brings performance improvements, new language features (like Records in Java 14+), and keeps you on supported versions. While it requires careful steps, especially the Jakarta EE migration for Spring Boot 3, using build tools correctly and leveraging automated tools like OpenRewrite can significantly streamline the process. **Thorough testing is non-negotiable!**
