// flavor filtering

document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.product-filter');
    const productItems = document.querySelectorAll('.product-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const isAlreadyActive = button.classList.contains('active');
            const filterValue = button.getAttribute('data-filter');

            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.style.backgroundColor = "transparent";
                btn.style.color = "#424B5A";
            });

            if (isAlreadyActive) {
                productItems.forEach(item => {
                    item.style.display = "flex";
                });
            } else {
                button.classList.add('active');
                button.style.backgroundColor = "#424B5A";
                button.style.color = "white";

                productItems.forEach(item => {
                    const itemFlavors = item.getAttribute('data-flavor') || "";

                    if (itemFlavors.includes(filterValue)) {
                        item.style.display = "flex";
                    } else {
                        item.style.display = "none";
                    }
                });
            }
        });
    });
});

// compare section

const products = {
  'matcha-a': {
    price: '$32', weight: '30 g', perGram: '$1.06/g',
    imgBg: "url('img/Product1.png')",
    notes: 'Vanilla and Stone Fruit',
    profiles: ['sweetness', 'umami', 'vegetal'],
    region: 'Kyoto, Japan', grade: 'Ceremonial', cultivar: 'Yabukita blend',
  },
  'matcha-b': {
    price: '$44', weight: '50 g', perGram: '$0.88/g',
    imgBg: "url('img/Product2.png')",
    notes: 'Smooth, Delicate, Grassy, Creamy',
    profiles: ['thickness', 'vegetal'],
    region: 'Kakegawa, Shizuoka', grade: 'Ceremonial', cultivar: 'Okumidori, Yabukita',
  },
'matcha-c': {
    price: '$50', weight: '40 g', perGram: '$1.25/g',
    imgBg: "url('img/Product3.jpg')",
    notes: 'Balanced, Umami, Low Bitterness, Smooth, Slight Sweetness',
    profiles: ['sweetness', 'umami'],
    region: 'Nagasaki, Japan', grade: 'Ceremonial', cultivar: 'Okumidori, Saeakari',
  },
'matcha-d': {
    price: '$50', weight: '100 g', perGram: '$0.50/g',
    imgBg: "url('img/Product4.png')",
    notes: 'Floral, Mildly Astringent, Mild, Sweet',
    profiles: ['astringent', 'thickness', 'sweetness'],
    region: 'Shizuoka, Japan', grade: 'Medium', harvest: 'Second Harvest',
  },
'matcha-e': {
    price: '$40', weight: '40 g', perGram: '$1.00/g',
    imgBg: "url('img/Product5.png')",
    notes: 'Rich, Sweet, Floral, Nutty, Umami',
    profiles: ['sweetness', 'umami'],
    region: 'Shizuoka and Kagoshima blend', grade: 'Ceremonial', cultivar: 'Yabukita, Yutaka Midori',
  },
'matcha-f': {
    price: '$50', weight: '100 g', perGram: '$0.50/g',
    imgBg: "url('img/Product6.png')",
    notes: 'Green Pepper, Creamy, Smooth',
    profiles: ['vegetal', 'astringent', 'thickness'],
    region: 'Kagoshima, Shizuoka', grade: 'Ceremonial', cultivar: 'Okumidori',
  },
'matcha-g': {
    price: '$35', weight: '30 g', perGram: '$1.17/g',
    imgBg: "url('img/Product7.png')",
    notes: 'Snap Peas, Umami, Delicate Sweetness, Chocolate-like finish, Little Astringency, Smooth',
    profiles: ['sweetness', 'umami'],
    region: 'Uji, Japan', grade: 'Ceremonial', cultivar: 'Yabukita',
  },
'matcha-h': {
    price: '$58', weight: '30 g', perGram: '$1.93/g',
    imgBg: "url('img/Product8.png')",
    notes: 'Rich Umami, Creamy, Balanced',
    profiles: ['thickness', 'umami'],
    region: 'Shizuoka, Japan', grade: 'Ceremonial', cultivar: 'Yabukita, Okumidori, Tsuyuhikari, Akanoka, Sakimidori, Asatsuyur',
  },
'matcha-i': {
    price: '$58', weight: '50 g', perGram: '$1.16/g',
    imgBg: "url('img/Product9.png')",
    notes: 'Floral, earthy, mellow with a refreshing crisp finish',
    profiles: ['sweetness', 'vegetal', 'acidity'],
    region: 'Kakegawa, Shizuoka', grade: 'Ceremonial', cultivar: 'Saemidori',   
  },
'matcha-j': {
    price: '$37', weight: '30 g', perGram: '$1.23/g',
    imgBg: "url('img/Product10.png')",
    notes: 'Light-bodied, high sweetness reminiscent of ripe citrus fruit, hints of baby spinach',
    profiles: ['sweetness', 'acidity', 'umami'],
    region: 'Kirishima, Kyushu', grade: 'Ceremonial', cultivar: 'Yabukita, Asatsuyu, Okumidori',   
  },
'matcha-k': {
    price: '$44', weight: '50 g', perGram: '$0.88/g',
    imgBg: "url('img/Product11.png')",
    notes: 'Full Bodied, Luscious, Balanced',
    profiles: ['sweetness', 'umami', 'astringent'],
    region: 'Nishio, Aichi', grade: 'Ceremonial', cultivar: 'Okumidori, Yabukita, Saemidori',   
    }   
};

function updateCard(select, cardId) {
  const value = select.value;
  const suffix = cardId === 'card-1' ? '1' : '2';
  const imgBox = document.getElementById('img-box-' + suffix);
  const content = document.getElementById('content-' + suffix);

if (!value) {
    imgBox.className = 'card-image-box placeholder';
    imgBox.innerHTML = ''; 
    imgBox.style.background = '#f0ede6';   
    content.className = 'card-content empty';
    content.innerHTML = '<p>Select a product to compare</p>';
    return;
}

const p = products[value];

    imgBox.className = 'card-image-box';
    imgBox.innerHTML = ''; 
    imgBox.style.background = p.imgBg; 
    imgBox.style.backgroundSize = 'cover';
    imgBox.style.backgroundPosition = 'center';

const tags = p.profiles.map(t => `<span class="tag">${t}</span>`).join('');
  content.className = 'card-content';
  content.innerHTML = `
    <div class="badges">
      <div class="badge">${p.price}</div>
      <div class="badge">${p.weight}</div>
      <div class="badge">${p.perGram}<span class="badge-sub"></span></div>
    </div>
    <div class="info-section">
      <div class="info-section-title">This matcha tastes…</div>
      <div class="info-row"><span class="info-label">Notes:</span> ${p.notes}</div>
      <div class="info-row"><span class="info-label">Profiles:</span> <span class="tags">${tags}</span></div>
    </div>
    <div class="info-section">
      <div class="info-section-title">This matcha is…</div>
      <div class="info-row"><span class="info-label">Region:</span> ${p.region}</div>
      <div class="info-row"><span class="info-label">Grade:</span> ${p.grade}</div>
      ${p.cultivar ? `<div class="info-row"><span class="info-label">Cultivar:</span> ${p.cultivar}</div>` : ''}
      ${p.harvest  ? `<div class="info-row"><span class="info-label">Harvest:</span>  ${p.harvest}</div>`  : ''}
    </div>
  `;
}

// side navigation

function openNav() {
  document.getElementById("mySidenav").style.display = "block";
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("myOverlay").style.display = "block";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("myOverlay").style.display = "none";
}