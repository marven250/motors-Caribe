import React from 'react'

export default class About extends React.Component {
  render() {
    return (
      <div>
        <h1 className="homeHeader">About</h1>
        <div id="aboutNigel">
          <img
            id="nigelPic"
            src="https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/18527888_1514000958630897_8381800238215938588_n.jpg?_nc_cat=108&_nc_oc=AQnontdDaoIENJrh9UlHRov4DRlOuiMAx-zZeEhD6CLUTneq2cb90FULJuveP0fNvR8&_nc_ht=scontent-mia3-2.xx&oh=97d974e5f80cf237fa625a850b1e3a25&oe=5E2010C9"
          ></img>
          <p id="nigelText">
            For as long as I can remember now, I've always had a passion for
            cars. From the age of 17 when I bought my first car, an Acura rsx, I
            found myself researching and learning new ways to maintain and
            develop it, to make it run at peak performance. This passion for
            cars eventually led me to pursue a career as a mechanical engineer.
            Throughout my engineering career, I've built up my skillset by
            working for numerous widely recognized Auto Shops: PepBoys,
            AutoZone, etc. After accumulating years of work experience, and
            distinguishing the good and the bad traits in the automotive
            industry I decided to start my own company. A company where
            transparency and outstanding customer service is at the core of
            everything we do... thus Caribean Motorz was born.
          </p>
        </div>
      </div>
    )
  }
}
