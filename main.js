const dataMobil = [
    { model: "ERTIGA", harga: "450", keterangan:"Kapasitas 7 Penumpang Sudah Termasuk Jasa Driver Harga belum termasuk BBM, Toll, Parkir dan Makan Driver", area:"Sewa Rental Mobil Area Makassar", gambar: "public/ertiga.png" },
    { model: "AVANZA", harga: "450", keterangan:"Kapasitas 7 Penumpang Sudah Termasuk Jasa Driver Harga belum termasuk BBM, Toll, Parkir dan Makan Driver", area:"Sewa Rental Mobil Area Makassar", gambar: "public/avanza.jpg" },
    { model: "XL7", harga: "500", keterangan:"Kapasitas 7 Penumpang Sudah Termasuk Jasa Driver Harga belum termasuk BBM, Toll, Parkir dan Makan Driver", area:"Sewa Rental Mobil Area Makassar", gambar: "public/suzuki-xl7.jpg" },
    { model: "REBORN", harga: "700", keterangan:"Kapasitas 7 Penumpang Sudah Termasuk Jasa Driver Harga belum termasuk BBM, Toll, Parkir dan Makan Driver", area:"Sewa Rental Mobil Area Makassar", gambar: "public/innova-reborn.png" },
    { model: "MOBILIO", harga: "450", keterangan:"Kapasitas 7 Penumpang Sudah Termasuk Jasa Driver Harga belum termasuk BBM, Toll, Parkir dan Makan Driver", area:"Sewa Rental Mobil Area Makassar", gambar: "public/mobilio.png" },
    { model: "CALYA", harga: "400", keterangan:"Kapasitas 6 Penumpang Sudah Termasuk Jasa Driver Harga belum termasuk BBM, Toll, Parkir dan Makan Driver", area:"Sewa Rental Mobil Area Makassar", gambar: "public/calya.png" },
    { model: "HIACE", harga: "1250", keterangan:"Kapasitas 15 Penumpang Sudah Termasuk Jasa Driver Harga belum termasuk BBM, Toll, Parkir dan Makan Driver", area:"Sewa Rental Mobil Area Makassar", gambar: "public/toyota-hiace.png" },
    { model: "PAJERO", harga: "1300", keterangan:"Kapasitas 6 Penumpang Sudah Termasuk Jasa Driver Harga belum termasuk BBM, Toll, Parkir dan Makan Driver", area:"Sewa Rental Mobil Area Makassar", gambar: "public/pajero.png" },
    { model: "HYUNDAI", harga: "1500", keterangan:"Kapasitas 9 Penumpang Sudah Termasuk Jasa Driver Harga belum termasuk BBM, Toll, Parkir dan Makan Driver", area:"Sewa Rental Mobil Area Makassar", gambar: "public/hyundai.jpg" },
];


function tampilkanDataMobil() {
    const gridItemBody = document.querySelector('.grid-container');

    function clearGrid() {
        while (gridItemBody.firstChild) {
            gridItemBody.removeChild(gridItemBody.firstChild);
        }
    }

    function renderDataMobil(data) {
        clearGrid();

        data.forEach(mobil => {
            const mobilItem = document.createElement('div');
            mobilItem.classList.add('mobil-item');

            const img = document.createElement('img');
            img.src = mobil.gambar;
            img.alt = mobil.model;

            const model = document.createElement('h3');
            model.textContent = mobil.model;

            const titleHarga = document.createElement('h4');
            titleHarga.textContent = `Harga :`;

            const harga = document.createElement('p');
            harga.textContent = `12 Jam Dalam Kota : ${mobil.harga} ribu`;

            const keterangan = document.createElement('p');
            keterangan.textContent = `${mobil.keterangan}`;

            const area = document.createElement('p');
            area.textContent = `${mobil.area}`;

            mobilItem.appendChild(img);
            mobilItem.appendChild(model);
            mobilItem.appendChild(titleHarga);
            mobilItem.appendChild(harga);
            mobilItem.appendChild(keterangan);
            mobilItem.appendChild(area);

            gridItemBody.appendChild(mobilItem);
        });
    }
    renderDataMobil(dataMobil);

function sortByModel() {
    dataMobil.sort((a, b) => a.model.localeCompare(b.model));
    tampilkanDataMobil(); 
}
function sortByHargaAsc() {
    dataMobil.sort((a, b) => parseFloat(a.harga) - parseFloat(b.harga));
    tampilkanDataMobil();
}
function sortByHargaDesc() {
    dataMobil.sort((a, b) => parseFloat(b.harga) - parseFloat(a.harga));
    tampilkanDataMobil();
}

document.getElementById('sort-alphabetical').addEventListener('click', sortByModel);
document.getElementById('sort-lowest-price').addEventListener('click', sortByHargaAsc);
document.getElementById('sort-highest-price').addEventListener('click', sortByHargaDesc);

const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredData = dataMobil.filter(mobil => mobil.model.toLowerCase().includes(searchTerm));
    renderDataMobil(filteredData);
});
}

tampilkanDataMobil();

function initMap() {
    const mapOptions = {
        zoom: 15,
        center: { lat: -5.119111337433604, lng: 119.52636779808175 }, 
        mapTypeControl: false, 
        streetViewControl: false,
        fullscreenControl: false, 
        draggable: false 
    };

    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    const rentalLocation = new google.maps.Marker({
        position: { lat: -5.119111337433604, lng: 119.52636779808175 }, 
        map: map,
        title: 'Celebes Rent Car'
    });
}