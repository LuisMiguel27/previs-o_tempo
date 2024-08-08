
const key = "05986a0807a656b7e1ca7f7812e5ad3c";



function colocarDados(dados){

    console.log(dados)
    document.querySelector(".cidade_tela").innerHTML = dados.name,
    document.querySelector(".vento").innerHTML = "Ventos: " + (dados.wind.speed * 3,6) +"Km/h",
    document.querySelector(".umidade").innerHTML = "Umidade: "+dados.main.humidity+"%"
    document.querySelector(".temp_atual").innerHTML = Math.floor(dados.main.temp)+"°C"
    document.querySelector(".tempo").innerHTML = "Tempo: " + dados.weather[0].description

    const img = dados.weather[0].description
    trocarImg(img)

}

function trocarImg(img){

    
    var element = document.getElementById("tempo_img")
    var element2 = document.getElementById("temp_img")


    if( img == "céu limpo"){

        tempo_img.src ="https://basmilius.github.io/weather-icons/production/fill/all/clear-day.svg"
        temp_img.src ="https://basmilius.github.io/weather-icons/production/fill/all/clear-day.svg"
    }

    else if(img == "algumas nuvens"){

            tempo_img.src = "https://basmilius.github.io/weather-icons/production/fill/all/cloudy.svg"
            temp_img.src = "https://basmilius.github.io/weather-icons/production/fill/all/cloudy.svg"
    }

    else if(img == "nublado"){

            tempo_img.src = "https://basmilius.github.io/weather-icons/production/fill/all/overcast.svg"
            temp_img.src = "https://basmilius.github.io/weather-icons/production/fill/all/overcast.svg"
    }

    else if(img == "chuva"){

            tempo_img.src = "https://basmilius.github.io/weather-icons/production/fill/all/rain.svg"
            temp_img.src = "https://basmilius.github.io/weather-icons/production/fill/all/rain.svg"
    }

    else if(img == "neve"){

            tempo_img.src = "https://basmilius.github.io/weather-icons/production/fill/all/snow.svg"
            temp_img.src = "https://basmilius.github.io/weather-icons/production/fill/all/snow.svg"
    }

    else if(img == "neblina"){

            tempo_img.src = "https://basmilius.github.io/weather-icons/production/fill/all/mist.svg"
            temp_img.src = "https://basmilius.github.io/weather-icons/production/fill/all/mist.svg"

    }

    else if(img == "tempestade"){

            tempo_img.src = "https://basmilius.github.io/weather-icons/production/fill/all/thunderstorms.svg"
            temp_img.src = "https://basmilius.github.io/weather-icons/production/fill/all/thunderstorms.svg"
    }

    else if(img == "chuva leve"){

            tempo_img.src = "https://basmilius.github.io/weather-icons/production/fill/all/drizzle.svg"
            temp_img.src = "https://basmilius.github.io/weather-icons/production/fill/all/drizzle.svg"

    }

}
async function buscarCidade(cidade){

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json())

    colocarDados(dados)
}

function clickbutton(){

    const cidade = document.querySelector(".cidade_entrada").value;

    buscarCidade(cidade)
}



document.addEventListener("DOMContentLoaded", function() {
    function data() {
        const dataAtual = new Date();

        const diasSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
        const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", 
                       "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

        const diaSemana = diasSemana[dataAtual.getDay()];
        const dia = dataAtual.getDate();
        const mes = meses[dataAtual.getMonth()];

        const dataFormatada = `${diaSemana}, ${dia} de ${mes}`;

        document.querySelector(".data").innerHTML = dataFormatada;
    }

    data();
});

