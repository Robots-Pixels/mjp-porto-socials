import "./App.css";
import { useState, useEffect } from "react";
import {
  Lightbulb,
  Users,
  Star,
  ChevronRight,
  ChurchIcon,
  FlagTriangleRightIcon,
  Globe,
  Locate,
  PinIcon,
  MapPin,
} from "lucide-react";

const headlines = [
  "Des jeunes passionnés de Dieu et transformés pour porter la lumière de Christ aux nations.",
  "Former des disciples de Jésus pour influencer et transformer la jeunesse du monde entier.",
];

export default function App() {
  const [isSmall, setIsSmall] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSmall(true);
      } else {
        setIsSmall(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isSmall, setIsSmall]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled, setScrolled]);

  return (
    <div className="mb-20 sm:mb-0">
      {/* ==== HEADER (fixed side nav) ==== */}

      {isSmall ? (
        <header
          className={`fixed bottom-0 duration-500 z-9999 bg-[#9D6C7D]/90 rounded-t-xl w-full flex justify-center`}
        >
          <nav className="w-full h-full py-4 px-8">
            <ul className="w-full flex items-center justify-between gap-4 text-white font-medium">
              <li className="bg-white rounded-xl p-2">
                <a href="#us">
                  <ChurchIcon className="text-[#9D6C7D]/90"></ChurchIcon>
                </a>
              </li>

              <li className="bg-white rounded-xl p-2">
                <a href="#mission">
                  <FlagTriangleRightIcon className="text-[#9D6C7D]/90"></FlagTriangleRightIcon>
                </a>
              </li>

              <li className="">
                <a href="#">
                  <img
                    className="w-20"
                    src="/logo1.png"
                    alt="Logo EJP Porto Novo"
                  />
                </a>
              </li>

              <li className="bg-white rounded-xl p-2">
                <a href="#rs">
                  <Globe className="text-[#9D6C7D]/90"></Globe>
                </a>
              </li>

              <li className="bg-white rounded-xl p-2">
                <a href="#localisation">
                  <MapPin className="text-[#9D6C7D]/90"></MapPin>
                </a>
              </li>
            </ul>
          </nav>
        </header>
      ) : (
        <header
          className={`fixed ${
            scrolled ? "top-0" : "-top-100"
          } max-w-6xl -translate-x-1/2 left-1/2 duration-500 z-9999 bg-[#9D6C7D]/90 rounded-b-xl w-full flex justify-center`}
        >
          <nav className="w-full h-full px-20">
            <ul className="w-full flex items-center justify-between gap-4 text-white font-medium">
              <li>
                <a href="#us" className="hover:underline">
                  L'église
                </a>
              </li>
              <li>
                <a href="#mission" className="hover:underline">
                  Mission
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    className="w-24"
                    src="/logo1.png"
                    alt="Logo EJP Porto Novo"
                  />
                </a>
              </li>
              <li>
                <a href="#localisation" className="hover:underline">
                  Localisation
                </a>
              </li>
              <li className="bg-[#79525f] p-3 rounded-md">
                <a href="#rs" className="hover:underline">
                  Réseaux
                </a>
              </li>
            </ul>
          </nav>
        </header>
      )}

      {!isSmall && (
        <aside
          className={`fixed top-1/2 ${
            scrolled ? "-right-100" : "right-0"
          }  duration-500 -translate-y-1/2 z-9999 bg-[#9D6C7D]/40 rounded-l-xl flex justify-center`}
        >
          <nav className="h-full py-10 px-4">
            <ul className="flex flex-col items-center gap-12 text-white font-medium">
              <li>
                <a href="#">
                  <img
                    className="w-24"
                    src="/logo1.png"
                    alt="Logo EJP Porto Novo"
                  />
                </a>
              </li>
              <li>
                <a href="#us" className="hover:underline">
                  L'église
                </a>
              </li>
              <li>
                <a href="#mission" className="hover:underline">
                  Mission
                </a>
              </li>
              <li>
                <a href="#localisation" className="hover:underline">
                  Localisation
                </a>
              </li>
              <li className="bg-[#79525f] p-3 rounded-md">
                <a href="#rs" className="hover:underline">
                  Réseaux
                </a>
              </li>
            </ul>
          </nav>
        </aside>
      )}

      {/* ==== HERO ==== */}
      <section
        className="relative h-screen bg-cover bg-position-[60%] sm:bg-position-[45%] shadow-black shadow-2xl "
        style={{
          backgroundImage: `${
            isSmall ? "url('/cover-mobile.png')" : "url('/cover.png')"
          }`,
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-end mb-40">
          {/* <div className="mx-auto w-full bg-[#9D6C7D]/30 flex items-center justify-center rounded max-w-6xl px-4 text-center">
              <h1
                className="mb-6 text-3xl py-4 font-medium leading-tight text-white tracking-wide opacity-0 animate-fadeIn sm:text-5xl"
              >
                Des jeunes passionnés de Dieu et transformés pour porter la lumière de Christ aux nations.
              </h1>
            </div> */}
        </div>
      </section>

      {/* ==== MAIN CONTENT ==== */}
      <div className="mx-auto max-w-6xl px-4 sm:px-0">
        <section id="us" className="pt-20">
          <div className="gap-4 w-full text-center">
            <div className="w-full px-4 ">
              <h1 className="mb-6 text-2xl sm:text-3xl font-medium leading-tight text-black tracking-wide opacity-0 animate-fadeIn">
                {headlines[0]}
              </h1>

              {/* ==== INFO CARDS ==== */}
              <div id="info" className="pt-14">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  <InfoCard
                    icon={<Lightbulb className="h-8 w-8" />}
                    title="Innovation"
                    text="Participez à nos projets innovants et initiatives de développement local"
                  />
                  <InfoCard
                    icon={<Users className="h-8 w-8" />}
                    title="Communauté"
                    text="Rejoignez une communauté de jeunes prodiges engagés pour Christ"
                  />
                  <InfoCard
                    icon={<Star className="h-8 w-8" />}
                    title="Excellence"
                    text="Cultivez l’excellence en participant à nos différentes activités"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="mission" className="pt-20">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-1/2 mb-6 sm:mb-0">
              <div className="w-full px-4 ">
                <h1 className="mb-6 text-2xl sm:text-3xl font-medium leading-tight text-black tracking-wide opacity-0 animate-fadeIn">
                  Notre Mission
                </h1>

                <p className="mb-6">
                  Notre vision est de conquérir <strong>la jeunesse</strong> des
                  extrémités de la terre pour en faire des{" "}
                  <strong>disciples de Jésus</strong> qui{" "}
                  <strong> dominent </strong>dans les{" "}
                  <strong>territoires géographiques et d'influence.</strong>
                </p>
                <a
                  href="#rs"
                  className="inline-block rounded-lg bg-[#9f728b] px-6 py-3 text-white transition hover:bg-[#8a5f76]"
                >
                  Rejoindre La Communauté
                </a>
              </div>
            </div>

            <div className="w-full h-50 sm:h-auto sm:w-1/2 relative">
              <img
                className="absolute rounded-xl top-0 w-full h-full right-0 object-center object-cover"
                src="/pexels.jpg"
                alt="EJP Porto Notre Vision"
              />

              <div className="w-full rounded-xl h-full z-1 bg-black/50 absolute" />
            </div>
          </div>
        </section>

        {/* ==== SOCIAL SECTION ==== */}
        <section id="rs" className="pt-20">
          <h2 className="mb-4 font-medium text-2xl md:text-3xl text-center">
            Rejoignez-nous sur nos réseaux sociaux
          </h2>
          <p className="mb-20 max-w-prose text-center mx-auto">
            Restez connectés avec l’Église Jeunes Prodiges Porto-Novo et
            participez à nos discussions, événements et initiatives pour
            l’expansion du royaume de Dieu de Porto Novo jusqu’aux extrémités de
            la Terre.
          </p>

          <div className="flex flex-col gap-8 md:flex-row-reverse">
            {/* Links */}
            <div className="space-y-5 md:w-1/2">
              {/* Facebook */}
              <SocialLink
                href="https://www.facebook.com/JeunesICCPortoNovo"
                gradient="from-[#505a7d] to-[#374781]"
                shadow="shadow-facebook"
                icon={<img src="/facebook.svg" />}
                title="Facebook"
                desc="Suivez nos actualités et événements"
              />

              {/* WhatsApp */}
              <SocialLink
                href="https://wa.me/2290149121209"
                gradient="from-[#599046] to-[#468b2e]"
                shadow="shadow-whatsapp"
                icon={<img src="/whatsapp.svg" />}
                title="WhatsApp"
                desc="Rejoignez notre groupe de discussion"
              />

              {/* YouTube */}
              <SocialLink
                href="https://youtube.com/@ejp_porto-novo"
                gradient="from-[#f1837b] to-[#e65247]"
                shadow="shadow-youtube"
                icon={<img src="/yt.svg" />}
                title="YouTube"
                desc="Rejoignez notre chaîne YouTube"
              />

              {/* Instagram */}
              <SocialLink
                href="https://www.instagram.com/ejp_portonovo"
                gradient="from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]"
                shadow="shadow-instagram"
                icon={<img src="/insta.svg" />}
                title="Instagram"
                desc="Ne manquez aucun événement"
              />
            </div>

            {/* Image placeholder */}
            <div
              className="min-h-100 w-full rounded-xl bg-cover bg-center md:h-auto md:w-1/2"
              style={{ backgroundImage: "url('./rs-bg.png')" }}
            >
              <div className="flex h-full items-center justify-center bg-black/10 rounded-xl">
                <div className="text-center text-white"></div>
              </div>
            </div>
          </div>
        </section>

        {/* ==== MAP ==== */}
        <section id="localisation" className="pt-20">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.118983128652!2d2.608593474184768!3d6.506619693485689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b509847477de1%3A0x3e6a855444f8697f!2sImpact%20Centre%20Chr%C3%A9tien%2C%20Campus%20de%20Porto-Novo!5e0!3m2!1sfr!2sbj!4v1752599046400!5m2!1sfr!2sbj"
              className="h-96 w-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation EJP"
            />
          </div>
        </section>

        {/* ==== FOOTER ==== */}
        <footer className="py-12 text-center">
          <p className="opacity-80">
            &copy; 2025 EJP-Porto - Église Jeunes Prodiges de Porto Novo. Tous
            droits réservés.
          </p>
          <p className="mt-2 text-lg font-light italic">
            L’excellence par la jeunesse, de Porto Novo jusqu’aux extrémités de
            la Terre
          </p>
        </footer>
      </div>

      {/* ==== TAILWIND CUSTOM UTILITIES ==== */}
      <style jsx>{`
        @layer utilities {
          .text-shadow-lg {
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s ease-out forwards;
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .shine::before {
            content: "";
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(255, 255, 255, 0.2),
              transparent
            );
            transition: left 0.5s;
          }
          .shine:hover::before {
            left: 100%;
          }
          .shadow-facebook {
            box-shadow: 0 8px 25px rgba(24, 119, 242, 0.3);
          }
          .shadow-whatsapp {
            box-shadow: 0 8px 25px #7bbd65;
          }
          .shadow-youtube {
            box-shadow: 0 8px 25px #d1706a;
          }
          .shadow-instagram {
            box-shadow: 0 8px 25px #d1706a;
          }
        }
      `}</style>
    </div>
  );
}

/* ---------- Reusable components ---------- */

function SocialLink({ href, gradient, shadow, icon, title, desc }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex min-w-[320px] items-center justify-between overflow-hidden rounded-xl p-6 text-white transition-all hover:-translate-y-1 bg-linear-to-r ${gradient} ${shadow} shine`}
    >
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 p-2">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm opacity-90">{desc}</p>
        </div>
      </div>
      <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function InfoCard({ icon, title, text }) {
  return (
    <div className="rounded-xl bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] p-8 text-center transition-all hover:-translate-y-1 hover:shadow-xl">
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#c0857a] to-[#9f728b] text-white">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}
