"use client";

import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // const videos = ["v1.mp4", "v2.mp4", "v3.mp4", "v4.mp4", "v5.mp4"];

  // troca automática
  useEffect(() => {
    if (!videoRef.current) return;

    if (playing) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [playing]);

  // controla play/pause ao trocar
  useEffect(() => {
    if (!videoRef.current) return;

    if (playing) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [current, playing]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);

  const textRef = useRef(null);

  const { scrollYProgress: textProgress } = useScroll({
    target: textRef,
    offset: ["start 80%", "end 80%"],
  });

  const textY = useTransform(textProgress, [0, 1], [80, 0]);
  const textOpacity = useTransform(textProgress, [0, 1], [0, 1]);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  };

  const itemAlt = {
    hidden: (i: number) => ({
      opacity: 0,
      x: i % 2 === 0 ? -80 : 80,
      y: 40,
    }),
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 2.0 },
    },
  };

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const items = [
    {
      title: "Posicionamento",
      desc: "A identidade do candidato antes de qualquer câmera ligar. Quem você é, para quem você fala e por que te escolheriam.",
    },
    {
      title: "Autoridade",
      desc: "O conteúdo que constrói credibilidade antes do eleitor precisar confiar.",
    },
    {
      title: "Visibilidade",
      desc: "O tráfego e as mídias que colocam o candidato na cabeça de quem ainda não decidiu.",
    },
    {
      title: "Engajamento",
      desc: "O orgânico que transforma audiência em base. Curtida vira voto quando há método.",
    },
    {
      title: "Alcance",
      desc: "A distribuição que expande além do reduto. Chega em quem ainda não te conhece.",
    },
    {
      title: "Relacionamento",
      desc: "A presença contínua que faz o eleitor sentir que já te conhece antes de apertar o número.",
    },
  ];

  const steps = [
    {
      title: "Briefing Político",
      desc: "Levantamento completo do cenário, bandeiras, base política, lideranças e objetivos da campanha. É aqui que extraímos o que o candidato ainda não sabia que precisava dizer.",
    },
    {
      title: "Elaboração da estratégia",
      desc: "Definição de posicionamento orgânico, narrativa e plano de comunicação. Atuação precisa em cada etapa do funil, topo, meio e fundo, com campanhas direcionadas para quem ainda não decidiu e para quem já está perto de votar.",
    },
    {
      title: "Produção",
      desc: "Criação dos materiais visuais e audiovisuais conforme a estratégia. Cada peça com propósito, cada formato pensado para o canal certo.",
    },
    {
      title: "Pós-produção",
      desc: "Edição, ajustes finos e otimização dos conteúdos produzidos. O detalhe que separa o conteúdo comum do conteúdo que converte.",
    },
    {
      title: "Entrega",
      desc: "Publicação e distribuição dos materiais nos canais definidos. O trabalho que garante que a mensagem certa chegue para a pessoa certa na hora certa.",
    },
  ];

  const stats = [
    {
      value: 10000,
      suffix: "+",
      label: "Crescimento de Seguidores",
    },
    {
      value: 300,
      suffix: "%+",
      label: "Expansão do Alcance",
    },
    {
      value: 5,
      suffix: "x",
      label: "Engajamento da Base",
    },
    {
      value: 200,
      suffix: "+",
      label: "Adesão de Aliados",
    },
    {
      value: 15,
      suffix: " x",
      label: "Penetração Regional",
    },
  ];

  return (
    <main className="w-full text-white bg-black pb-20 md:pb-0 overflow-x-hidden">
      {/* HERO */}
      <section
        ref={sectionRef}
        className="relative h-[110vh] w-full overflow-hidden"
      >
        <motion.video
          style={{ scale }}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/v1.mp4" type="video/mp4" />
        </motion.video>

        <div className="absolute inset-0 bg-black/40" />

        <header className="absolute top-0 left-0 w-full flex justify-between items-center p-4 text-sm z-50">
          <Image src="/logo.png" alt="Logo" width={300} height={300} />
        </header>
      </section>

      <a
        href="https://wa.me/SEUNUMEROAQUI"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-6 right-6 bg-green-500 text-3xl text-white p-5 rounded-full shadow-lg z-50 hover:scale-110 transition"
      >
        <FaWhatsapp size={64} />
      </a>
      {/* PROBLEMA */}
      <section className="bg-white px-6 md:pl-[15%] py-16 overflow-hidden">
        <motion.div
          className="mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            variants={item}
            className="text-3xl text-gray-400 py-6 max-w-xl leading-relaxed"
          >
            Obstáculo
          </motion.p>

          <motion.h3
            variants={item}
            className="text-3xl text-black md:text-5xl font-bold mb-6"
          >
            Base não se compra na véspera. <br />
            Se cultiva.
          </motion.h3>

          <motion.p
            variants={item}
            className="text-xl text-gray-400 max-w-xl leading-relaxed"
          >
            Improvisar conteúdo na reta final é o caminho mais caro para perder
            uma eleição. Investir na base tarde demais, pulverizar orçamento
            imprimindo santinho, rodar tráfego achando que faz milagre. Nós
            resolvemos antes. Antes dos seus concorrentes. Antes do eleitor
            formar opinião. Antes da campanha oficial começar.
          </motion.p>

          <motion.p
            variants={item}
            className="text-xl text-black py-6 md:text-2xl font-bold mb-6"
          >
            Quem começa antes, tem mais chances de garantir o resultado.
          </motion.p>

          <motion.button
            variants={item}
            className="mt-6 border px-4 py-3 bg-[#cb342b] rounded-lg text-sm uppercase relative overflow-hidden group cursor-pointer"
          >
            <span className="relative z-10">agende uma reunião</span>
            <span className="absolute top-0 right-0 w-0 h-full bg-[#0156b3] transition-all duration-500 group-hover:w-full"></span>
          </motion.button>
        </motion.div>
      </section>

      {/* Conteúdo */}
      <section ref={textRef} className="overflow-hidden">
        <div className="flex justify-center items-center py-24 px-6 overflow-hidden">
          <h2 className="text-4xl sm:text-5xl md:text-9xl font-bold leading-tight text-center">
            <motion.span className="block leading-[1.2] md:leading-tight">
              <motion.span
                style={{ y: textY, opacity: textOpacity }}
                className="block block will-change-transform"
              >
                tudo o que é necessário
              </motion.span>
            </motion.span>

            <span className="block overflow-hidden">
              <motion.span
                style={{ y: textY, opacity: textOpacity }}
                className="block block will-change-transform"
              >
                e nada a mais.
              </motion.span>
            </span>
          </h2>
        </div>
      </section>

      <hr className="border-gray-100my-6 mx-[5%]" />
      <section
        ref={ref}
        className="bg-black text-white px-6 py-45 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 uppercase tracking-widest text-2xl mb-10">
            onde você vai chegar
          </p>

          <div className="grid md:grid-cols-5 gap-8">
            {stats.map((item, i) => (
              <div key={i}>
                <h3 className="text-4xl md:text-6xl font-light">
                  {inView ? (
                    <CountUp
                      start={0}
                      end={item.value}
                      duration={3}
                      separator="."
                    />
                  ) : (
                    0
                  )}
                  {item.suffix}
                </h3>

                <p className="text-gray-500 mt-2 text-md">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESTRATÉGIA */}
      <section className="bg-white px-6 md:pl-[15%] pt-40 pb-10 overflow-hidden">
        <motion.div
          className="mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3
            variants={item}
            className="text-5xl text-black md:text-8xl font-bold mb-6"
          >
            soluções <br /> estratégicas
          </motion.h3>

          <motion.div
            variants={item}
            className="text-lg text-gray-400 max-w-xl leading-relaxed"
          >
            <p className="mb-3">
              Eles aparecem na campanha. Nós aparecemos sempre.
            </p>
            <p className="mb-3">
              A diferença está no que ninguém vê. No posicionamento construído
              em silêncio, na narrativa estruturada, na presença que o eleitor
              sente sem saber explicar. Quando a largada é dada, o trabalho
              feito antes já decidiu quem vence.
            </p>
            <p className="mb-3">
              Não entregamos conteúdo. Construímos presença. Cada peça pensada,
              cada campanha com propósito, cada decisão baseada em comportamento
              real do eleitor.
            </p>
          </motion.div>

          <motion.button
            variants={item}
            className="mt-6 border px-4 py-3 bg-[#0156b3] rounded-lg text-sm uppercase relative overflow-hidden group cursor-pointer"
          >
            <span className="relative z-10">agende uma reunião</span>
            <span className="absolute top-0 right-0 w-0 h-full bg-[#cb342b] transition-all duration-500 group-hover:w-full"></span>
          </motion.button>
        </motion.div>
      </section>

      {/* EXPLICAÇÃO */}
      <section className="bg-white px-6 py-16 text-center md:text-right overflow-hidden">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.hr variants={item} className="border-gray-300 mx-[5%]" />

          <div className="max-w-5xl mx-auto px-2 md:px-0 pt-30">
            <motion.h3
              variants={item}
              className="text-3xl text-black md:text-5xl font-bold mb-6"
            >
              PAVEAR
            </motion.h3>

            <motion.p
              variants={item}
              className="text-xl text-gray-400 max-w-full leading-relaxed"
            >
              v. exibir-se, mostrar-se.
            </motion.p>

            <motion.p
              variants={item}
              className="text-lg text-black md:text-x mt-6"
            >
              Quem paveia não se exibe à toa. Está construindo para ser visto.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* FAZEMOS */}
      <section className="bg-white text-black px-6 pb-16 overflow-hidden">
        <motion.div
          className="max-w-5xl mx-auto px-2 md:px-0"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <ul className="space-y-4 text-sm">
            {items.map((item, i) => (
              <motion.li
                key={i}
                variants={variants}
                initial="hidden"
                animate="visible"
                onClick={() => setActive(active === i ? null : i)}
                className="border-b pb-2 cursor-pointer text-right"
              >
                <div className="flex flex-row-reverse justify-between items-center text-2xl">
                  <p>
                    <span className="font-bold">{item.title.charAt(0)}</span>
                    {item.title.slice(1)}
                  </p>

                  <FaChevronDown
                    className={`transition-transform duration-300 ${
                      active === i ? "rotate-180" : ""
                    }`}
                    size={12}
                  />
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    active === i
                      ? "max-h-40 opacity-100 mt-2"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-500 text-lg text-right">
                    {item.desc}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>

          <motion.button
            variants={item}
            className="mt-6 border px-4 py-3 bg-[#cb342b] rounded-lg text-white text-sm uppercase relative overflow-hidden group cursor-pointer"
          >
            <span className="relative z-10">agende uma reunião</span>
            <span className="absolute top-0 right-0 w-0 h-full bg-[#0156b3] transition-all duration-500 group-hover:w-full"></span>
          </motion.button>
        </motion.div>
      </section>

      {/* MARCAS */}
      {/* <section className="bg-black px-6 py-16 text-center">
        <h3 className="text-3xl md:text-5xl font-bold mb-10">marcas</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-400 text-sm">
          {[
            "Uber",
            "3M",
            "Natura",
            "Havaianas",
            "Sephora",
            "Nestlé",
            "Ogilvy",
            "Nivea",
          ].map((brand, i) => (
            <span key={i}>{brand}</span>
          ))}
        </div>
      </section> */}

      {/* PROCESSO */}
      <motion.div
        className="flex flex-col gap-16 py-40 px-6 md:px-30"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {steps.map((step, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={itemAlt}
            className={`flex flex-col items-center md:items-start md:flex-row ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } gap-6`}
          >
            <div className="text-4xl font-bold">{i + 1}.</div>

            <div>
              <h4 className="font-bold uppercase mb-2 text-2xl">
                {step.title}
              </h4>
              <p className="text-gray-400 text-sm">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* FOOTER */}
      <footer className="bg-black px-6 text-sm border-t">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12 text-center md:text-left justify-around">
          {/* BLOCO 1 */}
          <div className="py-16 max-w-md">
            <p className="text-3xl font-bold">
              Nós vamos de candidatos a eleitos, <br />e de eleitos aos que
              querem se reeleger.
            </p>

            <p className="text-lg text-gray-500 mt-4">
              Combinamos o que elegeu cada um deles para que a próxima vez seja
              a sua.
            </p>

            <div className="text-gray-400 mt-6">
              <p>© 2025</p>
              <p>Todos os direitos reservados</p>
            </div>
          </div>

          {/* BLOCO 2 */}
          <div className="py-16">
            <h4 className="text-3xl font-bold mb-2">Contato</h4>
            <p className="text-lg text-gray-500">contato@email.com</p>
            <p className="text-lg text-gray-500">(11) 99999-9999</p>
          </div>

          {/* BLOCO 3 */}
          <div className="py-16">
            <h4 className="text-3xl font-bold mb-2">Social</h4>
            <div className="text-lg text-gray-400 flex flex-col underline gap-4">
              <a href="#">WhatsApp</a>
              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
      <a
        href="https://wa.me/SEUNUMERO"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-0 left-0 w-full bg-[#25D366] flex items-center justify-center py-4 z-50 md:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-6 h-6 fill-white"
        >
          <path d="M16 .396C7.163.396 0 7.56 0 16.396c0 2.887.756 5.705 2.19 8.19L0 32l7.615-2.155a15.94 15.94 0 0 0 8.385 2.385c8.837 0 16-7.163 16-16S24.837.396 16 .396zm0 29.2c-2.55 0-5.05-.68-7.22-1.97l-.52-.31-4.52 1.28 1.2-4.4-.34-.54a13.93 13.93 0 0 1-2.14-7.36c0-7.72 6.28-14 14-14s14 6.28 14 14-6.28 14-14 14zm7.65-10.45c-.42-.21-2.48-1.22-2.86-1.36-.38-.14-.66-.21-.94.21-.28.42-1.08 1.36-1.32 1.64-.24.28-.48.31-.9.1-.42-.21-1.76-.65-3.36-2.06-1.24-1.1-2.08-2.46-2.32-2.88-.24-.42-.03-.65.18-.86.19-.19.42-.48.63-.72.21-.24.28-.42.42-.7.14-.28.07-.52-.03-.73-.1-.21-.94-2.27-1.29-3.1-.34-.82-.68-.71-.94-.72h-.8c-.28 0-.73.1-1.12.52s-1.47 1.44-1.47 3.5 1.5 4.05 1.71 4.33c.21.28 2.95 4.5 7.15 6.31.99.43 1.76.68 2.36.87.99.31 1.9.27 2.62.16.8-.12 2.48-1.01 2.83-1.99.35-.98.35-1.82.24-1.99-.1-.17-.38-.28-.8-.49z" />
        </svg>
      </a>
    </main>
  );
}
