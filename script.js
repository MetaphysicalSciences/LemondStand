let money = 20.00;
let day = 1;

let inventory = {
  lemons: 0,
  ice: 0,
  cups: 0
};

function updateUI() {
  document.getElementById('money').textContent = money.toFixed(2);
  document.getElementById('day').textContent = day;
  document.getElementById('lemons').textContent = inventory.lemons;
  document.getElementById('ice').textContent = inventory.ice;
  document.getElementById('cups').textContent = inventory.cups;
}

function buy(item) {
  const prices = { lemons: 1.0, ice: 0.5, cups: 0.2 };
  if (money >= prices[item]) {
    inventory[item]++;
    money -= prices[item];
    updateUI();
  } else {
    alert("Not enough money!");
  }
}

function startDay() {
  let customerCount = Math.floor(Math.random() * 10) + 5;
  let sold = 0;

  for (let i = 0; i < customerCount; i++) {
    setTimeout(() => {
      if (inventory.lemons > 0 && inventory.ice > 0 && inventory.cups > 0) {
        let customer = document.createElement("div");
        customer.className = "customer";
        let img = document.createElement("img");
        img.src = "images/human.png";
        customer.appendChild(img);
        document.getElementById("customers").appendChild(customer);

        inventory.lemons--;
        inventory.ice--;
        inventory.cups--;
        money += 1.5;
        sold++;

        setTimeout(() => customer.remove(), 1500);
        updateUI();
      }
    }, i * 500);
  }

  day++;
  setTimeout(() => alert(`Day ${day - 1} over! You sold ${sold} cups.`), customerCount * 500 + 500);
}
