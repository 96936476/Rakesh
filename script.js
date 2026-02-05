function sendMessage(event) {
  event.preventDefault();
  alert('Thank you! Your message has been sent.');
  event.target.reset();
}

function openProject(project) {
  document.getElementById('project-view').style.display = 'block';
  document.getElementById('projects').style.display = 'none';

  if (project === 'restaurant') {
    document.getElementById('project-title').innerText = 'Gurkha Rest & Bar';
    document.getElementById('project-content').innerHTML = `
      <style>
        .grb-header{background:#2b2b2b;color:white;padding:20px;text-align:center}
        .grb-menu{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:15px;margin-top:20px}
        .grb-card{border:1px solid #ddd;border-radius:10px;padding:15px;text-align:center}
        .grb-btn{background:#1d3557;color:white;border:none;padding:8px 15px;border-radius:20px;cursor:pointer}
      </style>

      <div class="grb-header">
        <h2>Gurkha Resto & Bar</h2>
        <p>Nepali • Indian • Continental</p>
        <p>Kanchanpur, Nepal</p>
        <b>Open Hours:</b> 8:00 AM - 10:00 PM
      </div>

      <h3 style="margin-top:20px">Our Menu</h3>
      <div class="grb-menu">
        <div class="grb-card">Momo<br/><b>150Rs</b></div>
        <div class="grb-card">Chowmein<br/><b>100Rs</b></div>
        <div class="grb-card">Chicken Curry<br/><b>200Rs</b></div>
        <div class="grb-card">Veg Thali<br/><b>80Rs</b></div>
      </div>

      <button class="grb-btn" onclick="alert('Table booked successfully!')" style="margin-top:20px">Book a Table</button>
    `;
  }

  if (project === 'calculator') {
    document.getElementById('project-title').innerText = 'Calculator App';
    document.getElementById('project-content').innerHTML = `
      <input id="calc-display" readonly style="width:100%; padding:10px; font-size:20px;" />
      <div style="display:grid; grid-template-columns:repeat(4,1fr); gap:10px; margin-top:10px;">
        <button onclick="calc('7')">7</button>
        <button onclick="calc('8')">8</button>
        <button onclick="calc('9')">9</button>
        <button onclick="calc('/')">/</button>
        <button onclick="calc('4')">4</button>
        <button onclick="calc('5')">5</button>
        <button onclick="calc('6')">6</button>
        <button onclick="calc('*')">*</button>
        <button onclick="calc('1')">1</button>
        <button onclick="calc('2')">2</button>
        <button onclick="calc('3')">3</button>
        <button onclick="calc('-')">-</button>
        <button onclick="calc('0')">0</button>
        <button onclick="calc('.')">.</button>
        <button onclick="calculate()">=</button>
        <button onclick="calc('+')">+</button>
      </div>
    `;
  }
}

function closeProject() {
  document.getElementById('project-view').style.display = 'none';
  document.getElementById('projects').style.display = 'block';
}

function calc(value) {
  document.getElementById('calc-display').value += value;
}

function calculate() {
  const display = document.getElementById('calc-display');
  display.value = eval(display.value);
}
