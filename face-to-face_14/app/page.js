"use client";

import { useEffect } from "react";
import { onScroll, animate } from "animejs";


export default function Page() {
   useEffect(() => {
       // Anime.js code goes here

       animate(".fade-item", {
    opacity: [0, 1],
    translateX: [-100, 0],
    translateY: [0, 0],   
    duration: 1500,
    ease: "outCubic",
    autoplay: onScroll({
        debug: true,
        enter: "bottom top",
        leave: "top bottom",
        sync: 0.25,
    }),
});

   }, []);

     return (
<div className="fade-right my-[1000px]">
<div className="flex flex-col items-center px-6">


<div className="fade-item">
  <div className="max-w-3xl text-center my-10">
    <h1 className="text-4xl font-bold mb-4">
      We are writing the World's Final Chapter
    </h1>
    <div>Wildlife Conservation all comes down to you</div>
    <p className="text-lg leading-7">
      From the first industrial chimneys to today's choking smog, humans have always
      wondered when the world will end—never realising that we are the ones pushing it
      toward the edge. Forests fall, oceans choke, and species vanish while we look
      away. Our fate isn't written in the stars; it's carved by our own hands. If we do
      not act now to protect the environment and the animals we share it with, the grave
      we are digging will soon be our own. The choice to save the Earth still exists—but
      only if we take it. Even though we have not received any big impact, animals have.
      They are canaries in the coal mine, and their troubles will soon be our apocalypse.
    </p>
    </div>
  </div>



<div className="fade-item">
  <div className="max-w-3xl my-14">
    <div className="heading-box w-full h-2 bg-black mb-4"></div>


     <a href="#" className="img-link">
        <img 
        
          src="https://cdn.britannica.com/69/65969-050-8E4B0AB9/Orangutan.jpg" //pls replace with the actual link
          width={500}
          height={500}
          alt="Polar Bear"
        />
      </a>

    <p className="text-lg leading-7">
      The Sumatran Orangutan (<em>Pongo abelii</em>), native to northern Sumatra,
      Indonesia, has been listed as "Critically Endangered" by the IUCN Red List since
      2002. Their population has declined by approximately 80% in the past 75 years, from
      70,000 in 1950 to about 14,000 in 2025. The main causes of their decline are habitat
      loss due to palm oil plantations, logging, mining, and infrastructure. Below are
      some ways to help conserve their species in the wild:
    </p>
    <div className="fade-item">
    <div className="text-lg leading-7">

      <div>
        <strong>No.1:</strong> Set up more sanctuaries, wildlife centres, and orphanages
        for the Sumatran Orangutan <br/>(result: more orangutans saved from natural disasters
        or poaching).
      </div>

      <div>
        <strong>No.2:</strong> Field Monitoring: track relocated and wild orangutan
        populations to understand<br/>their needs and threats.
      </div>

      <div>
        <strong>No.3:</strong> Recruit and train more rangers to ensure poachers are kept
        at bay.
      </div>

      <div>
        <strong>No.4:</strong> Choose fruit brands that do not use hidden palm oil
        derivatives.
      </div>

      <div>
        <strong>No.5:</strong> Spend three minutes daily behind a tree just listening.
        This builds emotional bonds,<br/> which encourages protection of forests—trees are
        living beings after all!
      </div>

    </div>
    <div className="section">
</div>

<div className="fade-item">
 <a href="#" className="img-link">
        <img 
        
          id="polar-img"
          src="https://www.thoughtco.com/thmb/FcM6FJ1e6wrimHA7zTdAArfRwjw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/polar-bear-150005875-5c4db42046e0fb0001a8e7b8.jpg" //pls replace with the actual link
          width={500}
          height={500}
          alt="Polar Bear"
        />
      </a>

      <h3 id="polar-heading"
       className="text-2xl font-bold text-center mb-4">
        Next up is the polar bear.
      </h3>

      <p className="text-lg leading-7 text-center">
        The polar bear is a large bear native to the Arctic. According to Wikipedia, the polar bear
        is the largest extant species of bear, with adult males weighing 300-800 kg. Currently, they
        are listed as "Vulnerable" due to melting ice and declining hunting conditions. Several
        populations—especially in southern regions—are experiencing steep declines.
      </p>

  <div className="text-lg leading-7">
    <div className="tip" id="tip1">
       <strong>No.1:</strong> The "Invisible-Ice" Habit—reduce unnecessary heat from appliances. 
       Unplug chargers when not in use, keep fridges ventilated, and avoid leaving electronics running overnight.
    </div>

    <div className="tip" id="tip2">
        <strong>No.2:</strong> Grow one shadow-making plant near your window or balcony. Even one small plant helps cool your home.
    </div>

    <div className="tip" id="tip3">
        <strong>No.3:</strong>"Cold Hour for the North"—choose one hour each day where you avoid creating excess heat
        (no cooking, ironing, long showers, etc.)
    </div>
  </div>
</div>

  
<div className="fade-item">

        <img 
        
          src="https://a-z-animals.com/media/animals/images/original/amur_leopard_1.jpg" //pls replace with the actual link
          width={500}
          height={500}
        />

    <h4 id="amur-heading text-lg"
        className="text-4xl font-bold mb-4 text-center">
      Thirdly, the Amur Leopard
    </h4>

    <div className="amur-text text-lg text-center leading-7">
        The Amur leopard is a critically endangered subspecies with fewer than 100 individuals remaining.
        Threats include habitat loss, poaching, and prey depletion. Conservation efforts include anti-poaching
        patrols, habitat restoration, and captive breeding programs.
    </div>
</div>

<div className="fade-item">
    <div className="tip text-lg leading-7" id="amur-tip1">
        <strong>No.1:</strong> Support conservation groups like WWF and ALTA.
    </div>

    <div className="tip text-lg leading-7"  id="amur-tip2">
        <strong>No.2:</strong> Raise awareness by sharing information and educating others.
    </div>

    <div className="tip text-lg leading-7"  id="amur-tip3">
        <strong>No.3:</strong> Advocate for stronger anti-poaching laws and conservation funding.
    </div> 
  </div>
</div>
</div>
             </div>
  </div>
</div>
 );
}

