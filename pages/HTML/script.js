var addresses = [{
        location: "BNC",
        coords: {
            lat: 10.4681835,
            lng: -66.9351486
        },
        address: "No. 12 Avenida Gamboa, Caracas 1011, Distrito Capital, Venezuela",
        schedule: "8AM-5PM",
        gmap_address: "https://www.google.com/maps/place/Cientifica+Industrial+de+Venezuela,+C.A./@10.5089908,-66.9007864,15z/data=!4m2!3m1!1s0x0:0xad947a547629112b?sa=X&ved=2ahUKEwjm2tDBsuLlAhWExFkKHUT-Cu4Q_BIwGXoECA4QCA",
        phone: "0426-3454224"
        },
    {
        location: "Heiga",
        coords: {
            lat: 10.515866,
            lng: -66.893253
        },
        address: "San Bernardino, Avenida Tamanaco, Quinta Heiga",
        schedule: "8AM-3PM",
        gmap_address: "https://www.google.com/maps/place/Laboratorios+Heiga/@10.5078611,-66.9003885,14.75z/data=!4m12!1m6!3m5!1s0x0:0xad947a547629112b!2sCientifica+Industrial+de+Venezuela,+C.A.!8m2!3d10.5089908!4d-66.9007864!3m4!1s0x0:0xae18b3504b69aba7!8m2!3d10.5143694!4d-66.8931663",
        phone: "0412-3454222"
                },
    {
        location: "Oftalmologico",
        coords: {
            lat: 10.483385,
            lng: -66.842976
        },
        address: "1061 Miranda",
        schedule: "8AM-9PM",
        gmap_address: "https://www.google.com/maps/place/Centro+Oftalmol%C3%B3gico+Chuao/@10.4826786,-66.8471818,16z/data=!4m12!1m6!3m5!1s0x0:0xad947a547629112b!2sCientifica+Industrial+de+Venezuela,+C.A.!8m2!3d10.5089908!4d-66.9007864!3m4!1s0x8c2a584fc264cd6d:0x1d4ce3bd6902c153!8m2!3d10.4830223!4d-66.8429554"
            },
    {
        location: "Agencia A",
        coords: {
            lat: 7.891092,
            lng: -67.466591
        },
        address: "APURE, SAN FERNANDO, av Revolucion",
        schedule: "8AM-9PM",
        gmap_address: "https://www.google.com/maps/place/Laboratorios+Heiga/@10.5078611,-66.9003885,14.75z/data=!4m12!1m6!3m5!1s0x0:0xad947a547629112b!2sCientifica+Industrial+de+Venezuela,+C.A.!8m2!3d10.5089908!4d-66.9007864!3m4!1s0x0:0xae18b3504b69aba7!8m2!3d10.5143694!4d-66.8931663",
        phone: "0412-3454222"
    },
    {
        location: "Agencia B",
        coords: {
            lat: 7.877809,
            lng: -67.473586
        },
        address: "APURE, SAN FERNANDO, san jose",
        schedule: "8AM-9PM",
        gmap_address: "https://www.google.com/maps/place/Laboratorios+Heiga/@10.5078611,-66.9003885,14.75z/data=!4m12!1m6!3m5!1s0x0:0xad947a547629112b!2sCientifica+Industrial+de+Venezuela,+C.A.!8m2!3d10.5089908!4d-66.9007864!3m4!1s0x0:0xae18b3504b69aba7!8m2!3d10.5143694!4d-66.8931663",
        phone: "0412-3454222"
    },
    {
        location: "Mordisquito",
        coords: {
            lat: 7.873367,
            lng: -67.471054
        },
        address: "APURE, SAN FERNANDO, san jose",
        schedule: "8AM-9PM",
        gmap_address: "https://www.google.com/maps/place/Laboratorios+Heiga/@10.5078611,-66.9003885,14.75z/data=!4m12!1m6!3m5!1s0x0:0xad947a547629112b!2sCientifica+Industrial+de+Venezuela,+C.A.!8m2!3d10.5089908!4d-66.9007864!3m4!1s0x0:0xae18b3504b69aba7!8m2!3d10.5143694!4d-66.8931663",
        phone: "0412-3454222"
    },
];

// Order alphabetically if user location is not available

function compareStrings(a, b) {
    // Assuming you want case-insensitive comparison
    a = a.toLowerCase();
    b = b.toLowerCase();

    return (a < b) ? -1 : (a > b) ? 1 : 0;
}

addresses = addresses.sort(function (a, b) {
    return compareStrings(a.location, b.location);
});

add_places(addresses);
// Initialize the calculation of distances
function initMap() {

    // activates modal when user has disabled the user geolocation
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            handleLocationError(true, pos);
        }, function () {
            $('#geolocationModal').modal('show');
            document.getElementById('activate-button').style.display = "flex";
            document.getElementById('title-section').style.display = "none";
        });

    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false);
    }
}

// get only the coordinates 
let destinations = addresses.map(address => address.coords);

function geoFindme() {
    initMap();
}

function handleLocationError(browserHasGeolocation, pos) {
    if (browserHasGeolocation) {
        const matrix = new google.maps.DistanceMatrixService();
        console.log(pos);
        matrix.getDistanceMatrix({
                origins: [pos],
                destinations: destinations,
                travelMode: google.maps.TravelMode.DRIVING,
            },
            function (response, status) {
                console.log(response);
                // sort by distance
                console.log(response.rows[0].elements[0].distance.text);

                addresses.forEach(function (address, index) {
                    address.distanceT = response.rows[0].elements[index].distance.text;

                    address.distanceN = parseFloat((response.rows[0].elements[index].distance.value / 1000).toFixed(2));
                });

                // Order addresses most nearest from most far
                addresses = addresses.sort(function (a, b) {
                    return a.distanceN - b.distanceN
                });

                document.querySelectorAll(".d-added").forEach(function (c) {
                    c.parentNode.removeChild(c);
                });

                console.log(addresses);

                add_places(addresses);
            
                document.getElementById('activate-button').style.display = "none";
                document.getElementById('title-section').style.display = "flex";

                $('#geolocationModal').modal('hide');
            }
        );

    } else {
        alert(`Browser doesn't support Geolocation`);
    }
}

function add_places(addresses) {
    var keys = Object.keys(addresses); //get the keys.
    var docFrag = document.createDocumentFragment();

    for (var i = 0; i < keys.length; i++) {

        var tempNode = document.querySelector("div[data-type='template']").cloneNode(true);

        // class to refresh the addded elements before user activates the geolocation
        // this avoid to erase the template
        tempNode.classList += " d-added";

        // highlight the first element if user location is available 
        if (i == 0 && addresses[keys[i]].distanceT) {
            tempNode.querySelector("button.title").classList += " active";

        }
        if (i == 0) {
            tempNode.querySelector("div.walker-wrapper").style.opacity = "1";

        }

        tempNode.querySelector("button.title").textContent = addresses[keys[i]].location;

        tempNode.querySelector("button.title").dataset.target = '#testModal' + i;

        tempNode.querySelector("div.modal").id = 'testModal' + i;

        tempNode.querySelector("div.modal").id = 'testModal' + i;
        tempNode.querySelector("p.address-title").textContent = addresses[keys[i]].location;
        tempNode.querySelector("p.modal-desc").textContent = addresses[keys[i]].address;
        tempNode.querySelector("span.schedule").textContent = addresses[keys[i]].schedule;

        tempNode.querySelector("a.gmail-map-link").href = addresses[keys[i]].gmap_address;

        tempNode.querySelector("a.gmail-phone-link").href = addresses[keys[i]].phone;

        tempNode.querySelector("p.distance").textContent = (addresses[keys[i]].distanceT) ? addresses[keys[i]].distanceT : '? Km';

        tempNode.style.display = "flex"; // show all the addresses except the template
        docFrag.appendChild(tempNode);

    }

    document.getElementById('addresses-wrapper').appendChild(docFrag);
    delete docFrag;
}
