# Interactive Three.js Sky & Cloud Scene

This is an interactive web application built with React and Three.js that renders a dynamic 3D scene. It features a procedural sky with a customizable two-color gradient and an animated, procedural cloud layer with three adjustable colors.

The application includes a sleek, collapsible UI panel that allows users to modify the sky and cloud colors in real-time, as well as toggle the scene's directional lights. The cloud shader creates a smooth, "boiling" animation effect, simulating natural cloud movement and evolution.

## Features

- **Dynamic Sky Shader:** A beautiful sky dome with a smooth gradient transition between two user-definable colors.
- **Procedural Cloud Layer:** Animated clouds generated using a simplex noise shader, giving them a realistic, evolving appearance.
- **Advanced Cloud Animation:** Clouds have a "boiling" motion, making them appear to form and dissipate organically.
- **Full Color Customization:** An easy-to-use UI panel allows for real-time color changes for the sky (top and bottom) and clouds (shadow, mid-tones, and highlights).
- **Adaptive Lighting:** The scene includes directional lights that automatically match the selected sky colors, creating an immersive atmosphere.
- **Toggleable Lights:** Users can turn the scene's lighting on or off.
- **Procedural 3D Terrain:** A simple, noise-generated terrain provides a ground plane for the scene.
- **Multiple Loading Screens:** The application features different themed loading screens (e.g., "Starry Night") for a varied initial experience.
- **Responsive Design:** The Three.js canvas and UI components are fully responsive and adapt to different screen sizes.

## Technologies Used

- **Frontend:** React, TypeScript
- **3D Rendering:** Three.js
- **Styling:** Tailwind CSS
- **Shaders:** GLSL (OpenGL Shading Language) for the sky and cloud effects.

This project serves as a demonstration of combining modern web technologies to create visually rich, interactive 3D experiences in the browser.
