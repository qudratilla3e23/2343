const mahsulotlar=[
    {
        nomi:"Mars rug",
        coin: 100,
        nechta: "24 dona mavjud",
        rasmi:"./img/rug.png"
    },
    {
        nomi:"Keyboard sticker",
        coin: 49,
        nechta: "11 dona mavjud",
        rasmi:"./img/stiker.png"
    },
    {
        nomi:"Smart watch",
        coin: 899,
        nechta: "4 dona mavjud",
        rasmi:"./img/watch.png"
    },
    {
        nomi:"Wireless keyboard",
        coin: 350,
        nechta: "8 dona mavjud",
        rasmi:"./img/keyboard.png"
    },
    {
        nomi:"Mouse",
        coin: 359,
        nechta: "4 dona mavjud",
        rasmi:"./img/mishka.png"
    },
    {
        nomi:"AirPods",
        coin: 499,
        nechta: "13 dona mavjud",
        rasmi:"./img/airpods.png"
    },
    {
        nomi:"Powerbank",
        coin: 899,
        nechta: "3 dona mavjud",
        rasmi:"./img/powerbank.png"
    },
    {
        nomi:"USB flash drive",
        coin: 299,
        nechta: "21 dona mavjud",
        rasmi:"./img/fleshka.png"
    },
    {
        nomi:"Smartphone",
        coin: 3699,
        nechta: "2 dona mavjud",
        rasmi:"./img/telefon.png"
    },
    {
        nomi:"Playstation 5",
        coin: 7499,
        nechta: "2 dona mavjud",
        rasmi:"./img/playstation.png"
    },
    {
        nomi:"Yandex Station",
        coin: 1999,
        nechta: "4 dona mavjud",
        rasmi:"./img/yandex.png"
    },
    {
        nomi:"Planshet Samsung",
        coin: 4999,
        nechta: "3 dona mavjud",
        rasmi:"./img/planshet.png"
    },
]

const ota=document.getElementById("ota")
const input=document.getElementById("input")

function kopiyaqil(malumot){
    ota.innerHTML="";
    malumot.map(product=>{
        const div=document.createElement("div");
        div.classList.add("card");
        div.innerHTML=`
            <img src=${product.rasmi} alt="sad" />
            <h4>${product.nomi}</h4>
            <p><i class="fa-solid fa-coins"></i>${product.coin} </p>
            <span>${product.nechta}}</span>
        `;
        ota.appendChild(div);
    });
}

kopiyaqil(mahsulotlar)



input.addEventListener("input",()=>{
    const q=mahsulotlar.filter(m=> m.nomi.toLowerCase().includes(input.value.toLowerCase()));
    kopiyaqil(q)
})