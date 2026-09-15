const BUSINESS = {
  name: "Nanayakkara Book Shop & Communication",
  phoneDisplay: "0772668069",
  phone: "+94772668069",

  whatsappDisplay: "0772668069",
  whatsapp: "94772668069",

  email: "nhgnet@gmail.com",

  location:
    "https://www.google.com/maps/place/Nanayakkara+Book+Shop/@5.9542757,80.5498378,18z/data=!4m8!3m7!1s0x3ae138d1e45aed13:0x971d4c37f2873d0b!8m2!3d5.9543771!4d80.5503045!9m1!1b1!16s%2Fg%2F11f2xn_381?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D",

  review:
    "https://www.google.com/maps/place/Nanayakkara+Book+Shop/@5.9542757,80.5498378,18z/data=!4m8!3m7!1s0x3ae138d1e45aed13:0x971d4c37f2873d0b!8m2!3d5.9543771!4d80.5503045!9m1!1b1!16s%2Fg%2F11f2xn_381?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D"
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("phoneText").textContent = BUSINESS.phoneDisplay;
  document.getElementById("whatsappText").textContent = BUSINESS.whatsappDisplay;
  document.getElementById("emailText").textContent = BUSINESS.email;

  const callLink = `tel:${BUSINESS.phone}`;
  const whatsappMessage = encodeURIComponent("Hello Nanayakkara Book Shop & Communication");
  const whatsappLink = `https://wa.me/${BUSINESS.whatsapp}?text=${whatsappMessage}`;

  document.getElementById("phoneRow").href = callLink;
  document.getElementById("whatsappRow").href = whatsappLink;
  document.getElementById("whatsappButton").href = whatsappLink;
  document.getElementById("emailRow").href = `mailto:${BUSINESS.email}`;
  document.getElementById("locationRow").href = BUSINESS.location;
  document.getElementById("reviewRow").href = BUSINESS.review;
  document.getElementById("reviewButton").href = BUSINESS.review;
});
