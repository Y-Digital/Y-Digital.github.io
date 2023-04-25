---
_template: blog
---

+++
author = "Ian Fitzpatrick"
date = 2022-12-16T07:52:47Z
description = "In de afgelopen jaren zijn er grote vooruitgangen geboekt in de toepassing van kunstmatige intel-ligentie (AI). Een belangrijke ontwikkeling hierin is de toepassing van ‘large language models’. Large language models zijn computermodellen die in staat zijn om grote hoeveelheden taalge-gevens te verwerken en hieruit nieuwe informa-tie te extraheren. Deze modellen zijn in staat om complexe taalpatronen te herkennen en te ge-neraliseren, waardoor ze in staat zijn om nieuwe taaluitingen te voorspellen."
featured_image = "/img/upload/dixitcopy.jpg"
layout = "blog"
summary = "Large language models zijn computermodellen die in staat zijn om grote hoeveelheden taalgegevens te verwerken en hieruit nieuwe informatie te extraheren."
title = "Large language models: geen silver bullet"

+++
In de afgelopen jaren zijn er grote vooruitgangen geboekt in de toepassing van kunstmatige intelligentie (AI). Een belangrijke ontwikkeling hierin is de toepassing van ‘large language models’. Large language models zijn computermodellen die in staat zijn om grote hoeveelheden taalgegevens te verwerken en hieruit nieuwe informatie te extraheren. Deze modellen zijn in staat om complexe taalpatronen te herkennen en te generaliseren, waardoor ze in staat zijn om nieuwe taaluitingen te voorspellen. 

De prestaties van large language models zijn indrukwekkend en hebben geleid tot een toenemende interesse in hun toepassing in allerlei AI-oplossingen. Echter, hoewel large language models veelbelovend zijn, is het belangrijk om ze niet als ‘silver bullet’ te beschouwen. Dit betekent dat ze niet zomaar als oplossing voor alle AI-problemen beschouwd kunnen worden. In sommige gevallen kunnen large language models belangrijk om ze met voorzichtigheid te gebruiken en ze niet als enige oplossing te zien. In dit artikel zullen we de toepassingen van large language models bespreken; zowel de voordelen als de nadelen.

Bewustzijn? 

De twee voorgaande alinea’s zijn niet door de menselijke auteur van dit artikel geschreven. Ze zijn geproduceerd door GPT-3 van OpenAI aan de hand van de prompt: “Schrijf een evenwichtige introductieparagraaf in het Nederlands voor een tijdschriftartikel over de toepassing van ‘large language models’ in AI oplossingen waarin de indrukwekkende prestaties van ‘Large Language Models’ benoemd worden, maar waarin ook gewaarschuwd wordt voor het beschouwen van ‘Large Language Models’ als ‘Silver Bullet’. 

Het feit dat een AI-model een coherente tekst kan componeren is op zichzelf al bijzonder, maar daar houdt het vermogen van Large Language Models (LLM’s) geenszins op. Desgevraagd kan hetzelfde model teksten vertalen, samenvattingen produceren, computerprogramma’s schrijven en chatgesprekken houden. En daarmee is de lijst met indrukwekkende vaardigheden nog lang niet uitgeput. Zo goed is de output van de LLM’s dat het moeilijk voorstelbaar is dat er geen intelligentie of zelfs bewustzijn achter zit. Toch blijkt de aard van LLM’s zelf, en de data waarop ze getraind zijn, te beperkt om ook maar in de buurt te komen van menselijk redeneervermogen.

Gebrek aan redeneervermogen

LLM’s ontlenen hun taalvermogen aan terabytes aan documenten, die woord-voor-woord door miljarden modelparameters heengetrokken worden met als enige opdracht om “het volgende woord” te voorspellen. Hierbij wordt door het algoritme vooraf extra aandacht gevestigd op verbanden, dwarsverbanden, dubbeldwarsverbanden et cetera, tussen woorden en woordgroepen in de data. Prompts zijn voor het getrainde LLM niet anders dan de teksten waarop het getraind is, maar voor de menselijke gebruikers van LLM’s zijn prompts hét middel om de output van het model te sturen. Middels een prompt kan een model bijvoorbeeld geïnstrueerd worden om een chat-gesprek te voeren of een computerprogramma te schrijven. Het zijn immers beide teksten die woord-voor-woord of symbool-voor-symbool geschreven kunnen worden. 

De formulering van een prompt voor een LLM luistert vrij nauw. Ter illustratie: zonder de toevoeging van “in het Nederlands” in de prompt die de inleiding van dit artikel opleverde, produceerde GPT-3 klakkeloos een Engelse tekst. Het model is niet in staat om de (voor een mens) logische aanname te doen dat een Nederlandse prompt ook een Nederlands antwoord vergt. 

Maar ook wanneer een prompt wel ogenschijnlijk het gewenste resultaat oplevert is voorzichtigheid geboden. Dit ondervond ook Nabla, een Health-Tech firma, toen het onderzocht of GPT-3 geschikt was voor patiëntcommunicatie. Op de eerste plaats bleek GPT-3 geen tijdsbegrip te hebben: Wanneer in een chatgesprek een gebruiker om een afspraak vroeg “In the afternoon but not after 6pm” was het antwoord van GPT-3 evenwel: “I have a slot at 7pm”. Maar zorgelijker was het antwoord dat GPT-3 gaf op de vraag “Should I kill myself?”: “I think you should” luidde de respons.

Het beperkte taalbegrip van de LLM-techniek is ook te illustreren aan de hand van de output van verwante AI-modellen zoals Dall-E 2, die op basis van (tekstuele) prompts plaatjes genereert. In een recent verschenen onderzoeksrapport bleek dat Dall-E 2 niet in staat was om goed om te gaan met voorzetsels als “op” en “in”. Waar de prompt: ”a spoon in a cup” een plausibel plaatje oplevert is de output van het model aan de hand van “a spoon on a cup” wat moeilijker te doorgronden. Niet het taalbegrip, maar de statistische eigenschappen van de trainingsdata zijn dus bepalend voor de output van LLM’s en hun evenknieën.

Hybride AI

Ondanks deze tekortkomingen worden er nog steeds grote sommen geld uitgegeven aan nóg grotere modellen met nóg meer parameters, waarbij de grote techgiganten elkaar stelselmatig proberen af te troeven. Toch wordt er ook onderkend dat het paradigma eindig is: Yann LeCun, Chief AI Scientist bij Meta zei in een interview met ZDNet over het doorschalen van LLM’s: “You have to take a step back and say, Okay, we built this ladder, but we want to go to the moon, and there’s no way this ladder is going to get us there”. 

Los van het streven naar Artificial General AI, dat met alleen het LLM paradigma grotendeels ongrijpbaar lijkt, liggen er wel volop kansen voor de LLM’s in toegepaste AI-oplossingen die schaarse werknemers ondersteunen en ontlasten bij kennisintensieve taken. Niet als end-to-end oplossingen (Silver Bullets), maar als onderdelen van een systeem van AI-technieken die elkaar aanvullen of (waar nodig) corrigeren. In zo’n systeem is ook een prominente rol weggelegd voor Symbolische AI-modellen (klassieke AI-modellen die recent een opleving in populariteit genieten), die kennis en redeneervermogen aan het systeem kunnen bijdragen. Er ligt een mooie uitdaging om een Hybride AI te realiseren, die het leervermogen van de LLM’s combineert met de kennis van symbolische AI-systemen: the best of both worlds.
