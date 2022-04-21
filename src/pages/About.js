import React from "react";

const About = () => {
  return (
    <main className="about-main">
      <div>
        <h2>about me</h2>
        <p>
          My name is <b>Nwankwo Ernest Onyebuchi</b>. Am a Nigerian and i
          resides in Eastern part of the country. I have two sisters{" "}
          <b>Nwankwo Mercy</b> and <b>Nwankwo Ogechukwu</b>. As God may have it;
          i came last --- so funny!!.
        </p>
      </div>

      <div>
        <h2>education</h2>
        <p>
          Glory be to God for His Grace and favour that has been my guide and
          direction so far in my tertiary training. Currently i am OND holder in{" "}
          <b>Intrumentation and Control system Engineering</b>.
        </p>
        <div className="school-div">
          <p className="school-div-p">
            List of schools went are chronologically listed bellow:
          </p>
          <ul>
            <li>Royal International Nursery and Primary School obosi</li>
            <li>Uruowulu Central School Obosi</li>
            <li>Practising School Ogbunike</li>
            <li>Saint Anthony's Secondary school Umudioka</li>
            <li>Metallurgical Training Institute Onitsha</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default About;
