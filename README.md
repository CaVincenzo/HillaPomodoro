## Pomodoro Application

This project is a Pomodoro Application built using the Hilla framework, which combines Spring Boot on the server
side and React on the client side. The Pomodoro Technique is a time management method developed by Francesco Cirillo in
the late 1980s. This application helps users to use the Pomodoro Technique by providing a customizable timer to track
work and break intervals.

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

## Building process


## Project structure

<table style="width:100%; text-align: left;">
  <tr><th>Directory</th><th>Description</th></tr>
  <tr><td><code>frontend/</code></td><td>Client-side source directory</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;<code>index.html</code></td><td>HTML template</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;<code>index.ts</code></td><td>Frontend 
entrypoint, bootstraps a React application</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;<code>routes.tsx</code></td><td>React Router routes definition</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;<code>MainLayout.tsx</code></td><td>Main 
layout component, contains the navigation menu, uses <a href="https://hilla.dev/docs/react/components/app-layout">
App Layout</a></td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;<code>views/</code></td><td>UI view 
components</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;<code>themes/</code></td><td>Custom  
CSS styles</td></tr>
  <tr><td><code>src/main/java/&lt;groupId&gt;/</code></td><td>Server-side 
source directory, contains the server-side Java views</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;<code>Application.java</code></td><td>Server entry-point</td></tr>
</table>

## Useful links

- Read the documentation at [hilla.dev/docs](https://hilla.dev/docs/).

