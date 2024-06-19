## Projektarbeit Pomodoro Application

This project is a Pomodoro Application built using the Hilla framework, which combines Spring Boot on the server
side and React on the client side. The Pomodoro Technique is a time management method developed by Francesco Cirillo in
the late 1980s. This application helps users to use the Pomodoro Technique by providing a customizable timer to track
work and break intervals. The Quick Start, How to create and run a Hilla React application from the  Hilla-Documentation was used as a starting Point for this Application.

## About Hilla

Hilla is a full-stack framework that allows developers to build modern web applications using Java on the backend and
React on the frontend. Hilla seamlessly integrates the two technologies, providing a robust environment for rapid
application development with strong type safety and efficient data handling. Hilla also provides UI components that can be utilized
for a more professional application. 

What are the benefits of Hilla?

- Saves development time by simplifying communication between the frontend and Java backend, eliminating the need to create a REST API;

- Enforces end-to-end type-safety, identifying errors during the build process, when they are faster to fix, and ensuring they don’t make it into production;

- Reduces the time to build a UI with more than 45 ready-made components plus a fully-customizable theme, all maintained by Vaadin;

- Simplifies security with endpoints that are secured by default and validation that ensures data integrity across the server and client; and

- Gets you started quickly with a zero-configuration toolchain for building both your frontend and backend.

## Requirements
To starte the Application you need at least those following settings.
- Java 19 or later
- Node 18 or later
- An IDE that supports Java and TypeScript IntelliJ or VS Code


## Project structure

<table style="width:100%; text-align: left;">
  <tr><th>Directory</th><th>Description</th></tr>
  <tr><td><code>frontend/</code></td><td>Client-side source directory</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;<code>context/</code></td><td>Context components for state management</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>PomodoroContext.tsx</code></td><td>Context for Pomodoro state</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>PomodoroTimerContext.tsx</code></td><td>Context for Global-Pomodoro Timer state</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>UseTimer.ts</code></td><td>Custom hook for timer functionality</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;<code>generated/</code></td><td>Generated  Hilla code directory</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;<code>themes/</code></td><td>Custom CSS styles</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>styles.css</code></td><td>Custom styles</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;<code>util/</code></td><td>Utility</td></tr>
<tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>routes.tsx</code></td><td>React Router routes definition</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;<code>views/</code></td><td>UI view components</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>DescriptionView.tsx</code></td><td>Component for description view</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>login-view.ts</code></td><td>Component for login view</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>PomodoroSettingsView.tsx</code></td><td>Component for Pomodoro settings view</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>PomodoroView.tsx</code></td><td>Component for Pomodoro main view</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;<code>App.tsx</code></td><td>Main App component</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;<code>auth.ts</code></td><td>Authentication logic</td></tr>

  <tr><td><code>src/</code></td><td>Server-side source directory, contains the server-side Java views</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;<code>endpoints/</code></td><td>REST API endpoints</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>TodoEndpoints.java</code></td><td>Endpoints for Todo operations</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;<code>entity/</code></td><td>JPA entities</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>Todo.java</code></td><td>Todo entity class</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;<code>exception/</code></td><td>Exception handling</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>ExceptionHandler.java</code></td><td>Global exception handler</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;<code>repository/</code></td><td>Repositories for database access</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>TodoRepo.java</code></td><td>Repository for Todo operations</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;<code>security/</code></td><td>Security configurations and services</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>SecurityConfig.java</code></td><td>Spring Security configuration</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>UserInfo.java</code></td><td>User information entity</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>UserInfoService.java</code></td><td>Service for user information operations</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;<code>Application.java</code></td><td>Server entry point</td></tr>
  <tr><td><code>resources/</code></td><td>Resources directory</td></tr>

  <tr><td><code>README.md</code></td><td>Project documentation</td></tr>
</table>

## Useful links

- Read the documentation at [hilla.dev/docs](https://hilla.dev/docs/).

