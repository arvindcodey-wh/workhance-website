import globalImg from "../assets/global.png";

function GlobalClients() {
  return (
    <section className="global-section animate-fade-up">
      <div className="global-layout">
        <div className="global-image-box">
          <img src={globalImg} alt="Global Reach"
          className="float-img" />
        </div>

        <div className="global-text-box">
          <h2>Our Global Reach</h2>
          <p>
            We support businesses across multiple regions, helping them scale
            efficiently with reliable services and solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default GlobalClients;