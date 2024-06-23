import React, { useEffect, useState } from "react";
import img1 from "@/assets/cmo.jpg";
import img2 from "@/assets/ceo.jpg";
import bottomImage from "@/assets/bottom-image.png"; // Import your bottom image here

const AboutUs: React.FC = () => {
  // State variables for numbers
  const [citiesCount, setCitiesCount] = useState(0);
  const [statesCount, setStatesCount] = useState(0);
  const [countriesCount, setCountriesCount] = useState(0);

  // Function to update numbers
  useEffect(() => {
    const interval = setInterval(() => {
      setCitiesCount((prev) => (prev < 43 ? prev + 1 : 43));
      setStatesCount((prev) => (prev < 21 ? prev + 1 : 21));
      setCountriesCount((prev) => (prev < 2 ? prev + 1 : 2));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <div
        style={{ fontSize: "2.5em", fontWeight: "bold", marginBottom: "20px" }}
      >
        About Us
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "15px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            minWidth: "300px", // Ensure a minimum width for responsiveness
            maxWidth: "600px", // Maximize width for elongation
            width: "50%", // Take up half of the container width
            padding: "20px",
            textAlign: "left",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <img
              src={img1}
              alt="Profile"
              style={{ borderRadius: "50%", width: "150px", height: "150px" }}
            />
          </div>
          <div style={{ marginTop: "20px" }}>
            <div style={{ fontSize: "1.5em", fontWeight: "bold" }}>
              Founder - CEO
            </div>
            <div style={{ fontSize: "1.3em", marginTop: "5px" }}>
              Suraj V Meiyur
            </div>
            <div
              style={{
                fontSize: "14px",
                lineHeight: "1.6em",
                marginTop: "15px",
              }}
            >
              <p>
                An MIT SOLVE Fellow, Suraj Meiyur has over two decades of
                experience in IT and K-12 Education.
              </p>
              <p>
                While working with IT corporates like Infosys, Wipro, Satyam and
                Pitney Bowes, Suraj managed diverse and important IT delivery
                portfolios for customers like Glaxo SmithKline, Coca Cola,
                Novartis and other Fortune 500 companies.
              </p>
              <p>
                More recently, he co-authored 17 Life Skills books for K-12
                students and has invented a tool to teach coding without
                computers to underserved students, a patent for which has been
                granted in India!
              </p>
              <p>
                Suraj is an avid technology enthusiast, a social entrepreneur
                and bats for #EquitableClassrooms.
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "15px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            minWidth: "300px", // Ensure a minimum width for responsiveness
            maxWidth: "600px", // Maximize width for elongation
            width: "50%", // Take up half of the container width
            padding: "20px",
            textAlign: "left",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <img
              src={img2}
              alt="Profile"
              style={{ borderRadius: "50%", width: "150px", height: "150px" }}
            />
          </div>
          <div style={{ marginTop: "20px" }}>
            <div style={{ fontSize: "1.5em", fontWeight: "bold" }}>
              Co-Founder - CMO
            </div>
            <div style={{ fontSize: "1.3em", marginTop: "5px" }}>
              Sowjanya Suraj
            </div>
            <div
              style={{
                fontSize: "14px",
                lineHeight: "1.6em",
                marginTop: "15px",
              }}
            >
              <p>
                An MIT SOLVE team member, Sowjanya is a mentor, coach and
                consultant (learning & development) who values dedication,
                service and excellence.
              </p>
              <p>
                With over 15 years of experience in Corporate, K-12 Education
                and Social Sector across geographies, and a strong background in
                Organization Development, Change Management, and Learning &
                Development, Sowjanya works with students and teachers to help
                improve their skills and confidence levels so that they can be
                successful in their endeavours.
              </p>
              <p>
                ‘Excellence is a journey, not just a destination’. This
                perspective inspired her to mentor and inspire hundreds of
                college-going students as Life Skills Coaches at the grass root
                level.
              </p>
              <p>
                Her passions include gardening, reading books, listening to
                music and cooking with her family.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "40px" }}>
        <div style={{ textAlign: "center" }}>
          <img
            className="logo"
            src="https://tse2.mm.bing.net/th?id=OIP.IXEtyrCLtngn4kMdnVuKQwHaHa&pid=Api&P=0&h=180"
            alt="Cities Logo"
            style={{ width: "100px", height: "90px", borderRadius: "50%" }}
          />
          <div style={{ fontSize: "1.5em", fontWeight: "bold" }}>
            {citiesCount}
            {citiesCount === 43 && "+"}
          </div>
          <div style={{ fontSize: "1em", color: "#666" }}>Cities</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <img
            className="logo"
            src="https://tse2.mm.bing.net/th?id=OIP.fZCNXpH5ZoFl0CmvpIsgRgHaHa&pid=Api&P=0&h=180"
            alt="States Logo"
            style={{ width: "100px", height: "90px", borderRadius: "50%" }}
          />
          <div style={{ fontSize: "1.5em", fontWeight: "bold" }}>
            {statesCount}
            {statesCount === 21 && "+"}
          </div>
          <div style={{ fontSize: "1em", color: "#666" }}>States</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <img
            className="logo"
            src="https://tse3.mm.bing.net/th?id=OIP.-2yN9zzc4O4Z-o5zfU1I1QHaHx&pid=Api&P=0&h=180"
            alt="Countries Logo"
            style={{ width: "100px", height: "90px", borderRadius: "50%" }}
          />
          <div style={{ fontSize: "1.5em", fontWeight: "bold" }}>
            {countriesCount}
            {countriesCount === 2 && "+"}
          </div>
          <div style={{ fontSize: "1em", color: "#666" }}>Countries</div>
        </div>
      </div>

      {/* Bottom Image Section */}
      <div style={{ marginTop: "40px" }}>
        <img
          src={bottomImage}
          alt="Bottom Image"
          style={{
            width: "30%",
            maxWidth: "1200px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            display: "block",
            margin: "0 auto",
          }}
        />
      </div>
    </div>
  );
};

export default AboutUs;
