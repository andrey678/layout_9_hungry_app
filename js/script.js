//Получаем body
const body = document.body;
console.log(body);

//Создаём первую секцию main
//Создание
const sectionMain = document.createElement('section');
//Добавление стилей
sectionMain.style.backgroundColor = "#1F98F0";
sectionMain.style.paddingTop = "35px";
sectionMain.style.paddingBottom = "102px";

//Вставка
body.prepend(sectionMain);

//Добавляем контейнер
//Создание
const containerMain = document.createElement('div');
//Добавление стилей
containerMain.style.cssText = `
    max-width: 1141px;
    margin: 0 auto;
    `;
//Вставка
sectionMain.prepend(containerMain);


//Добавляем HEADER
//Создание
const header = document.createElement('header');
//Добавление стилей
header.style.cssText = `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 80px;
`;
//Вставка
containerMain.prepend(header);

//Добавляем Header Inner
//Создание
const headerInner = document.createElement('div');
//Добавление стилей
headerInner.style.cssText = `
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width:584px;
`;
//Вставка
header.prepend(headerInner);

//Добавляем Logo
//Создание
const logo = document.createElement('a');
//Наполнение
logo.href = "#";
logo.innerHTML = `<img src="img/Main/Logo.svg" alt="LOGO">`;
//Добавление стилей
//Вставка
headerInner.prepend(logo);

//Добавляем Header Navigation
//Создание
const headerNav = document.createElement('nav');
const headerList = document.createElement('ul');


//Наполнение
const headerOptionsList = [
    { option: 'Home' },
    { option: 'Feature' },
    { option: 'Testimonial' },
    { option: 'Blog' }
];
const headerOptionsHTML = headerOptionsList.map(option => {
    const headerListItem = document.createElement('li');
    const headerItemAnchor = document.createElement('a');

    headerItemAnchor.textContent = option.option;
    headerItemAnchor.href = `#${option.option}`;
    //Добавление стилей
    headerItemAnchor.style.cssText = `
        font-family: WorkSans;
        font-weight: 500;
        font-size: 16px;
        line-height: 150%;
        color: #ffffff;
    `;
    headerListItem.style.marginLeft = "50px";
    headerListItem.style.height = "30px";
    // headerListItem.style.paddingBottom = "8px";
    // headerListItem.style.paddingTop = "8px";

    //Вставка
    headerListItem.append(headerItemAnchor);
    return headerListItem;
})

// Добавление стилей
headerList.style.cssText = `
    display: flex;
    position: relative;
    top: 7px;
`;
//Вставка
headerList.append(...headerOptionsHTML);
headerNav.append(headerList);
headerInner.append(headerNav);


// Добавляем кнопку
//Создание
const downloadButton = document.createElement('button');
// Наполнение
downloadButton.textContent = `Download Now`;
//Добавление стилей
downloadButton.style.cssText = `
    width: 184px;
    height: 52px;
    background: #FFFFFF;
    border-radius: 10px;
    font-family: Lato;
    font-size: 18px;
    line-height: 22px;
`;
// Вставка
header.append(downloadButton);

//Добавляем событие по наведению на пункт меню
const navListItems = document.querySelectorAll("li");
navListItems.forEach(li => {
    li.addEventListener('mouseenter', addWhiteUnderscore);
    li.addEventListener('mouseleave', removeWhiteUnderscore);
});

function addWhiteUnderscore(event) {

    if (event.target.tagName == 'LI') {
        event.target.style.paddingBottom = "8px";
        event.target.style.borderBottomWidth = "2px";
        event.target.style.borderBottomStyle = "solid";
        event.target.style.borderImage = "linear-gradient( to right, rgba(255, 255, 255, 0),rgba(255, 255, 255, 1),rgba(255, 255, 255, 0)) 50% 0%";
    }
}

function removeWhiteUnderscore(event) {
    if (event.target.tagName == 'LI') {
        event.target.style.paddingBottom = "0";
        event.target.style.borderBottomWidth = "0";
        event.target.style.borderBottomStyle = "none";
        event.target.style.borderImage = "unset";
    }
}



//Добавляем Content Inner
//Создание
const contentInner = document.createElement('div');
//Добавление стилей
contentInner.style.cssText = `
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

//Вставка
header.after(contentInner);



//Добавляем Text Content Inner
//Создание
const textContentInner = document.createElement('div');
//Добавление стилей
textContentInner.style.cssText = `
    max-width: 500px;
`;
//Вставка
contentInner.prepend(textContentInner);


//Добавляем mainHeading
//Создание
const mainHeading = document.createElement('h1');
//Наполнение
mainHeading.textContent = `Your Favourite Food delivery Partner.`;
//Добавление стилей
mainHeading.style.cssText = `
    font-family: WorkSans;
    font-weight: bold;
    font-size: 51px;
    line-height: 130%;
    color: #FFFFFF;
    margin-bottom:30px;
`;
//Вставка
textContentInner.prepend(mainHeading);


//Добавляем Main Text
//Создание
const mainText = document.createElement('p');
//Наполнение
mainText.textContent = `Food Delivery is a thriving business and there are many opportunities for this Businesses as its Growing.`;
//Добавление стилей
mainText.style.cssText = `
    font-family: Lato;
    font-size: 20px;
    line-height: 150%;
    color: #FFFFFF;
    margin-bottom: 50px;
`;
//Вставка
mainHeading.after(mainText);

//Добавляем Buttons Inner
//Создание
const buttonsInner = document.createElement('div');
//Добавление стилей
buttonsInner.style.cssText = `
    max-width: 409px;
    display: flex;
    justify-content: space-between;
`;
//Вставка
mainText.after(buttonsInner);


//Добавляем googlePlayButton и appStoreButton
//Создание
const googlePlayButton = document.createElement('a');
const appStoreButton = document.createElement('a');
//Наполнение
googlePlayButton.href = '#';
googlePlayButton.innerHTML = `<img src='img/Main/google_play.svg' alt='Google Play Download Button'>`;
appStoreButton.href = '#';
appStoreButton.innerHTML = `<img src='img/Main/appstore.svg' alt='App Store Download Button'>`;
//Добавление стилей
//Вставка
buttonsInner.prepend(googlePlayButton);
googlePlayButton.after(appStoreButton);


//Добавляем Images Inner
//Создание
const imagesInner = document.createElement('div');
//Добавление стилей
imagesInner.style.cssText = `
    position:relative;
`;
//Вставка
textContentInner.after(imagesInner);

//Добавляем Bottom Left Arc
//Создание
const bottomLeftArc = document.createElement('img');
// Наполнение
bottomLeftArc.src = 'img/Main/ellipse_bottomleft.svg';
//Добавление стилей
bottomLeftArc.style.cssText = `
    position: absolute;
    bottom: -62px;
    left: -81px;
    
`;
//Вставка
imagesInner.prepend(bottomLeftArc);


//Добавляем Central Image
//Создание
const centralImage = document.createElement('img');
//Наполнение
centralImage.src = 'img/Main/appimage.png';
//Добавление стилей
//Вставка
bottomLeftArc.after(centralImage);

//Добавляем Top Right Arc
//Создание
const topRightArc = document.createElement('img');
// Наполнение
topRightArc.src = 'img/Main/ellipse_topright.svg';
//Добавление стилей
topRightArc.style.cssText = `
    position: absolute;
    top:0;
    right: -81px;
`;
//Вставка
centralImage.after(topRightArc);

//===========================================================================
//===========================================================================
//===========================================================================
//===========================================================================

//Добавляем Section Companies 
//Создание
const sectionCompanies = document.createElement('section');
//Добавление стилей
sectionCompanies.style.cssText = `
    padding: 63px 0 44px;
`;
//Вставка
sectionMain.after(sectionCompanies);


//Добавляем Container for Section Companies 
//Создание
const companiesContainer = document.createElement('div');
//Добавление стилей
companiesContainer.style.cssText = `
    max-width: 1137px;
    margin: 0 auto;
`;
//Вставка
sectionCompanies.prepend(companiesContainer);


//Добавляем Companies Text
//Создание
const companiesText = document.createElement('p');
//Наполнение
companiesText.textContent = '100+ Companies Use our App';
//Добавление стилей
companiesText.style.cssText = `
    font-family: Lato;
    font-weight: 500;
    font-size: 21.4632px;
    line-height: 26px;
    color: #03101A;
    margin-bottom: 45px;
`;
//Вставка
companiesContainer.prepend(companiesText);

//Добавляем Companies Inner
//Создание
const companiesInner = document.createElement('div');
//Добавление стилей
companiesInner.style.cssText = `
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
//Вставка
companiesText.after(companiesInner);

//Добавляем Companies Images 
//Создание
const companiesImagesPathList = [
    { companyImagePath: 'img/Companies/waves_below.svg' },
    { companyImagePath: 'img/Companies/dots_in_lines.svg' },
    { companyImagePath: 'img/Companies/waves_in_circle.svg' },
    { companyImagePath: 'img/Companies/two_semicircles.svg' }
];

const companiesHTML = companiesImagesPathList.map(path => {
    const companyImage = document.createElement('img');
    companyImage.src = path.companyImagePath;
    return companyImage;
});
//Добавление стилей

//Вставка
companiesInner.prepend(...companiesHTML);

//==========================================================================
//==========================================================================
//==========================================================================
//==========================================================================


//Добавляем Section Features 
//Создание
const sectionFeatures = document.createElement('section');
//Добавление стилей
sectionFeatures.style.cssText = `
    padding: 92px 0 10px;
`;
//Вставка
sectionCompanies.after(sectionFeatures);



// Добавляем Features Container
//Создание
const featuresContainer = document.createElement('div');
//Добавление стилей
featuresContainer.style.cssText = `
    max-width: 1200px;
    margin: 0 auto;
`;
//Вставка
sectionFeatures.insertAdjacentElement('afterbegin', featuresContainer);


//Добавляем Features Content Inner
//Создание
const featuresContentInner = document.createElement('div');
//Добавление стилей
featuresContentInner.style.cssText = `
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
//Вставка
featuresContainer.insertAdjacentElement('afterbegin', featuresContentInner);



// Добавляем Features Pictures Inner 
//Создание
const featuresPicturesInner = document.createElement('div');
//Добавление стилей
featuresPicturesInner.style.cssText = `
    position: relative;
`;
//Вставка
featuresContentInner.insertAdjacentElement('afterbegin', featuresPicturesInner);



//Добавляем Features Top Left Stripes
//Создание
const featuresTopLeftStripes = document.createElement('img');
//Наполнение
featuresTopLeftStripes.src = 'img/Features/top_left_stripes.svg';
//Добавление стилей
featuresTopLeftStripes.style.cssText = `
    position: absolute;
    left: -140px;
    top:-75px;
    
`;
//Вставка
featuresPicturesInner.prepend(featuresTopLeftStripes);

//Добавляем Features Front Side of app
//Создание
const featuresAppFrontSide = document.createElement('img');
//Наполнение
featuresAppFrontSide.src = 'img/Features/front_side_of_app.svg';
//Добавление стилей
featuresAppFrontSide.style.cssText = `
    position:relative;
    z-index: 1;
`;
//Вставка
featuresTopLeftStripes.after(featuresAppFrontSide);

//Добавляем Features Bottom stripes
//Создание
const featuresBottomStripes = document.createElement('img');
//Наполнение
featuresBottomStripes.src = 'img/Features/bottom_stripes.svg';
//Добавление стилей
featuresBottomStripes.style.cssText = `
    position: absolute;
    bottom: -100px;
    left: -132px;
`;
//Вставка
featuresAppFrontSide.after(featuresBottomStripes);

//Добавляем Features Image Blink
//Создание
const featuresImageBlink = document.createElement('img');
//Наполнение
featuresImageBlink.src = 'img/Features/blink.svg';
//Добавление стилей
featuresImageBlink.style.cssText = `
    position: absolute;
    z-index: 2;
    top: 54%;
    right: -6%;
`;
//Вставка
featuresBottomStripes.after(featuresImageBlink);
// Добавляем Features Text Content Inner
//Создание
const featuresTextContentInner = document.createElement('div');
//Добавление стилей
featuresTextContentInner.style.maxWidth = '569px';
//Вставка
featuresPicturesInner.after(featuresTextContentInner);


// Добавляем Features Heading
//Создание
const featuresHeading = document.createElement('h2');
//Наполнение
featuresHeading.textContent = 'Main Features';
//Добавление стилей
featuresHeading.style.cssText = `
    font-family: Lato;
    font-weight: bold;
    font-size: 38px;
    line-height: 46px;
    color: #03101A;
    margin-bottom: 84px;
`;
//Вставка
featuresTextContentInner.append(featuresHeading);


// Добавляем Features Items
//Создание
const featuresItems = document.createElement('div');
//Добавление стилей
//Вставка
featuresHeading.after(featuresItems);

//Добавляем  Features List
const featuresList = {
    "quick delivery": {
        image: 'img/Features/quick_delivery.svg',
        heading: 'Quick Delivery',
        text: 'Food Delivery is a thriving business and there are many opportunities for this Businesses as its Growing.'
    },
    "fast payment": {
        image: 'img/Features/fast_payment.svg',
        heading: 'Fast Payment',
        text: 'Food Delivery is a thriving business and there are many opportunities for this Businesses as its Growing.'
    },
    "get reviews": {
        image: 'img/Features/get_reviews.svg',
        heading: 'Get Reviews',
        text: 'Food Delivery is a thriving business and there are many opportunities for this Businesses as its Growing.'
    }
};
//Разбираем объект в Features Item 
for (let feature in featuresList) {
    //Создание
    const featuresItem = document.createElement('div');
    //Добавление стилей
    featuresItem.style.cssText = `
        display: flex;
        justify-content: space-between;
        margin-bottom: 51px;
    `;
    //Вставка
    featuresItems.append(featuresItem);

    //Добавляем  Features Image
    //Создание
    const featuresImage = document.createElement('img');
    //Наполнение из объекта featuresList
    featuresImage.src = featuresList[feature].image;
    //Добавление стилей
    featuresImage.style.marginRight = '30px';
    //Вставка
    featuresItem.append(featuresImage);

    //Добавляем  Features Item Text
    //Создание
    const featuresItemText = document.createElement('div');
    //Добавление стилей
    featuresItemText.style.maxWidth = '446px';
    //Вставка
    featuresItem.append(featuresItemText);

    //Добавляем Features Item Heading
    //Создание
    const featuresItemHeading = document.createElement('h3');
    //Наполнение из объекта featuresList
    featuresItemHeading.textContent = featuresList[feature].heading;
    //Добавление стилей
    featuresItemHeading.style.cssText = `
        font-family: Lato;
        font-weight: 500;
        font-size: 21px;
        line-height: 25px;
        color: #03101A;
        margin-bottom: 20px;
    `;
    //Вставка
    featuresItemText.append(featuresItemHeading);

    //Добавляем  Features Item Definition
    //Создание
    const featuresItemDefinition = document.createElement('p');
    //Наполнение из объекта featuresList
    featuresItemDefinition.textContent = featuresList[feature].text;
    //Добавление стилей
    featuresItemDefinition.style.cssText = `
        font-family: Lato;
        font-size: 16px;
        line-height: 150%;
        color: #03101A;
        opacity: 0.7;
    `;
    //Вставка
    featuresItemText.append(featuresItemDefinition);

}

//==========================================================================
//==========================================================================
//==========================================================================
//==========================================================================




// Добавляем Testimonials Section
//Создание
const sectionTestimonials = document.createElement('section');
//Добавление стилей
sectionTestimonials.style.cssText = `
    padding: 85px 0 79px;
`;
//Вставка
sectionFeatures.after(sectionTestimonials);



//Добавляем Testimonials Container
//Создание
const testimonialsContainer = document.createElement('div');
//Добавление стилей
testimonialsContainer.style.cssText = `
    max-width: 1042px;
    margin: 0 auto;
`;
//Вставка
sectionTestimonials.prepend(testimonialsContainer);



// Добавляем Testimonials Heading
//Создание
const testimonialsHeading = document.createElement('h2');
//Наполнение
testimonialsHeading.textContent = 'Testimonials';
//Добавление стилей
testimonialsHeading.style.cssText = `
    font-family: Lato;
    font-weight: bold;
    font-size: 38px;
    line-height: 46px;
    color: #03101A;
    text-align: center;
    margin-bottom: 80px;
    
`;
//Вставка
testimonialsContainer.prepend(testimonialsHeading);


// Добавляем Testimonials Content Inner
//Создание
const testimonialsContentInner = document.createElement('div');
//Добавление стилей
testimonialsContentInner.style.cssText = `
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
//Вставка
testimonialsHeading.after(testimonialsContentInner);


// Добавляем Testimonials List
//Создание
const testimonialsList = {
    'first user': {
        image: 'img/Testimonials/left_john.png',
        heading: 'John Smith',
        text: '“ Food Delivery is a thriving business and there are many opportunities for this Businesses as its Growing. Food Delivery is a thriving business ”'
    },
    'second user': {
        image: 'img/Testimonials/center_john.png',
        heading: 'John Smith',
        text: '“ Food Delivery is a thriving business and there are many opportunities for this Businesses as its Growing. Food Delivery is a thriving business ”'
    },
    'third user': {
        image: 'img/Testimonials/right_john.png',
        heading: 'John Smith',
        text: '“ Food Delivery is a thriving business and there are many opportunities for this Businesses as its Growing. Food Delivery is a thriving business ”'
    }
};
//Добавление стилей
//Вставка


//Разбираем объект
for (let item in testimonialsList) {
    // Добавляем Testimonials Item
    //Создание
    const testimonialsItem = document.createElement('div');
    //Добавление стилей
    testimonialsItem.style.maxWidth = '260px';
    //Вставка
    testimonialsContentInner.append(testimonialsItem);

    // Добавляем Testimonials Item Image
    //Создание
    const testimonialsItemImage = document.createElement('img');
    // Наполнение
    testimonialsItemImage.src = testimonialsList[item].image;
    //Добавление стилей
    testimonialsItemImage.style.cssText = `
        display:block;    
        margin: 0 auto;    
        margin-bottom: 20px;
    `;
    //Вставка
    testimonialsItem.append(testimonialsItemImage)

    // Добавляем Testimonials Item Heading
    //Создание
    const testimonialsItemHeading = document.createElement('h3');
    //Наполнение
    testimonialsItemHeading.textContent = testimonialsList[item].heading;
    //Добавление стилей
    testimonialsItemHeading.style.cssText = `
        font-family: Lato;
        font-weight: 500;
        font-size: 21px;
        line-height: 25px;
        color: #03101A;
        text-align: center;
        margin-bottom: 20px;
    `;
    //Вставка
    testimonialsItemImage.after(testimonialsItemHeading);

    // Добавляем Testimonials Item Text
    //Создание
    const testimonialsItemText = document.createElement('p');
    //Наполнение
    testimonialsItemText.textContent = testimonialsList[item].text;
    //Добавление стилей
    testimonialsItemText.style.cssText = `
        font-family: Lato;
        font-size: 16px;
        line-height: 150%;
        text-align: center;
        color: #03101A;
        opacity: 0.7;
    `;
    //Вставка
    testimonialsItemHeading.after(testimonialsItemText);
}
//=========================================================================
//=========================================================================
//=========================================================================
//=========================================================================


// Добавляем Section Offer
//Создание
const sectionOffer = document.createElement('section');
//Добавление стилей
sectionOffer.style.cssText = `
    padding: 107px 0 96px;
    background: #1F98F0;
`;
//Вставка
sectionTestimonials.after(sectionOffer);

// Добавляем Offer Container
//Создание
const offerContainer = document.createElement('div');
//Добавление стилей
offerContainer.style.cssText = `
    max-width: 999px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
//Вставка
sectionOffer.prepend(offerContainer);



// Добавляем Offer Heading
//Создание
const offerHeading = document.createElement('h2');
//Наполнение
offerHeading.textContent = 'Food Always Available';
//Добавление стилей
offerHeading.style.cssText = `
    font-family: Lato;
    font-weight: bold;
    font-size: 38px;
    line-height: 46px;
    color: #FFFFFF;
`;
//Вставка
offerContainer.prepend(offerHeading);



// Добавляем Offer Button
//Создание
const offerButton = document.createElement('button');
//Наполнение
offerButton.type = 'button';
offerButton.textContent = 'Download Now';
//Добавление стилей
offerButton.style.cssText = `
    width: 223px;
    height: 62px;
    background: #FFFFFF;
    border-radius: 10px;
    font-family: Lato;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #1F98F0;
`;
//Вставка
offerHeading.after(offerButton);