import React from 'react'
import whiskerVideo from '../media/whisker_tracking.mov'
import runningVideo from '../media/mouse_running.MOV'
import ROIVideo from '../media/roi_signals2.mov'
import landmarkCells from '../media/landmark_cells.jpg'

function UiOproject() {
    return (
        
        <div className = "w-full flex flex-col items-center  max-w-3xl">

            {/* Header */}
            <p className = "text-zinc-300 font-semibold">2017 - 2022</p>
            <p className = "text-zinc-300 font-semibold text-xs border border-zinc-600 rounded-lg p-1 px-2 my-0.5">PhD i Medisin - Universitet i Oslo</p>
            <p className = "text-white font-bold text-3xl text-center sm:text mx-5">Hvordan hjelper landemerker oss å navigere?</p>

            <p className = "text-zinc-200 text-sm mt-2 text-justify">Se for deg at du står midt i din egen stue og lukker øynene. 
            Hjernen din har et indre mentalt kart over omgivelsene dine. Selv med lukkede øyne kan du peke ut hvilken retning kjøkkenet ditt er, eller sofaen din, eller ting som er langt borte, som f.eks. nærmeste togstasjon. Dette kalles for <solid className = "font-extrabold">stedssansen</solid>.
            Hvis du fortsetter å ha øynene lukket, og begynner å gå fremover, så har du fortsatt en følelse av hvor du er. For hvert skritt du tar fremover oppdaterer hjernen sitt estimate for hvor den tror du er. Men hvis du går for langt eller roterer for mye frem og tilbake
            mister du til slutt oversikten.
            </p>
            <p className = "text-zinc-200 text-sm mt-2 text-justify">For å kunne gi en korrekt estimate av hvor du er i omgivelsene dine må
            hjernen få noen sanseinntrykk som kan brukes til å oppdatere estimatet. Hvis du åpner øynene ser du hvor sofaen din er, hvor bokhylla di står, eller døra ut, og vipps så 
            oppdateres din oppfatning av hvor du er. Hvor i hjernen behandles denne informasjonen? Hvor og hvordan gjøres de nevrale beregningen som lar dette skje? 
            </p>

            {/* Whisker tracking */}
            <div className = "mt-5 sm:mt-8 border pb-5 border-zinc-700 rounded-xl">
                <video className = "rounded-t-xl" alt = "Video av mus som løper på løpehjul" autoPlay playsInline loop muted>
                    <source src = {whiskerVideo}/>
                </video>
                <p className = "text-white font-semibold text-md pt-2 px-3">Sakte film av en mus som løper i en taktil VR</p>
                <p className = "text-white text-sm px-3">Værhårene filmes med 300 bilder i sekundet av et infrarødt kamera</p>
            </div>

            <p className = "text-zinc-100 font-semibold text-xl mt-10">En virtuell virkelighet for mus</p>
            
            <p className = "text-zinc-200 text-sm text-justify">For å kunne studere hvordan landemerker påvirker stedssansen bygget en virtuell virkelig (VR) hvor mus løp i mørket gjennom en korridor for å få belønning. Jeg laget
            et automasjonssystem som gjorde det mulig å kontrollere motorer til å simulere effekten av at et objekt som dukket opp på gitte steder i denne korridoren. For å få til dette måtte jeg bygge
            det meste fra bunnen av - mekanisk, elektrisk og kode. 
            </p>

            <p className = "text-zinc-200 text-sm mt-5 text-justify">Litt enkelt forklart brukte jeg transgenetiske mus hvor nervecellene lyser opp når de sender elektriske impulser. (Egentlig 
            brukte jeg en høy-intensitets laser for å løfte energistadiet i fluoresence proteiner slik at de kunne lyse opp).
            På disse
            musene utførte jeg et kirurgisk inngrep hvor jeg drillet vekk en del av hodeskallen og bytte den ut med et glassvindu av samme størrelse, som gjorde at jeg kunne se rett ned i hjernen. Ved hjelp
            av et spesielt mikroskop kunne jeg da filme nerveaktiviteten til flere hundre nevroner i sanntid mens musene var våkne og løp i den virtuelle korridoren. 
            </p>
            <p className = "italic text-zinc-200 text-sm mt-5 text-justify">(PS: Hvis du tenker at dette høres litt vel science-fiction ut, så kan
            jeg også avsløre at ved å bruke lys og designer-virus så har jeg også kunnet skru av eller på aktiviteten til nervecellene, og dermed direkte kontrollert musas hjerneaktivitet! )</p>

            {/* VR oppsett */}
            <div className = "mt-5 sm:mt-8 border pb-5 border-zinc-700 rounded-xl">
                <video className = "rounded-t-xl" src = {runningVideo} alt = "Video av mus som løper på løpehjul i virtuell virkelighet" autoPlay playsInline loop muted></video>
                <p className = "text-white font-semibold text-md pt-2 px-3">Hodefiksert mus løper på løpehjul</p>
                <p className = "text-white text-sm px-3">Hvis du ser nøye på toppen av hodet er det et rød-rosa område. Dette er hjernen til musa som kan sees gjennom et glassvindu. VR oppsettet styres fra virtuelle instrumenter i LabView, og all data hentes inn gjennom National Instruments data acquisition plattformer. </p>
            </div>



            {/* Hva slags data får man ut */}
            <p className = "text-zinc-100 font-semibold text-xl mt-10">Å lytte til hjernen</p>

            {/* Imaging of retrosplenial cortex */}
            <div className = "mt-3 border pb-5 border-zinc-700 rounded-xl mb-5">
            <video className = "rounded-t-xl" src = {ROIVideo} alt = "Video av mikroskopi i hjernen og signalene som hentes ut" autoPlay playsInline loop muted></video>
                <p className = "text-white font-semibold text-md pt-2 px-3">Signalene vi henter ut fra nerveceller ved hjelp av to-foton mikroskopi</p>
                <p className = "text-white text-sm px-3">Til venstre er en video fra et 0.5 mm x 0.5 mm stort område av hjernebarken til en mus. Fargede sirkler er 
                    tegnet rundt noen tilfeldige nerveceller. Til høyre ser du gjennomsnittsverdien av pixlene i en sirkel.</p>
            </div>



            <p className = "text-zinc-200 text-sm  text-justify">Filmen over viser ca 400 nerveceller i et 0.5 mm stort området av hjernebarken hos en mus som løper på et løpehjul. For å få en så stabil film har vi først gjort bevegelseskorreksjon. Musa løper i 50-60 cm/s og hjernen 
            hopper rundt i skallen, så råfilmen er ganske humpete også. I bildet kan du se at det er tett med nerveceller,
            og det eneste man kan gjenkjenne er cellekroppene som fremstår som små runde områder som lyser opp i ny og ne. Det er også tegnet noen farga sirkler rundt noen nerveceller, og signalet (summen av verdien av pixlene over tid) er plottet til høyre. De mørke skyggene i videoen er skyggene av blodårer som strekker seg gjennom hjernevevet.
        
            </p>
            <p className = "italic text-zinc-200 text-sm  mt-3 text-justify"> (Kanskje ser du også at noen av disse signalene skjer rett etterhverandre, som en sekvens. Ja, flere av disse cellene er så kalte "stedceller" 
            som er aktive på forskjellige punkter i den virtuelle koridoren musa løper i. Dermed blir en stedscelle aktivert, etterfulgt av en ny, etterflugt av en ny, osv. Du har også stedceller i din hjerne, og de spenner seg 
            ut over hele rommet du er i nå. Kanskje er en aktiv i stolen du sitter i eller plassen du står på. Går du litt vekk så blir den stille, kommer du tilbake til samme plassen blir den aktiv igjen.)        
            </p>


            {/* Resultater */}

            <p className = "text-zinc-100 font-semibold text-center text-xl mt-10">Retrosplenial cortex husker landemerkers posisjon i omgivelsene</p>

            <p className = "text-zinc-200 text-sm  text-justify"> Mengden analyse og ting man kan hente ut av et sånt dataset er enormt. Jeg skal kun fokusere på én av tingene jeg har funnet. Siden musene løper i mørket og landemerkene i den virtuelle korridoren styres av
            motorer som jeg kontrollerer, så kan man se hva som skjer hvis musene får løpe i denne korridoren i flere uker å bli vant med at landemerket skal dukke opp på to faste plasser, hvergang man passerer de. Hva skjer så om man plutselig skrur av ett av 
            landemerkene i noen runder?
            </p>            


            <div className = "mt-5 border pb-5 border-zinc-700 rounded-xl mb-5">
            <img className = "rounded-t-xl" src = {landmarkCells} alt = "Eksempel på landemerke-celler"></img>
                <p className = "text-white font-semibold text-md pt-2 px-3">Landemerke-celler i retrosplenial cortex</p>
                <p className = "text-white text-sm px-3">Til venstre ser vi 2 eksempel landemerke celler, den første "non-persistent" er kun aktiv når landemerket er fysisk tilstede.
                Den andre "persisten" har også nevral aktivitet selv om landemerket er utelatt. De røde linjene indikerer posisjonen i korridoren hvor landemerkene er presentert. Til høyre ser vi resultatet av
                å trene en Bayesisk klassifiserings model. Ved å bruke kun nerveaktiviteten hentet ut fra mikroskopi kan vi med veldig høy presisjon si hvor i korridoren musa befinner seg, noe som indikerer at denne
                informasjonen eksisterer i nervenettverket og dets aktivitet.</p>
            </div>

            <p className = "text-zinc-200 text-sm  text-justify"> I eksperimentene mine har jeg latt musa løpe i en korridor den er kjent over flere uker, og så skrur jeg av det første landemerket i noen tilfeldige runder i løpet av ett opptak 
            på mikroskopet. I figuren over er disse rundene sortert slik at alle runder hvor landemerket er på er øverst, og når det er av er nederst. Merk at kun første landmerke blir "manipulert". Det andre er alltid tilstede.
            Det vi ser er at mange nerveceller kun er aktive hvis landemerket er tilstede, men ca halvparten av av landemerke-celler jeg har funnet er også aktive
            selv hvis landemerket ikke er til stede! Cellen ser ut til å huske at "her skal det jo være noe?" selv når det ikke er der. 

            En ekstra kul effekt av at nerveaktiviteten faktisk beskriver musas posisjon i rommet er at vi kan trene en klassifikasjonsmodel til å fortelle basert kun på nerveaktivitet hvor musa er!
            </p>       

        </div>
        
    )
}

export default UiOproject
