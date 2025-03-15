let btn = document.getElementById("copy");

let svg = `<svg width="300" height="350" viewBox="0 0 300 350" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect x="10" y="10" width="280" height="330" rx="10" ry="10" fill="#f5f5f5" stroke="#333" stroke-width="2"/>

  <!-- Title -->
  <text x="150" y="40" font-size="20" font-weight="bold" text-anchor="middle" fill="#333">Contact Us</text>

  <!-- Name Field -->
  <rect x="30" y="60" width="240" height="40" rx="5" ry="5" fill="#fff" stroke="#ccc"/>
  <text x="40" y="85" font-size="14" fill="#aaa">Your Name</text>

  <!-- Email Field -->
  <rect x="30" y="110" width="240" height="40" rx="5" ry="5" fill="#fff" stroke="#ccc"/>
  <text x="40" y="135" font-size="14" fill="#aaa">Your Email</text>

  <!-- Message Box -->
  <rect x="30" y="160" width="240" height="100" rx="5" ry="5" fill="#fff" stroke="#ccc"/>
  <text x="40" y="185" font-size="14" fill="#aaa">Your Message</text>

  <!-- Submit Button -->
  <rect x="100" y="280" width="100" height="40" rx="5" ry="5" fill="#ff4757" stroke="#d43f4d"/>
  <text x="150" y="305" font-size="16" font-weight="bold" text-anchor="middle" fill="#fff">Submit</text>
</svg>
`;


btn.addEventListener("click",function copyToFigma(){

    navigator.clipboard.writeText(svg).then(()=>{
        alert("Now Paste in Figma")
    }).catch(err =>{
        alert("Error");
    });

})