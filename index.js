const root = document.documentElement;
const body = document.body;

const marqueeContent = document.querySelector('.marquee-content');
const marqueeContainer = document.getElementById('marquee-container-2')
const marquee = document.querySelector('.marquee');

const reversedMarquee = document.querySelector('.marquee-2');
const marqueeContent2 = document.querySelector('.marquee-content-2');

const brandText = document.querySelector('.marquee-1');
const brandMarquee = document.querySelector('.brand-marquee');

const brandName = '<li class="brand-name"><h2> OFF WHITE </h2></li>';
const marqueeList_2 = [brandName];
const injectBrand = [];

const nikeIcon = "<li><img src='assets/images/icons/nike-icon.png' alt=''></li>"
const offWhiteIcon = "<li><img src='assets/images/icons/Logo-2.png' alt=''></li>"

const listItems = [nikeIcon,offWhiteIcon];
const listItems2 = [offWhiteIcon, nikeIcon];
const itemsToInject =[];
const itemsToInject2 = [];

for(let i = 0; i<10; i++){
    listItems.forEach(item =>itemsToInject.push(item));
    listItems2.forEach(item =>itemsToInject2.push(item));
    marqueeList_2.forEach(item => injectBrand.push(item));
}


marqueeContent.innerHTML = itemsToInject.map(item => item).join("");
marqueeContent2.innerHTML = itemsToInject2.map(item => item).join("");
brandMarquee.innerHTML = injectBrand.map(item => item ).join("");

root.style.setProperty('--marquee-elements', marqueeContent.children.length);

for(let i = 0; i < 20; i++){
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    marqueeContent2.appendChild(marqueeContent2.children[i].cloneNode(true));
}
for(let i = 0; i < 10; i++){
    brandMarquee.appendChild(brandMarquee.children[i].cloneNode(true));
}

for(let i = 0; i < 1; i++){
    const marqueeClone = marquee.cloneNode(true);
    const marqueeClone2 = reversedMarquee.cloneNode(true);
    marqueeContainer.appendChild(marqueeClone);
    marqueeContainer.appendChild(marqueeClone2);    
}
//32 tane logo