// footer.js

function loadFooter() {
  // Create a div to hold the content
  var container = document.createElement('div');

  // Set the HTML content for the footer
  container.innerHTML = `
<footer>
  <div class="footer-column">
    <h2>CASINO ONLINE</h2>
    <ul>
      <li><a href="/pages/casinos/fast-payout/">Fast Pay</a></li>
      <li><a href="/pages/casinos/best-pay/">Best Pay</a></li>
      <li><a href="/pages/casinos/payments/bitcoin/">Bitcoin</a></li>
      <li><a href="/pages/casinos/payments/neteller/">Neteller</a></li>
      <li><a href="/pages/casinos/payments/debit">Debit Card</a></li>
    </ul>
  </div>

  <div class="footer-column">
    <h2>REVIEWS</h2>
    <ul>
      <li><a href="/pages/reviews/new-casinos/">New Casino</a></li>
      <li><a href="/pages/reviews/mobile-casinos/android/">Android</a></li>
      <li><a href="/pages/reviews/mobile-casinos/iphone">iPhone</a></li>
      <li><a href="/pages/reviews/real-money-casinos">Real Money Casino</a></li>
    </ul>
  </div>

  <div class="footer-column">
    <h2>CASINO GAMES</h2>
    <ul>
      <li><a href="/pages/games/blackjack">Blackjack</a></li>
      <li><a href="/pages/games/bingo/">Bingo</a></li>
      <li><a href="/pages/games/online-lottery/">Online Lottery</a></li>
    </ul>
  </div>

  <div class="footer-column">
    <h2>BONUSES</h2>
    <ul>
      <li><a href="/pages/bonuses/no-deposit">No Deposit</a></li>
      <li><a href="/pages/bonuses/free-spins/">Free Spin</a></li>
      <li><a href="/pages/bonuses/cashback/">Cashback</a></li>
    </ul>
  </div>

  <div class="footer-column">
    <h2>FREE SLOTS</h2>
    <ul>
      <li><a href="/pages/free-slots/popular-slots/">Popular Slots</a></li>
      <li><a href="/pages/free-slots/real-money-slots/">Real Money Slots</a></li>
    </ul>
  </div>

  <div class="footer-social">
    <a href="#" class="fa fa-facebook"></a>
    <a href="#" class="fa fa-instagram"></a>
    <a href="#" class="fa fa-twitter"></a>
    <a href="#" class="fa fa-linkedin"></a>
    <a href="#" class="fa fa-telegram"></a>
    <a href="#" class="fa fa-pinterest"></a>
  </div>
</footer>
  `;

  // Append the content to the body
  document.getElementById('footer-container').appendChild(container);
}

// Call the function to load the footer when the DOM is ready
document.addEventListener('DOMContentLoaded', loadFooter);
