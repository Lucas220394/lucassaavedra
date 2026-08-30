/**
 * Ondas animadas de fondo para el Hero (SVG + CSS puro, sin JS).
 * Se posiciona centrada y por detrás del H1 (ver .contenedor-ondas en globals.css).
 */
export default function HeroWaves() {
  return (
    <div className="contenedor-ondas" aria-hidden="true">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 200"
        preserveAspectRatio="none"
        className="svg-ondas"
      >
        <path
          className="onda onda1"
          d="M0,100 C150,150 350,50 500,100 C650,150 850,50 1000,100 C1150,150 1350,50 1500,100 C1650,150 1850,50 2000,100"
          fill="none"
          stroke="#4ade80"
          strokeWidth="4"
        />
        <path
          className="onda onda2"
          d="M0,100 C150,180 350,20 500,100 C650,180 850,20 1000,100 C1150,180 1350,20 1500,100 C1650,180 1850,20 2000,100"
          fill="none"
          stroke="#2dd4bf"
          strokeWidth="3"
        />
        <path
          className="onda onda3"
          d="M0,100 C150,120 350,80 500,100 C650,120 850,80 1000,100 C1150,120 1350,80 1500,100 C1650,120 1850,80 2000,100"
          fill="none"
          stroke="#818cf8"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}
