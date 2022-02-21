//Получаем body
const body = document.body;
console.log(body);

//Создаём первую секцию main
//Создание
const sectionMain = document.createElement('section');
//Наполнение
sectionMain.id = 'Home';
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
    max-width: 1171px;
    margin: 0 auto;
    padding: 0 15px;
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
    max-width: 1167px;
    margin: 0 auto;
    padding: 0 15px;
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
//Наполнение
sectionFeatures.id = 'Feature';
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
    max-width: 1230px;
    margin: 0 auto;
    padding: 0 15px;
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
//Наполнение
sectionTestimonials.id = 'Testimonial';
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
    max-width: 1072px;
    margin: 0 auto;
    padding: 0 15px;
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
    flex-wrap: wrap;
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
    testimonialsItem.style.cssText = `
        max-width: 260px;
        margin-bottom: 80px;
    `;

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
    max-width: 1029px;
    margin: 0 auto;
    padding: 0 15px;
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


//=========================================================================
//=========================================================================
//=========================================================================
//=========================================================================

// Добавляем News Section
//Создание
const sectionNews = document.createElement('section');
//Наполнение
sectionNews.id = 'Blog';
//Добавление стилей
sectionNews.style.cssText = `
    padding: 120px 0 128px;
`;
//Вставка
sectionOffer.after(sectionNews);

//Добавляем News Container
//Создание
const newsContainer = document.createElement('div');
//Добавление стилей
newsContainer.style.cssText = `
    max-width: 1170px;
    margin: 0 auto;
    padding: 0 15px;
`;
//Вставка
sectionNews.prepend(newsContainer);

// Добавляем News Heading
//Создание
const newsHeading = document.createElement('h2');
//Наполнение
newsHeading.textContent = 'Update News';
//Добавление стилей
newsHeading.style.cssText = `
    font-family: Lato;
    font-weight: bold;
    font-size: 38px;
    line-height: 46px;
    text-align: center;
    color: #03101A;
    margin-bottom: 60px;
`;
//Вставка
newsContainer.prepend(newsHeading);

// Добавляем News Items Inner
// Создание
const newsItemsInner = document.createElement('div');
//Добавление стилей
newsItemsInner.style.cssText = `
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;
//Вставка
newsHeading.after(newsItemsInner);

// Добавляем News Source List
// Создание
const newsSourceList = {
    'first piece of news': {
        image: 'img/News/flowers.jpg',
        heading: 'Healthy Food',
        description: 'Food Delivery is a thriving business and there are many opportunities for this Businesses as its Growing.'
    },
    'second piece of news': {
        image: 'img/News/roof.jpg',
        heading: 'Healthy Food',
        description: 'Food Delivery is a thriving business and there are many opportunities for this Businesses as its Growing.'
    },
    'third piece of news': {
        image: 'img/News/yellow_brick_wall.jpg',
        heading: 'Healthy Food',
        description: 'Food Delivery is a thriving business and there are many opportunities for this Businesses as its Growing.'
    }
}

//Разбираем объект
for (let item in newsSourceList) {
    //Добавляем News Item
    //Создание 
    const newsItem = document.createElement('div');
    //Добавление стилей
    newsItem.style.cssText = `
        max-width: 360px;
        margin-bottom: 30px;
    `;
    //Вставка
    newsItemsInner.append(newsItem);

    //Добавляем News Item Image
    //Создание 
    const newsItemImage = document.createElement('img');
    //Наполнение
    newsItemImage.src = newsSourceList[item].image;
    //Добавление стилей
    newsItemImage.style.marginBottom = '25px';
    //Вставка
    newsItem.append(newsItemImage);

    //Добавляем News Item Heading
    //Создание 
    const newsItemHeading = document.createElement('h3');
    //Наполнение
    newsItemHeading.textContent = newsSourceList[item].heading;
    //Добавление стилей
    newsItemHeading.style.cssText = `
        font-family: Lato;
        font-weight: 600;
        font-size: 28px;
        line-height: 34px;
        color: #03101A;
        margin-bottom: 15px;
    `;
    //Вставка
    newsItemImage.after(newsItemHeading);

    //Добавляем News Item Description
    //Создание 
    const newsItemDescription = document.createElement('p');
    //Наполнение
    newsItemDescription.textContent = newsSourceList[item].description;
    //Добавление стилей
    newsItemDescription.style.cssText = `
        font-family: Lato;
        font-size: 16px;
        line-height: 150%;
        color: #6D7073;
        opacity: 0.7;
        margin-bottom: 30px;
    `;
    //Вставка
    newsItemHeading.after(newsItemDescription);

    //Добавляем News Item Link
    //Создание 
    const newsItemLink = document.createElement('a');
    // Наполнение
    newsItemLink.href = '#';
    newsItemLink.textContent = 'Read More';
    //Добавление стилей
    newsItemLink.style.cssText = `
        font-family: Lato;
        font-weight: 600;
        font-size: 18px;
        line-height: 150%;
        color: #1F98F0;
        
    `;
    //Вставка
    newsItemDescription.after(newsItemLink);
}
//===========================================================================
//===========================================================================
//===========================================================================
//===========================================================================


//Добавляем Footer
//Создание
const footer = document.createElement('footer');
//Добавление стилей
footer.style.cssText = `
    padding: 100px 0;
    background: #03101A;
`;
//Вставка
sectionNews.after(footer);


//Добавляем Footer Container
//Создание
const footerContainer = document.createElement('div');
//Добавление стилей 
footerContainer.style.cssText = `
    max-width: 1171px;
    margin: 0 auto;
    padding: 0 15px;
`;
//Вставка
footer.prepend(footerContainer);


//Добавляем Footer Inner
//Создание
const footerInner = document.createElement('div');
//Добавление стилей 
footerInner.style.cssText = `
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    
`;
//Вставка
footerContainer.prepend(footerInner);



//Добавляем Footer Activity
//Создание
const footerAboutCompany = document.createElement('div');
//Добавление стилей
footerAboutCompany.style.cssText = `
    max-width: 327px;
    margin-bottom: 40px;
`;
//Вставка
footerInner.prepend(footerAboutCompany);


//Добавляем Footer Logo
//Создание
const footerLogo = document.createElement('a');
//Наполнение
footerLogo.href = '#';
footerLogo.innerHTML = `<img src='img/Footer/footer_logo.svg' alt='Logo'>`;
//Добавление стилей
footerLogo.style.cssText = `
    display: block;
    margin-bottom: 35px;
`;
//Вставка
footerAboutCompany.prepend(footerLogo);


//Добавляем Footer Company Description
//Создание
const footerCompanyActivity = document.createElement('p');
//Наполнение
footerCompanyActivity.textContent = 'Food Delivery is a thriving business and there are many opportunities for this Businesses as its Growing.';
//Добавление стилей 
footerCompanyActivity.style.cssText = `
    font-family: Lato;
    font-size: 16px;
    line-height: 150%;
    color: #FFFFFF;
    opacity: 0.7;
`;
//Вставка
footerLogo.after(footerCompanyActivity);


//Добавляем Footer Support
//Создание
const footerSupport = document.createElement('div');
//Добавление стилей
footerSupport.style.cssText = `
    margin-bottom: 40px;
`;
//Вставка
footerAboutCompany.after(footerSupport);


//Добавляем Footer Support Heading
//Создание
const footerSupportHeading = document.createElement('h4');
//Наполнение
footerSupportHeading.textContent = 'Support';
//Добавление стилей
footerSupportHeading.style.cssText = `
    font-family: Lato;
    font-weight: 500;
    font-size: 21px;
    line-height: 25px;
    color: #FFFFFF;
    margin-bottom: 35px;
`;
//Вставка
footerSupport.prepend(footerSupportHeading);



//Добавляем Footer Support Link Inner
//Создание
const footerSupportLinkInner = document.createElement('div');
//Добавление стилей
//Вставка
footerSupportHeading.after(footerSupportLinkInner);


//Добавляем Footer Support List
//Создание
const footerSupportList = {
    privacy: 'Privacy & Policy',
    terms: 'Terms & Condition',
    guidelines: 'Guidelines',
    help: 'Help'
}
//Разбираем объект
for (let link in footerSupportList) {
    //Добавляем Footer Support Link
    //Создание
    const footerSupportLink = document.createElement('a');
    //Наполнение
    footerSupportLink.href = '#';
    footerSupportLink.textContent = footerSupportList[link];
    //Добавление стилей
    footerSupportLink.style.cssText = `
        display: block;
        font-family: Lato;
        font-size: 16px;
        line-height: 150%;
        color: #FFFFFF;
        opacity: 0.7;
        margin-bottom: 15px;
    `;

    //Вставка
    footerSupportLinkInner.append(footerSupportLink);
}



//Добавляем Footer Usefull Links
//Создание
const footerUsefullLinks = document.createElement('div');
//Добавление стилей
footerUsefullLinks.style.cssText = `
    margin-bottom: 40px;
`;
//Вставка
footerSupport.after(footerUsefullLinks);



//Добавляем Footer Usefull Links Heading
//Создание
const footerUsefullLinksHeading = document.createElement('h4');
//Наполнение
footerUsefullLinksHeading.textContent = 'Usefull Links';
//Добавление стилей
footerUsefullLinksHeading.style.cssText = `
    font-family: Lato;    
    font-weight: 500;
    font-size: 21px;
    line-height: 25px;
    color: #FFFFFF;
    margin-bottom: 35px;

`;
//Вставка
footerUsefullLinks.prepend(footerUsefullLinksHeading);




//Добавляем Footer Usefull Links Inner
//Создание
const footerUsefullLinksInner = document.createElement('div');
//Добавление стилей
//Вставка
footerUsefullLinksHeading.after(footerUsefullLinksInner);


//Добавляем Footer Usefull Links List
//Создание
const footerUsefullLinksList = {
    privacy: 'Privacy & Policy',
    terms: 'Terms & Condition',
    guidelines: 'Guidelines',
    help: 'Help'
}

//Разбираем объект
for (let link in footerUsefullLinksList) {
    //Добавляем Footer Usefull Link
    //Создание
    const footerUsefullLink = document.createElement('a');
    //Наполнение
    footerUsefullLink.href = '#';
    footerUsefullLink.textContent = footerUsefullLinksList[link];
    //Добавление стилей
    footerUsefullLink.style.cssText = `
        display: block;
        font-family: Lato;
        font-size: 16px;
        line-height: 150%;
        color: #FFFFFF;
        opacity: 0.7;
        margin-bottom: 15px;
    `;
    //Вставка
    footerUsefullLinksInner.append(footerUsefullLink);
}


//Добавляем Footer Newsletter
//Создание
const footerNewsletter = document.createElement('div');
//Добавление стилей
//Вставка
footerUsefullLinks.after(footerNewsletter);



//Добавляем Footer Newsletter Heading
//Создание
const footerNewsletterHeading = document.createElement('h4');
//Наполнение
footerNewsletterHeading.textContent = 'News Letter'
//Добавление стилей
footerNewsletterHeading.style.cssText = `
    font-family: Lato;
    font-weight: 500;
    font-size: 21px;
    line-height: 25px;
    color: #FFFFFF;
    margin-bottom: 25px;
`;
//Вставка
footerNewsletter.prepend(footerNewsletterHeading);


//Добавляем Footer Newsletter Form
//Создание
const footerNewsletterForm = document.createElement('form');
//Наполнение
footerNewsletterForm.action = `#`;
//Добавление стилей
footerNewsletterForm.style.cssText = `
    margin-bottom: 32px;
`;
//Вставка
footerNewsletterHeading.after(footerNewsletterForm);


//Добавляем Footer Form Input
//Создание
const footerFormInput = document.createElement('input');
//Наполнение
footerFormInput.type = 'email';
footerFormInput.required = true;
footerFormInput.placeholder = 'Email';
//Добавление стилей
footerFormInput.style.cssText = `
    max-width: 229px;
    height: 41px;
    background: #FFFFFF;
    padding: 10px;
    font-family: Lato;
    font-size: 14px;
    line-height: 150%;
    color: rgba(3, 16, 26, 0.7);
    
`;
//Вставка
footerNewsletterForm.prepend(footerFormInput);


//Добавляем Footer Form Button
//Создание
const footerFormButton = document.createElement('button');
//Наполнение
footerFormButton.type = 'submit';
footerFormButton.textContent = 'Subscribe';
//Добавление стилей
footerFormButton.style.cssText = `
    padding: 10px 35px;
    background: #1F98F0;
    font-family: Lato;
    font-size: 14px;
    line-height: 150%;
    color: #FFFFFF;
`;
//Вставка
footerFormInput.after(footerFormButton);

// Добавляем Footer Newsletter Links Inner
// Создание
const footerNewsletterLinksInner = document.createElement('div');
// Вставка
footerNewsletterForm.after(footerNewsletterLinksInner);

// Добавляем Footer Newsletter Links List
//Создание
const footerNewsletterLinksList = {
    guidelines: 'Guidelines',
    help: 'Help'
}

//Разбираем объект
for(let item in footerNewsletterLinksList){
    //Добавляем Footer Newsletter Link
    //Создание
    const footerNewsletterLink = document.createElement('a');
    //Наполнение
    footerNewsletterLink.href = '#';
    footerNewsletterLink.textContent = footerNewsletterLinksList[item];
    //Добавление стилей
    footerNewsletterLink.style.cssText = `
        display: block;
        font-family: Lato;
        font-size: 16px;
        line-height: 150%;
        color: #FFFFFF;
        opacity: 0.7;
        margin-bottom: 15px;
    `;
    //Вставка
    footerNewsletterLinksInner.append(footerNewsletterLink);
}