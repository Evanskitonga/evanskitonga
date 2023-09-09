

var text = "My name is Evans Kitonga a certified Information System Security,My name is Evans Kitonga a certified Information System Security.A self motivated person who can work without supervision.My biggest aim is to see secure system and see companies growing in the best area of IT.I  have based my skills in graphics design,Web Development,Video Editing and many more skills in area of IT.I enjoy being part of different sectors success promoting quality and affordable services.IT is the way to go for me and looking forward to bring impact in the country and world wide connection";
var textAnimation = document.getElementById("text-animation");
var index = 0;

function animateText() {
  textAnimation.textContent += text.charAt(index);
  index++;

  if (index < text.length) {
    setTimeout(animateText, 100);
  }
}

animateText();
