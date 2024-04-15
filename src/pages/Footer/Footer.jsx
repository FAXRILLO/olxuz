import React from 'react'
import "./Footer.scss"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container-fluid">
        <div className="row">
          <div className="box_4">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
                  <h2 className='kh2'>Mobil ilovalar</h2>
                  <h2 className='kh2'>Yordam</h2>
                  <h2 className='kh2'>Pullik xizmatlar</h2>
                  <h2 className='kh2'>OLX da biznes</h2>
                  <h2 className='kh2'>Foydalanish shartlari</h2>
                  <h2 className='kh2'>Maxfiylik siyosati</h2>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
                  <h2 className='kh2'>Xavfsizlik qoidalari</h2>
                  <h2 className='kh2'>Sayt xaritasi</h2>
                  <h2 className='kh2'>Mintaqalar xaritasi</h2>
                  <h2 className='kh2'>Ommaviy so‘rovlar</h2>
                  <h2 className='kh2'>Kariera</h2>
                  <h2 className='kh2'>Qanday sotib olish va sotish?</h2>
                  <h2 className='kh2'>Contact</h2>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="image">
                    <img className='image1' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROE58iVfa0b4xRx762d89MAAdNfEbhrkId4SclbQwIvg&s" alt="img" />
                    <img className='image2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcWqEUqjgkjjzT9p4nOKjZYxa2qeesoq-qyS9K6i5-gQ&s" alt="img" />
                  </div>
                  <p className='p'>Телефонингиз учун бепул илова</p>
                  <div className="app">
                    <span>App Store</span>
                    <p>Download</p>
                  </div>
                  <div className="google">
                    <span>Google Play</span>
                    <p>Download</p>
                  </div>
                </div>

                <div className="fut">
                  <div className="bay">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Bulgaria.svg/2560px-Flag_of_Bulgaria.svg.png" alt="img" />
                    <span>OLX.bg</span>
                  </div>
                  <div className="bay">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkzL7LxkfSSpLvI-S2L6exUC7N7zhyuV-0RZFtN2HqDg&s" alt="img" />
                    <span>OLX.pl</span>
                  </div>
                  <div className="bay">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Tajikistan.svg/800px-Flag_of_Tajikistan.svg.png" alt="img" />
                    <span>OLX.ro</span>
                  </div>
                  <div className="bay">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfOEAx4uRb2ZOhVrx12K4AfypRIrVAmnWX_KNcFpo3xQ&s" alt="img" />
                    <span>OLX.ua</span>
                  </div>
                  <div className="bay">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/2560px-Flag_of_Portugal.svg.png" alt="img" />
                    <span>OLX.pl</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
