import React, { useRef, useState, useEffect } from 'react';
import CountUp from 'react-countup';

export default function LBSHallAbout({ imageSrc = '/images/lbs-hall.jpg' }) {
  const sectionRef = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="lbs-about" aria-labelledby="lbs-about-title">
      <div className="lbs-about__inner">
        <div className="lbs-about__media" role="img" aria-label="LBS Hall exterior">
          <img src="logo.jpg" alt="LBS Hall, IIT Kharagpur" className="lbs-about__image" />
        </div>

        <div className="lbs-about__content">
          <h2 id="lbs-about-title" className="lbs-about__title">About LBS Hall</h2>
          <p className="lbs-about__lead">
            Lal Bahadur Shastri Hall (LBS) is one of the prominent student residences at IIT Kharagpur.
            Known for its vibrant student culture, strong sense of community, and active clubs and
            events, LBS Hall supports both academic and extra-curricular growth for its residents.
          </p>

          <div className="lbs-about__grid">
            <div className="lbs-about__card">
              <h3 className="lbs-about__stat">
                {visible ? <CountUp end={2000} duration={2} /> : 0}+
              </h3>
              <p className="lbs-about__desc">Residents (approx.)</p>
            </div>

            <div className="lbs-about__card">
              <h3 className="lbs-about__stat">
                {visible ? <CountUp end={20} duration={2} /> : 0}+
              </h3>
              <p className="lbs-about__desc">Student societies</p>
            </div>

            <div className="lbs-about__card">
              <h3 className="lbs-about__stat">
                {visible ? <CountUp end={10} duration={2} /> : 0}+
              </h3>
              <p className="lbs-about__desc">Cultural, tech & sports events</p>
            </div>
          </div>

          <p className="lbs-about__text">
            Residents of LBS Hall take part in inter-hall tournaments, cultural fests, and community service.
            The hall emphasizes leadership, academic support, and well-being through peer mentorship and
            organized activities. If you'd like to get involved or visit, contact the Hall Office or
            check student noticeboards for current events.
          </p>

          <div className="lbs-about__actions">
            <a href="#contact" className="lbs-about__button" aria-label="Contact LBS Hall Office">Contact Hall Office</a>
            <a href="#events" className="lbs-about__link">See upcoming events →</a>
          </div>
        </div>
      </div>

      <style>{`
        .lbs-about { padding: 48px 16px; background: linear-gradient(180deg, #ffffff 0%, #fbfbfb 100%); color: #222; font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; }
        .lbs-about__inner { max-width: 1100px; margin: 0 auto; display: flex; gap: 32px; align-items: center; flex-wrap: wrap; }
        .lbs-about__media { flex: 1 1 360px; min-width: 280px; border-radius: 12px; overflow: hidden; box-shadow: 0 6px 22px rgba(35, 35, 35, 0.08); }
        .lbs-about__image { width: 100%; height: 100%; display: block; object-fit: cover; }
        .lbs-about__content { flex: 1 1 420px; min-width: 300px; }
        .lbs-about__title { margin: 0 0 12px 0; font-size: 28px; line-height: 1.1; }
        .lbs-about__lead { margin: 0 0 18px 0; color: #404040; font-size: 16px; }
        .lbs-about__grid { display: flex; gap: 12px; margin: 18px 0; flex-wrap: wrap; }
        .lbs-about__card { background: #fff; border: 1px solid #eee; border-radius: 10px; padding: 12px 16px; min-width: 120px; text-align: center; box-shadow: 0 4px 14px rgba(70,70,70,0.04); }
        .lbs-about__stat { margin: 0; font-size: 20px; font-weight: 700; }
        .lbs-about__desc { margin: 6px 0 0 0; font-size: 13px; color: #666; }
        .lbs-about__text { color: #444; line-height: 1.6; margin-top: 12px; font-size: 15px; }
        .lbs-about__actions { margin-top: 18px; display: flex; gap: 12px; align-items: center; flex-wrap: wrap; }
        .lbs-about__button {
  background: #9b2b2b;
  color: #fff; /* force white text */
  padding: 10px 14px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  box-shadow: 0 6px 18px rgba(155,43,43,0.14);
  transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease, color 0.25s ease;
}

.lbs-about__button:hover {
  background: #7f2121;
  color: #fff; /* force white text on hover */
  transform: scale(1.08);
  box-shadow: 0 10px 25px rgba(155,43,43,0.25);
}

        .lbs-about__link { text-decoration: none; color: #9b2b2b; font-weight: 600; transition: transform 0.25s ease, color 0.25s ease; }
        .lbs-about__link:hover { transform: scale(1.05); color: #7f2121; }
        @media (max-width: 880px) { .lbs-about__inner { gap: 20px; } .lbs-about__title { font-size: 24px; } }
        @media (max-width: 520px) { .lbs-about__inner { flex-direction: column; } .lbs-about__media, .lbs-about__content { width: 100%; min-width: 0; } .lbs-about__grid { justify-content: space-between; } }
      `}</style>
    </section>
  );
}
