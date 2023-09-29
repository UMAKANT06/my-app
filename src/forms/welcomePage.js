import React from "react";

const backgroundStyle = {
  backgroundImage: 'url("loginBackgroundPage.png")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh", // Set the height as needed
};

function Welcome() {
  return (
    <div style={backgroundStyle}>
      <h1>Welcome to My Website</h1>

      <p>
        Thank you for vbdfdhfgjfj,kisiting our website. We're glad to have you
        here!
      </p>
    </div>
  );
}

export default Welcome;
