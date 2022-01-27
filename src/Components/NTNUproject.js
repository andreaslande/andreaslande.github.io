import React from 'react'
import interNevron from '../media/internevron.png'
import nattsvermer from '../media/nattsvermer.png'
import solsikkeResponse from '../media/solsikke_respons.png'

function NTNUproject() {
    return (
        <div className = "w-full flex flex-col items-center mt-5 max-w-2xl">

            {/* Header */}
            <p className = "text-zinc-300 font-semibold text">2014-2016</p>
            <p className = "text-zinc-300 font-semibold text-xs border border-zinc-600 rounded-lg p-1 px-2 my-0.5">MSc in Neuroscience - NTNU</p>
            <p className = "text-white font-bold text-3xl text-center">Kartlegging av luktesystemet til nattsvermere </p>
            <p className = "text-zinc-200 text-sm mt-2 text-justify">Selvom insekter føles veldig fjerne fra oss mennekser, og vi jo faktisk er adskilt med 700 millioner av år med evolusjon,
            så har luktesystemet til enkel insekter noen byggeklosser som er helt likt som hos deg og meg! 
            </p>

            <img className = "w-full my-4" src = {nattsvermer}></img>

            <p className = "text-zinc-200 text-sm mt-2 text-justify">Som en del av masteroppgaven min forsøkte jeg å studere hvordan høyere-ordens områder av nattsvermere
            bygger opp en "representasjon" av dufter nattsvermeren kjenner godt. I dette tilfellet var det lukten av en solsikke, som denne nattsvermer arten er beregnet en pest mot.
            Nattsvermeren kjenner lukt ved hjelp av antenne sine. Langs disse sitter det små hår som igjen har små lukte-reseptorer på seg. Et duft-molekyl binder seg til disse reseptorene
            (hver reseptor bryr seg om kun ett spesifikt molekyl), og nerveceller fra disse reseptorene går inn i hjernen til nattsvermeren og brer seg utover i et område som heter antenne-loben.
            Hos deg og meg er det helt likt,  bare at våre lukt-reseptorer sitter inne i nesa, og antenneloben hos oss heter lukte-loben.
            </p>

            <p className = "text-zinc-200 text-sm mt-2 text-justify">I antenneloben så bryr de fleste nerveceller seg kun om én lukt, ett duft-molekyl. Med lukten av en solsikke er jo mye mer kompleks og sammensatt.
            Tanken var at ett sted i hjernen må den nevrale representasjonen av solsikke gå fra å være kun de individuelle bestanddelene av solsikkelukten, som enkelt komponenter som linalool, til nerveceller som er aktive 
            kun hvis alle bestanddelene i solsikke er tilstede. En solsikke-celle!
            </p>
            
            <p className = "text-zinc-200 text-sm mt-2 text-justify">Vi hadde gode indikasjoner på at dette skjedde i et område av insekthjernen som heter det laterale horn. 
            For å studere oppbyggingen av solsikkeduften valgte jeg derfor å utføre såkalt <solid className = "italic font-bold">intracellulær elektrofysiologi</solid> som betyr at jeg laget en ekstremt tynn 
            glass pipette som jeg førte inn i hjernen til nattsvermeren, ca der det lateral horn var, og håpet hardt på å treffe en nervecelle slik at jeg kunne plukke opp spenningsforskjellen 
            over membranen til cella. Dette er litt teknisk, men det gjør at man rett og slett kan lytte til de elektriske impulsene et nevron sender.
            </p>

            <img className = "rounded-xl my-5" src = {solsikkeResponse}></img>

            <p className = "text-zinc-200 text-sm text-justify">Her er et eksempel på en nervecelle som responderer kraftig rett etter at jeg har blåst duften av solsikke ofter antennene.</p>

            <div className = "border border-zinc-700 rounded-xl my-5">
                <img className = "rounded-xl" src = {interNevron}></img>
                <p className = "text-zinc-200 text-sm mt-2 text-justify my-4 px-3">Dette er ett internevron i antenne loben hos en nattsvermer, farget med en teknikk hvor man bruker en 
                syltynn pipette og i blinde (og mye flaks) treffer tilfeldigvis cella helt rent og klarer å føre inn fargestoffet. Dette er nok vakreste bildet jeg har fått til av et nevron. Det er ikke
                vanskelig å forstå at foregreningen ut av en nervecelle, dendritter, har fått sitt navn fra det greske ordet for tre - déndron. 
                </p>
            </div>




            
        </div>
    )
}

export default NTNUproject
