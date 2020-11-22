import React, { useState, useEffect } from 'react';
function HomePage(props) {
  const [count, setCount] = useState(1);
  return (<> 
    {/* <!-- nav start --> */}
    <header>
  <div className="container col-9 header-content">
      <div className="row d-flex align-items-end">
          <img className="logo" src="./images/laptopbibi_logo.webp" alt=""/>
          <h3 className="header_title">電腦比比</h3>
      </div>
  </div>
</header>
<div className="header_line"></div>
{/* <!-- nav end --> */}


<div className="container-fluid d-flex justify-content-center">
  <div className="wrap">
      <aside>
          <section>
              <h4 id="filter_way">篩選方式</h4>
              <hr/>
              <h4 className="filter_ul_1 d-flex justify-content-between"><span>系列</span></h4>
              <ul className="filter_ul_2 hidden">
                  <li>所有</li>
                  <li>ASUS 華碩</li>
                  <li>acer 宏碁</li>
                  <li>Fujitsu 富士通</li>
                  <li>LG</li>
              </ul>
              <hr/>
              <h4 className="filter_ul_1"><span>價格</span></h4>
              <ul className="filter_ul_2 hidden">
                  <li><label>
                          <input type="checkbox"/> 1TB SSD
                      </label></li>
                  <li><label>
                          <input type="checkbox"/> 56G SSD
                      </label></li>
                  <li><label>
                          <input type="checkbox"/> 512G SSD
                      </label></li>
              </ul>
              <hr>
              <h4 className="filter_ul_1"><span>硬碟</span></h4>
              <ul className="filter_ul_2 hidden">
                  <li><label>
                          <input type="checkbox"/> 1TB SSD
                      </label></li>
                  <li><label>
                          <input type="checkbox"/> 56G SSD
                      </label></li>
                  <li><label>
                          <input type="checkbox"/> 512G SSD
                      </label></li>
              </ul>
              <hr/>
              <h4 className="filter_ul_1"><span>處理器</span></h4>
              <ul className="filter_ul_2 hidden">
                  <li><label>
                          <input type="checkbox"/> i5
                      </label></li>
                  <li><label>
                          <input type="checkbox"/> i7
                      </label></li>
              </ul>
              <hr/>
              <h4 className="filter_ul_1"><span>記憶體</span></h4>
              <ul className="filter_ul_2 hidden">
                  <li><label>
                          <input type="checkbox"/> 16G
                      </label></li>
                  <li><label>
                          <input type="checkbox"/> 8G
                      </label></li>
              </ul>
              <hr/>
              <h4 className="filter_ul_1"><span>重量</span></h4>
              <ul className="filter_ul_2 hidden">
                  <li><label>
                          <input type="checkbox"/> 1.1-1.29kg
                      </label></li>
                  <li><label>
                          <input type="checkbox"/> 1.3-1.39kg
                      </label></li>
                  <li><label>
                          <input type="checkbox"/> 1.4-1.5kg
                      </label></li>
                  <li><label>
                          <input type="checkbox"/> 1.7-1.79kg
                      </label></li>
                  <li><label>
                          <input type="checkbox"/> 1kg以下
                      </label></li>
              </ul>
              <hr>
              <h4 className="filter_ul_1"><span>電池容量</span></h4>
              <ul className="filter_ul_2 hidden">
                  <li><label>
                          <input type="checkbox"/> 25-30wh
                      </label></li>
                  <li><label>
                          <input type="checkbox"/> 40-49wh
                      </label></li>
                  <li><label>
                          <input type="checkbox"/> 50-59wh
                      </label></li>
                  <li><label>
                          <input type="checkbox"/> 60-69wh
                      </label></li>
                  <li><label>
                          <input type="checkbox"/> 70-79wh
                      </label></li>
              </ul>
              <hr/>
              <h4 className="clear_filter_condition">清除篩選條件 <span>X</span> </h4>
          </section>
      </aside>
      <main>
          <div className="container">
              <div className="row d-flex flex-nowrap">
                  <div className="card1">

                  </div>
                  <div className="card1">
                  </div>
                  <div className="card1">

                  </div>
              </div>
              <div className="row d-flex flex-nowrap">
                  <div className="card1">7</div>
                  <div className="card1">8</div>
                  <div className="card1">9</div>
              </div>
          </div>
      </main>
  </div>
</div>
<footer>
  <h1 className="footer_text">Author: Chao-ting, Chang & Ching-shang-chi-chu & Pei-yun</h1>
</footer>

</>
);
}
export default HomePage;
