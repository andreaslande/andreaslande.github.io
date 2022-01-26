import React from 'react'
import placeCell from '../media/place_cell.png'
function UiTproject() {
    
    return (
        <div className = "w-full flex flex-col items-center mt-5 max-w-2xl">

            {/* Header */}
            <p className = "text-zinc-300 font-semibold text">2016 - 2017</p>
            <p className = "text-zinc-300 font-semibold text-xs border border-zinc-600 rounded-lg p-1 px-2 my-0.5">Avdelingsingeniør - Universitet i Tromsø</p>
            <p className = "text-white font-bold text-3xl text-center">Urin fra prærieulv og hukommelse</p>
            <p className = "text-zinc-200 text-sm mt-2 text-justify">Ja det er kanskje litt "clickbait" tittel, men da jeg jobbe ved Universitet i Tromsø som ingeniør på Lab for Nevrobiologi studerte
            vi både hvordan luktet av prærieulvurin påvirket stedsrepresentasjonen hos rotter og hvordan hormoner påvirker hukommelse. 
            Jeg deltok på flere prosjekter som en teknikker i laben, og i all hovedsak var stedssansen det som ble studert i laben. 
            Et var prosjekten gikk ut på å sammenligne "stedceller" i den fremre og bakre delen av en hjernestruktur som heter Hippocampus. Her hjalp jeg til med å gjøre så kalte ekstracellulære opptak, hvor man
            fører inn tynne elektroder inn i hjernen og "lytter" til de elektriske impulsene cellene sender til hverandre. Rottene hadde disse elektrodene kronisk implantert i hodet, og utforsket en stor åpent boks samtidig
            som vi lyttet til hjerneaktiviteten.
            </p>


            <p className = "text-zinc-200 text-sm mt-2 text-justify">
                I tillegg til forskjellige våtlabsoppgaver hjalp jeg PhD studentene med å analysere sine data ved å tilrettelegge et GUI for MATLAB koden som ble brukt i laben. 
            </p>

            <img className = "w-full sm:w-6/12 my-5" src = {placeCell} alt = "Bilde av en stedscelle sin aktivitet"></img>
            <p className = "text-zinc-200 text-sm mt-2 text-justify">
                Slik ser en stedcelle ut når man gjør et opptak i 2-dimensjoner. Dette er et varmekart over hvor cella er aktiv i en box som er 80 x 80 cm.
                Der det er blått er det ingen aktivitet, mens der det blir gul og til slutt rødt, er det mest aktivitet. Her ser vi en stedscelle som er mest aktiv 
                i sør-delen av boksen. I hippocampus er det tett med slike celler, alle punkter i boksen har flere slike celler som er aktive på akkurat det sted, og det er ved hjelp av slike celler
                vi tror hjernen klarer å skille steder fra hverandre og lage en indre 'representasjon' av hvor vi er - den så kalte stedssansen.

            
            </p>



        </div>
    )
}

export default UiTproject
