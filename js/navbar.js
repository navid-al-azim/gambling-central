// navbar.js

function loadNavbar() {
  // Create a div to hold the content
  var container = document.createElement("div");

  // Set the HTML content for the navigation bar
  container.innerHTML = `
  
   
  <header>
	<div class="container">
	  <div class="nav-wrapper">
		
		<a href="/index.html" class="logo">
		  <img src="/images/logo.png" alt="CasinoCanada Logo">
		</a>
		<span class="site-name">#1 Casino Review Site</span>
		<a href="./about.html" class="about-us">About Us</a>
	  </div>
	  <nav>
		<ul>
				<li>
					<a href="/">CASINO ONLINE▾</a>
					<div class="casino-online-submenu">
					<ul>
						<li><a href="/pages/casinos/fast-payout/">Fast Paying Casinos</a></li>
						<li><a href="/pages/casinos/best-pay/">Best Paying Casinos</a></li>
						<li><a href="/pages/casinos/payments/">Payments▸</a>
				<!-- Add a nested submenu for "Payments" -->
						<div class="sub-submenu">
							<ul>
							<li><a href="/pages/casinos/payments/bitcoin/">Bitcoin</a></li>
							<li><a href="/pages/casinos/payments/neteller/">Neteller</a></li>
							<li><a href="/pages/casinos/payments/debit">Debit Card</a></li>
							</ul>
						</div>
						</li>
					</ul>
					</div>
				</li>
		  <li><a href="/pages/reviews">REVIEWS▾</a>
		  <div class="casino-online-submenu">
			  <ul>
				<li><a href="/pages/reviews/new-casinos/">New Casinos</a></li>
				<li><a href="/pages/reviews/mobile-casinos">Mobile Casinos▸</a>
				<div class="sub-submenu">
					<ul>
					  <li><a href="/pages/reviews/mobile-casinos/android/">Android</a></li>
					  <li><a href="/pages/reviews/mobile-casinos/iphone">IPhone</a></li>
					  
					</ul>
				  </div></li>
				<li><a href="/pages/reviews/real-money-casinos">Real Money Casinos</a></li>
			  </ul>
			</div></li>
		  <li><a href="/pages/games/">CASINO GAMES▾</a>
		  <div class="casino-online-submenu">
			  <ul>
				<li><a href="/pages/games/blackjack">Blackjack</a></li>
				<li><a href="/pages/games/bingo/">Bingo</a></li>
				<li><a href="/pages/games/online-lottery/">Online Lottery</a></li>
			  </ul>
			</div></li>
		  
		  <li><a href="/pages/bonuses/">BONUSES▾</a>
		  <div class="casino-online-submenu">
			  <ul>
				<li><a href="/pages/bonuses/no-deposit">No Deposit</a></li>
				<li><a href="/pages/bonuses/free-spins/">Free Spins</a></li>
				<li><a href="/pages/bonuses/cashback/">Cashback</a></li>
			  </ul>
			</div></li>
		  <li><a href="/pages/free-slots/">FREE SLOTS▾</a>
		  <div class="casino-online-submenu">
			  <ul>
				<li><a href="/pages/free-slots/popular-slots/">Popular Slots</a></li>
				<li><a href="/pages/free-slots/real-money-slots/">Real Money Slots</a></li>
				
			  </ul>
			</div></li>
		  
		</ul>
	  </nav>
	</div>
  </header>
  
	`;

  // Append the content to the container
  document.getElementById("navbar-container").appendChild(container);
}

// Call the function to load the navbar when the DOM is ready
document.addEventListener("DOMContentLoaded", loadNavbar);
