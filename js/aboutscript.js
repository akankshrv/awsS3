const roles = {
  member1: "AI Engineer & Co-Founder",
  member2: "Data Scientist & Co-Founder",
  member3: "Full-Stack Developer & Co-Founder",
};

function showRole(memberId) {
  document.getElementById(memberId + "-role").innerHTML = roles[memberId];
}

function hideRole() {
  const roleElements = document.querySelectorAll(".role");
  roleElements.forEach(function (element) {
    element.innerHTML = "";
  });
}
