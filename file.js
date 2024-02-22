let arrProducts = [
    {
        name: "Girlwood Lip Care Set",
        description: "Комплекс з догляду за губами",
        price: 10, 
        image: "фото1.png"
    },
    {
        name: "Hadat Cosmetics Hydro Nutrient Nourishing Conditioner",
        description: "Зволожуючий Кондиціонер",
        price: 20, 
        image: "фото2.png"
    },
    {
        name: "Єва колаген Єгипетський",
        description: "Антивіковий крем поживний для зрілої шкіри від зморщок Єва колаген Єгипетський 50+ Anti-Ageing Оригінал",
        price: 20, 
        image: "фото3.png"
    },
    {
        name: "Missha Signature M Real Complete BB Cream",
        description: "SPF30/PA++ (45ml)",
        price: 20, 
        image: "фото4.png"
    },
    {
        name: "ПІНКА ДЛЯ ВМИВАННЯ",
        description: "Ed Cosmetics Men Cleansing Foam",
        price: 20, 
        image: "фото5.png"
        
    },
    {
        name: "Гідрофільна олійка",
        description: "Anti acne для жирної і проблемної шкіри обличчя",
        price: 20, 
        image: "фото6.png"
    },
    {
        name: "Набір карбоксітерапії з фруктовими кислотамиЯ",
        description: "Для всіх типів шкіри",
        price: 20, 
        image: "фото7.png"
    },
    {
        name: "Крем для обличчя Anti acne",
        description: "Лікувальний, проти акне та запальних процесів",
        price: 20, 
        image: "фото8.png"
    }
];

let productContainer = document.getElementById("container");

  arrProducts.forEach((elem) => {
      let productItem = document.createElement('div');
      productItem.classList.add('product-item');

      let img = document.createElement('img');
      img.src = elem.image;
      img.alt = elem.name;
      productItem.appendChild(img);

      let h3 = document.createElement('h3');
      h3.textContent = elem.name;
      productItem.appendChild(h3);

      let pDescription = document.createElement('p');
      pDescription.textContent = elem.description;
      pDescription.style.display = 'none'; // Початково опис прихований
      productItem.appendChild(pDescription);

      let pPrice = document.createElement('p');
      pPrice.textContent = 'Ціна: $' + elem.price;
      productItem.appendChild(pPrice);

      let button = document.createElement('button');
      button.textContent = 'Купити';
      productItem.appendChild(button);

      // Додаємо обробник події для кнопки розгортання опису
      h3.addEventListener('click', function() {
          if (pDescription.style.display === 'none') {
              pDescription.style.display = 'block';
          } else {
              pDescription.style.display = 'none';
          }
      });

      productContainer.appendChild(productItem);
  });