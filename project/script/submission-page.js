// Submission Page Functionality

let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;
reviewCount++;
localStorage.setItem("reviewCount", reviewCount);

const reviewCounter = document.getElementById("reviewCounter");
if (reviewCounter) {
  reviewCounter.textContent = `You have submitted ${reviewCount} review(s).`;
}
