function conclusion () {
    $.get('cars.php', {token:localStorage['token']}, function(date) {

        let otvet = JSON.parse(date)
        if ('error' in otvet) {
            alert(otvet['error']['text'])
        }
        else if ('videos' in otvet) {
            let  videos = otvet['videos']
            let div = $('#card')
            videos.forEach(function(item, i,  videos) {
                let t = $('<section class="home"><div class="home__container"><div class="avto"><center><img src="11.png" alt="avto"><div>Toyota Mark2 100 <br> Двигатель 2JZ-GTE <br> Мощностью 470 л.с. <br> цена аренды 400₽/ч <br></div><a href="oplata.html" class="text_block__button button">Арендовать</a></center></div><div class="avto"><center><img src="12.png" alt="avto"><div>Toyota Mark2 90 <br> Двигатель 2JZ-GTE <br> Мощностью 425 л.с. <br> цена аренды 380₽/ч <br></div><a href="oplata.html" class="text_block__button button">Арендовать</a></center></div><div class="avto"><center><img src="13.png" alt="avto"><div>Nissan GTR R-35 <br> Двигатель RB-26 DET <br> Мощностью 600 л.с. <br> цена аренды 650₽/ч <br></div><a href="oplata.html" class="text_block__button button">Арендовать</a></center></div><div class="avto"><center><img src="14.png" alt="avto"><div>Nissan Silvia S15 <br> Двигатель SR20-DET <br> Мощностью 400 л.с. <br> цена аренды 500₽/ч <br></div><a href="oplata.html" class="text_block__button button">Арендовать</a></center></div><div class="avto"><center><img src="15.png" alt="avto"><div>BMW M3 <br> Двигатель S58B30 <br> Мощностью 510 л.с. <br> цена аренды 750₽/ч <br></div><a href="oplata.html" class="text_block__button button">Арендовать</a></center></div><div class="avto"><center><img src="16.png" alt="avto"><div>BMW X5M <br> Двигатель S58B30 <br> Мощностью 510 л.с. <br> цена аренды 700₽/ч <br></div><a href="oplata.html" class="text_block__button button">Арендовать</a></center></div><div class="avto"><center><img src="17.png" alt="avto"><div>Jeep Grand Cheroke <br> Двигатель 6.4 HEMI <br> Мощностью 425 л.с. <br> цена аренды 800₽/ч <br></div><a href="oplata.html" class="text_block__button button">Арендовать</a></center></div><div class="avto"><center><img src="21.png" alt="avto"><div>Dodge Challenger Hellcat SRT Demon <br> Двигатель 6.2 MT SRT <br> Мощностью 808 л.с. <br> цена аренды 1000₽/ч <br></div><a href="oplata.html" class="text_block__button button">Арендовать</a></center></div><div class="avto"><center><img src="19.png" alt="avto"><div>Mersedes-Benz E63S <br> Двигатель M 177 DE 40 AL <br> Мощностью 612 л.с. <br> цена аренды 950₽/ч <br></div><a href="oplata.html" class="text_block__button button">Арендовать</a></center></div><div class="avto"><center><img src="20.png" alt="avto"><div>Mersedes-Benz G65 <br> Двигатель M 275 E 60 AL <br> Мощностью 630 л.с. <br> цена аренды 1500₽/ч <br></div><a href="oplata.html" class="text_block__button button">Арендовать</a></center></div><div class="avto"><center><img src="22.png" alt="avto"><div>Chevrolet Camaro (ZL1) <br> Двигатель 6.2 L LT4 supercharged V8<br> Мощностью 650 л.с. <br> цена аренды 900₽/ч <br></div><a href="oplata.html" class="text_block__button button">Арендовать</a></center></div><div class="avto"><center><img src="23.png" alt="avto"><div>Mersedes-Benz w222 <br> Двигатель M 279 E 60 AL <br> Мощностью 612 л.с. <br> цена аренды 800₽/ч <br></div><a href="oplata.html" class="text_block__button button">Арендовать</a></center></div><div class="avto"><center><img src="24.png" alt="avto"><div>Mersedes-Benz Actros <br> Двигатель OM 473 <br> Мощностью 970 л.с. <br> цена аренды 800₽/ч <br></div><a href="oplata.html" class="text_block__button button">Арендовать</a></center></div></div></section></main>')
                div.append(t)

             });

        }

    });

}