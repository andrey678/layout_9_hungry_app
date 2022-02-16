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
    {companyImagePath: 'img/Companies/waves_below.svg'},
    {companyImagePath: 'img/Companies/dots_in_lines.svg'},
    {companyImagePath: 'img/Companies/waves_in_circle.svg'},
    {companyImagePath: 'img/Companies/two_semicircles.svg'}
];

const companiesHTML = companiesImagesPathList.map( path => {
    const companyImage = document.createElement('img');
    companyImage.src = path.companyImagePath;
    return companyImage;
});
//Добавление стилей

//Вставка
companiesInner.prepend(...companiesHTML);




//Добавляем Section Companies 
//Создание
//Добавление стилей
//Вставка