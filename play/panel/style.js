(()=>{

const panel_img = [
  {
    img: "material_pic/banana.jpg",
    img_alt: "banana"
  },{
    img: "material_pic/bean.jpg",
    img_alt: "bean"
  },{
    img: "material_pic/boab.jpg",
    img_alt: "boab"
  },{
    img: "material_pic/caw.png",
    img_alt: "caw"
  },{
    img: "material_pic/grape_fruit.jpg",
    img_alt: "graut_fruit"
  },{
    img: "material_pic/kiwi.jpg",
    img_alt: "kiwi"
  },{
    img: "material_pic/strawberry.jpg",
    img_alt: "strawberry"
  },{
    img: "material_pic/tomato.jpg",
    img_alt: "tomato"
  },{
    img: "material_pic/blank_profile.png",
    img_alt: "blank_profile"
  }
];

const $panel_map = document.getElementById('panel_map');
const $panel_map1 = document.getElementById('panel_map1');
const $panel_map2 = document.getElementById('panel_map2');
const $panel_map3 = document.getElementById('panel_map3');
const $panel_map4 = document.getElementById('panel_map4');
const $panel_map5 = document.getElementById('panel_map5');
const $panel_map6 = document.getElementById('panel_map6');
const $panel_map7 = document.getElementById('panel_map7');
const $panel_map8 = document.getElementById('panel_map8');

const panel_mapLen = panel_img.length;
// let panel_imgCount = 0;

document.getElementById("panel_button").onclick = function() {
  $panel_map.src = panel_img[0].img;
  $panel_map.alt = panel_img[0].ima_alt;
};
document.getElementById("panel_button1").onclick = function() {
  $panel_map1.src = panel_img[1].img;
  $panel_map1.alt = panel_img[1].ima_alt;
};
document.getElementById("panel_button2").onclick = function() {
  $panel_map2.src = panel_img[2].img;
  $panel_map2.alt = panel_img[2].ima_alt;
};
document.getElementById("panel_button3").onclick = function() {
  $panel_map3.src = panel_img[3].img;
  $panel_map3.alt = panel_img[3].ima_alt;
};
document.getElementById("panel_button4").onclick = function() {
  $panel_map4.src = panel_img[4].img;
  $panel_map4.alt = panel_img[4].ima_alt;
};
document.getElementById("panel_button5").onclick = function() {
  $panel_map5.src = panel_img[5].img;
  $panel_map5.alt = panel_img[5].ima_alt;
};
document.getElementById("panel_button6").onclick = function() {
  $panel_map6.src = panel_img[6].img;
  $panel_map6.alt = panel_img[6].ima_alt;
};
document.getElementById("panel_button7").onclick = function() {
  $panel_map7.src = panel_img[7].img;
  $panel_map7.alt = panel_img[7].ima_alt;
};
document.getElementById("panel_button8").onclick = function() {
  $panel_map8.src = panel_img[8].img;
  $panel_map8.alt = panel_img[8].ima_alt;
};




})();
