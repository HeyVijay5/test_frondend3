import React from "react";
import "./News.css";

function News() {
  return (
    <div className="news-container">
      <h className="news-title"></h>
      <div className="news-data">
        <div className="news-empty"></div>
        <div>
          <h1 className="news-subtitle">New Offers</h1>
          <div>
            <div className="news-competition-event">
              <p>OFFER-30% </p>
              <p>The Triple effect - buy the amish collection and get 30% off</p>
            </div>
            <div className="news-competition-event">
              <p>OFFER-22%</p>
              <p>The the sauron supremacy- Lord of the rings - TRILOGY</p>
            </div>
            <div className="news-competition-event">
              <p>OFFER-18%</p>
              <p>"Collen Hoover weeeked"- Buy both the books and get 18% off</p>
            </div>
            <div className="news-competition-event">
              <p>OFFER-22%</p>
              <p>
                "Chetan Bhagat"- the 2 & half - buy Half girlfriend and 2 states
                and get 22% off
              </p>
            </div>
            <div className="news-competition-event">
              <p>OFFER 33%</p>
              <p>
                "THE DIARY OF WIMPY KID"- The kids funday- buy the whole set of
                collection of wimpy kid and get 33% off
              </p>
            </div>
          </div>
        </div>
        <div className="news-empty"></div>
        <div>
          <h1 className="news-subtitle"> Readers Reviews</h1>
          <div>
            <div className="news-quiz-event">
              <p>The Alchemist - ★★★★★</p>
              <p>
                The Alchemist" is not just a book; it is a transformative
                experience that leaves an indelible mark on the reader's soul.{" "}
              </p>
            </div>
            <div className="news-quiz-event">
              <p>IT ENDS WITH US - ★★★★ </p>
              <p>
                This book was an EXTREMELY fast-paced read for me since I was on
                the edge of my seat the whole time.
              </p>
            </div>
            <div className="news-quiz-event">
              <p>LORD OF THE RINGS - ★★★★★ </p>
              <p>
                ! The movies are only a skeleton compared to the full body of
                work Tolkien wrote. You will have plenty to experience.
              </p>
            </div>
            <div className="news-quiz-event">
              <p>Alex Cross Must Die: A Thriller - ★★★★</p>
              <p>
                One of the greatest fictional detectives of all time” (Douglas
                Preston & Lincoln Child) is in the sights of the Dead Hours
                Killer, a serial murderer on a ruthless mission.
              </p>
            </div>
            <div className="news-quiz-event">
              <p>The Little Liar - ★★★★★</p>
              <p>
                His new novel, set during the Holocaust, is The Little Liar.
                Albom now devotes most of his time to philanthropic work through
              </p>
            </div>
          </div>
        </div>
        <div className="news-empty"></div>
      </div>
    </div>
  );
}

export default News;
